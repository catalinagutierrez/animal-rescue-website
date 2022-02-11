import React from "react";

import FormInput from "../form-input/form-input.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./donation-form.styles.css";

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
      <div className="wd-donation-form">
        <FormInput
          type="number"
          name="amount"
          value={amount}
          onChange={this.handleChange}
          label="Amount (USD)"
          min="1"
          step="1"
          required
        />
        <StripeCheckoutButton amount={amount} />
      </div>
    );
  }
}

export default DonationForm;
