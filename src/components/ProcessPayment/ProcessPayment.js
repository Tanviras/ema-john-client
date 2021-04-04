import React from 'react';

//copied from react stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SImpleCardForm';

const stripePromise = loadStripe('pk_test_51IcYksH6xLdsHcKtrGc83DYVOtIcGtnyt0bGAFGfftveeJEQNsKnxiXyzxRbeVjBB3ByuMCveRjazwInBIV097qN00TraIFBUu');


const ProcessPayments = () => {
    return (

        //copied from react stripe
        <Elements stripe={stripePromise}>

            {/* Instead of <MyCheckoutForm /> */}
            <SimpleCardForm></SimpleCardForm>

        
        </Elements>

    );
};

export default ProcessPayments;