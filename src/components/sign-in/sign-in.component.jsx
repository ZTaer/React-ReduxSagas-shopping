import React from "react";
import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButtonExp from "../custom-button-exp/custom-button-exp.component";

import { connect } from 'react-redux';
import { googleSignInStart,emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        };
    }

    handleSubmit = async cur => {
        cur.preventDefault();    
        const { email, password } = this.state;
        const { emailSignInStart } = this.props;
        emailSignInStart( email, password );
    }

    // React处理input改变数据( 完成笔记 )
        // 0. React中,input必须要有onChange={xxx}来处理表单数据,否则会报错
        // 1. input准备: <input type="email" onChange={this.handleChange} />
        // 2. 函数准备: 如下 - cur为接受的input数据
    handleChange = cur => {
        const { value, name } = cur.target;

        // 变量值变为对象的键值( 完成笔记 )
            // 0. this.setState( { [name]: value } ); 
            // 1. 其中[name]的意思为，将name的变量值作为键值,方便键值动态变化。
            // 2. 比如name="password"那么相当于this.setState( password: value );
        this.setState( {[name]: value} );
    }

    render(){
        const { googleSignInStart } = this.props;
        return(
            <div className="sign-in">
                <h2>
                    登陆用户
                </h2>
                <span>
                    请使用邮箱和密码登陆
                </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        label="邮箱" 
                        handleChange={this.handleChange} 
                        type="email" 
                        name="email" 
                        value={this.state.email} required  
                    />

                    <FormInput 
                        label="密码" 
                        handleChange={this.handleChange} 
                        type="password" 
                        name="password" 
                        value={this.state.password} required  
                    />
                    <div className="btn-sign">
                        <CustomButtonExp isSignWidthStyles type="submit" >
                            登陆
                        </CustomButtonExp>
                        <CustomButtonExp type="button" isGoogleStyles onClick={ googleSignInStart } >
                            Google登陆
                        </CustomButtonExp>
                    </div>
                </form>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: ()=>dispatch( googleSignInStart() ),
    emailSignInStart: ( email,password )=>dispatch( emailSignInStart({email,password}) ) ,
});

export default connect(null,mapDispatchToProps)(SignIn) ;