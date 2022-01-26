import React, { useState } from "react";

const MySlider = (props) => {
  const { stocks } = props;

  const [slideIndex, setSlideIndex] = useState(0);
  setTimeout(()=> {turnSlides(1)}, 10000);

  function turnSlides(n) {
    if (slideIndex + n > stocks.length - 1) {
      setSlideIndex(0);
    } else if (slideIndex + n < 0) {
      setSlideIndex(stocks.length - 1);
    } else {
      setSlideIndex(slideIndex + n);
    }
  }

  return (
    <div className="mySlides-container">
      {stocks.map((stock, index) => (
        <div
          key={stock.id}
          className={index === slideIndex ? "mySlides active" : "mySlides"}
        >
          <img className="mySlides__img" src={stock.image} />
          <div className="mySlides__text">{stock.title}</div>
        </div>
      ))}
      <a className="prev" onClick={() => turnSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => turnSlides(1)}>
        &#10095;
      </a>
    </div>
  );
};

export default MySlider;
