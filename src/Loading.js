import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
// import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';
import { Form, FormGroup, ControlLabel, FormControl, Col, Checkbox } from 'react-bootstrap'
import eventExample from './eventExample.png';
import NavigationBar from './NavigationBar.js';
import logo_offwhite from './images/logo-offwhite.png';
import LoginButton from './LoginButton.js';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

// Get "Response" from LoginButton.js

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
