import React from 'react'
import { connect } from 'react-redux'

import {
    StyledMetaInfo
} from "../style.js";

export const MetaInfo = (props) => {
    return (
        <StyledMetaInfo>
            <div className="favorites">
                <span>收藏集</span>
                <span className="data">2</span>
            </div>
            <div className="tags">
                <span>关注标签</span>
                <span className="data">1</span>
            </div>
            <div className="anniversary">
                <span>加入于</span>
                <time className="data">{new Date().toDateString()}</time>
            </div>
        </StyledMetaInfo>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MetaInfo);
