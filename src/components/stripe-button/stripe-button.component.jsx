import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_8f8pO7Lb4SnQfy9bMrDRwu4a00lw8BMS2X';

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful')
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image= 'https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckOutButton;