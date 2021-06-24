# 官网模板

## 安装依赖

```bash
yarn install
```

### 本地开发

```bash
yarn dev
```

### 打包

```bash
yarn deploy
```

### Lints and fixes files

```bash
yarn lint
```

### 开发注意事项

1. pc 和 移动端 都在本项目中
   - pc采用pxtovw方案
   - 移动端 采用 pxtorem + amfe-flexible 方案
   - 具体配置参考 **vue.config.js** 
2. pc 和 移动端 **必须在各自的文件下下独立开发**，以免造成单位换算错误
   - src/pc/
   - src/mobile/
3. pc 和 移动端的**公共组件也必须在各自的文件下下独立开发**，以免造成单位换算错误
4. 页面显示pc还是移动端是在 **router** 内判断的
