import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button from "../button/Button.component";
import "./PaymentForm.styles.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (ev) => {
    ev.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json());

    // console.log(response);
  };
  return (
    <div className="payment-form-container">
      <form className="form-container" onSubmit={paymentHandler}>
        <h2>Credit Card Info:</h2>
        <CardElement />
        <Button buttonType="inverted">Pay Now</Button>
      </form>
    </div>
  );
};

export default PaymentForm;
