import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CollectionItemStyledContainer } from '../collection-item/collection-item.styles';

export const CollectionPreviewStyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;
CollectionItemStyledContainer.displayName = "CollectionItemStyledContainer";

export const LinkStyled = styled(Link)`
    font-size: 28px;
    margin-bottom: 25px;
`;
LinkStyled.displayName = "LinkStyled";

export const Preview = styled.div`
    display: flex;
    justify-content: space-between;
`;
Preview.displayName = "Preview";

