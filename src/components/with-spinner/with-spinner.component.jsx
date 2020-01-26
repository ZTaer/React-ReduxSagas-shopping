// react加载器构建,用于加载异步数据显示加载动画( 完成笔记 )
import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// 高级用法
    // 0. curring函数 - 多个函数嵌套
    // 1. 高阶组件 - 这里使用了, 高阶组件用法
        // a) 传递接受组件, 并加工
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {

    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) :
    (
        <WrappedComponent { ...otherProps } />        
    );
}

export default WithSpinner;