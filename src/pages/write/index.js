import React from 'react'
import { connect } from 'react-redux'

import {
    StyledWrite
} from "./style.js";

export const Write = (props) => {
    let element;
    if (!props.loginStatus) {
        element = (
            <div>您还没有登录</div>
        );
    } else {
        element = (
            <StyledWrite>
                <p>写文章</p>
            </StyledWrite>
        );
    }
    return element;
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(["Header", "loginStatus"])
})

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Write)
