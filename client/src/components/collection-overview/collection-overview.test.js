import React from 'react';
import { shallow } from 'enzyme';
import { CollectionOverview } from './collection-overview.component';

describe(" 测试商品集显示插件 ",()=>{
    let wrapper,mockProps;
    beforeEach(()=>{
        mockProps = {
            collectionShop: []
        }
        wrapper = shallow( <CollectionOverview { ...mockProps } /> );
    });
    it("CollectionOverview Snapshot",()=>{
        expect(wrapper).toMatchSnapshot();
    });
});