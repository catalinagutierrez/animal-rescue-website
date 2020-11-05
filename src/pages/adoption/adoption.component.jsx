import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import AdoptionItem from '../../components/adoption-item/adoption-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Application from '../../components/application/application.component';

import {
    AdoptionPageContainer,
    AdoptionHeaderContainer,
    HeaderBlockContainer,
} from './adoption.styles';

class AdoptionPage extends React.Component {
    constructor({ cartItems, currentUser }) {
        super({ cartItems, currentUser });

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
                        <span>Pet</span>
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
                {this.props.cartItems.length ? (
                    this.state.showApplyButton && (
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
                    )
                ) : (
                    <p>
                        Please select a pet to adopt before filling out the
                        application.
                    </p>
                )}
                {this.state.showForm && this.props.cartItems.length !== 0 && (
                    <Application />
                )}
            </AdoptionPageContainer>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AdoptionPage);
