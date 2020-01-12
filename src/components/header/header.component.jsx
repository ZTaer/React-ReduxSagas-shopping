import React from 'react';
import "./header.styles.scss";
import { Link } from "react-router-dom";
import {auth} from "../../firebase/firebase.config";

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectUserCurrentUser } from '../../redux/user/user.selectors';

// connect函数使react组件可以访问redux存储( 完成笔记 )
import { connect } from 'react-redux';
import  CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import CustomModal from '../custom-modal/custom-modal.component';
import { handleOpenModal } from '../../redux/modal/modal.actions';

// React-React导入svg文件( 完成笔记 )
    // 0. import { ReactComponent as Logo } from "../../assets/crown.svg";
    // 1. 因为文件为jsx文件格式，所以需要借用 ReactComponent 这是规则，
    // 2. { ReactComponent as Logo }修改名称为logo 
    // 3. 这样就可以使用自定义标签来代表svg图像<Logo />
    // 4. SVG的优势: svg图标，为矢量图，并且很小
import { ReactComponent as Logo } from "../../assets/crown.svg";

class Header extends React.Component {

    componentDidMount(){
       // this.props.handleOpenModal("因暂且未掌握后端技术特使用GoogleFirebase代替后端存储验证,请阁下'翻墙'才能正常浏览此站点");
    }

    render(){
        const {currentUser, hidden} = this.props;
        return(
            <div className="header">

                <CustomModal/>

                <Link className="logo-container" to="/" >
                    <Logo className="logo" />
                </Link>
                <div className="options">
                    <Link className="option" to="/" >
                        主页
                    </Link> 
                    <Link className="option" to="/shop" >
                        产品
                    </Link>
                    <Link className="option" to="/tel" >
                        联系
                    </Link>
                    {
                        currentUser 
                        ? 
                        ( <div className="option" onClick={ ()=>auth.signOut() } >退出</div> ) // 用户退出登陆( 完成笔记 )
                        : 
                        ( <Link className="option" to="/sign" >注册/登陆</Link> )
                    }
                    <div className="option">
                        <CartIcon/>
                    </div>
                </div>
                {
                    hidden ? <CartDropdown  /> : null
                }
            </div>
        );
    }
}

// React-Redux: connect()函数,用于交互redux数据( 完成笔记 )
    // 0. connect( mapStateToProps, mapDispatchToProps );
    // 1. mapStateToProps: 用于获取redux数据,默认值为null
        // a) store更新的任何时候mapStateToProps都将被调用,换句话说保持数据更新
        // b) 他返回必须是一个对象类型
        // c) 其返回的对象变量，可直接在当前组件中使用。
        // d) 使用方式：
            // 0. class获取传输的Redux变量:
                /**
                    import { connect } from 'react-redux';
                    class xxx {
                        this.props.currentUser; // 通过this.props.xxxx获取
                    }

                    const mapStateToProps = state => ({
                        currentUser: state.user.currentUser,
                    });

                    export default connect(mapStateToProps)(App);
                 */
            // 1.函数传输的Redux变量
                /***
                    import { connect } from 'react-redux';
                    const Header = ({ currentUser }) => {
                        currentUser; // 需要函数接受一下对应变量名称，即可正常使用
                    }
                    export default connect(mapStateToProps)(Header);
                 */
    // 2. mapDispatchToProps: 用于传输参数并执行Actions从而改变redux数据
        // a) 调度redux对应组件actions函数 
        // b) dispatch( actions函数 )，让redux知道我们要执行actions函数,用于改变数据
        // c) 使用方式:
            /***
                import { connect } from 'react-redux';
                import { setCurrentUser } from './redux/user/user.actions';

                const mapDispatchToProps = dispatch => ({
                    setCurrentUser: user => dispatch( setCurrentUser(user) ),
                });

                export default connect(null, mapDispatchToProps)(App);
             */
const mapStateToProps = createStructuredSelector({
    currentUser: selectUserCurrentUser,
    hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
    handleOpenModal: text => dispatch(handleOpenModal(text)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);

