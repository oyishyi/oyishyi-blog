import { GET_ARTICLE } from "./actions.js";
import axios from "axios";

export const getGetArticleAction = (payload) => {

    return (async (dispatch) => {
        const res = await axios.get("../api/articles/article.md");
        const action = {
            type: GET_ARTICLE,
            payload: {
                article: res.data 
            }
        }
        dispatch(action);
    })
}
