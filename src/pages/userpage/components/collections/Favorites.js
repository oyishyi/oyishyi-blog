import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import axios from "axios";

import {
    getGetFavoritesAction
} from "../../store/actioncreators.js";

import FavoriteCollection from "./collection/FavoriteCollection";
import Loading from "../../../../common/Loading/index.js";

import {
    StyledFavorites
} from "../../style.js";



export const Favorites = (props) => {

    // 选择查看创建的收藏还是关注的收藏，懒得用 redux
    const [favoriteType, setFavoriteType] = useState("created");
    function handleChangeFavoriteType(e) {
        const className = e.target.className;
        if (className !== "select-type") {
            setFavoriteType(className);
            e.stopPropagation();
        }
    }

    const cancelTokenSourceRef = useRef(axios.CancelToken.source());

    useEffect(() => {
        const cancelTokenSource = cancelTokenSourceRef.current;
        const func = props.getFavorites;
        func(cancelTokenSource);
        return (() => {
            cancelTokenSource.cancel("取消'收藏'的异步请求");
        });
    }, [props.getFavorites, cancelTokenSourceRef]);

    // 条件渲染
    let element;
    if (props.collectionList === null) {
        // 优雅降级
        element = (<Loading />);
    } else if (props.collectionList.size === 0) {
        element = (<p>您目前还没有任何动态</p>);
    } else {
        // 收藏夹有两个 list，因此处理和别的不一样
        let collectionList;
        if (favoriteType === "created") {
            collectionList = props.collectionList.get("created");
        } else {
            collectionList = props.collectionList.get("following");
        }
        element = (
            <StyledFavorites favoriteType={favoriteType}>
                <nav className="favorites-nav">
                    <span className="title">收藏夹</span>
                    <div className="select-type" onClick={handleChangeFavoriteType}>
                        <span className="created">创建的（2）</span>
                        <span className="following">关注的（0）</span>
                    </div>
                </nav>
                <ul>
                    {collectionList.map((favorite) => {
                        return (
                            <FavoriteCollection
                                key={favorite.get("id")}
                                title={favorite.get("title")}
                                creator={favorite.get("creator")}
                            />
                        );
                    })}
                </ul>
            </StyledFavorites>
        );
    }

    return element;
}

const mapStateToProps = (state) => ({
    collectionList: state.getIn(["UserPage", "collectionList"])
})

const mapDispatchToProps = (dispatch) => {

    return {
        // 异步获取收藏
        getFavorites(cancelTokenSource) {
            axios.get("/api/favorites.json", { cancelToken: cancelTokenSource.token })
                .then((res) => {
                    if (res.data.success) {
                        const action = getGetFavoritesAction(res.data.data);
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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
