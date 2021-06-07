import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { useHistory } from 'react-router';
import ProcessPayments from '../ProcessPayment/ProcessPayment';


const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const [shippingData,setShippingData]=useState(null);

  const onSubmit = data => {
    setShippingData(data);
  };

  const handlePaymentSuccess=paymentId=> {

    const savedCart = getDatabaseCart();
    const orderDetails = {
      ...loggedInUser,
      products: savedCart,
      shipment: shippingData,
      paymentId,
      orderTime: new Date()
    };

    fetch('https://shrouded-wildwood-19576.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);

        if (data) {
          history.push("/shipmentDone");
        }
      });

  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="row">
      <div style={{display:shippingData?'none':'block'}} className="col-6">

        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
          {errors.name && <span className="error">Name is required</span>}

          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
          {errors.email && <span className="error">Email is required</span>}

          <input name="address" ref={register({ required: true })} placeholder="Your Address" />
          {errors.address && <span className="error">Address is required</span>}

          <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
          {errors.phone && <span className="error">Phone Number is required</span>}

          <input type="submit" />
        </form>
      </div>

      <div style={{display:shippingData? 'block':'none'}} className="col-6">
        <h2>Pay here</h2>
        <ProcessPayments handlePayment={handlePaymentSuccess}></ProcessPayments>
      </div>

    </div>
  );
};

export default Shipment;