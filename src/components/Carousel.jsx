import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel w-11/12 md:w-3/4 mx-auto my-8">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/1t7BqgdB/Chat-GPT-Image-May-5-2026-04-39-27-PM.png"
          className="w-full rounded-lg" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/XkVc0mVv/Chat-GPT-Image-May-5-2026-04-40-46-PM.png"
          className="w-full rounded-lg" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;