import { NavLink } from "react-router-dom";
import logo from '../../assets/logo-toy.png'
const NavBar = () => {
  return (
    <div className="container mx-auto navbar bg-base-100 lg:flex justify-between">
      <div className="lg:hidden navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content  p-2 shadow bg-base-100 rounded-box w-32"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-lime-500	font-bold text-xl"
                  : " font-bold  text-xl"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/alltoys"
              className={({ isActive }) =>
                isActive ? "bg-lime-500	font-bold text-xl" : "font-bold  text-xl"
              }
            >
              All Toys
            </NavLink>

            <NavLink
              to="/addatoy"
              className={({ isActive }) =>
                isActive ? "bg-lime-500	font-bold text-xl" : "font-bold  text-xl"
              }
            >
              Add A Toy
            </NavLink>
            <NavLink
              to="/mytoy"
              className={({ isActive }) =>
                isActive ? "bg-lime-500	font-bold text-xl" : "font-bold  text-xl"
              }
            >
              My Toy
            </NavLink>

            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "bg-lime-500	font-bold text-xl" : "font-bold  text-xl"
              }
            >
              Blogs
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "bg-lime-500 font-bold text-xl	"
                  : "font-bold  text-xl"
              }
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="navbar-center sm:flex sm:flex-row-reverse lg:flex  lg:flex-row ">
        <img src={logo} alt="" />
        <h1 className="btn btn-ghost normal-case text-xl text-center">Toy Garden</h1>
      </div>
      <div className="navbar-end lg:flex gap-5 sm:hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-lime-500	font-bold text-xl" : " font-bold  text-xl"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/alltoys"
          className={({ isActive }) =>
            isActive ? "bg-lime-500	font-bold text-xl" : "font-bold  text-xl"
          }
        >
          All Toys
        </NavLink>

        <NavLink
          to="/addatoy"
          className={({ isActive }) =>
            isActive ? "bg-lime-500	font-bold text-xl" : "font-bold  text-xl"
          }
        >
          Add A Toy
        </NavLink>

        <NavLink
          to="/mytoy"
          className={({ isActive }) =>
            isActive ? "bg-lime-500	font-bold text-xl" : "font-bold  text-xl"
          }
        >
          My Toy
        </NavLink>

        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "bg-lime-500	font-bold text-xl" : "font-bold  text-xl"
          }
        >
          Blogs
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "bg-lime-500 font-bold text-xl	" : "font-bold  text-xl"
          }
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
