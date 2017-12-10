import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { Popover, Tooltip, OverlayTrigger, Form, FormGroup, ControlLabel, FormControl, Col, Checkbox } from 'react-bootstrap';
import { getUserID, getUserName } from './userID';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
  bioInput: {
      fontFamily: 'Open Sans',
  },
  buttonContainer: {
      marginTop: '15px',
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '15px',
      fontFamily: 'Open Sans',
  }
};

const userID = getUserID();
const userName = getUserName();

class BioModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleBio = this.handleBio.bind(this);
    // this.shouldShow = this.shouldShow.bind(this);
    this.state = {
      value: '',
      showModal: true
    };
  }

  // componentWillMount() {
  //   const userID = getUserID();
  //   const userName = getUserName();
  //   Promise.resolve(this.props.actions.findOrCreateUser(userID, userName)).then(function() {
  //     this.setState({
  //       showModal: this.props.is_first_time
  //     });
  //     console.log(this.props.is_first_time);
  //   });
  // }

  // shouldShow() {
  //
  // }

  close = () => {
    this.setState({ showModal: false });
    console.log(this.state.value);
    this.props.actions.saveUserSettings(this.state.value, userID);
    this.props.actions.getUser(userID);
  }

  // getBioState = () => {
  //     const taglineVal = this.state.value;  //this is the most accurate one! Use this!
  //     console.log("taglineVal:", taglineVal)
  //     return taglineVal;
  // };

  handleBio = (e) => {
    this.setState({
        value: e.target.value, //note that the taglineVal is more accurate
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome to Bored&Broke!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h5>Create your bio! This will be visible to everyone who saves the same activities as you.</h5>
              <div className={ classes.bioInput }>
                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel></ControlLabel>
                    <FormControl componentClass="textarea" value={ this.state.value } placeholder='Describe yourself!' onChange={ this.handleBio }/>
                  </FormGroup>
              </div>

              <div className={ classes.buttonContainer }>
                <Button onClick={ this.close }>Save</Button>
              </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

BioModal.propTypes = propTypes;
export default injectSheet(styles)(BioModal);
