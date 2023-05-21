import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <img src="https://www.cloudways.com/blog/wp-content/uploads/wordpress-404-error.jpg" alt="" />
      
      <Link to='/'>
      
      <button className="btn btn-primary mt-5">Home</button>
      </Link>

    </div>
  </div>
</div>
        
    );
};

export default Error;
