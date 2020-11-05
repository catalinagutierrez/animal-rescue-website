import React from 'react';

import FormInput from '../form-input/form-input.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { DonationFormContainer } from './donation-form.styles';

class DonationForm extends React.Component {
    constructor() {
        super();

        this.state = {
            amount: 1,
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { amount } = this.state;

        return (
            <DonationFormContainer>
                <FormInput
                    type='number'
                    name='amount'
                    value={amount}
                    onChange={this.handleChange}
                    label='Amount (USD)'
                    min='1'
                    step='1'
                    required
                />
                <StripeCheckoutButton amount={amount} />
            </DonationFormContainer>
        );
    }
}

export default DonationForm;
