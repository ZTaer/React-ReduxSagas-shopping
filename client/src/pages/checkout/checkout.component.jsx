import React from 'react';
import { CheckoutPageStyledContainer, CheckoutHeader, HeaderBlock, Total, TestWarning } from './checkout.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartPriceTotal, selectCartItems} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ( {cartPriceTotal, cartItems} ) => {
    return(
        <CheckoutPageStyledContainer>

            <CheckoutHeader>
                <HeaderBlock>
                    <span>
                        产品
                    </span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>
                        描述                        
                    </span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>
                        数量
                    </span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>
                        价格
                    </span>
                </HeaderBlock>

                <HeaderBlock>
                    <span>
                        移除
                    </span>
                </HeaderBlock>
            </CheckoutHeader>

            {
                cartItems.map( cur=>(<CheckoutItem key={cur.id} cartItem={cur} />) )
            }

            <Total>
                <span>
                    总和: ￥{cartPriceTotal}
                </span>
            </Total>

            <StripeButton price={cartPriceTotal} />
            <TestWarning>
                <p>
                    <b>
                        Stripe测试信用卡支付(因面试所用暂未激活Stripe支付)<br/>
                    </b>
                        <b>卡号:</b> 4242 4242 4242 4242 <br/>
                        <b>密码:</b> 123 (任意3位) 
                        <b>时间:</b> 01/2020 (当前月/年)
                </p>
            </TestWarning>

        </CheckoutPageStyledContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartPriceTotal: selectCartPriceTotal,
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage) ;
