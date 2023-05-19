import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin=e=>{
        e.preventDefault()
    }
  return (
    <div className="container mx-auto hero min-h-screen bg-base-200 sm:mt-40 lg:mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
         
        </div>
       <form onSubmit={handleLogin}>
       <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
             
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <small><p>New TO Toy Garden <Link to="/register"><span className="text-sky-600">Sign Up</span></Link>  </p></small>
          </div>
         
        </div>

       </form>
       
      </div>
    </div>
  );
};

export default Login;
