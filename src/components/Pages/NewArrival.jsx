const NewArrival = () => {
  return (
    <div >
        <h1 className="text-center mt-10 font-bold text-3xl underline decoration-double p-5">New Arrival</h1>
     <div className="mt-5 lg:flex justify-between">
     <div className="card card-compact lg:w-96 bg-base-100 shadow-xl sm:w-full sm:mt-5">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1531693251400-38df35776dc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt="car"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Nikko!</h2>
          <p className="text-xl">Price : $ 20</p>
          
        </div>
      </div>
     <div className="card card-compact lg:w-96 bg-base-100 shadow-xl sm:w-full sm:mt-5">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1584641911870-6196a92c1920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="car"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Tonka!</h2>
          <p className="text-xl">Price : $ 10</p>
          
        </div>
      </div>
     <div className="card card-compact lg:w-96 bg-base-100 shadow-xl sm:w-full sm:mt-5">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1594787317357-dcda50fd1d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="car"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Carrera!</h2>
          <p className="text-xl">Price : $ 12</p>
          
        </div>
      </div>
     
     
     </div>
    </div>
  );
};

export default NewArrival;
