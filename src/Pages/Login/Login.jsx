import { useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../ContextProvider/Provider';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
    const captchaValidate = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            // setDisable(true)
            alert('please input valid captcha')
        }
    }

    return (
        <>
            <Helmet>
                <title>Login | | Bistro Boss Restuarant</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 w-3/4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> <LoadCanvasTemplate /></span>
                                </label>
                                <input type="text" ref={captchaRef} onBlur={captchaValidate} placeholder="input the captcha" name="recapcha" className="input input-bordered" />

                                <label className="label">
                                    <Link to="/register" className="label-text-alt link link-hover">Register here</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable} type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                       <div className='mx-auto mb-5'>
                       <GoogleLogin/>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;