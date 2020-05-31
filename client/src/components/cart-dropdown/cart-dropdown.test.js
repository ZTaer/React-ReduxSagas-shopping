import { shallow } from 'enzyme';
import React from 'react';
import CartDropdown from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';import CartDropdownContainer from './cart-dropdown.container';
;

/**
 * 实战: 购物车功能测试( 完成笔记 )
 */
// 0. styled-components改造
// 1. export组件JSX部分
// 2. 测试主要流程
    // a) 模拟参数: 模拟参数，配置wrapper
    // b) 快照备份: JSX进行快照备份
    // c) 测试功能:
// 3. toHaveBeenCalled(): expect( xxx=jest.fn() ).toHaveBeenCalled();toHaveBeenCalled: 确保某个函数被调用
// 4. find(): wrapper.find()抓取组件的方式
    // a) 普通组件: 先import导入组件然后抓取wrapper.find( XXX );
    // b) ID抓取: wrapper.find("[id='xxx']");
    // c) styled-component组件抓取: 
        // 0. 配置: styled-components中组件名称.displayName = “组件名称”;
        // 1. 拥有displayName配置才能被wrapper.find("XXX")抓取

describe( '购物车下拉菜单',()=>{

    // 模拟参数准备
    let wrapper,
    mockHistory,mockProps;
    const mockCartItems = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        }
    ];

    beforeEach( ()=>{
        mockHistory = {
            push: jest.fn()
        };
        mockProps = {
            cartItems: mockCartItems,
            history: mockHistory,
            toggleCartHidden: jest.fn(),
        }
        wrapper = shallow(<CartDropdown { ...mockProps } />);
    } );

    it(" 快照备份 ", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it(" 测试单击下拉菜单按钮 ",()=>{
        wrapper.find("CustomButtonExpStyled").simulate('click');
        expect(mockHistory.push).toHaveBeenCalled(); // toHaveBeenCalled: 确保某个函数功能调用( 完成笔记 )
        expect(mockProps.toggleCartHidden).toHaveBeenCalled();
    });

    it(" 验证CartItem渲染数量 ",()=>{
        expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
    });

    it(" 验证当购物车为空时的提示 ",()=>{
        const mockProps = {
            cartItems: [],
            history: mockHistory,
            toggleCartHidden: jest.fn()
        }
        const newWrapper = shallow( <CartDropdown {...mockProps} /> );
        expect( newWrapper.exists("CartItemsAlt") ).toBe(true);  // exists(): 验证指定组件是否存在( 完成笔记 )
    });

} );