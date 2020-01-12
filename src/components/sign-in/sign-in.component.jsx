import React from "react";
import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.config";

class SignIn extends React.Component {
    // withRouter在class中的用法( 完成笔记 )
        // 通过this.props就能访问当前页面的路由信息
        // 如: this.props.history; this.props.match;
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        };
    }
    // React处理from提交数据( 完成笔记 )
        // 0. form准备: <form onSubmit={this.handleSubmit}></form>
        // 1. 注意: cur.preventDefault()函数的本质为,阻止默认事件发生,好由React来处理form数据
        // 1. 函数准备: 如下 - cur为接受的form数据
    handleSubmit = async cur => {
        cur.preventDefault();    
        try{
            // firebase登陆用户函数( 完成笔记 )
                // 0. signInWithEmailAndPassword(email,password)
            await auth.signInWithEmailAndPassword( this.state.email, this.state.password );
            this.setState( { email:'', password:'' } ); // 登陆完,要初始化
        }
        catch(err){
            alert(err.message);
        }
        
    }

    // React处理input改变数据( 完成笔记 )
        // 0. React中,input必须要有onChange={xxx}来处理表单数据,否则会报错
        // 1. input准备: <input type="email" onChange={this.handleChange} />
        // 2. 函数准备: 如下 - cur为接受的input数据
    handleChange = cur => {
        // 解构法,面对标签时创建赋值变量( 完成笔记 )
            // 0. 因为其js"抓取的标签.target"本质也为对象
            // 1. 所以可以使用解构法创建变量, 但注意名字要一致
        const { value, name } = cur.target;

        // 变量值变为对象的键值( 完成笔记 )
            // 0. this.setState( { [name]: value } ); 
            // 1. 其中[name]的意思为，将name的变量值作为键值,方便键值动态变化。
            // 2. 比如name="password"那么相当于this.setState( password: value );
        this.setState( {[name]: value} );
    }
    // 感悟: 感觉React组件,就像是一个一个函数一样( 完成笔记 )

    test = () => {
        this.setState({ test: true, text1: '登陆成功!' });
    }

    render(){
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
                        <CustomButton selfCss={`sign-width`} type="submit" >
                            登陆
                        </CustomButton>
                        <CustomButton selfCss={`sign-width google-btn-color`}  onClick={ signInWithGoogle } >
                            Google登陆
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }

}

export default SignIn;