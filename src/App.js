import React from 'react';
import Title from './component/Title/Title';
import Menu from './component/Menu/Menu';
import Main from './component/Main/Main';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Title />
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
