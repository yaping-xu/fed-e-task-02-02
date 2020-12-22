## 简答题
### Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程
- 根据配置文件，找到入口文件
- 通过入口文件，找到对应的模块依赖
- Wepack主要的工作内容是分析代码，转换，编译。最后输出代码
- 输出最后的打包代码
### Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。
1. Loader：是资源模块加载器，通过加载不同的loader就可以实现加载任何类型的资源

开发思路:
  - Loader是一种管道的概念，对于同一个资源可以依次使用多个Loader进行处理,
  - Loader中代码实现内部是一个函数，可以通过参数获得传入source
  - 在函数内部对source进行处理，最后返回处理后的JavaScript代码
2. Plugin：解决了除了资源加载以外的其他自动化工作，例如清除dist目录等

开发思路:
  - Plugin 通过钩子机制实现
  - Webpack要求Plugin必须是一个函数，或者是一个包含apply方法的对象
  - apply方法会在任务启动的时候自动调用，接收一个compiler参数，通过这个对象去注册钩子函数
## 编程题
- [使用 Webpack 实现 Vue 项目打包任务]('./code/vue-base-code')
- [编程题的文档说明](./code/说明文档.md)
## 笔记链接
- [模块化](https://juejin.cn/post/6900924314049380365)
- [webpack](https://juejin.cn/post/6906400832703430669)
