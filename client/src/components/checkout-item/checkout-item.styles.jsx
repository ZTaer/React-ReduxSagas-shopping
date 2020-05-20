import styled from 'styled-components';

export const CheckoutItemStyledContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

CheckoutItemStyledContainer.displayName = "CheckoutItemStyledContainer";

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
`;

ImageContainer.displayName = "ImageContainer";

export const SpanStyled = styled.span`
    width:23%;
`;

SpanStyled.displayName = "SpanStyled";

// styled( 标签 )也可以继承其它styled标签的属性( 完成笔记 )
export const Quantity = styled(SpanStyled)`
    padding-left: 20px;
    display: flex;
`;

Quantity.displayName = "Quantity";

export const Arrow = styled.div`
    margin:0 0.3rem;
    cursor: pointer;

    // 取消标签双击选中
    -moz-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    -khtml-user-select:none;
    user-select:none;
`;

Arrow.displayName = "Arrow";

export const RemoveButton = styled.span`
    padding-left: 12px;
    cursor: pointer;
`;

RemoveButton.displayName = "RemoveButton";