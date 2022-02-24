import React from "react";
import CourseCard from "./CourseCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CourseCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h2 className='card-title py-3'>Trending Courses</h2>
      <Carousel responsive={responsive}>
        {Array(20)
          .fill(null)
          .map((idx) => (
            <CourseCard id={idx + 1} key={Math.random() + idx} />
          ))}
      </Carousel>
    </div>
  );
}

export default CourseCarousel;
