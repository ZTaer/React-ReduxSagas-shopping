/**
 * styled-components构建: 根据组件传输的参数以函数操控css动态变化,以动态按钮为例( 使用笔记 )
 *      a) 核心: const xxx = props => {}; 其中props可以接受到组件传递来的参数
 */
import styled, {css} from 'styled-components';

// 普通登陆界面按钮样式
const signWidthStyles = css`
    width:190px;
`;

// 谷歌按钮样式
let googleColor = '#4284f3';
const googleBtnStyles = css`
    ${signWidthStyles}
    background: ${googleColor};
    border:1px solid ${googleColor};
    &:hover{
        background: #fff;
        color:${googleColor};
        border:1px solid ${googleColor};
    }
`;

// 购物车下拉菜单按钮
const cartDropdownBtnStyles = css`
  margin:0px auto;
  width:100% !important;
`;

// 产品页加入购物车按钮
let animateTimeOnly = '0.1s';
const collectionItemBtnStyles = css`
    width:75%;
    margin-bottom:1rem;
    display: none;
    &:hover{
    background: rgba(255,255,255,0.6);
    }
    &:active{
    transition:all ${animateTimeOnly} linear;
    -moz-transition: all ${animateTimeOnly} linear;
    -webkit-transition: all ${animateTimeOnly} linear;
    background: red;  
    color:#fff;
    }
`;

// 核心: 动态css核心逻辑 - 可接受组件传来的参数
const getButtonStyles = props => {
    if( props.isGoogleStyles ){
        return googleBtnStyles;
    }
    else if( props.isSignWidthStyles ){
        return signWidthStyles;
    }
    else if( props.isCartDropdownBtnStyles ){
        return cartDropdownBtnStyles;
    }
    else if( props.isCollectionItemBtnStyles ){
        return collectionItemBtnStyles;
    }
    
};

let animateTime = '0.3s'; // 控制动画时间
const CustomButtonExp = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    text-align: center;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    letter-spacing: 2px;
    border: 1px solid black;

    transition:all ${animateTime} linear;
    -moz-transition: all ${animateTime} linear;
    -webkit-transition: all ${animateTime} linear;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
    ${getButtonStyles} /** 引用逻辑函数, 最好放置最后方便覆盖css样式 */
`;

export { CustomButtonExp };