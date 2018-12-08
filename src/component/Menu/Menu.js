import React from 'react';
import '../Menu/Menu.scss';
import '../../assets/scss/font-awesome.scss';

class Menu extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button className="navbar-brand btn">
            <div className="menu-icon" />
            <div className="menu-icon" />
            <div className="menu-icon" />
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <button className="nav-item nav-link active btn">
                  home <span className="sr-only">(current)</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn dropdown-toggle">men</button>
              </li>
              <li className="nav-item">
                <button className="btn dropdown-toggle">women</button>
              </li>
              <li className="nav-item">
                <button className="nav-item nav-link btn">lookbook</button>
              </li>
              <li className="nav-item">
                <button className="nav-item nav-link btn">about</button>
              </li>
              <li className="nav-item">
                <button className="nav-item nav-link btn">blog</button>
              </li>
            </ul>
            <button className="btn my-2 my-sm-0 heart">
              <i className="fa fa-heart-o" aria-hidden="true" />
            </button>
            <button className="btn my-2 my-sm-0">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
