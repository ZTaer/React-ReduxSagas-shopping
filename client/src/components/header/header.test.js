import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header.component';

describe(" 测试导航栏 ",()=>{
    let wrapper,mockProps;
    beforeEach(()=>{
        mockProps = {
            currentUser: "yes", 
            hidden: false ,
            signOutStart: jest.fn()
        }
        wrapper = shallow( <Header { ...mockProps } /> );
    });
    it("Header Snapshot",()=>{
        expect(wrapper).toMatchSnapshot();
    });
    it("用户登陆时渲染退出按钮",()=>{
        expect( wrapper.exists("OptionLink") ).toBe(true);
        wrapper.find("OptionsDiv").childAt(3).simulate('click');
        expect( mockProps.signOutStart ).toHaveBeenCalled();
    })
    it("用户未登陆渲染跳转按钮",()=>{
        mockProps.currentUser = null;
        const newWrapper = shallow(<Header { ...mockProps } />);
        expect(newWrapper.find("OptionsDiv").childAt(3).prop('to')).toEqual("/sign");
    })
});