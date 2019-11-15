# koa-starter-kit

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

感觉开发者需要自己长时间维护一套开发模板 包含各种初始配置

ts 牛逼 es6/7 一开始配置能死人

standard 标准支持 es8 到 stage-4

而且真心 日新月异 一两年前的教程已经要抛弃了

最好是每天都用(开发 看信息流 blog) 直接从官网获取一手资料

## vscode 插件列表

我自己选择 vscode 做开发环境 其必备插件列举如下：

- 代码风格
  - 通用 editorconfig
  - js 系 prettier
  - babel 我恨这个东西
    - babel javascript 这个插件一直在更新 不用理其他插件（babel 文档中推荐的 sublime babel 上一次更新是 2018 年 5 月）
  - （打开 format on save）
  - eslint
- 注释
  - 通用 better comments (高亮 TODO)
  - jsdoc (原生支持)
  - add jsdoc comments
- 测试
  - test explorer (貌似是 vscode 一系列 test explorer 的前置)
  - jest test explorer (后面有详细铺开)

## 读取环境变量 env

用这个包：dotenv

因为`import`和`require`机制的不同（大致是因为`import`会先于逻辑执行导致其他 module 内的代码被配置完毕）dotenv 的调用有点不同需要分开一个文件处理

详见[这个 issue](https://github.com/motdotla/dotenv/issues/133#issuecomment-255298822)

## DEBUG on VSCode

草

跑 babel-node 带上 inspect 参数：

- 本地：

  - attach 到 process
  - attach 到 port

- 远程：attach 到某个 port 还必须设置项目的绝对路径(本地测试直接用了 localRoot 相同的 path)

这些配置自动生成足够使用 不需要 git 同步`.vscode`文件夹

以下是 launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Remote",
      "address": "127.0.0.1",
      "port": 9229,
      "localRoot": "${workspaceFolder}",
      "remoteRoot": "${workspaceFolder}"
    },
    {
      "type": "node",
      "request": "attach",
      "name": "Attach",
      "port": 9229
    },
    {
      "type": "node",
      "request": "attach",
      "name": "Attach by Process ID",
      "processId": "${command:PickProcess}"
    }
  ]
}
```

## 测试

用 jest, 约定的东西越多配置越简单

## coverage

跑完测试直接打开 coverage 的 html 页

### 测试中调试

暂时做不到单个 test 调试。。这样就失去意义了

test explorer + jest test explorer 能够以一个很 ide 的方式查看测试和测试结果

但是单个 debug 会出现断点偏移 应该是 babel 编译后 断点没和源代码匹配上 sourcemap 之类的东西配置出了问题

单个 test 运行可以尝试打打 console

jest test explorer 的作者也声称插件在 preview 阶段 很多功能没有完善 最后更新在 3 月份。。。

## Babel import 绝对路径

这样能让项目的 import 美观些

babel 加入 plugin [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) 就 ok 了
