import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import {Form, FormGroup, ControlLabel, FormControl, Col, Checkbox} from 'react-bootstrap'
import LoginButton from './LoginButton.js'
import logoOffWhite from './images/logo-offwhite.png'

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        textAlign: 'center',
        // height: '900px',
        height: '900px',
    },
    leftMain: {
        backgroundColor: '#2C3E50',
        height: '100%',
    },
    rightMain: {
        backgroundColor: '#ECF0F1',
        height: '100%',
    },
    instructions: {
        font: "Verdana",
        margin: 'auto',
        marginBottom: '50px',
    },
    envelopeImage: {
        display: 'block',
        margin: 'auto',
    },
    logoSpacer: {
        height: '40%',
    },
    instructionSpacer: {
        height: '35%',
    },
    loginButton: {
        margin: 'auto',
    },
};

class LoginCreateAccount extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.main }>
        <Col className={ classes.leftMain } md={6}>
          <div className={ classes.logoSpacer } />
          <img src={logoOffWhite} className={ classes.envelopeImage } height='80px' />
        </Col>
        <Col className={ classes.rightMain } md={6}>
          <div className={ classes.instructionSpacer } />
          <div className={ classes.instructions }>
              <span fontSize={40}>Connect with Facebook to start browsing events near you!</span>
          </div>
          <div className={ classes.loginButton }>
            <LoginButton />
          </div>
        </Col>
      </div>
    );
  }
}
LoginCreateAccount.propTypes = propTypes;
export default injectSheet(styles)(LoginCreateAccount);
