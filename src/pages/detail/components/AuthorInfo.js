import React from 'react'
import { connect } from 'react-redux'

import {
    StyledAuthorInfo,
    StatusItem
} from "../style.js";


export const AuthorInfo = (props) => {
    return (
        <StyledAuthorInfo>
            <div className="title">关于作者</div>
            <div className="base-info">
                <img src="../img/homepage.png" alt="头像" />
                <div className="data-box">
                    <p className="name">oyishyi</p>
                    <p className="desc">无</p>
                </div>
            </div>
            <StatusItem>
                <i className="iconfont">&#xe60c;</i>
                <span className="status">获得点赞 37</span>
            </StatusItem>
            <StatusItem>
                <i className="iconfont">&#xe633;</i>
                <span className="status">文章被阅读 3,334</span>
            </StatusItem>
        </StyledAuthorInfo>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorInfo)
