import Koa from 'koa'
import KoaStatic from 'koa-static'

import { createSSRApp } from "vue"
import { renderToString } from 'vue/server-renderer'

import App from '../share/App.vue'
import store from '../share/store'

import createRouter from '../share/router'
import { createMemoryHistory } from 'vue-router'

const server = new Koa()
const router = createRouter(createMemoryHistory())

const preloadedState = {}

export default async ctx => {
  const app = createSSRApp(App)
  .use(store)
  .use(router)
  
  const html = await renderToString(app)
  ctx.body = `
    <!doctype html>
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
        <link rel="icon" href="/vue.ico" />
        <link rel="stylesheet" href="/static/main.css?${Math.random()}" />
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          var width = document.documentElement.clientWidth
          // fontSize = 当前设备的css布局宽度 / 物理分辨率(设计稿的宽度) * 基准fontSize
          document.documentElement.style.fontSize = (width > 750 ? 750 : width) / 750 * 100 + 'px';
          
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="/static/client.js"></script>
      </body>
    </html>
  `
}