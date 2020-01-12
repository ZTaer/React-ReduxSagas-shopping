import React from 'react';
import "./form-input.styles.scss";

// React传输函数给组件(  完成笔记 )
    // 0. 注意：react是可以传输，函数的。比如现在的handleChange函数
const FormInput = ({ label, handleChange, ...otherProps }) => {
    return(
        <div className="group">
            <input 
            onChange={handleChange} 
            className="form-input"
            {...otherProps}
            />
            {
                // 解构变量属性读取( 完成笔记 )
                    // 0. '...otherProps' 当为解构的对象时
                    // 1. otherProps.xxx可以直接读取其中的属性,当然名称要一致
                label ? (
                    <label className={ `${ otherProps.value.length ? 'shrink' : null } form-input-label` } >
                        {label} 
                    </label>
                ) : null
            }
        </div>
    );
}
export default FormInput