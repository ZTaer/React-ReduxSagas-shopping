import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './error-boundary.component';

describe(" 测试错误组件 ",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow( <ErrorBoundary /> );
    });
    it("ErrorBoundary Snapshot",()=>{
        expect(wrapper).toMatchSnapshot();
    });
    it("测试error渲染",()=>{
        expect( wrapper.state().errorState ).toEqual( wrapper.exists("ErrorImageOverlay") );
    })

});