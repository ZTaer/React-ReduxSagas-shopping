import styled from 'styled-components';

// 恐怖如斯: 支持类似于SASS选择普通标签的方法( 完成笔记 )
export const CartItemStyledContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;

    img {
        width: 30%;
    }
`;

export const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;

export const Name = styled.span`
    font-size: 16px;
`;