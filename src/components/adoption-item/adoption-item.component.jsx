import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

import {
    AdoptionItemContainer,
    ImageContainer,
    TextContainer,
    RemoveButtonContainer,
} from './adoption-item.styles';

const AdoptionItem = ({ cartItem, clearItem }) => {
    const { name, imageUrl } = cartItem;
    return (
        <AdoptionItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <TextContainer>{name}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </AdoptionItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(AdoptionItem);
