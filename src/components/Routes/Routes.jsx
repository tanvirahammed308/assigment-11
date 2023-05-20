import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AllToys from "../Pages/AllToys";
import AddAToy from "../Pages/AddAToy";
import Blogs from "../Pages/Blogs";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import MyToy from "../Pages/MyToy";
import PrivateRoute from "./PrivateRoute";
import UpdateMyToy from "../Pages/UpdateMyToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
     
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/alltoys",
          element: < AllToys/>,
        },
        {
          path: "/addatoy",
          element: <AddAToy />,
        },
        {
          path: "/mytoy",
          element:<PrivateRoute> <MyToy /></PrivateRoute>
        },
        {
          path: "/updatemytoy/:id",
          element:<UpdateMyToy></UpdateMyToy>,
          // loader: ({ params }) => fetch(`http://localhost:5000/myToys/${params.id}`),
        },
        {
          path: "/blogs",
          element: < Blogs/>,
        },
        {
          path: "/login",
          element: < Login />,
        },
        {
          path: "/register",
          element: < Register/>,
        },
      ],
    },
  ]);
  export default router;