import Carousel from "react-bootstrap/Carousel";
import "../../styles/home/carosal.css";
import { campus1Image, campus2Image, campus3Image } from "../../assets";
function Carousels() {
  return (
    <div className="carosel-container">
      <Carousel fade interval={5000} className="carosel">
        <Carousel.Item>
          <img className="d-block w-100" src={campus1Image} alt="First slide" />
          <Carousel.Caption className="carosel-text">
            <h3>Sinhgad Vadgaon Campus</h3>
            <p>Students using service through campus app.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={campus2Image}
            alt="Second slide"
          />

          <Carousel.Caption className="carosel-text">
            <h3>Sinhgad Vadgaon Campus</h3>
            <p>Students using service through campus app.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={campus3Image} alt="Third slide" />

          <Carousel.Caption className="carosel-text">
            <h3>Sinhgad Vadgaon Campus</h3>
            <p>Students using service through campus app.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
