import React from 'react';

import {
    CartItemContainer,
    ItemDetailsContainer,
    CartItemImage,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, name } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span>{name}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
