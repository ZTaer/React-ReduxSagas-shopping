import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './form-input.component';

describe(" 测试表单 ",()=>{
    let wrapper,mockProps;
    beforeEach(()=>{
        mockProps = {
            label: 'test',
            handleChange: jest.fn(),
            email: 'test@gmail.com',
            value: 123
        }
        wrapper = shallow( <FormInput { ...mockProps } /> );
    });
    it("FormInputSnapshot",()=>{
        expect(wrapper).toMatchSnapshot();
    });
    it("测试表单输入",()=>{
        wrapper.find("FromInputStyled").simulate('change');         // simulate('change'): 表单模拟输入( 等待笔记 )
        expect( mockProps.handleChange ).toHaveBeenCalled();
    });
    it("测试由label决定的渲染组件",()=>{
        expect( !!mockProps.label ).toEqual( wrapper.exists("FormInputLabel") );
    })
});