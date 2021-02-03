import { fromJS } from "immutable"
import axios from "axios";

import {
    GET_INITIAL_HOME_PAGE_DATA,
    LOAD_MORE_ARTICLE
} from "./actions.js"


export const getGetInitialHomepageDataAction = () => {
    return (async (dispatch) => {
        const res = await axios.get("./api/home.json");
        const action = {
            type: GET_INITIAL_HOME_PAGE_DATA,
            payload: fromJS(res.data)
        }
        dispatch(action);
    });
}


// 加载更多获取数据

export const getLoadMoreAction = () => {
    return (async (dispatch, getState) => {
        // for (let i=0;i<10000000;i++) {
        //     var date = new Date();
        // }
        const wantedPage = getState().getIn(["Homepage", "articlePage"]) + 1;
        const res = await axios.get("./api/moreArticles.json?page=" + wantedPage);
        const data = res.data;
        const action = {
            type: LOAD_MORE_ARTICLE,
            payload: {
                data: fromJS(data.data),
                page: wantedPage
            }
        }
        dispatch(action);
    });
};
