import React from 'react';
import "./sign-up.style.scss";

import FormInput from '../form-input/form-input.component';
import CustomButtonExp from '../custom-button-exp/custom-button-exp.component';

// 像往常一样调用action即可促发对应的redux-saga函数
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

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
        const { signUpStart } = this.props;

        if( password !== confirmPassword ){
            alert('二者密码不相同,请重新输入');
            return;
        }

        await signUpStart( email, password, displayName ); // 在redux-saga中创建账户

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

}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email,password,displayName)=>dispatch(signUpStart({
        email,
        password,
        displayName,
    })),
});

export default connect(null,mapDispatchToProps)(SignUp) ;