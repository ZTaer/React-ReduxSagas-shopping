/**
 * styled-components使用方式( 完成笔记 )
 */
import React from 'react';
import { Card, Text } from './telpage.styles';

// 1. styled-components使用: 及使styled标签在不同组件中,也是同样的使用方法
const TelPage = () => {
    return (
        <Card>
            <Text door={false} >
                styled-components使用动态css测试
            </Text>
        </Card>
    );
}

export default TelPage;