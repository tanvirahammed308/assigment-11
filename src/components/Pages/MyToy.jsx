import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyRow from "./MyToyRow";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const url = `http://localhost:5000/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);

  return (
    <div className="container mx-auto lg:mt-16 sm:mt-40">
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <th>Name</th>
        <th>Seller Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Quantity</th>
        <th>SubCategory</th>
      </tr>
    </thead>
    <tbody>
     
      
   {myToys.map(myToy=><MyToyRow key={myToy._id} myToy={myToy} ></MyToyRow>)}
     
     
    </tbody>
   
    
  </table>
</div>
    </div>
  );
};

export default MyToy;


