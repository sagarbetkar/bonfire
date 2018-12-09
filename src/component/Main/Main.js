import React from 'react';
import '../Main/Main.scss';
import Carousel from '../Carousel/Carousel';
import Form from '../Form/Form';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Carousel />
          </div>
          <div className="col-md-6">
            <div className="back">
              <p>
                Back to <button className="btn">Woman</button>
              </p>
            </div>
            <div className="product-name">
              <h5>The Atelier Tailored Coat</h5>
            </div>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star-o" aria-hidden="true" />
              <span> 3 Review(s)</span> | <button className="btn">add a review</button>
            </div>
            <div className="price">$499.00</div>
            <div className="stock">
              <label>
                Availability : <span>In stock</span>
              </label>
            </div>
            <div className="product-code">
              <label>
                Product Code : <span>#4657</span>
              </label>
            </div>
            <div className="tags">
              <label>
                Tags : <span>Fashion, Hood, Classic</span>
              </label>
            </div>
            <div className="info">
              <p>
                Sleek, polished and boasting an impeccably modern fit, this blue, 2-button lazio suit features a notch
                lapel, flap pockets and accompanying flat front trousers-all in pure wool by Vitale Barberis Canonic.
              </p>
            </div>
            <div className="specification">
              <ul>
                <li>Dark blue suit for a tone-on-tone look</li>
                <li>Regular fit</li>
                <li>100% Cotton</li>
                <li>Free shipping with 4 days delivery</li>
              </ul>
            </div>
            <Form />
            <div className="share-link">
              SHARE THIS
              <button className="btn btn-sm btn-primary">
                <i className="fa fa-facebook-official" aria-hidden="true" />
                Like
              </button>
              <button className="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="right" title="235k">
                Share
              </button>
              <button className="btn btn-sm btn-primary tweet" data-toggle="tooltip" data-placement="right" title="93">
                <i className="fa fa-twitter " aria-hidden="true" />
                Tweet
              </button>
              <button className="btn btn-sm btn-danger pin" data-toggle="tooltip" data-placement="right" title="65k+">
                <i className="fa fa-pinterest-square " aria-hidden="true" />
                Pin it
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
