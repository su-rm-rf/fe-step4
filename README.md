> 纯手工从0到1编码，没有使用脚手架 <br/>
> 
> [前端GitHub地址](https://github.com/su-rm-rf/fe-step2) <br/>
> [后端GitHub地址](https://github.com/su-rm-rf/node_server)

# 需求
```
开发一个TodoList任务管理工具
```

# 技术栈
```
前端：
  编辑器：VSCode
  源码管理：Git
  包管理器：Pnpm
  编译构建：Babel、Webpack
  语言：TypeScript
  框架：Vue3
  路由：Vue-Router
  状态管理：Vuex
  CSS处理器：Sass、Less、PostCSS
  UI框架：ElementPlus
    
后端：
  Koa2
  Mysql

```

# 组织结构
```
前端：
  build                       --- 构建脚本
  public                      --- 公共资源
  src
    actions                   --- action creators
    components                --- UI组件
    containers                --- 容器组件
    constants                 --- 常量
    reducers                  --- reducer
    router                    --- 路由
    store                     --- store
    styles                    --- 样式
    utils                     --- 工具
    App.tsx
    main.tsx
  test                        --- 测试
```

> component, store 都按照业务功能模块划分

# 技术拆解
```
响应式布局
使用Node.js服务端实现本地任务管理
```

# TypeScript配置
```
{
  "compilerOptions": {
    "target": "ES5",
    "module": "ESNext",
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": false,
    "skipLibCheck": true
  }
}
```

# 依赖项
```
webpack打包构建
  webpack webpack-cli webpack-dev-server webpack-merge
html
  html-webpack-plugin
css
  style-loader css-loader sass sass-loader less less-loader postcss postcss-loader postcss-preset-env mini-css-extract-plugin
typescript
  typescript ts-loader
vue
  vue vue-router vuex
  vue-loader
babel
  @babel/core babel-loader @babel/preset-env @babel/plugin-transform-runtime
axios
UI
  element-plus echarts
test
eslint
cross-env nodemon ts-node
```

# 常见错误

# 性能优化
```
cacheDirectory 把转译结果缓存到文件系统中
@babel/plugin-transform-runtime 避免重复引入babel-runtime
```
