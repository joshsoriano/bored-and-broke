import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#63d8ed',
        width: '43px',
        textAlign: 'center',
    },
};

class Homepage extends React.Component {
  render() {
    const status = 'Welcome to:';
    const { classes } = this.props;
    return (
        <div>
          <div className={ classes.main }>
            {status}
            <br />
            <span>Bored and Broke!</span>
            <br />
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
