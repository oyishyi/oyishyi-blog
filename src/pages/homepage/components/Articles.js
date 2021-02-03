// 主页的文章组件
import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
    getLoadMoreAction
} from "../store/actionCreators.js";

import {
    StyledArticles,
    Article,
    MoreArticles
} from "../style.js";


// 详情页面的网址前缀
const HASH_DETAIL_URL = "/#/detail/"; // 使用 window.open 的话，要手动加 hashtag
const DETAIL_URL = "/detail/";  // 使用 Link 的话，不用加，或者说不能加，不然就有两个 #，页面跳转错误

export const Articles = (props) => {

    const loadingRef = useRef(null);

    function handleStopPropagation(e) {
        e.stopPropagation();
    }

    return (
        <StyledArticles>
            <ul>
                {props.articleList.map((article) => {
                    return (
                        <Article
                            key={article.get("id")}
                            onClick={() => { window.open(HASH_DETAIL_URL + article.get("id")); }}
                        >
                            <span className="text-info">
                                <div className="author">
                                    {article.get("author")} · {article.get("time")} · {article.get("tag")}
                                </div>
                                {/* 在 parents 元素上让 Link 的点击事件停止传播 */}
                                <div className="title" onClick={handleStopPropagation}>
                                    <Link
                                        className="title"
                                        to={DETAIL_URL + article.get("id")}
                                        target="_blank"
                                    >
                                        {article.get("title")}
                                    </Link>
                                </div>
                                <p>{article.get("desc")}</p>
                                {/* 点击 button 的时候不需要进入网页 */}
                                <span className="social" onClick={handleStopPropagation}>
                                    <button>
                                        <i className="iconfont">&#xe60c;</i>
                                        <span>点赞</span>
                                    </button>
                                    <button>
                                        <i className="iconfont">&#xe63a;</i>
                                        <span>评论</span>
                                    </button>
                                    <button><i className="iconfont">&#xe6d1;</i></button>
                                </span>
                            </span>
                            <img src={article.get("titlePicUrl")} alt="标题图" />
                        </Article>
                    )
                })}
            </ul>

            <MoreArticles onClick={() => props.handleLoadMoreClick(loadingRef)} ref={loadingRef}>加载更多···</MoreArticles>

        </StyledArticles>
    )
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(["Homepage", "articleList"])
})

const mapDispatchToProps = (dispatch) => {
    return ({
        handleLoadMoreClick(loadingRef) {
            // const element = loadingRef.current;
            // element.style.color = "red";
            dispatch(getLoadMoreAction());
        }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
