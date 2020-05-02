// xx.utility.js专门写入,扩展函数(完成笔记)
import { objectToArray } from '../../assets/__OO7EJS.v1.0';

export const  addItemToCart = ( cartItems, additem ) => {
   const door = cartItems.find( cur => cur.id === additem.id );
   // 如果购物车已存在物品则数量+1
   if( door ){
        return cartItems.map(
            cur => cur.id === additem.id ? { ...cur, quantity: cur.quantity + 1 } : cur 
        );
   } 
   // 如果购物车无物品则创建物品,并设定数量为1
   // 解构的方法增加对象元素/解构的方法增加数组元素(完成笔记)
   return [ ...cartItems, { ...additem, quantity: 1 } ];
}

// 减小商品数量,如果商品数量为1则删除商品,否则商品数量减1
export const lowerCartItem = ( cartItems, lowerItem ) => {
   const door = cartItems.find( cur => cur.id === lowerItem.id );
   if( door ){
       return lowerItem.quantity === 1 ?
       cartItems.filter( cur => cur.id !== lowerItem.id ) :
       cartItems.map( 
           cur => {
               return cur.id === lowerItem.id ? 
               { ...cur, quantity: cur.quantity - 1 } :
               { ...cur };
           } 
       );

   }
}

// 删除产品
export const deleteCartItem = ( cartItems, deleteItem ) => {
   const door = cartItems.find( cur => cur.id === deleteItem.id );
   if( door ){
       return cartItems.filter( cur => cur.id !== deleteItem.id );
   }
}

// 目的是，后端购物车数据，与当前购物车数据商品相融合
export const moreAddItemToCart = ( cartItems, getCartItem ) => {
    if( cartItems || getCartItem ){
        const arrayGetCartItem = ( getCartItem ? objectToArray( getCartItem ) : [] );
        let result = ( cartItems ? [ ...cartItems, ...arrayGetCartItem ] : [ ...arrayGetCartItem ] );
        let sameArray = [];
        let item, cur;
    
        // 根据ID过滤出相同商品，存放在sameArray
        for( item of arrayGetCartItem ){
            for( cur of cartItems ){
                if( item.id === cur.id ){
                    sameArray.push(item);
                }
            }
        }
    
        // 删除result中所有与sameArray相同的商品( 目的是防止商品重复 )
        if( sameArray.length ){
            for( item of sameArray ){
                result = deleteCartItem( result,item );
            }
        }
        // 在将sameArray中商品与result结合
        result = [ ...sameArray, ...result ];
        return result;
    }
    return [];
}
