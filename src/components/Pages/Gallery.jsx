const Gallery = () => {
  return (
    <div>
      <h1 className="text-center mt-10 font-bold text-3xl underline decoration-double p-5">
        Gallery
      </h1>
      <div className="lg:flex justify-between ">
        <div className="lg:w-[20%] sm:w-full mb-2">
            <img src="https://images.unsplash.com/photo-1665779933484-ca120461551e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        <div className="lg:w-[20%] sm:w-full mb-2">
            <img src="https://images.unsplash.com/photo-1536922645426-5d658ab49b81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        <div className="lg:w-[20%] sm:w-full mb-2">
            <img src="https://images.unsplash.com/photo-1632435285709-a1ee2a8effcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
       
       
      </div>
    </div>
  );
};

export default Gallery;
