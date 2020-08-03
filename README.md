### 项目结构
```
electron-react-template
├─package.json
├─result.txt
├─renderer    // 渲染进程
|    ├─src
|    |  ├─main
|    |  |  ├─.gitignore
|    |  |  ├─README.md
|    |  |  ├─config-overrides.js
|    |  |  ├─package.json
|    |  |  ├─yarn.lock
|    |  |  ├─src
|    |  |  |  ├─App.css
|    |  |  |  ├─App.js
|    |  |  |  ├─App.test.js
|    |  |  |  ├─index.css
|    |  |  |  ├─index.js
|    |  |  |  ├─logo.svg
|    |  |  |  ├─serviceWorker.js
|    |  |  |  └setupTests.js
|    |  |  ├─public
|    |  |  |   ├─favicon.ico
|    |  |  |   ├─index.html
|    |  |  |   ├─logo192.png
|    |  |  |   ├─logo512.png
|    |  |  |   ├─manifest.json
|    |  |  |   └robots.txt
|    ├─pages
├─main   //  主进程
|  └index.js

```
### 启动命令
分别在根目录和renderer的src/main下面
```
npm install
```
然后在根目录启动
```
npm run start
```

### 启动成功