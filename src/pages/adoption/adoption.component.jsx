import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selectors';
import AdoptionItem from '../../components/adoption-item/adoption-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
    AdoptionPageContainer,
    AdoptionHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer,
} from './adoption.styles';

const AdoptionPage = ({ cartItems, total }) => (
    <AdoptionPageContainer>
        <AdoptionHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Name</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Days</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </AdoptionHeaderContainer>
        {cartItems.map((cartItem) => (
            <AdoptionItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <WarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </WarningContainer>
        <StripeCheckoutButton price={total} />
    </AdoptionPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(AdoptionPage);
