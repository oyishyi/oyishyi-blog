import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import ReactMarkdown from 'react-markdown/with-html'
import gfm from "remark-gfm"

import {
    getGetArticleAction
} from "../store/actionCreators.js";

import {
    StyledMainArticle,
    AuthorInfoArticle,
    MainContent
} from "../style.js";


export const MainArticle = (props) => {
    
    useEffect(() => {
        const func = props.getArticle;
        func();
    }, [props.getArticle]);

    return (
        <StyledMainArticle>
            <AuthorInfoArticle className="author-info">
                <img src={props.userInfo.get("avatar")} alt="头像"/>
                <div className="data-info">
                    <div className="name">oyishyi</div>
                    <div className="meta-box">
                        <time>{new Date().toDateString()}</time>
                        <span className="view-counts">阅读 100</span>
                        <span className="dot">·</span>
                        <span className="edit-btn">编辑</span>
                    </div>
                </div>
            </AuthorInfoArticle>
            <MainContent className="main-content">
                <ReactMarkdown
                source={props.article}
                plugins={[gfm]}
                allowDangerousHtml
                />
            </MainContent>
        </StyledMainArticle>
    )
}

const mapStateToProps = (state) => ({
    userInfo: state.getIn(["Header", "userInfo"]),
    article: state.getIn(["Detail", "article"])
})

const mapDispatchToProps = (dispatch) => {
    return {
        getArticle() {
            dispatch(getGetArticleAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainArticle)
