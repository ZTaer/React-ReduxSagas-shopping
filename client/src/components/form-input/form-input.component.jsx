import React from 'react';
import { Group, FromInputStyled, FormInputLabel } from './form-input.styles';

// React传输函数给组件(  完成笔记 )
    // 0. 注意：react是可以传输，函数的。比如现在的handleChange函数
const FormInput = ({ label, handleChange, ...otherProps }) => {
    return(
        <Group >
            <FromInputStyled 
                onChange={handleChange} 
                {...otherProps}
            />
            {
                // 解构变量属性读取( 完成笔记 )
                    // 0. '...otherProps' 当为解构的对象时
                    // 1. otherProps.xxx可以直接读取其中的属性,当然名称要一致
                label ? (
                    <FormInputLabel inputLength={otherProps.value.length} className="form-input-labe" >
                        {label} 
                    </FormInputLabel>
                ) : null
            }
        </Group>
    );
}
export default FormInput