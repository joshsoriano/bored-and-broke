import React from 'react';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';

// const propTypes = {
//
// };

const styles = {
    main: {
        backgroundColor: '#63d8ed',
        width: '43px',
        textAlign: 'center',
    },
};

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Homepage extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Welcome to:';

    return (
      <div>
        <div className={styles.main}>{status}</div>
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

// ReactDOM.render(
//   <Board />,
//   document.getElementById('root')
// );

export default injectSheet(styles)(Homepage);
