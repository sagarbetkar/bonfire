import React from 'react';
import '../Title/Title.scss';
import Modal from '../Modal/Modal';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  toggleModal = () => this.setState({showModal: !this.state.showModal});
  render() {
    const {showModal} = this.state;
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
              <button className="btn" onClick={this.toggleModal}>
                Cart {0}
              </button>
              {showModal ? (
                <Modal className="modal">
                  <h1>Cart List</h1>
                  <div className="buttons">
                    <button className="btn btn-primary" onClick={this.toggleModal}>
                      Checkout
                    </button>
                  </div>
                </Modal>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
