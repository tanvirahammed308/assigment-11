import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [mytoy, setMyToy] = useState([]);
  const url = `http://localhost:5000/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  }, [url]);

  return (
    <div className="container mx-auto lg:mt-16 sm:mt-40">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
            
            
            
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default MyToy;
