import { useLoaderData } from "react-router-dom";


const CardDetails = () => {
    const singleToy=useLoaderData();
    const {toy_name,price}=singleToy;
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto lg:mt-16 sm:mt-40">
        <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{toy_name}</h2>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    );
};

export default CardDetails;