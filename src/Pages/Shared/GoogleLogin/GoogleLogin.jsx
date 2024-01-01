import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../ContextProvider/Provider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                if(loggedUser){
                    alert('Welcome to Bistro Boss')
                }
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <div className="divider">or</div>
            <button onClick={handleGoogleLogin} className="btn btn-circle">
                <FaGoogle />
            </button>
        </div>
    );
};

export default GoogleLogin;