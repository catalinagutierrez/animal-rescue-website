import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStipe = price * 100;
    const publishableKey =
        'pk_test_51H8Sp7BUoT3opay7ntC7O1fFlNYtk39wkZZCBIejK8a4Xyzs8ll30frtzqVuqleh5RAJRvo4MJe3yVNr3oZQqTKj005uATjZEL';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStipe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
