import React from "react";

const Caroussel = () => {
  return (
    <div>
      <div className="carousel w-full h-[400px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/3762069/pexels-photo-3762069.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="w-full object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              className="btn btn-circle bg-transparent hover:bg-transparent border-none text-black"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent hover:bg-transparent border-none text-black"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img
            src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="w-full object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent hover:bg-transparent border-none text-black"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent hover:bg-transparent border-none text-black"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="w-full object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent hover:bg-transparent border-none text-black"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-transparent hover:bg-transparent border-none text-black"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/3762075/pexels-photo-3762075.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="w-full object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent hover:bg-transparent border-none text-black"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent hover:bg-transparent border-none text-black"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caroussel;
