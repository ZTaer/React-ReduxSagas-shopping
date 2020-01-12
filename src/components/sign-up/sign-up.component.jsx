import React from 'react';
import "./sign-up.style.scss";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.config';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
    constructor( props ){
        super( props );
        this.state = {
            email: '',
            password: '',
            displayName: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async cur => {
        cur.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if( password !== confirmPassword ){
            alert('二者密码不相同,请重新输入');
            return;
        }
        try{
            // firebase创建用户函数( 完成笔记 ) 
                // 0. auth.createUserWithEmailAndPassword( email, password )创建用户
                // 1. 成功: 则返回创建用户信息
                // 2. 失败: 则返回失败原因
                // 3. 注意: 要在Firebase控制台开启'允许用户使用电子邮件和密码注册'
            let createUser = await auth.createUserWithEmailAndPassword( email, password );
            await createUserProfileDocument( createUser.user, {displayName} ); // 吐血~这个createUser,应该返回createUser.user!!!!无语!!!!
            alert('注册成功');

            // 跳转到主页
            this.props.history.push('/');
        }
        catch( err ){
            // 在控制台显示红色错误信息( 完成笔记 )
            console.error(err);
            alert( err.message );
        }
        this.setState({
            email: '',
            password: '',
            displayName: '',
            confirmPassword: '',
        });
    }

    handleChange = props => {
        const { name, value } = props.target;
        this.setState({ [name]: value });
    }

    render(){
        return (
            <div className="sign-up">
            <h2>
                注册用户
            </h2>
            <span>
                请使用邮箱和密码注册
            </span>

            <form onSubmit={this.handleSubmit} >
                 
                <FormInput 
                    label='邮箱'
                    type='email'
                    name='email'
                    handleChange={this.handleChange}
                    value={this.state.email} required="required"
                /> 
                <FormInput 
                    label='名称'
                    type='text'
                    name='displayName'
                    handleChange={this.handleChange}
                    value={this.state.displayName}
                    required
                /> 
                <FormInput 
                    label="密码" 
                    handleChange={this.handleChange} 
                    type="password" 
                    name="password" 
                    value={this.state.password} required  
                />
                <FormInput 
                    label='确认密码'
                    type='password'
                    name='confirmPassword'
                    handleChange={this.handleChange}
                    value={this.state.confirmPassword}
                    required
                />
                <CustomButton 
                type="submit"
                selfCss={`sign-width`} 
                >
                    提交
                </CustomButton>
            </form> 
            </div>
        );
    }

}

export default withRouter(SignUp);