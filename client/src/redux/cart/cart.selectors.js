/***
 * xxx.selectors.js文件构建，与redux配合提高react性能(完成笔记)
   0. 目的: 保证只有在redux数据改变时，才能重新渲染组件
   1. 总体来说select分，输入/输出
   2. 构建流程：
        a) select分成二步，输入与输出 
        b) 输入: 来选择引入来的数据:
            0. const selectXXX = state => stateXXX;
        c) 输出：数据流只要经过select输出，就能保证只有redux数据方式改变时对应的组件才能重新渲染，提高了react性能。
            0. export const xxx = createSelector(
                [selectXXX], // 导入数据
                xxx => xxx.yyy;
            );
            1. 输出处理核心:
            import {createSelector} from 'reselect';
            createSelector([xxx,yyy],xxx=>xxx.xxx);
    3. 使用流程:
        a) 普通方法使用select
            0. 实例代码
        b) 便捷式方法使用select
            0. 核心：createStructuredSelector({ xx:yy })
            1. 实例代码
 */

import { createSelector } from 'reselect';


// 0. 输入头
const selectCart = state => state.cart;

// 1. select单个数据处理输出使用方式(完成笔记)
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems,  
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden, 
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce( (total,cur)=>total+cur.quantity,0 ),
);

export const selectCartPriceTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce( 
        (total,cur)=>total+cur.quantity*cur.price,
    0 ),   
);

// 2. select多个数据处理输出使用方式(完成笔记)
/*
const selectCart = state => state.cart;
const selectUser = state => state.user;

export const selectCartItems = createSelector(
    [selectCart, selectUser],
    (cart, user) => user.currentUser,  
);
*/

