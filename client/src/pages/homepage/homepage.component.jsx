// React性能监听库，能够记录组件渲染的时间( 完成笔记 )
    // a) 用途: 用于收集React组件渲染信息，来参考，调整性能函数 
    // b) Profiler组件默认参数: 
        // 0. id: 用于标识当前监听的组件名称
        // 1. onRender: 接受并处理性能信息
            // a) 参数: 注意排序顺序固定，参数名称不固定
                // 0. id: 监听的目标
                // 1. phase: 组件的状态
                // 2. times: 渲染花费的时间，单位为ms
    // c) 使用方式如下:
import React,{Profiler} from 'react';
import { HomePageStyledContainer } from "./homepage.styles";

import DirectoryMenu from "../../components/directory-menu/directory-menu.component";
const HomePage = () => {
    return ( 
        <HomePageStyledContainer>
            <Profiler id="Directory" onRender={(id,phase,times)=>console.log({id,phase,times})} >
                <DirectoryMenu></DirectoryMenu>
            </Profiler>
        </HomePageStyledContainer>
    );
}

export default HomePage;