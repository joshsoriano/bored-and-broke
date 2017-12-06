import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './style.css';

class App extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - Fullstack!</h2>
        </div>
        <br />
        <button onClick={this.props.actions.removeUser("11112" /*user id*/)}>Remove User 11112!</button>
        <div style={{ padding: '30px' }}>{this.props.results}</div>
      </div>
    );
  }
}

export default App;
