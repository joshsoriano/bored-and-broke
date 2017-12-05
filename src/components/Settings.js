import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Button from 'react-bootstrap/lib/Button';
import { Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'
import NavigationBar from './NavigationBar.js';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#16A085',
        textAlign: 'center',
        height: '900px',
        fontFamily: 'Open Sans',
    },
    user: {
        marginRight: '15px',
        color: '#ECF0F1',
    },
    instructions: {
        marginBottom: '50px',
        color: '#ECF0F1',
        marginTop: '20px',
        fontFamily: 'Open Sans',
    },
    formInput: {
        width: '500px',
        margin: 'auto',
        color: '#ECF0F1',
        fontFamily: 'Open Sans',
    },
    email: {
        color: '#ababab',
        fontFamily: 'Open Sans',
    },
    deavtivate: {
        display: 'block',
        marginTop: '15px',
        color: '#E74C3C',
        fontWeight: 'bold',
        fontFamily: 'Open Sans',
    },
    save: {
        fontWeight: 'bold',
        color: '#2C3E50',
        backgroundColor: '#ECF0F1',
        marginTop: '15px',
        fontFamily: 'Open Sans',
    }
};

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
                  <Col componentClass={ControlLabel} sm={6}>
                    Email associated with this account
                  </Col>
                  <Col sm={6}>
                    <FormControl.Static className={ classes.email }>
                      email@example.com
                    </FormControl.Static>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalBio">
                  <Col componentClass={ControlLabel} sm={2}>
                    Bio
                  </Col>
                  <Col sm={10}>
                    <textarea className="form-control" rows="3" placeholder="Talk about yourself!"></textarea>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalDeactivate" >
                  <Col componentClass={ControlLabel} sm={6}>
                    No longer want to use Bored&Broke?
                  </Col>
                  <Col sm={6}>
                    <Link className={ classes.deavtivate } to="/LoginCreateAccount">Deactivate Account</Link>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalSave" >
                  <Col smOffset={2} sm={10}>
                    <Button bsSize="small" className={ classes.save } href="/Homepage">Save</Button>
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
