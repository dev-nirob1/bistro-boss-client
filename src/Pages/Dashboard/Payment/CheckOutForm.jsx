import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckOutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        console.log(price)
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        // Create PaymentMethod
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
            return;
        }
        setProcessing(true)
        // Confirm the payment with the PaymentIntent client secret
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.name || 'anonymous',
                    email: user?.email || 'unknown',
                },
            },

        });

        if (confirmError) {
            console.log(confirmError);
            // Handle the error as needed
            setCardError(confirmError.message);
        }
        setProcessing(false)
        // Payment was successful
        console.log('payment intent', paymentIntent, paymentIntent.status);
        if (paymentIntent.status === 'succeeded') {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId)
            console.log('transactionId', transactionId)
        }
    };


    return (
        <div className="w-3/4 mx-auto">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {cardError && <p className="mt-3 text-red-600 text-center">{cardError}</p>}
                {transactionId && <p className="mt-3 text-green-600 text-center">Thanks for payment your transactionId : {transactionId}</p>}
                <div className="w-full text-center">
                    <button className="bg-indigo-400 border rounded text-white px-4 py-2 mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckOutForm;