// 写文章网页的导航栏（WriteHeader 组件）和其他地方不一样
// 而且 style.js 实在太长了
// 因此 WriteHeader 组件的样式在这里写

import styled from "styled-components";


export const StyledWriteHeader = styled.header`
    position: absolute; top: 0px; left: 0;
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.05);
    color: #999;
    background-color: #fff;
    z-index: 998; /*仅次于登陆弹窗*/
`;