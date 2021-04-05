import React from 'react';

//copied from react stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SImpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IcYksH6xLdsHcKtrGc83DYVOtIcGtnyt0bGAFGfftveeJEQNsKnxiXyzxRbeVjBB3ByuMCveRjazwInBIV097qN00TraIFBUu');


const ProcessPayments = () => {
    return (

        //copied from react stripe
        <Elements stripe={stripePromise}>

            {/* Instead of <MyCheckoutForm /> */}
            {/* Simple Card Form using 'CardElement' was used */}
            <SimpleCardForm></SimpleCardForm>

            {/* Now we are using Split Card Form from sandbox */}
            {/* <SplitCardForm></SplitCardForm> */}
        
        </Elements>

    );
};

export default ProcessPayments;