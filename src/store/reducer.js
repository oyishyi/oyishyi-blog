import { combineReducers } from "redux-immutable";
import Header from "../common/header/store/reducer.js";
import ShortcutBtn from "../common/shortcutbtn/store/reducer.js";
import Homepage from "../pages/homepage/store/reducer.js";
import Detail from "../pages/detail/store/reducer.js";

const reducer = combineReducers({
    Header,
    Homepage,
    ShortcutBtn,
    Detail
})

export default reducer;