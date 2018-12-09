import React from 'react';
import '../Carousel/Carousel.scss';
import firstSlide from '../../assets/images/ESPRIT-Women-Coats-1.jpg';
import secondSlide from '../../assets/images/ESPRIT-Women-Coats-2.jpg';
import thirdSlide from '../../assets/images/ESPRIT-Women-Coats-3.jpg';
import fourthSlide from '../../assets/images/ESPRIT-Women-Coats-4.jpg';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  handleIndexClick(event) {
    this.setState({active: +event.target.dataset.index});
  }
  render() {
    const photos = [firstSlide, secondSlide, thirdSlide, fourthSlide];
    const {active} = this.state;
    return (
      <div className="container">
        <div className="carousel">
          <div className="carousel-inner">
            <img className="d-block w-100" src={photos[active]} alt="Coat" />
          </div>
          <div className="hide-bullets">
            {photos.map((photo, index) => (
              <img
                key={photo}
                onClick={this.handleIndexClick}
                data-index={index}
                src={photo}
                className={index === active ? 'active img-thumbnail' : 'img-thumbnail'}
                alt="coat"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
