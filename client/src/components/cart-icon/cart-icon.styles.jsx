import styled from 'styled-components';
import { ReactComponent as CartIconSvg } from "../../assets/shopping-bag.svg";

export const CartIconStyledContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
CartIconStyledContainer.displayName = "CartIconStyledContainer";

export const CartIconSvgStyled = styled(CartIconSvg)`
    width: 24px;
    height: 24px;
`;

CartIconSvgStyled.displayName = "CartIconSvgStyled";

export const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;

ItemCount.displayName = "ItemCount";