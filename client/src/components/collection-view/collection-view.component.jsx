import React from 'react';
import { withRouter } from 'react-router-dom';
import { CollectionPreviewStyledContainer, LinkStyled, Preview } from './collection-view.styles';

import CollectionItem from "../collection-item/collection-item.component";

export const CollectionView = ( {title,items,match} ) => {

    const routeUrl = encodeURI(`${match.url}/${title.toLowerCase()}`) ;
    return (
        <CollectionPreviewStyledContainer>
            <LinkStyled to={routeUrl} >
                {title.toUpperCase()} · 查看更多 
            </LinkStyled>
            <Preview>
                {
                    items
                    .filter( (cur,index)=>index<4 ) // 通过索引值限制输出数量
                    .map( ( item )=>( 
                        <CollectionItem key={item.id} item={item} />
                    ) )
                }
            </Preview>
        </CollectionPreviewStyledContainer>
    );

}

export default withRouter(CollectionView);