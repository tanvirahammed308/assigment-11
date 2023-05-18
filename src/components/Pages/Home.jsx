const Home = () => {
  return (
    <div className="container mx-auto lg:mt-16 sm:mt-36">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            className="w-full h-2/4 "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:top-80 sm:top-40">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="w-full h-2/4"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:top-80 sm:top-40">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img
            src="https://images.unsplash.com/photo-1598084991519-c90900bc9df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            className="w-full h-2/4"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:top-80 sm:top-40">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
