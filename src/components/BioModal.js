/**
    This file controls the modal that pops up the first time a user logs into Bored&Broke. It requests that the user create a bio.
**/

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
        this.state = {
            value: '',
            showModal: this.props.is_first_time
        };
    }

    close = () => {
        this.setState({ showModal: false });
        this.props.actions.saveUserSettings(this.state.value, userID);
        this.props.actions.getUser(userID);
        this.props.actions.findOrCreateUser(userID, userName);
    }

    handleBio = (e) => {
        this.setState({
            value: e.target.value,
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
