import React from 'react';
import '../Carousel/Carousel.scss';
import firstSlide from '../../assets/images/ESPRIT-Women-Coats-1.jpg';
import secondSlide from '../../assets/images/ESPRIT-Women-Coats-2.jpg';
import thirdSlide from '../../assets/images/ESPRIT-Women-Coats-3.jpg';
import fourthSlide from '../../assets/images/ESPRIT-Women-Coats-4.jpg';

const photos = [firstSlide, secondSlide, thirdSlide, fourthSlide];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  handleIndexClick() {
    console.log();
  }
  render() {
    return (
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide article-slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={firstSlide} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={secondSlide} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={thirdSlide} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={fourthSlide} alt="Fourth slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div id="slider-thumbs">
          <ul className="hide-bullets row">
            <li className="col-sm-3">
              <a id="carousel-selector-0">
                <img
                  onClick={this.handleIndexClick}
                  alt="First slide"
                  src={firstSlide}
                  id="carousel-selector-0"
                  className="img-thumbnail"
                />
              </a>
            </li>
            <li className="col-sm-3">
              <a id="carousel-selector-1">
                <img
                  onClick={this.handleIndexClick}
                  alt="Second slide"
                  src={secondSlide}
                  id="carousel-selector-1"
                  className="img-thumbnail"
                />
              </a>
            </li>
            <li className="col-sm-3">
              <a id="carousel-selector-2">
                <img
                  onClick={this.handleIndexClick}
                  alt="Third slide"
                  src={thirdSlide}
                  id="carousel-selector-2"
                  className="img-thumbnail"
                />
              </a>
            </li>
            <li className="col-sm-3">
              <a id="carousel-selector-3">
                <img
                  onClick={this.handleIndexClick}
                  alt="Fourth slide"
                  src={fourthSlide}
                  id="carousel-selector-3"
                  className="img-thumbnail"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Carousel;
