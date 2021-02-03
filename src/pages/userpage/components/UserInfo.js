import React from 'react'
import { connect } from 'react-redux'

import { 
    StyledUserInfo
} from "../style.js";


export const UserInfo = (props) => {
    return (
        <StyledUserInfo>
            
        </StyledUserInfo>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
