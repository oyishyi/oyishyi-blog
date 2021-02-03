import { createGlobalStyle } from "styled-components";

export const IconFont = createGlobalStyle`
    @font-face {
      font-family: "iconfont";
      src: url('./iconfont.eot?t=1612259726294'); /* IE9 */
      src: url('./iconfont.eot?t=1612259726294#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
           url('./iconfont.woff?t=1612259726294') format('woff'),
           url('./iconfont.ttf?t=1612259726294') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
           url('./iconfont.svg?t=1612259726294#iconfont') format('svg'); /* iOS 4.1- */
    }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconcombinedshapecopy2:before {
    content: "\e652";
  }

  .iconwenzhang-copy:before {
    content: "\e643";
  }

  .iconzhanghuffffffpx:before {
    content: "\e603";
  }

  .icondengchu:before {
    content: "\e621";
  }

  .iconshoucang:before {
    content: "\e630";
  }

  .iconshezhi:before {
    content: "\e654";
  }

  .iconguanyu:before {
    content: "\e622";
  }

  .iconyuedu:before {
    content: "\e6b2";
  }

  .icontriangle-up:before {
    content: "\e67c";
  }

  .iconjiazai:before {
    content: "\e668";
  }

  .iconliaotian:before {
    content: "\e620";
  }

  .iconguanbi:before {
    content: "\e607";
  }

  .icondianzan:before {
    content: "\e60c";
  }

  .iconpinglun:before {
    content: "\e63a";
  }

  .iconfenxiang01:before {
    content: "\e6d1";
  }

  .iconspin:before {
    content: "\e851";
  }

  .iconicon-checkin:before {
    content: "\e615";
  }

  .iconsousuo:before {
    content: "\e633";
  }

  .iconxiala:before {
    content: "\e629";
  }

  .iconxiaoxi:before {
    content: "\e602";
  }
`
