import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    AgeContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <AgeContainer>4 months</AgeContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                Adopt me!
            </AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
