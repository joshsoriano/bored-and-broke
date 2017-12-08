import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Button from 'react-bootstrap/lib/Button';
import { Form, FormGroup, ControlLabel, FormControl, Col, Collapse, Well } from 'react-bootstrap'
import NavigationBar from './NavigationBar.js';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { getUserName } from './userID';

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
    deactivateWell: {
        color: 'black'
    },
    deactivateBtns: {
        marginTop: '5px'
    },
    deactivateAccnt: {
        marginTop: '10px',
        marginBottom: '5px'
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
    constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { classes } = this.props;
    const userName = getUserName();
    return (
      <div className={ classes.main }>
        <NavigationBar />

        <Button onClick={() => console.log(userName)} >hi</Button>

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
                    <Button onClick={() => this.setState({ open: !this.state.open })} className={ classes.deactivateAccnt }>
                      Deactivate Account
                    </Button>
                    <Collapse in={this.state.open}>
                      <div>
                        <Well className={ classes.deactivateWell }>
                          Are you sure you want to remove your account from BoredBroke.com
                          <div className={ classes.deactivateBtns }>
                              <Button onClick={() => this.setState({ open: !this.state.open })}>
                                NO!
                              </Button>
                              <Button href="/LoginCreateAccount" bsStyle="danger">
                                  Yes
                              </Button>
                          </div>
                        </Well>
                      </div>
                    </Collapse>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalSave" >
                  <Col smOffset={2} sm={10}>
                    <Button className={ classes.save } href="/Homepage">Save</Button>
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
