import Carousel from "react-bootstrap/Carousel";
import "../../styles/home/carosal.css";
import { campus1Image, campus2Image, campus3Image, campus4Image, campus5Image, campus6Image, campus7Image } from "../../assets";
function Carousels() {
  return (
    <div className="carosel-container">
      <Carousel fade interval={5000} className="carosel">
        <Carousel.Item>
          <img className="d-block w-100" src={campus4Image} alt="First slide" />
          <Carousel.Caption className="carosel-text">
            <h4>Foodhub provide updates about foodlistings.</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={campus7Image}
            alt="Second slide"
          />

          <Carousel.Caption className="carosel-text">
            <h4>Househub provide information about your house and its features.</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={campus6Image} alt="Third slide" />

          <Carousel.Caption className="carosel-text">
            <h4>BuyAndSell Hub provides a platform for both buying and selling goods.</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
