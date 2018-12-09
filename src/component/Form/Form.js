import React from 'react';
import '../Form/Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      color: '',
      size: '',
      quantity: 1
    };

    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  handleColorChange(event) {
    this.setState({color: event.target.value});
  }
  handleSizeChange(event) {
    this.setState({size: event.target.value});
  }
  increment() {
    this.setState({quantity: this.state.quantity + 1});
  }

  decrement() {
    this.setState({
      // eslint-disable-next-line
      quantity: this.state.quantity > 1 ? --this.state.quantity : 1
    });
  }

  handleReset(event) {
    this.setState({
      color: '',
      size: '',
      quantity: 1
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.color !== '' && this.state.size !== '' && this.state.quantity !== '') {
      alert('Added to cart');
      const newItem = {
        color: this.state.color,
        size: this.state.size,
        quantity: this.state.quantity,
        id: Date.now()
      };
      console.log(newItem);
      this.setState((state) => ({
        items: state.items.concat(newItem),
        color: '',
        size: '',
        quantity: 1
      }));
    } else {
      alert('Form is incomplete');
    }
  }

  render() {
    return (
      <div className="small-form">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="color">
                COLOR :
                <select className="form-control" value={this.state.color} onChange={this.handleColorChange}>
                  <option value="" />
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="yellow">Yellow</option>
                </select>
              </label>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="size">
                SIZE :
                <select className="form-control" value={this.state.size} onChange={this.handleSizeChange}>
                  <option value="" />
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="extra-large">Extra-Large</option>
                </select>
              </label>
            </div>
            <div className="col-md-4">
              <label htmlFor="quantity">Quantity :</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <button className="btn" onClick={this.increment} type="button">
                      <i className="fa fa-caret-up" aria-hidden="true" />
                    </button>
                  </span>
                </div>
                <input type="text" className="form-control" value={this.state.quantity} readOnly />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <button className="btn" onClick={this.decrement} type="button">
                      <i className="fa fa-caret-down" aria-hidden="true" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="clear btn" type="button" onClick={this.handleReset}>
            clear selection
          </button>
          <div className="buttons-grp">
            <button className="btn" type="submit" value="submit">
              add to cart
            </button>
            <button className="btn">
              <i className="fa fa-heart-o" aria-hidden="true" />
              add to wishlist
            </button>
          </div>
        </form>
        {/* <ul>
          {this.state.items.map((item) => (
            <li key={item.id}>
              {item.color},{item.size},{item.quantity}
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default Form;
