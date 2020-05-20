import { shallow } from 'enzyme';
import React from 'react';
import { CheckoutItem } from './checkout-item.component';

describe("测试结算页面单个商品显示",()=>{
    let wrapper,mockProps;
    const mockItem = {
        imageUrl: '1.jpg',
        name: 'test',
        price: 10,
        quantity: 1,
    };
    beforeEach( ()=>{
        mockProps = {
            cartItem: mockItem ,
            deleteCartItem: jest.fn(), 
            addCartItem: jest.fn(), 
            lowerCartItem: jest.fn() 
        }
        wrapper = shallow(<CheckoutItem { ...mockProps } />);
    } );

    it("CheckoutItem Snapshot",()=>{
        expect(wrapper).toMatchSnapshot();
    });

    it("模拟单击删除测试",()=>{
        wrapper.find("RemoveButton").simulate('click');
        expect(mockProps.deleteCartItem).toHaveBeenCalled();
    });

    it("模拟单击添加产品数量测试",()=>{
        wrapper.find("Quantity").childAt(0).simulate('click'); // childAt( number ): 通过子标签排位数，从上往下，从0~n，抓取子标签( 等待笔记 )
        expect(mockProps.lowerCartItem).toHaveBeenCalled();
    });

    it("模拟单击减少产品数量测试",()=>{
        wrapper.find("Quantity").childAt(2).simulate('click'); 
        expect(mockProps.addCartItem).toHaveBeenCalled();
    });

});