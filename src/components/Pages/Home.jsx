import Gallery from "./Gallery";
import Img1 from '../../assets/img/causel1.png'
import Img2 from '../../assets/img/carousel2.png'
import Img3 from '../../assets/img/carousel3.png'
import SubCategory from "./SubCategory";

const Home = () => {
  return (
    <div className="container mx-auto lg:mt-16 sm:mt-36">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full  ">
          <img
            src={Img1}
            className="w-full  "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:top-80 sm:top-40 ">
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
            src={Img2}
            className="w-full"
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
            src={Img3}
            className="w-full "
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
      
      {/* Gallery section  */}
      <div className="top-0">
      <Gallery></Gallery>
      </div>
      <div>
        <SubCategory></SubCategory>
      </div>
    </div>
  );
};

export default Home;
