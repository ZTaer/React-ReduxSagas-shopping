import React from 'react';
import "./collection-view.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionView = ( {title,items} ) => {

    return (
        <div className="collection-preview">
            <h1 className="title"> {title.toUpperCase()} </h1>
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

export default CollectionView;