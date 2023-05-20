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
  const handleDelete=id=>{
    const proceed=confirm('Are You Sure')
    if (proceed) {
        fetch(`http://localhost:5000/myToys/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);
        if (data.deletedCount>0) {
            // alert('deleted successul');
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            })
            const remaining=myToys.filter(myToy=>myToy._id !== id);
            setMyToys(remaining)
        }
        
        })
    }
}

  return (
    <div className="container mx-auto lg:mt-16 sm:mt-40">
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
          
          </label>
        </th> 
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
     
      
   {myToys.map(myToy=><MyToyRow key={myToy._id} myToy={myToy} handleDelete={handleDelete} ></MyToyRow>)}
     
     
    </tbody>
    
    
  </table>
</div>
    </div>
  );
};

export default MyToy;


