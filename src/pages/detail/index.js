import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

import MainArticle from "./components/MainArticle.js";
import AuthorInfo from "./components/AuthorInfo.js";
import RelatedArticles from "./components/RelatedArticles.js";

import {
    StyledDetail,
    DetailLeft,
    DetailRight
} from "./style.js";

export const Detail = (props) => {
    return (
        <StyledDetail>
            <div className="detail-main">
                <DetailLeft>
                    <MainArticle />
                </DetailLeft>
                <DetailRight>
                    <AuthorInfo />
                    <RelatedArticles />
                </DetailRight>
            </div>
        </StyledDetail>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
