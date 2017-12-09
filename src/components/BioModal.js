import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { Popover, Tooltip, OverlayTrigger, Form, FormGroup, ControlLabel, FormControl, Col, Checkbox } from 'react-bootstrap';

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
  },
};

class BioModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleBio = this.handleBio.bind(this);
    // this.getBioState = this.getBioState.bind(this);
    this.state = {
      // showModal: this.props.is_first_time
      showModal: true,
      value: ''
    };
  }

  close = () => {
    this.setState({ showModal: false });
    console.log(this.state.value);
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
            <Modal.Title>Create your bio!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h5>This will be visible to everyone who saves the same events as you.</h5>
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
