import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './custom-button-exp.component';

describe(" 测试公共按钮 ",()=>{
    let wrapper,mockProps;
    beforeEach(()=>{
        mockProps = {};
        wrapper = shallow( <CustomButton { ...mockProps } /> );
    });
    it("CustomButton Snapshot",()=>{
        expect(wrapper).toMatchSnapshot();
    });
});