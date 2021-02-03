import React from 'react';

import Header from "./common/header/index.js";
import ShortcutBtn from "./common/shortcutbtn/index.js";
import Homepage from "./pages/homepage/index.js";
import Detail from "./pages/detail/loadable.js";
import Write from "./pages/write/index.js";

import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          {/* common 文件夹里的组件们 */}
          <Header /> {/* 最上方导航栏 */}
          <ShortcutBtn /> {/* 右下角的两个按钮*/}

          {/* pages 文件夹里的组件们 */}
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
          <Route path="/write" exact component={Write}></Route>
        </>
      </Router>
    </div>
  );
}

export default App;
