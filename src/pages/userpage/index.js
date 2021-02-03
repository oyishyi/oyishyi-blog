import React from 'react'
import { connect } from 'react-redux'

import UserInfo from "./components/UserInfo.js";


import {
    StyledUserPage,
    UserPageLeft,
    UserPageRight
} from "./style.js";

export const UserPage = (props) => {
    return (
        <StyledUserPage>
            <div className="user-page-main">
                <UserPageLeft>
                    <UserInfo />
                </UserPageLeft>
                <UserPageRight>

                </UserPageRight>
            </div>
        </StyledUserPage>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
