import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#63d8ed',
        textAlign: 'center',
        marginLeft: '50px',
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
          </div>
        </div>
    );
  }
}
Homepage.propTypes = propTypes;
export default injectSheet(styles)(Homepage);
