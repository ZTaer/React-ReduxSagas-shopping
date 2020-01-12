import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/**
 * redux获取组件访问权(完成笔记)
 */
import { Provider } from 'react-redux';
// redux-persist在index.js配置( 完成笔记 )
    // 0. PersistGate标签 
        // a) 将渲染的APP标签嵌套在PersistGate标签中,并将persistor信息传入此标签
        // b) 方便redux-persist抓取目标变量进行处理
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';


import './index.css';
import App from './App';

// 展示路由功能的基础标签( 完成笔记 )

// Redux初始化标签必备,获取组件访问权( 完成笔记 )
ReactDOM.render(
    // React-Redux: Provider标签一定要传递store,否则容易报错( 完成笔记 )
    <Provider store={store} >
        <BrowserRouter>
            <PersistGate persistor={persistor} >
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

