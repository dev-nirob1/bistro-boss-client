import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/Provider";

const Register = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm()
  const {createUser} = useContext(AuthContext)
const onSubmit = (data) => {
  console.log(data)
  createUser(data.email, data.password)
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser)
  })
  .catch(error => {
    console.log(error)
  })
}

  return (
    <>
      <Helmet>
        <title>Register | | Bistro Boss Restuarant</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register an Account
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  name="name"
                  {...register("name", { required: true })}
                  type="text"
                  className="block w-full px-3 py-3 border bg-white border-gray-300 placeholder-gray-500 text-gray-900 rounded  sm:text-sm"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">First name is required</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  {...register("email", { required: true })}
                  type="email"
                  autoComplete="email"
                  className="block w-full px-3 py-3 border bg-white border-gray-300 placeholder-gray-500 text-gray-900 rounded  sm:text-sm"
                  placeholder="Email address"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">Email is Required</p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                  className="block w-full px-3 py-3 border bg-white border-gray-300 placeholder-gray-500 text-gray-900 rounded  sm:text-sm"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-600 text-sm">Password is Required</p>
                )}
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-600 text-sm">Password must be 6 characters</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              Or register with
            </p>
            <div className="mt-3 flex justify-center space-x-4">
              <button
                type="button"
                className="group relative w-1/2 flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Google
              </button>
            </div>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">login here</Link>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
