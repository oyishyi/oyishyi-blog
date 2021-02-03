终于把 react 教程看完了。
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13512e16aa7d409781087b48fc8eba37~tplv-k3u1fbpfcp-watermark.image)
# 1. lightbox 效果制作
登陆弹窗的时候，需要背景变灰一点，无法滚动，只能按叉退出。
## 1.1 position: absolute
一开始使用 absolute，给 props 传值每次登陆组件渲染的时候传当前滚动条的位置，再填充进css样式里。  
这样做有很多缺点：
- 一是还要传值不优雅。
- 二是如果灰色的时候点击回到顶部，由于登录组件并没有重新渲染，绝对定位导致还停留在底部的位置，这个时候滚动条也没有，滚不到底部，连退出都没办法，只能刷新。
## 1.2 position: fixed
用 fixed 直接完事，早该想到的。
# 2. addEventListener 的捕获和冒泡
之前一直以为第三个参数是指定捕获还是冒泡，但其实捕获和冒泡是一定会都发生的，第三个参数只是指定绑定在哪个阶段。完全可以捕获绑定一个，冒泡也绑定一个。然后捕获阶段发生一次，冒泡阶段再发生一次。  
然后这里有一个小坑，捕获阶段不包括目标元素，冒泡阶段包括。看<a href="https://segmentfault.com/q/1010000004542336">这里</a>。
# 3. 链接和包裹该链接的容器同时定向到指定网页
- 由于 a 元素中不能包裹 a 元素，并且内部链接希望能够有 :visited 样式，因此只能将外部容器改为非 a 元素，然后设置 onClick 事件定向到目标网页。  
- 中间的坑在于，设置了外部容器的 onClick 事件后，如果点击内部链接，由于事件冒泡，会跳转两次网页。
- 而直接在 Link 上设置 onClick 停止冒泡是做不到的，只能在 Link 外面再包裹一层元素，在 parents 元素上停止冒泡。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e1232b44d704a29bd4d6dae798661db~tplv-k3u1fbpfcp-watermark.image)
# 4. react-markdown
让 react 可以识别 markdown 语法。
# 5. HashRouter 和 BrowserRouter
如果使用BrowserRouter 的话，使用的是绝对位置，开发环境由于有webpack配置没什么问题，但是生产环境打包后运行会出现无法跳转很多页面的情况。  
为了解决这个问题，用 HashRouter 代替 BrowserRouter。  
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/70edf0d19c6d4ed59c52b41f60cc4eec~tplv-k3u1fbpfcp-watermark.image)
- 然后这里还有一个坑，就是在 HashRouter 里使用 Link 不会有问题，但是如果使用类似于 window.open 这种方式打开页面，是不会加 hashtag 的，因此要手动添加。![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e41223e4ffba4bc49c8e246afbec0ae9~tplv-k3u1fbpfcp-watermark.image)
# 6. 导航栏滚动
使用了闭包，每次滚动的时候比较scrollTop 和上次滚动的值之差，从而判断是往上还是往下滚动。  
这里使用节流会有问题，因为节流函数一般也会用到防抖来发生最后一次事件，但是如果在这里用的话，会产生这么个情况：
1. 首先给出代码：![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ce1d14f30b949488ae9b5ccdc4ee0ed~tplv-k3u1fbpfcp-watermark.image)
2. 鼠标向下滚动的时候，导航栏隐藏。
3. 鼠标滚动完毕，静止了，但是此时由于节流的效果，静止的时候仍然会触发最后一次事件。
4. 然而此时在判断的时候，scrollTop 和上次的 lastScroll 是一样的。
5. 如果是上面这样的代码，就会产生向下滚动时导航栏确实收回了，但是停止的瞬间又回来了的情况。见下图，在这张图里我一直是向下滚动的，但是导航栏上下横跳（这个图的情况更不好，由于滚动较慢，滚动的时候就已经执行了防抖事件，判定了 scrollTop===lastScroll，然后在下次滚动的时候又被收回，因此表现为这样的BUG：）![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59fb8060f9d848ae956a9be3c36de34b~tplv-k3u1fbpfcp-watermark.image)
6. 即使把代码中的 <= 改成 = 也没用，这样子向下滑动没问题了，但是向上滑动又有问题了。
7. 解决的方法有多种：
	1. 手动更改节流函数去掉防抖效果，缺点是如果节流值太大，有时候滚动太快就不会滚动。
    2. 对 scrollTop === lastScroll 的情况特殊处理。
8. 使用第二种方式的代码如下：![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/37218bb800e3408f9d82ed5430d76cef~tplv-k3u1fbpfcp-watermark.image)
9. 这样子既防止了最后一次运行的 bug，也能享受到节流的最后一次防抖效果
10. 运行结果，十分正常：![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57cb838a92b74dd28aa7cdb15625d2aa~tplv-k3u1fbpfcp-watermark.image)