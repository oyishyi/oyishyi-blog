import React, { useEffect } from "react"
import { connect } from "react-redux";

import {
    getGetInitialHomepageDataAction
} from "./store/actionCreators.js";

// 导入样式
import Topics from "./components/Topics.js";
import Articles from "./components/Articles.js";
import Advertisements from "./components/Advertisements.js";
import RecommendedAuthors from "./components/RecommendedAuthors.js";
import Footer from "./components/Footer.js";

import {
    StyledHomepage,
    HomepageLeft,
    HomepageRight
} from "./style.js";


export const Homepage = (props) => {
    useEffect(() => {
        const func = props.getInitialHomepageData;
        func();
    }, [props.getInitialHomepageData])

    return (
        <StyledHomepage className="Homepage-whole">
            {/* 主页中间那 960px 宽的部分 */}
            <div className="Homepage-main">
                <HomepageLeft>
                    <img alt="主页图片" />
                    <Topics />
                    <Articles />
                </HomepageLeft>
                <HomepageRight>
                    <Advertisements />
                    <RecommendedAuthors />
                    <Footer />
                </HomepageRight>
            </div>
        </StyledHomepage>
    );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
        // 获取主页起始所需所有数据
        getInitialHomepageData() {
            const action = getGetInitialHomepageDataAction();
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);