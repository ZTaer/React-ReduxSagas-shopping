/**
 * Stripe-使用react-stripe-checkout构建stripe支付
 *  0. 安装: yarn add react-stripe-checkout
 *  1. Github(有使用方法): https://github.com/azmenak/react-stripe-checkout
 */

import React from 'react';
import "./stripe-button.styles.scss";

import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserEmail, selectUserImg } from '../../redux/user/user.selectors';


const StripeButton = ({ price, userEmail, userImg }) => {
    const priceForStripe = price * 100; // 因为默认单位为美分
    const publishableKey = 'pk_test_119uiR5NTtcknALVrdLEfQPm00IylDmstZ';

    const onToken = token => {
        console.log('Stripe支付回调信息',token); // 支付后stripe回调的支付信息
        alert('支付成功! - 用户支付回调信息请查看控制栏');
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
            billingAddress={false} // 账单地址

            alipay={true} // 是否开启支付宝付款(default false)
            token={onToken} // 提交后的回调函数
        >
            <button className="stripe-btn">
                立即支付
            </button>
        </StripeCheckout>
    );
};

const mapStateToProps = createStructuredSelector({
    userEmail: selectUserEmail,
    userImg: selectUserImg,
});

export default connect(mapStateToProps)(StripeButton) ;