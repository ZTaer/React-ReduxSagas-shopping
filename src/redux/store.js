/**
 * 2. 构建store.js和中间件( 完成笔记 )
 *      a) 创建中间件: createStore( rootReducer, applyMiddleware(...middlewares) ); 
 *      b) 解析: 创建中间件时,使用createStore( rootReducer目录，应用中间件函数 );
 *      c) logger为redux记录器，方便开发查看数据变化
 */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// redux-thunk配置store.js( 完成笔记 )
    // 0. 注意中间件加入 const middlewares = [thunk];
import thunk from 'redux-thunk';

// redux-persist的store配置( 完成笔记 )
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

// 中间件: 因为中间件后期要添加很多,所以需要解构符来配合

const middlewares = [thunk];

// process.end.NODE_ENV可以确定当前项目是否为生产环境( 完成笔记 )
    // 0. process.env.NODE_ENV === 'development': 为开发环境
    // 1. process.env.NODE_ENV === 'production': 为生产环境
if( process.env.NODE_ENV === 'development' ){
    middlewares.push(logger);
}

const store = createStore( rootReducer, applyMiddleware(...middlewares) );

// redux-persist的store配置( 完成笔记 )
const persistor = persistStore(store); // 处理store
export { store, persistor }; // 导出persistor