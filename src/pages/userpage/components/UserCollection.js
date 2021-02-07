// 左下角的用户发布过的文章，点赞，收藏等
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Activities from "./collections/Activities.js";
import Articles from "./collections/Articles.js";
import Favorites from "./collections/Favorites.js";

import * as actionCreators from "../store/actioncreators";

import {
    StyledUserCollection,
    CollectionNav,
    BlueSlide
} from "../style.js";


export const UserCollection = (props) => {

    useEffect(() => {
        const func = props.clearCollectionList;
        func();
    }, [props.clearCollectionList])

    // 获取哪种类型的 collections
    function getCollections() {
        switch (props.collectionType) {
            case "activities":
                return (<Activities />);
            case "articles":
                return (<Articles />);
            case "favorites":
                return (<Favorites />);
            default:
                return null;
        }
    }
    function getPositionOfSelectBox(collectionType) {
        const collectionTypeList = ["activities", "articles", "favorites", "likes", "comments"];
        const index = collectionTypeList.indexOf(collectionType);
        const position = index*92 + "px";
        return position;
    }
    return (
        <StyledUserCollection>
            {/* 把 collectionType 属性传给 styled-component，让选中的区块变蓝 */}
            <CollectionNav className={props.collectionType}> 
                {/* 选中区块的底部蓝色滑块 */}
                <BlueSlide className="blue-slide" position={getPositionOfSelectBox(props.collectionType)} />
                <div
                    className={"activities"}
                    onClick={props.handleChangeCollectionType}>
                    动态
                </div>
                <div
                    className={"articles"}
                    onClick={props.handleChangeCollectionType}>
                    文章
                </div>
                <div
                    className={"favorites"}
                    onClick={props.handleChangeCollectionType}>
                    收藏
                </div>
                <div
                    className={"likes"}
                    onClick={props.handleChangeCollectionType}>
                    赞
                </div>
                <div
                    className={"comments"}
                    onClick={props.handleChangeCollectionType}>
                    评论
                </div>
            </CollectionNav>
            <main>
                {getCollections()}
            </main>
        </StyledUserCollection>
    )
}

const mapStateToProps = (state) => ({
    userInfo: state.getIn(["Header", "userInfo"]),
    collectionType: state.getIn(["UserPage", "collectionType"])
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeCollectionType(e) {
            // 改变版块前，要清空 collectionList 为 null，这样下个板块才会显示懒加载样式
            dispatch(actionCreators.getClearCollectionListAction());
            dispatch(actionCreators.getChangeCollectionTypeAction(e.target.className));
        },
        clearCollectionList() {
            dispatch(actionCreators.getClearCollectionListAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCollection)
