import React,{ useState } from 'react';
import "./sign-up.style.scss";

import FormInput from '../form-input/form-input.component';
import CustomButtonExp from '../custom-button-exp/custom-button-exp.component';

// 像往常一样调用action即可促发对应的redux-saga函数
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
    const [ signUpUserState, setSignUpUserState ] = useState( { 
        email: '',
        password: '',
        displayName: '',
        confirmPassword: '', 
    } );
    const { email, password, displayName, confirmPassword } = signUpUserState;

    const handleSubmit = async cur => {
        cur.preventDefault();
        if( password !== confirmPassword ){
            alert('二者密码不相同,请重新输入');
            return;
        }
        await signUpStart( email, password, displayName ); // 在redux-saga中创建账户
        setSignUpUserState({
            email: '',
            password: '',
            displayName: '',
            confirmPassword: '',
        });
    }

    const handleChange = props => {
        const { name, value } = props.target;
        setSignUpUserState({ ...signUpUserState ,[name]: value });
    }

    return (
        <div className="sign-up">
        <h2>
            注册用户
        </h2>
        <span>
            请使用邮箱和密码注册
        </span>

        <form onSubmit={handleSubmit} >
                
            <FormInput 
                label='邮箱'
                type='email'
                name='email'
                handleChange={handleChange}
                value={email} required="required"
            /> 
            <FormInput 
                label='名称'
                type='text'
                name='displayName'
                handleChange={handleChange}
                value={displayName}
                required
            /> 
            <FormInput 
                label="密码" 
                handleChange={handleChange} 
                type="password" 
                name="password" 
                value={password} required  
            />
            <FormInput 
                label='确认密码'
                type='password'
                name='confirmPassword'
                handleChange={handleChange}
                value={confirmPassword}
                required
            />
            <CustomButtonExp 
            type="submit"
            isSignWidthStyles
            >
                提交
            </CustomButtonExp>
        </form> 
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email,password,displayName)=>dispatch(signUpStart({
        email,
        password,
        displayName,
    })),
});

export default connect(null,mapDispatchToProps)(SignUp) ;