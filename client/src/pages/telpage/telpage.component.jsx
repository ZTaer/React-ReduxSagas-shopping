/**
 * styled-components使用方式( 完成笔记 )
 */
import React from 'react';
import styled from 'styled-components'; // 导入此库

const Card = styled.div`
    width:500px;
    height:200px;
    padding:0.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,0.7);
    border-radius:0.7rem;
    margin:auto;
`;

// 0. styled-components构建: 配合js构建动态css
    // a) 核心: `${}` --> `${ ()=>{} }` --> `${ ({ xxx })=>{} }`;
    // b) 在函数中以字符串形式表达css
const Text = styled.p`
    text-align:center;
    letter-spacing:3px;

    /* 单属性/多属性构建方式 */
    color: ${ ({ door }) => door ? 'red' : '#fff' };

    ${ ({door}) => {
        return door ?
       'font-size:2rem; font-weight:bold;' :
       'font-size:3rem; font-weight:lighter;'; 
    } };
    
`;

// 1. styled-components使用: 及使styled标签在不同组件中,也是同样的使用方法
const TelPage = () => {
    return (
        <Card>
            <Text door={false} >
                styled-components使用动态css
            </Text>
        </Card>
    );
}

export default TelPage;