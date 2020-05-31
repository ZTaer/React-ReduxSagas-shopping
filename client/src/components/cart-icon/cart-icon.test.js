/**
 * 实战2: 处理有connect的组件
 */
// 0. 仅导出JSX部分: 用于测试
import { shallow } from 'enzyme';
import React from 'react';
import { CartIcon } from './cart-icon.component';  // 仅导出JSX部分,用于测试

describe( '购物车图标',()=>{
    
    let mockProps,wrapper;
    beforeEach( ()=>{
        mockProps = {
            toggleCartHidden: jest.fn(),
            itemCount: 0
        }
        wrapper = shallow(<CartIcon {...mockProps} />);
    } );

    // 快照备份时，注释使用英文名称防止出现莫名其妙的错误( 完成笔记 )
    it(" Cart-icon Snapshot ",()=>{
        expect(wrapper).toMatchSnapshot();
    });

    it(" 测试单击图标是否促发切换隐藏菜单函数 ",()=>{
        wrapper.find("CartIconStyledContainer").simulate('click');
        expect( mockProps.toggleCartHidden ).toHaveBeenCalled();
    });

    it(" 测试渲染数字是否正确 ",()=>{
        const num = parseInt(wrapper.find("ItemCount").text()); // text()获得组件中嵌套的内容( 完成笔记 )
        expect( num ).toEqual(0);
    });

} );