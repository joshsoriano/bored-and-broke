import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
// import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';
import { Form, FormGroup, ControlLabel, FormControl, Col, Checkbox } from 'react-bootstrap'
import eventExample from './eventExample.png';
import NavigationBar from './NavigationBar.js';
import logo_offwhite from './images/logo-offwhite.png';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#2C3E50',
        textAlign: 'center',
        height: '900px',
        // height: '100%',
    },
    user: {
        marginRight: '15px',
        color: '#ECF0F1',
    },
    instructions: {
        marginBottom: '50px',
        color: '#ECF0F1',
        marginTop: '20px',
    },
    formInput: {
        width: '500px',
        margin: 'auto',
        color: '#ECF0F1',
    },
    bio: {
        height: '100px'
    }
};

// <div className={ classes.navBar }>
//     <img src={logo_offwhite} className={ classes.envelopeImage } height='60px' />
// </div>

class Settings extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.main }>
        <NavigationBar />

        <div className={ classes.instructions }>
            <span>Please enter your information below. Feel free to change it whenever!</span>
        </div>
        <div className={ classes.formInput }>
            <Form horizontal>
                <FormGroup controlId="formHorizontalName">
                  <Col componentClass={ControlLabel} sm={2}>
                    Name
                  </Col>
                  <Col sm={10}>
                    <FormControl type="Name" placeholder="First Last" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={4}>
                    Email associated with this account
                  </Col>
                  <Col sm={8}>
                    <FormControl type="Email" placeholder="Email" disabled="true"/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalBio">
                  <Col componentClass={ControlLabel} sm={2}>
                    Bio
                  </Col>
                  <Col sm={10}>
                    <FormControl className={ classes.bio } type="Bio" placeholder="Talk about yourself!"/>
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
