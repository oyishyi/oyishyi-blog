import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

import UserData from "./components/UserData.js";
import UserCollection from "./components/UserCollection.js";
import UserPageRight from "./components/UserPageRight.js";

import {
    StyledUserPage,
    UserPageLeft
} from "./style.js";

export const UserPage = (props) => {
    console.log(props.match.params.id);
    return (
        <StyledUserPage>

            <div className="user-page-main">
                <UserPageLeft>
                    <UserData />
                    <UserCollection />
                </UserPageLeft>

                {/* 页面右边的因为要根据导航栏位置重新渲染，单独提出为一个组件
                如果在这里重新渲染的话，整个页面都要渲染，那样太耗性能了 */}
                <UserPageRight />
            </div>

        </StyledUserPage>
    )
}

const mapStateToProps = (state, props) => ({
    userInfo: state.getIn(["Header", "userInfo"])
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserPage))
