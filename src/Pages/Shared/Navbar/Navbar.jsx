import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../ContextProvider/Provider";
import { FaCartPlus } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const [cart] = useCart()
    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error.message))
    }
    const navLinks = <>
        <li><Link to="/">Home</Link></li>

        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order/salads">Order</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li><Link to="/dashboard/mycart">
            <div className="indicator">
                <span className="indicator-item badge badge-secondary">+{cart?.length || 0}</span>
                <button className="btn"><FaCartPlus className="text-xl" /></button>
            </div>
        </Link></li>
        {
            user ? <>
                <img className="w-12 h-12 mr-5 rounded-full" title={user?.displayName} src={user?.photoURL} alt="" />
                <button onClick={handleLogOut} className="px-5 py-2 bg-orange-600 rounded-xl">LogOut</button>
            </> : <><li><Link to="/login">Login</Link></li></>
        }
    </>
    return (
        <div className="navbar mx-auto bg-gray-800 text-white container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidde lg:flex">
                <ul className="menu menu-horizontal items-center px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;