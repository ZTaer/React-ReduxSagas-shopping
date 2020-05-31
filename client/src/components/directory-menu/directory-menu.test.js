import React from 'react';
import { shallow } from 'enzyme';
import { DirectoryMenu } from './directory-menu.component';

describe(" 测试主页目录显示 ",()=>{
    let wrapper,mockProps;
    beforeEach(()=>{
        mockProps = {
            sections: [
                {
                    id: 1,
                },
                {
                    id: 2,
                }
            ]
        };
        wrapper = shallow( <DirectoryMenu { ...mockProps } /> );
    });
    it("DirectoryMenu Snapshot",()=>{
        expect(wrapper).toMatchSnapshot();
    });

});