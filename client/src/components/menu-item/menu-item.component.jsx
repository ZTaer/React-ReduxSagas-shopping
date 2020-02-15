import React from 'react';

import { withRouter } from 'react-router-dom';

import "./menu-item.style.scss";

/**
 * 路由withRouter函数: 使当前页面下的组件, 可以直接访问"当前页面路由信息"( 完成笔记 )
 * 0. 引入: import { withRouter } from 'react-router-dom';
 * 1. 输出: export default withRouter( 组件名 );
 * 2. 使用: 路由属性名称 -> 直接传递给组件, 如下实战
 */
const MenuItem = ({ title,imageUrl,size,linkUrl,history,match }) => (

    <div 
    onClick={ ()=>history.push( `${match.url}${linkUrl}` ) } 
    className={ ` menu-item ${size} ` }
    >
        <div style={ { 
            backgroundImage: `url(${imageUrl})` 
        } } className="background-image">
        </div>
        <div className="content">
            <h1 className="title">
                {title.toUpperCase()  }
            </h1>
            <span className="subtitle">
                SHOP NOW
            </span>
        </div>
    </div>
);

export default withRouter(MenuItem);