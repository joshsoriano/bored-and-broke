import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import eventExample from './eventExample.png';
import NavigationBar from './NavigationBar.js';
import logo_offwhite from './images/logo-offwhite.png';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {

};

class Loading extends React.Component {
  render() {
    const { classes } = this.props;
    return (
     <div>
     L o a d i n g
     </div>
    );
  }
}
Loading.propTypes = propTypes;
export default injectSheet(styles)(Loading);
