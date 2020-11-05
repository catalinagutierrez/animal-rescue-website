import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//import './cart-icon.styles.scss';

import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, cartItems }) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{cartItems.length}</ItemCountContainer>
    </CartContainer>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
