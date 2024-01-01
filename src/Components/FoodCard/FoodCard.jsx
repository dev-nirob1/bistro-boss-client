import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/Provider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()


    const handleAddToCart = item => {

        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            title: `${item.name}Added to Cart`,
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login if you want to add cart?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl relative">
            <figure className="px-5 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="bg-gray-800 px-2 right-10 top-10 absolute text-white rounded">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;