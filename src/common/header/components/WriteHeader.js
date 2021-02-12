import React from 'react'
import { connect } from 'react-redux'

import LoginBtn from "../../../common/header/components/LoginBtn.js";

import {
    StyledWriteHeader
} from "../styleForWriteHeader.js";

export const WriteHeader = (props) => {
    return (
        <StyledWriteHeader>
            <LoginBtn />
        </StyledWriteHeader>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteHeader)
