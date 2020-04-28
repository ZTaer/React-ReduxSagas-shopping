import React from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';
/**
 * 构建: 抓取错误的组件error-boundary( 完成笔记 )
 *      a) 目的: 控制组件出错时渲染的页面，以及获取报错信息
 *      b) 使用: 嵌套Suspense标签外，用于监测错误, 并渲染自定义错误页面
 *          <ErrorBoundary>
 *              <Suspense fallback={<Spinner />} >         
 *              </Suspense>
 *          </ErrorBoundary>
 */

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state = {
            errorState: false,
        }
    }

    // 定义静态函数: 专门抓取错误, 出现错误errorState: true
    static getDerivedStateFromError( error ){
        return {
           errorState:  true 
        };
    }

    componentDidCatch( error,  info ){
        console.log(error);
    }

    // 错误状态为true则渲染报错组件，否则渲染正常组件
    render(){
        if( this.state.errorState ){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl = '/images/error/error.png' />
                    <ErrorImageText>
                        对不起! 好像出现了一些错误/(ㄒoㄒ)/~~ <br/>
                            Sorry! Some errors have occurred.
                    </ErrorImageText>
                </ErrorImageOverlay>
            );
        }
        return this.props.children; // 不要忘记是继承的children哦，嵌套在组件内的内容 
    }

}

export default ErrorBoundary;