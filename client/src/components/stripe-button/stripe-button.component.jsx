/**
 * Stripe-使用react-stripe-checkout构建stripe支付( 完成笔记 )
 *  0. 安装: yarn add react-stripe-checkout
 *  1. Github(有使用方法): https://github.com/azmenak/react-stripe-checkout
 */

import React from 'react';
import { StripeBtn } from './stripe-button.styles';

import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserEmail, selectUserImg } from '../../redux/user/user.selectors';
import axios from 'axios';
import { clearCartItem } from '../../redux/cart/cart.actions';

const StripeButton = ({ price, userEmail, userImg, clearCartItems }) => {
    const priceForStripe = price * 100; // 因为默认单位为美分
    const publishableKey = 'pk_test_119uiR5NTtcknALVrdLEfQPm00IylDmstZ';

    const onToken = token => {
        // 注意这里是提交按钮时促发的函数
        // 像后端发送stripe支付信息( 完成笔记 )
        // axios使用post向服务器发送信息
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token, // token包含一切关于stripe支付信息
            }
        })
        .then( res => {
            alert('支付成功!'); 
            clearCartItems();
        })
        .catch( err => {
            console.log('支付失败: ',JSON.parse(err));
            alert('支付失败: 请检查网络,以及卡号是否正确( 注意: 因后端架构在heroku所以国内用户需翻墙 )'); 
        })
    }

    return (
        <StripeCheckout
            image={userImg} // logo/头像
            name="结算商品" // 弹窗标题
            description={`需支付:￥${price}`} // 弹窗支付描述信息
            label="结算商品支付" // 默认按钮显示信息
            panelLabel="立即支付" // 弹窗结算按钮显示信息

            amount={priceForStripe} // 支付金额,单位为‘分’
            currency="CNY" // 付款类型
            stripeKey={publishableKey} // API密钥

            locale="zh"
            email={userEmail}
            shippingAddress={true} // 收货地址
            billingAddress={true} // 账单地址

            alipay={true} // 是否开启支付宝付款(default false)
            token={onToken} // 提交后的回调函数
        >
            <StripeBtn>
                立即支付
            </StripeBtn>
        </StripeCheckout>
    );
};

const mapStateToProps = createStructuredSelector({
    userEmail: selectUserEmail,
    userImg: selectUserImg,
});

const mapDispatchToProps = dispatch => ({
    clearCartItems: ()=>dispatch(clearCartItem()),
});

export default connect(mapStateToProps,mapDispatchToProps)(StripeButton) ;