import React from 'react';
import { shallow } from 'enzyme';
import { MenuItem } from './menu-item.component';

describe(" 测试菜单列表显示 ",()=>{
    let wrapper,mockProps;
    beforeEach(()=>{
        mockProps = {
            title:"test",
            imageUrl: "test",
            size: "test",
            linkUrl: "test",
            history: {
                push: jest.fn()
            },
            match: {
                url: "test"
            }
        }
        wrapper = shallow( <MenuItem { ...mockProps } /> );
    });
    it("MenuItemSnapshot",()=>{
        expect(wrapper).toMatchSnapshot();
    });
    it("模拟单击跳转页面",()=>{
        wrapper.find("MenuItemStyledContainer").simulate('click');
        expect( mockProps.history.push ).toHaveBeenCalled();
    })

});