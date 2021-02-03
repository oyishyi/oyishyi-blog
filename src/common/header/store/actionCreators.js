import * as actionConstants from "./actions.js";
import axios from "axios";
import { fromJS } from "immutable";


export const getChangeFocusStateOnSearchBarAction = (payload) => ({
    type: actionConstants.CHANGE_FOCUS_STATE_ON_SEARCH_BAR,
    payload
})

export const getGetAdvisedTagListAction = () => {
    return (async (dispatch) => {
        try {
            const res = await axios.get("../api/tagList.json");
            const data = res.data.data; // 获取 tagList
            const action = {
                type: actionConstants.GET_ADVISED_TAG_LIST,
                payload: fromJS({
                    tagList: data,
                    totalPage: Math.ceil(data.length / 8)
                })
            }
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    })
}

export const getChangeMouseEnterStateOnSearchHintAction = (payload) => ({
    type: actionConstants.CHANGE_MOUSE_ENTER_STATE_ON_SEARCH_HINT,
    payload
})

export const getChangePageAction = (payload) => ({
    type: actionConstants.CHANGE_PAGE,
    payload // undefined，仅为了保持结构
})

export const getChangeShowLoginBtn = (showLoginBtn) => ({
    type: actionConstants.CHANGE_SHOW_LOGIN_BUTTON,
    payload: {
        showLoginBtn
    }
})

// 登录或者注销行为
export const getLoginAction = (loginAction) => {
    return (async (dispatch) => {
        // 登录行为
        if (loginAction === true) {
            const res = await axios.get("../api/login.json");
            const action = {
                type: actionConstants.LOGIN,
                payload: {
                    loginStatus: res.data.success
                }
            }
            dispatch(action);
            // 如果是登录行为，并且登录成功，则关闭登录组件
            // 登录失败则不关闭登录组件
            if (res.data.success === true) {
                dispatch(getChangeShowLoginBtn(false));
                document.body.style.overflowY = "scroll";
            }

        } else {
            // 注销行为
            const action = {
                type: actionConstants.LOGIN,
                payload: {
                    loginStatus: false
                }
            }
            dispatch(action);
        }
    }
    )
}

// 开启或关闭头像扩展栏
export const getChangeShowAvatarBox = () => ({
    type: actionConstants.CHANGE_SHOW_AVATAR_BOX
})
