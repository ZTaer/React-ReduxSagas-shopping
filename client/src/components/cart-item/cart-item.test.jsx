import { shallow } from 'enzyme';
import React from 'react';
import CartItem from './cart-item.component';

// 没有什么好测试的，只是显示个参数
describe( "购物车单个产品显示测试",()=>{
    let wrapper, mockProps;
    beforeEach( ()=>{
        mockProps = {
            item: {
                imageUrl: '1.jpg',
                name: 'test',
                price: 10,
                quantity: 1,
            }
        }
        wrapper = shallow(<CartItem { ...mockProps } />);
    } );

    it(" CartItem Snapshot ",()=>{
        expect( wrapper ).toMatchSnapshot();
    });

} );