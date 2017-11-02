import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';
import {Form, FormGroup, ControlLabel, FormControl, Col, Checkbox} from 'react-bootstrap'
import eventExample from './eventExample.png';
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
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '15px',
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
        color: '#E74C3C',
    },
};

class LoginCreateAccount extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.main }>
        <div className={ classes.navBar }>
            <img src={logo_offwhite} className={ classes.envelopeImage } height='60px' />
            <div className={ classes.user }>Jane Doe ⬇️ </div>
        </div>
        <div className={ classes.instructions }>
            <span>For our new users, we are so excited to have you! For our returning B&B users, thanks for coming back, we missed you!</span>
        </div>
        <div className={ classes.formInput }>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl type="email" placeholder="Email" />
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
LoginCreateAccount.propTypes = propTypes;
export default injectSheet(styles)(LoginCreateAccount);
