import { GET_ARTICLE } from "./actions.js";
import { fromJS } from "immutable";

const initialState = fromJS({
    article: ""
})

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_ARTICLE:
        return state.set("article", payload.article);

    default:
        return state
    }
}


