import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const {createUser}=useContext(AuthContext);
  const [password, setPassword] = useState([]);
  const [passwordError, setPasswordError] = useState([]);
  const navigate = useNavigate();
  const location=useLocation();
  const from = location.state?.from?.pathname || "/";
    const handleSignUp=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo =form.photo.value;
        const password=form.password.value;
        console.log(name,email,photo,password);
        createUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
          navigate(from);
       
            
            
          

        })
        .catch(error=>console.log(error))
    };
    const handlePassword = (event) => {
      const passwordInput = event.target.value;
      setPassword(passwordInput);
      if (passwordInput.length < 6) {
        setPasswordError("password must be minimum 6 character long");
      } else {
        setPasswordError("");
      }
    };
  return (
    <div className="container mx-auto hero min-h-screen bg-base-200 sm:mt-40 lg:mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <form onSubmit={handleSignUp} className="lg:w-10/12 sm:w-full">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
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
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="photo url"
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
                  required
                  onChange={handlePassword}
                />
                <label className="label">
                  
                {passwordError && (
            <span className="text-red-600 ">{passwordError}</span>
          )}
                </label>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <small>
                <p>
                 Already Have An Account? 
                   <Link to="/login">
                    <span className="text-sky-600"> Login</span>
                  </Link>
                </p>
              </small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
