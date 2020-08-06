import React from 'react';
import { connect } from 'react-redux';

import {
    clearItemFromCart,
    addItem,
    removeItem,
} from '../../redux/cart/cart.actions';

import {
    AdoptionItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer,
} from './adoption-item.styles';

const AdoptionItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, quantity } = cartItem;
    return (
        <AdoptionItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </AdoptionItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(AdoptionItem);
