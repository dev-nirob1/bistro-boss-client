import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTiltle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    const [cart] = useCart()
    // console.log(cart)
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <SectionTitle heading="Payment" subHeading="---Please process---"></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;