import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import AdoptionItem from '../../components/adoption-item/adoption-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Application from '../../components/application/application.component';

import {
    AdoptionPageContainer,
    AdoptionHeaderContainer,
    HeaderBlockContainer,
} from './adoption.styles';

class AdoptionPage extends React.Component {
    constructor({ cartItems }) {
        super({ cartItems });

        this.state = {
            showForm: false,
            showApplyButton: true,
        };
    }

    render() {
        return (
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
                {this.props.cartItems.map((cartItem) => (
                    <AdoptionItem key={cartItem.id} cartItem={cartItem} />
                ))}
                {this.state.showApplyButton && (
                    <CustomButton
                        onClick={() =>
                            this.setState({
                                showForm: true,
                                showApplyButton: false,
                            })
                        }
                    >
                        {' '}
                        Apply
                    </CustomButton>
                )}
                {this.state.showForm && <Application />}
            </AdoptionPageContainer>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(AdoptionPage);
