import Gallery from "./Gallery";
import Img1 from "../../assets/img/causel1.png";
import Img2 from "../../assets/img/carousel2.png";
import Img3 from "../../assets/img/carousel3.png";

import NewArrival from "./NewArrival";
import CustomerServ from "./CustomerServ";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link,  } from "react-router-dom";
const Home = () => {
  
  
  
  const [toys, setToys] = useState([]);
  useState(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  // console.log(toys);
  return (
    <div className="container mx-auto lg:mt-16 sm:mt-40">
      <div className="carousel w-full h-[500px]">
        <div id="slide1" className="carousel-item relative w-full  ">
          <img src={Img1} className="w-full rounded-lg " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:top-80 sm:top-80 ">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={Img2} className="w-full rounded-lg " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:top-80 sm:top-80">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={Img3} className="w-full rounded-lg " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:top-80 sm:top-80">
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
      {/* sub category section  */}
      <div className="text-center mt-10 mb-10">
        <Tabs>
          <TabList>
            {toys.map((toy, index) => (
              <Tab key={index} className="btn btn-outline btn-primary ms-5">
                {toy.subcategory[0].title}
              </Tab>
            ))}
          </TabList>
          {toys.map((toy, index) => (
            <TabPanel key={index}>
              <div className="mt-10 lg:flex justify-center gap-40">
                <div className="card card-compact lg:w-96 sm:w-full bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={toy.subcategory[0].products[0].picture}
                      alt="Shoes"
                      className="w-[350px] h-[250px]"
                    />
                  </figure>
                  <div className="card-body text-center text-2xl font-bold">
                    <h2 className="">{toy.subcategory[0].products[0].name}</h2>
                    <p>Price : {toy.subcategory[0].products[0].price}</p>
                    <p>Rating : {toy.subcategory[0].products[0].rating}</p>
                    <div className="card-actions justify-center">
                      <Link  to={`carddetails/${toy?._id}`}>
                     
                      <button className="btn btn-primary">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card card-compact lg:w-96 sm:w-full sm:mt-5 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={toy.subcategory[0].products[1].picture}
                      alt="Shoes"
                      className="w-[350px] h-[250px]"
                    />
                  </figure>
                  <div className="card-body text-center text-2xl font-bold">
                    <h2 className="">{toy.subcategory[0].products[1].name}</h2>
                    <p>Price : {toy.subcategory[0].products[1].price}</p>
                    <p>Rating : {toy.subcategory[0].products[1].rating}</p>
                    <div className="card-actions justify-center">
                      <Link to={`carddetails/${toy._id}`}>
                      
                      
                      <button className="btn btn-primary">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
      {/* new arrival  */}
      <div>
        <NewArrival></NewArrival>
      </div>
      {/* customer service  */}
      <div>
        <CustomerServ></CustomerServ>
      </div>
    </div>
  );
};

export default Home;
