import { FaBars, FaBook, FaCalendarAlt, FaCalendarPlus, FaCartPlus, FaCommentDots, FaEnvelope, FaHome, FaShoppingBag, FaUsers, FaWallet } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoad = () => {
    const [cart] = useCart()
    const isAdmin = useAdmin();
    console.log(isAdmin)

    return (
        <div className="drawer lg:drawer-open bg-gray-50">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">

                <Outlet />

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full text-base-content">

                    {/* /* Sidebar content here */}

                    {
                        isAdmin === true ? <>
                            <li className="uppercase md:text-lg">
                                <NavLink to="/"><FaHome /> Admin Home</NavLink>
                            </li>

                            <li className="uppercase md:text-lg">
                                <NavLink to="/reservation"><ImSpoonKnife /> Add item</NavLink>
                            </li>

                            <li className="uppercase md:text-lg">
                                <NavLink to="/payment-history"> <FaBars/> manage items</NavLink>
                            </li>
                            <li className="uppercase md:text-lg">
                                <NavLink to="/dashboard/mycart"><FaBook />
                                    manage bookings
                                </NavLink>
                            </li>
                            <li className="uppercase md:text-lg">
                                <NavLink to="/dashboard/users"><FaUsers />
                                    all users
                                </NavLink>
                            </li>

                        </>
                            :
                            <>
                                <li className="uppercase md:text-lg"><NavLink to="/"><FaHome /> User Home</NavLink></li>
                                <li className="uppercase md:text-lg"><NavLink to="/reservation"><FaCalendarAlt /> Reservation</NavLink></li>
                                <li className="uppercase md:text-lg"><NavLink to="/payment-history"> <FaWallet></FaWallet> payment history</NavLink></li>
                                <li className="uppercase md:text-lg"><NavLink to="/dashboard/mycart"><FaCartPlus />
                                    My Cart
                                    <span className="indicator-item badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>
                                <li className="uppercase md:text-lg"><NavLink to="/review"><FaCommentDots /> Add Review</NavLink></li>
                                <li className="uppercase md:text-lg"><NavLink to="booking"><FaCalendarPlus /> My booking</NavLink></li>
                            </>
                    }


                    <div className="divider">OR</div>

                    <li className="uppercase md:text-lg"><NavLink to="/"><FaHome /> home</NavLink></li>
                    <li className="uppercase md:text-lg"><NavLink to="/menu"><FaBars /> menu</NavLink></li>
                    <li className="uppercase md:text-lg"><NavLink to="/order/salads"><FaShoppingBag /> shop</NavLink></li>
                    <li className="uppercase md:text-lg"><NavLink to="contact"><FaEnvelope /> contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoad;