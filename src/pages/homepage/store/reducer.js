import { fromJS } from "immutable"

import { 
    GET_INITIAL_HOME_PAGE_DATA,
    LOAD_MORE_ARTICLE
} from "./actions.js"

const initialState = fromJS({
    homepagePic: "",
    topicList: [],
    articleList: [],
    articlePage: 0,
    loadingState: false,
    recommendedAuthorList: []
})

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_INITIAL_HOME_PAGE_DATA:
            return state.merge({
                topicList: payload.get("topicList"),
                articleList: payload.get("articleList"),
                recommendedAuthorList: payload.get("recommendedAuthorList")
            });
            
        case LOAD_MORE_ARTICLE:
            const currentArticleList = state.get("articleList")
            return state.merge({
                articleList: currentArticleList.concat(payload.data),
                articlePage: payload.page
            });
        default:
            return state
    }
}
