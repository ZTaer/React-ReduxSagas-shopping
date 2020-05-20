import styled from 'styled-components';
import CustomButtonExp from '../custom-button-exp/custom-button-exp.component';

export const CartDropdownStyledContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`;
CartDropdownStyledContainer.displayName = 'CartDropdownStyledContainer'; // 使wrapper.find()可以索引组件,进而对组件测试模拟( 等待笔记 )

export const CartItems = styled.div`
    width:100%;
    height: 270px;
    display: flex;
    flex-direction: column;
    overflow:scroll;
    overflow-y: auto;
    overflow-x: hidden;
`;
CartItems.displayName = 'CartItems';

export const CartItemsAlt = styled.span`
    margin:auto;
    font-size: 1rem;
    letter-spacing: 3px;
`;
CartItemsAlt.displayName = 'CartItemsAlt';

export const CustomButtonExpStyled = styled( CustomButtonExp )`
    margin-top: auto;
`;
CustomButtonExpStyled.displayName = 'CustomButtonExpStyled';