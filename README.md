# Vue 如何实现一个通用的模块可复制

## usage

```bash
 npm run dev
```

## 核心逻辑

使用路由特性，在页面初始化时，把克隆的路由追加到项目中，而模块中的个性化内容则通过路由中的 meta 进行保存，作为模块中的不变量

## 实现参考
```bash
 src/service/clone.js
```
