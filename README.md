# 仿掘金的博客

## 1. 技术栈：
- React 全家桶：React.js, React Hook, Redux, React Redux, React Router, Immutable.js, styled-components, create-react-app
- 其他：Axios， React Transition Group, React-loadable, LocalForage, yarn

没有后台，做了 mock（都在 public 里的 api 文件夹里）。以后会改成个人网站，到时候会加上。  

## 2. 如何运行？：
  1. git clone 下载下来
  2. 进入项目文件夹，使用 yarn 安装所有依赖
  3. 命令行运行 yarn start，会自动打开浏览器的 3000 端口进入开发环境。

或者直接打开[这个网址](http://www.oyishyi.top)，虽然也都是静态文件模拟的数据。

## 3. 需要注意的几点：
  1. 为了演示异步数据的懒加载，以及异步数据的中止，我强行用 setTimeout 让每个异步数据都有 500ms 的延迟。如果你疑惑本地打开怎么有些数据出现的也这么慢，这就是原因。
  2. 开发环境打开控制台刚开始会有很多报错，因为第三方库 CSSTransitionGroup 用了很多严格模式不允许的函数，问题不大
   
## 4. 功能
  1. 登录和注销，使用 localForage 本地储存。
  2. 主页文章往下翻页是懒加载，导航栏会随着滚动消失和出现，翻到比较靠下的位置时，右下角可以回到顶部。广告可以点右上角关闭。
  3. 主页文章可以点开，里面的是 markdown 转化过后的文章。
  4. 登录后点击头像，扩展栏里的所有按钮除了关于都有做页面。
  5. 可以写文章，左边是 markdown，右边是预览，用了防抖。
  6. 个人主页左下角的版块可以更换，每次点击通过异步请求更换内容，并且在上一次异步请求还没有返回的时候再次点击会中止那个请求。
  7. 编辑个人资料没有储存功能。
## 5. 感想
React 全家桶是真的多。本来以为只有 redux 和 router。然后为了让 redux 不可变要用到 immutable.js。 为了写 css-in-js 又要用到 styled-components。写 css 动画还有 css-transition-group 库。懒加载有 react-loadable 库（比起react的React.lazy 多了防止闪烁等功能）。甚至 markdown 渲染也有对应的 react-markdown 库，不过写完才发现还有 ace，codeMirror 这样的成熟解决方案，有时间升级一下。

除了全家桶，为了做别的功能也要学很多东西，比如异步请求使用了 axios 库，浏览器储存有 localForage。小图标要用到图标字体减少 http 请求。  

create-react-app 帮了很大忙。基本上不用自己配置 webpack。不过还是去webpack官网把文档看完了，至少对webpack有一定的了解了。

总体来讲学了很多。