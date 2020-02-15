/**
 * 1. reducer统计目录: root-reducer.js ( 完成笔记 )
 */
import { combineReducers } from 'redux';

// redux-persist的root-reducer.js配置 (完成笔记)
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import modalReducer from './modal/modal.reducer';
import direReducer from './dire/dire.reducer';
import shopReducer from './shop/shop.reducer';

// redux-persist基本信息配置
const persistConfig = {
    key: 'root', // 设定存储的开始位置
    storage, // 导入存储库
    whitelist: ['cart'], // 白名单,放置本地存储的变量目标,以字符串的形式
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    modal: modalReducer,
    dire: direReducer,
    shop: shopReducer,
});
// redux-persist要经过persistReducer( redux-persist配置, redux目录 )
    // 0. 处理后导出rootReducer
    // 1. 所以说,接收方依然import rootReducer from 'xxx/root-reducer';正常接受即可
export default persistReducer( persistConfig, rootReducer );