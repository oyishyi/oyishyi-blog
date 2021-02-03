import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Login from "./components/login/index.js"; // 登录组件

// header 组件里的所有样式(不包括登录组件)
import {
    StyledHeader,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    NavSearchHint,
    NavSearchHintTag,
    NavAddition,
    AvatarItems,
    AvatarItem
} from "./style.js";

import * as actionCreators from "./store/actionCreators.js";

export const Header = (props) => {

    useEffect(() => {
        const func = props.getAdvisedTagList; // 分开写纯粹为了去除警告
        func();
    }, [props.getAdvisedTagList]) // 不能依赖 tagList
    // 因为 getAdvisedTagList 会改变 tagList，**这样会无限运行**



    const spin = useRef(null); // 换一批的旋转 icon

    // 获取搜索框推荐标签
    function getAdvisedTagList() {
        const { tagList } = props;
        const page = props.page % props.totalPage; // page 取模
        const shownTagList = tagList.slice(page * 8, (page + 1) * 8); // end 超过了会被无视所以不用担心
        if (props.searchFocus || props.mouseEnter) {
            return (
                <NavSearchHint
                    onMouseEnter={props.handleMouseEnter}
                    onMouseLeave={props.handleMouseLeave}
                >
                    <p className="advised">
                        推荐搜索
                        <span className="change-tag" onClick={() => { props.handleChangePage(spin.current) }}>
                            <i
                                className="iconfont spin"
                                ref={spin}
                            >
                                &#xe851;
                            </i>
                            换一批
                        </span>
                    </p>
                    <ul className="search-hint-tag-list">
                        {shownTagList.map((tag) => {
                            return (<NavSearchHintTag key={tag}>{tag}</NavSearchHintTag>)
                        })}
                    </ul>
                </NavSearchHint>
            );
        } else {
            return null;
        }
    }
    return (
        <>
            <StyledHeader>
                <Nav>
                    <Logo>
                        <Link to="/" alt="logo">
                            <h1>Oyishyi 的博客</h1>
                        </Link>
                    </Logo>
                    <Link to="/">
                        <NavItem className="left homepage">首页</NavItem>
                    </Link>
                    <NavItem className="left">占位1</NavItem>
                    <NavItem className="left">占位2</NavItem>

                    {/* 左右浮动分割线 */}

                    {/* 登录按钮 */}
                    {props.loginStatus
                        ? (
                            // 如果登录，则显示头像，消息等功能按钮
                            <>
                                <NavAddition className="avatar">
                                    <img src="../img/homepage.png" alt="头像" onClick={props.handleAvatarBtn} />
                                    {props.showAvatarBox
                                        ? (
                                            <AvatarItems className="avatar-function">
                                                <AvatarItem>
                                                    <div><i className="iconfont">&#xe652;</i>写文章</div>
                                                    <div><i className="iconfont">&#xe643;</i>草稿</div>
                                                </AvatarItem>
                                                <AvatarItem>
                                                    <div><i className="iconfont">&#xe603;</i>我的主页</div>
                                                    <div><i className="iconfont">&#xe60c;</i>我赞过的</div>
                                                    <div><i className="iconfont">&#xe630;</i>我的收藏</div>
                                                </AvatarItem>
                                                <AvatarItem>
                                                    <div><i className="iconfont">&#xe654;</i>设置</div>
                                                    <div><i className="iconfont">&#xe622;</i>关于</div>
                                                </AvatarItem>
                                                <AvatarItem>
                                                    <div onClick={props.handleLogoutBtn}>
                                                        <i className="iconfont">&#xe621;</i>
                                                登出
                                            </div>
                                                </AvatarItem>
                                            </AvatarItems>
                                        )
                                        : null
                                    }
                                </NavAddition>

                                <NavAddition className="msg">
                                    <i className="iconfont">&#xe602;</i>
                                </NavAddition>

                            </>
                        )
                        : (
                            // 如果没登录，则显示登录按钮
                            <NavAddition className="login">
                                <button onClick={props.handleLoginBtn}>登录</button>
                            </NavAddition>
                        )
                    }

                    {/* 写文章 */}
                    <NavAddition className="write-article">
                        {props.loginStatus
                            // 登录的话点击跳转到响应界面
                            ? (
                                <Link to="/write">
                                    <button className="article">
                                        <i className="iconfont">&#xe615;</i>
                                        写文章
                                    </button>
                                </Link>
                            )
                            // 未登录的话，点击弹出登录组件
                            : (
                                <button className="article" onClick={props.handleLoginBtn}>
                                    <i className="iconfont">&#xe615;</i>
                                    写文章
                                </button>
                            )
                        }

                        <button className="more">
                            <i className="iconfont">&#xe629;</i>
                        </button>
                    </NavAddition>

                    <NavSearch>
                        <input type="search"
                            maxLength="32"
                            placeholder="探索本站"
                            onFocus={props.handleFocus}
                            onBlur={props.handleBlur}
                        />
                        {getAdvisedTagList()}
                    </NavSearch>
                    <NavItem className="right">活动</NavItem>
                </Nav>
            </StyledHeader>
            {props.showLoginBtn ? <Login /> : null}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        searchFocus: state.getIn(["Header", "searchFocus"]), // 连续 get 可以通过 getIn 简写
        mouseEnter: state.getIn(["Header", "mouseEnter"]),
        tagList: state.getIn(["Header", "tagList"]),
        page: state.getIn(["Header", "page"]),
        totalPage: state.getIn(["Header", "totalPage"]),
        showLoginBtn: state.getIn(["Header", "showLoginBtn"]),
        loginStatus: state.getIn(["Header", "loginStatus"]),
        showAvatarBox: state.getIn(["Header", "showAvatarBox"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(e) {
            e.target.placeholder = "搜索项目/像素画";
            dispatch(actionCreators.getChangeFocusStateOnSearchBarAction(true));
        },
        handleBlur(e) {
            e.target.placeholder = "探索本站";
            const action = actionCreators.getChangeFocusStateOnSearchBarAction(false);
            dispatch(action);
        },
        getAdvisedTagList() {
            dispatch(actionCreators.getGetAdvisedTagListAction());
        },
        handleMouseEnter() {
            dispatch(actionCreators.getChangeMouseEnterStateOnSearchHintAction(true));
        },
        handleMouseLeave() {
            dispatch(actionCreators.getChangeMouseEnterStateOnSearchHintAction(false));
        },
        handleChangePage(spin) { // 已经 current 过了
            let deg = spin.style.transform.replace(/[^0-9]/ig, "");
            if (deg === "") {
                spin.style.transform = `rotate(${360}deg)`;
            } else {
                deg = Number(deg);
                spin.style.transform = `rotate(${deg + 360}deg)`;
            }
            dispatch(actionCreators.getChangePageAction());
        },
        // 显示登录组件，隐藏滚动条
        handleLoginBtn(loginRef) {
            dispatch(actionCreators.getChangeShowLoginBtn(true));
            document.body.style.overflowY = "hidden";
        },
        // 注销
        handleLogoutBtn() {
            dispatch(actionCreators.getLoginAction(false));
            dispatch(actionCreators.getChangeShowAvatarBox()); // 注销的时候也要把扩展栏一同关闭
            // 不然下次登录扩展栏还保持开启状态
        },
        // 开启或关闭头像扩展栏
        handleAvatarBtn() {
            dispatch(actionCreators.getChangeShowAvatarBox());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
