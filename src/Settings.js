import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';
import {Form, FormGroup, ControlLabel, FormControl, Col, Checkbox} from 'react-bootstrap'
import eventExample from './eventExample.png';
import logo_black from './images/logo-black.png';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#63d8ed',
        textAlign: 'center',
        height: '900px',
        // height: '100%',
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '15px',
    },
    user: {
        marginRight: '15px',
    },
    instructions: {
        marginBottom: '50px',
    },
    formInput: {
        width: '500px',
        margin: 'auto',
    },
};

class Settings extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.main }>
        <div className={ classes.navBar }>
            <img src={logo_black} className={ classes.envelopeImage } height='60px' />
            <div className={ classes.user }>Jane Doe ⬇️ </div>
        </div>
        <div className={ classes.instructions }>
            <span>Please enter your information below. Feel free to change it whenever!</span>
        </div>
        <div className={ classes.formInput }>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Name
                  </Col>
                  <Col sm={10}>
                    <FormControl type="Name" placeholder="First Last" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Checkbox>Remember me</Checkbox>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">
                      Sign in
                    </Button>
                  </Col>
                </FormGroup>
            </Form>
        </div>
      </div>
    );
  }
}
Settings.propTypes = propTypes;
export default injectSheet(styles)(Settings);
