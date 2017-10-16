import React from 'react';
// import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';
import './index.css';
import Homepage from './Homepage.js';

const styles = {
    main: {
        backgroundColor: '#63d8ed',
        width: '43px',
        textAlign: 'center',
    },
};


class Board extends React.Component {
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
            <Homepage />
          </div>
      );
    }
  }



// ========================================

// ReactDOM.render(
//   <Board />,
//   document.getElementById('root')
// );
export default injectSheet(styles)(Board);
