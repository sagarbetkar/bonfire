import React from 'react';
import '../Title/Title.scss';

class Title extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="country-dropdown">
              <select className="form-control">
                <option value="USD">USD</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="name">bonfire</div>
          </div>
          <div className="col-md-4">
            <div className="cart-button">
              <button className="btn">Cart {0}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
