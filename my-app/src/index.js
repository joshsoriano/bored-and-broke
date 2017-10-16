import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Welcome to:';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <span>
          Bored and Broke!
          </span>
        </div>
        <div className="new-title">
          <span>This is our project</span>
        </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
