import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=> {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IGONbJPdpNrWfaMMVBVbdlnF5W23yiJ32UCHeHoH9lJYLFxoduYv38W0fa1KqHXZkJBS8aatAnh72pUJSz2UCzx00f6KbosIj';
    
const onToken = token => {
        console.log(token);
        alert('Successful Payment!');
    }

    return (
        <StripeCheckout
            label='pay now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;