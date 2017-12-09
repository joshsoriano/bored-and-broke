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
      opacity: 0,
      height: '10px',
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
  constructor() {
    super();
    this.state = {
      showModal: true
    };
  }

  close = () => {
    this.setState({ showModal: false });
  }

  handleClick() {
    console.log('clicked');
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
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        Bio:
                      </Col>
                      <Col sm={10}>
                        <FormControl type="Name" placeholder="Describe yourself" />
                      </Col>
                    </FormGroup>
                </Form>

                <div className={ classes.buttonContainer }>
                  <Button onClick={ this.handleClick }
                    bastyle="primary" bsSize="small"> Save Bio </Button>
                </div>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

BioModal.propTypes = propTypes;
export default injectSheet(styles)(BioModal);
