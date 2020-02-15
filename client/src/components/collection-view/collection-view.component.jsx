import React from 'react';
import "./collection-view.styles.scss";
import { withRouter, Link } from 'react-router-dom';

import CollectionItem from "../collection-item/collection-item.component";

const CollectionView = ( {title,items,match} ) => {

    const routeUrl = encodeURI(`${match.url}/${title.toLowerCase()}`) ;
    return (
        <div className="collection-preview">
            <Link className="title" to={routeUrl} >
                {title.toUpperCase()} · 查看更多 
            </Link>
            <div className="preview">
                {
                    items
                    .filter( (cur,index)=>index<4 ) // 通过索引值限制输出数量
                    .map( ( item )=>( 
                        <CollectionItem key={item.id} item={item} />
                    ) )
                }
            </div>
        </div>
    );

}

export default withRouter(CollectionView);