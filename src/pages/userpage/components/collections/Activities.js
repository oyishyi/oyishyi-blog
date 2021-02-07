import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import axios from "axios";

import {
    getGetActivitiesAction
} from "../../store/actioncreators.js";


/**
 * 个人主页左下角的动态和其他 tab 有很多重复的框框
 * 为了代码复用性，这里将它们分离成小组件放在 collection 文件夹里
 * 这里导入的正是这些小组件
 * （注：小组件的样式也在 collection 文件夹里，以免 userpage 的样式文件太长）
 */
import ArticleCollection from "./collection/ArticleCollection.js";
import FollowTopicCollection from "./collection/FollowTopicCollection.js";
import Loading from "../../../../common/Loading/index.js";


import {
    StyledActivities
} from "../../style.js";

export const Activities = (props) => {

    const cancelTokenSource = axios.CancelToken.source();

    useEffect(() => {
        if (props.collectionList === null) {
            const func = props.getActivities;
            func(cancelTokenSource);
        }
        return(() => {
            cancelTokenSource.cancel("取消'动态'的异步请求");
        });
    }, [props.collectionList, props.getActivities, cancelTokenSource]);


    // 条件渲染
    let element;
    if (props.collectionList === null) {
        // 优雅降级
        element = (<Loading />);
    } else if (props.collectionList.size === 0) {
        element = (<p>您目前还没有任何动态</p>);
    } else {
        element = (
            <StyledActivities>
                {props.collectionList.map((collection) => {
                    // 动态包含着多种情况
                    switch (collection.get("type")) {
                        case "article":
                            return (
                                <ArticleCollection
                                    key={collection.get("id")}
                                    avatar={props.userInfo.get("avatar")}
                                    name={props.userInfo.get("name")}
                                    title={collection.get("title")}
                                    desc={collection.get("desc")}
                                    titlePicUrl={collection.get("titlePicUrl")}
                                    likes={collection.get("likes")}
                                    comments={collection.get("comments")}
                                />
                            );
                        case "followTopic":
                            return (
                                <FollowTopicCollection
                                    key={collection.get("id")}
                                    avatar={props.userInfo.get("avatar")}
                                    name={props.userInfo.get("name")}
                                    targetImg={collection.get("targetImg")}
                                    targetName={collection.get("targetName")}
                                />
                            );
                        default:
                            return null;
                    }
                })}
            </StyledActivities>
        )
    }
    return element;
}

const mapStateToProps = (state) => ({
    userInfo: state.getIn(["Header", "userInfo"]),
    collectionList: state.getIn(["UserPage", "collectionList"])
})

const mapDispatchToProps = (dispatch) => {
    return {
        getActivities(cancelTokenSource) {
            axios.get("/api/activities.json", {cancelToken: cancelTokenSource.token})
                .then((res) => {
                    if (res.data.success) {
                        const action = getGetActivitiesAction(res.data.data);
                        dispatch(action);
                    } else {
                        throw console.error("请求失败");;
                    }
                }).catch((error) => {
                    if (axios.isCancel(error)) {
                        console.log(error.message);
                    } else {
                        console.log(error);
                    }
                });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities)
