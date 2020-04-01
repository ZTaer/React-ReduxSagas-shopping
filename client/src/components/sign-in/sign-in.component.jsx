import React,{ useState } from "react";
import { SignInStyledContainer, BtnSign } from './sign-in.styles';

import FormInput from "../form-input/form-input.component";
import CustomButtonExp from "../custom-button-exp/custom-button-exp.component";

import { connect } from 'react-redux';
import { googleSignInStart,emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ( { googleSignInStart, emailSignInStart } ) => {
    // hooks下useState实战( 完成笔记 )
    const [ userState, setUserState ] = useState( { email: '', password: '' } );

    const handleSubmit = async cur => {
        cur.preventDefault();    
        const { email, password } = userState;
        emailSignInStart( email, password );
    }

    // React处理input改变数据( 完成笔记 )
    const handleChange = cur => {
        const { value, name } = cur.target;

        // hooks中对象增加元素时实现方式( 完成笔记 )
        setUserState( { ...userState ,[name]: value} );
    }
    return(
        <SignInStyledContainer>
            <h2>
                登陆用户
            </h2>
            <span>
                请使用邮箱和密码登陆
            </span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="邮箱" 
                    handleChange={handleChange} 
                    type="email" 
                    name="email" 
                    value={userState.email} required  
                />

                <FormInput 
                    label="密码" 
                    handleChange={handleChange} 
                    type="password" 
                    name="password" 
                    value={userState.password} required  
                />
                <BtnSign>
                    <CustomButtonExp isSignWidthStyles type="submit" >
                        登陆
                    </CustomButtonExp>
                    <CustomButtonExp type="button" isGoogleStyles onClick={ googleSignInStart } >
                        Google登陆
                    </CustomButtonExp>
                </BtnSign>
            </form>
        </SignInStyledContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: ()=>dispatch( googleSignInStart() ),
    emailSignInStart: ( email,password )=>dispatch( emailSignInStart({email,password}) ) ,
});

export default connect(null,mapDispatchToProps)(SignIn) ;