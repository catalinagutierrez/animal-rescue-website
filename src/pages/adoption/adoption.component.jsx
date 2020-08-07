import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selectors';
import AdoptionItem from '../../components/adoption-item/adoption-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {
    AdoptionPageContainer,
    AdoptionHeaderContainer,
    HeaderBlockContainer,
} from './adoption.styles';

const AdoptionPage = ({ cartItems }) => (
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
        <CustomButton type='submit' value='Submit Form'>
            {' '}
            Apply{' '}
        </CustomButton>
    </AdoptionPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(AdoptionPage);
