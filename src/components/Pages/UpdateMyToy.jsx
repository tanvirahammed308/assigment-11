import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMyToy = () => {
    const toy=useLoaderData();
    const navigate = useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || "/mytoy";
    const{
        _id,
        name,
        sellerName,
       
        subCategory,
        price,
        rating,
        quantity,
        photo,
    description}=toy
    const { user } = useContext(AuthContext);
    const handleUpdateToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const sellerName =form.seller.value;
        const email = user?.email;
        const subCategory = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const description=form.description.value;
        const update = {
          name,
          sellerName,
          email,
          subCategory,
          price,
          rating,
          quantity,
          photo,
          description
        };
        console.log(update);
        fetch(`http://localhost:5000/myToys/${_id}`,{
          method:"PUT",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(update)
        }).then(res=>res.json()).then(data=>{
          console.log(data);
          navigate(from);
          if (data.modifiedCount) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Added To My Toy',
                showConfirmButton: false,
                timer: 1500
              })
            
          }
        })
      };
    return (
        <div className="container mx-auto sm:mt-40 lg:mt-5    shadow-2xl bg-base-100">
            <h1>this upadate</h1>
      <form onSubmit={handleUpdateToy}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            defaultValue={name}
              name="name"
             
              type="text"
              placeholder="name"
              className="input input-bordered"
              
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              defaultValue={sellerName}
              name="seller"
             
              type="text"
              placeholder="seller name"
              className="input input-bordered"
            //   defaultValue={user?.displayName}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
             
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-category </span>
            </label>
            <input
             defaultValue={subCategory}
              name="category"
              type="text"
              placeholder="Sub-category "
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
             defaultValue={price}
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
            defaultValue={rating}
              name="rating"
              type="text"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
           defaultValue={quantity}
              name="quantity"
              type="text"
              placeholder="Available quantity
              "
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <input
            defaultValue={description}
              name="description"
              type="text"
              placeholder="Detail description
              "
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input
           defaultValue={photo}
              name="photo"
              type="text"
              placeholder="Picture URL
              "
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Update "
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
    );
};

export default UpdateMyToy;