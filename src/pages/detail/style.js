import styled from "styled-components";


export const StyledDetail = styled.main`
    padding-top: 20px;
    background-color: #f4f5f5;

    & > .detail-main {
        width: 960px;
        margin: 0 auto;
        display: grid;
        gap: 20px;
        grid-template-columns: 3fr 1fr;
    }
`;


/**************************************************************************************************
 * 左边栏的样式
 **************************************************************************************************/
export const DetailLeft = styled.div`
    
`

export const StyledMainArticle = styled.div`
    padding: 24px 24px 0 24px;
    background-color: #fff;
`

// 文章部分的作者信息
export const AuthorInfoArticle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    & > img {
        flex: none;
        margin-right: 12px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    & > .data-info {
        & > .name {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 5px;
            color: #333;
        }
        & > .meta-box {
            font-size: 13px;
            color: #909090;
            & > span {
                margin-left: 7px;
            }
            & .edit-btn {
                color: #1264b6;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`

// maekdown 转化后的 html 文章的样式
export const MainContent = styled.article`
    line-height: 20px;
    color: #333;

    & img {
        display: block;
        width: 80%;
        height: 80%;
    }
    & h1 {
        font-size: 30px;
        font-weight: 800;
        line-height: 60px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
    }
    & h2 {
        font-size: 20px;
        font-weight: 600;
        line-height: 40px;
        color: #999;
    }
    & p {
        margin-top: 10px;
    }
    & li {
        margin-left: 20px;
    }
    & ul > li {
        list-style: circle;
    }
    & ol > li {
        list-style: decimal;
    }
`;


/**************************************************************************************************
 * 右边栏的样式
 **************************************************************************************************/

export const DetailRight = styled.div`
    display: flex;
    flex-flow: column;
    gap: 20px;
`


// 侧边栏的作者信息
export const StyledAuthorInfo = styled.section`

    background-color: #fff;

    & > .title {
        font-size: 14px;
        padding: 12px 16px;
        border-bottom: 1px solid hsla(0,0%,58.8%,.1);
        color: #333;
    }

    & > .base-info{
        display: flex;
        align-items: center;   
        padding: 16px;

        & > img {
            flex: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 12px;
        } 

        & > .data-box {
            & > .name {
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 10px;
                color: #000;
            }
            & > .desc {
                font-size: 15px;
                color: #72777b;
            }
        }
    }
`;

export const StatusItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    padding: 0 16px;
    margin-bottom: 12px;
    color: #000;

    & > .iconfont {
        margin-right: 12px;
        padding: 5px;
        border-radius: 50%;

        color: rgb(123, 185, 255);
        background-color: rgb(225, 239, 255);
    }
`;


// 相关文章部分
export const StyledRelatedArticles = styled.section`

    background-color: #fff;
    & > .title {
        font-size: 14px;
        padding: 12px 16px;
        border-bottom: 1px solid hsla(0,0%,58.8%,.1);
        color: #333;
}
`;

// 相关文章单个文章item
export const RelatedArticleItem = styled.div`
    padding: 10px 16px;

    & > .title {
        font-size: 14px;
        line-height: 20px;
        color: #333;
    }
    & > .status-info {
        margin-top: 5px;

        & > .like {
            margin-right: 30px;
            & > .iconfont {
                font-size: 15x;
                margin-right: 10px;
                color: #c2c2c2;
            }
            & > span {
                font-size: 16px;
                color: #b2bac2;
            }
        }
        & > .comment {
            margin-right: 30px;
            & > .iconfont {
                font-size: 13px;
                margin-right: 10px;
                color: #c2c2c2;
            }
            & > span {
                font-size: 16px;
                color: #b2bac2;
            }
        }
    }
`;