import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import frame from "../images/Frame.png"

const ImageCarousel = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} interval={2000} autoPlay={true}>
      <div>
        <img src={frame} alt="Image 1" />
      </div>
      <div>
        <img src={frame} alt="Image 2" />
      </div>
      <div>
        <img src={frame} alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
