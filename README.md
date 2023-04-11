# 需求
```
开发一个TodoList任务管理工具
```

> 纯手工从0到1编码，没有使用脚手架 <br/><br/>
> [前端GitHub地址](https://github.com/su-rm-rf/fe-step2) <br/>
> [后端GitHub地址](https://github.com/su-rm-rf/node_server)

> 前端运行: npm run dev <br/>
> 后端运行: npm run server <br/><br/>
> 访问: http://localhost:8421/todo

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
  框架：Koa
  对象关系映射：TypeORM
  数据库：MySQL
```

# 前端组织结构
```
build                       --- 构建脚本
dist                        --- 打包生成
public                      --- 公共资源
src
  components                --- UI组件
  constants                 --- 常量
  hooks                     --- 自定义hook
  router                    --- 路由
  store                     --- store
    subModule               --- 子模块
      actions.ts
      getters.ts
      index.ts
      mutations.ts
    actions.ts
    getters.ts
    index.ts
    mutations.ts
  styles                    --- 样式
  utils                     --- 工具
  App.vue
  main.tsx
  shims-vue.d.ts
test                        --- 测试
```

> component, store 都按照业务功能模块划分

> 在component中最好不要直接commit(mutation)，而是通过dispatch(action)，然后在action中调用commit(mutation)


# 后端组织结构
```
src
  constants             --- 常量
  controller            --- 控制器
  entity                --- 实体类
  router                --- 路由
  utils                 --- 工具
  data-source.ts        --- ORM配置
  server.ts             --- 入口文件
test
.env                    --- 环境变量
.eslintrc
package.json
tsconfig.json
```

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
