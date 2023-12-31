import React from "react";
import Carousel from "react-bootstrap/Carousel";

import slide1 from "./../../assets/slide1-girl-fruit.jpg";
import slide2 from "./../../assets/slide2-frui-pineapple.jpg";
import slide3 from "./../../assets/slide3-girl-orange.jpg";
import logo from "./../../assets/logo.svg";

function Header() {
  return (
    <div style={{ position: "relative" }}>
      <img
        id="logo"
        src={logo}
        alt="William Wallace Logo"
        style={{
          width: "200px",
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: "1000",
        }}
      />
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Lovely fruit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" alt="Second slide" src={slide2} />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Amazing disses.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Magnifique.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;
