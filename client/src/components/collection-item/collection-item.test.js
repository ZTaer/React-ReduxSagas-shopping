import { shallow } from 'enzyme';
import React from 'react';
import { CollectionItem } from './collection-item.component';
import CustomButtonExp from '../custom-button-exp/custom-button-exp.component';

describe("测试单个商品显示",()=>{
    let wrapper,mockProps;
    const mockItem = {
        imageUrl: '1.jpg',
        name: 'test',
        price: 10,
        quantity: 1,
    };
    beforeEach(()=>{
        mockProps ={
            item: mockItem,
            addCartItem: jest.fn(),
        }
        wrapper = shallow(<CollectionItem {...mockProps} />);
    });
   
    it(" CollectionItem Snapshot ",()=>{
        expect(wrapper).toMatchSnapshot();
    });

    it(" 测试加入购物车功能 ",()=>{
        wrapper.find(CustomButtonExp).simulate('click');
        expect( mockProps.addCartItem ).toHaveBeenCalled();
    });

    it(" 测试图片链接是否到位 ",()=>{
        expect( wrapper.find("Image").prop('backgroundImg') ).toEqual( mockItem.imageUrl ); // prop(): 获取组件传入的值( 等待笔记 )
    });

});