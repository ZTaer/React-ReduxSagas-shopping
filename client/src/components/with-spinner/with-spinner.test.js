import React from 'react';
import { shallow } from 'enzyme';
import WithSpinner from './with-spinner.component';

describe(" 测试加载器高阶组件 ",()=>{
    // 高阶函数，降为普通函数( 等待笔记 )
    const TestComponent = <div class="testCoponent" />;
    const WrapperComponent = WithSpinner(TestComponent); // 模拟高阶组件使用

    describe(" isLoading为true时 ",()=>{
        it( "验证是否渲染加载器",()=>{
            const wrapper = shallow( <WrapperComponent isLoading={true} /> );
            expect( wrapper.exists("SpinnerContainer") ).toBe(true);
        } )
    });

});