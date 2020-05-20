import React from 'react';
import { shallow } from 'enzyme';
import { CollectionView } from './collection-view.component';
import CollectionItem from "../collection-item/collection-item.component";

describe(" 测试单个商品显示 ",()=>{
    let wrapper,mockProps;
    beforeEach(()=>{
        mockProps = {
            title: 'test',
            items: [],
            match: {
                url: '/test'
            }
        }
        wrapper = shallow( <CollectionView { ...mockProps } /> );
    });
    it("CollectionView Snapshot",()=>{
        expect(wrapper).toMatchSnapshot();
    });
    it("验证Item渲染数量",()=>{
        expect(wrapper.find(CollectionItem).length <= 4).toBe(true);
        
    })
});