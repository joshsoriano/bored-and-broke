import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Button from 'react-bootstrap/lib/Button';
import { Form, FormGroup, ControlLabel, FormControl, Col, Collapse, Well } from 'react-bootstrap'
import NavigationBar from './NavigationBar.js';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { getUserName } from './userID';
import { getUserID } from './userID';

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
        fontFamily: 'Open Sans'
    },
    formInput: {
        width: '500px',
        margin: 'auto',
        color: '#ECF0F1',
        fontFamily: 'Open Sans'
    },
    name: {
        color: '#d4d4d4',
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
        fontFamily: 'Open Sans'
    },
    rightCol: {
        justifyContent: 'left',
        display: 'flex'
    }
};

class Settings extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.doStuff = this.doStuff.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  doStuff(){
    let id = getUserID();
    let name = getUserName();
    this.props.actions.findOrCreateUser(id, name);
    this.props.actions.saveUserSettings(this.state.value, id);
    this.props.actions.getUser(id);
  }



  render() {
    const { classes } = this.props;
    const userName = getUserName();

    return (
      <div className={ classes.main }>
        <NavigationBar />

        <div >
            <Col className={ classes.instructions } sm={12}>
                <span>Please enter your information below. Feel free to change it whenever!</span>
            </Col>
        </div>
        <div className={ classes.formInput }>
            <Form horizontal>

                <FormGroup controlId="formHorizontalName">
                  <Col componentClass={ControlLabel} sm={6}>
                    Name
                  </Col>
                  <Col className={ classes.rightCol } sm={6}>
                    <FormControl.Static className={ classes.name }>
                      { userName }
                    </FormControl.Static>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalBio">
                  <Col componentClass={ControlLabel} sm={6}>
                    Bio
                  </Col>
                  <Col className={ classes.rightCol } sm={6}>
                    <textarea className="form-control" value={this.state.value} onChange={this.handleChange} rows="3" placeholder="Talk about yourself!"></textarea>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalDeactivate" >
                  <Col componentClass={ControlLabel} sm={6}>
                    No longer want to use Bored&Broke?
                  </Col>
                  <Col className={ classes.rightCol } sm={6}>
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
                  <Col sm={12}>
                    <Button className={ classes.save } onClick={this.doStuff} >Save</Button>
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
