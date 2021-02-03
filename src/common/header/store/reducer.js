import * as actionConstants from "./actions.js";

import { fromJS } from "immutable";

const initialState = fromJS({
    searchFocus: false,
    mouseEnter: false,
    tagList: [],
    page: 0,
    totalPage: 0,
    showLoginBtn: false,
    loginStatus: false,
    showAvatarBox: false
})

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionConstants.CHANGE_FOCUS_STATE_ON_SEARCH_BAR:
            return state.set("searchFocus", payload); // immutable.js 提供了简便的 set 方法
                                                      // 返回值是一个修改了指定值的全新的对象
        case actionConstants.GET_ADVISED_TAG_LIST:
            return state.merge({
                tagList: payload.get("tagList"),
                totalPage: payload.get("totalPage")
            });                                     
        case actionConstants.CHANGE_MOUSE_ENTER_STATE_ON_SEARCH_HINT:
            return state.set("mouseEnter", payload)
        case actionConstants.CHANGE_PAGE:
            return state.set("page", state.get("page") + 1);

        // 登录功能
        case actionConstants.CHANGE_SHOW_LOGIN_BUTTON:
            return state.set("showLoginBtn", payload.showLoginBtn);
        case actionConstants.LOGIN:
            return state.set("loginStatus", payload.loginStatus);
        // 头像扩展框
        case actionConstants.CHANGE_SHOW_AVATAR_BOX:
            return state.set("showAvatarBox", !state.get("showAvatarBox"));
        default:
            return state;
    }
}
