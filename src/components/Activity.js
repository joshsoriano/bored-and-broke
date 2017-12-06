import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import SingleActivityModal from './SingleActivityModal.js';
import dataImage1 from '../images/fakeData1.png';

const propTypes = {
    classes: PropTypes.object.isRequired,
    eventName: PropTypes.string,
    eventDescription: PropTypes.string,
    eventImage: PropTypes.string,
};

const styles = {
    activityTitle: {
        margin: '5px',
        fontFamily: 'Open Sans',
    },
    activityDesc: {
        marginBottom: '10px',
        fontFamily: 'Open Sans',
    },
    textDetails: {
        paddingTop: '0px',
        color: '#2C3E4E',
    },
};

class Activity extends React.Component {
    render() {
        const { classes, eventName, eventDescription, eventImage } = this.props;
        return (
            <Col sx={12} sm={6} md={3}>
                <Thumbnail src={ this.props.eventImage } alt="242x200">
                    <div className = {classes.textDetails}>
                        <h3 className = {classes.activityTitle}>{this.props.eventName}</h3>
                        <p className = {classes.activityDesc}>{this.props.eventDescription}</p>

                        <SingleActivityModal
                              savedAlready={ false } // when false nothing happens, when true the carousel goes away
                              readyForCarousel={ false } // when true the tagline dissapears, when false nothing happens
                        >
                        </SingleActivityModal>
                    </div>
                </Thumbnail>
            </Col>
        )
    }
};

Activity.propTypes = propTypes;
export default injectSheet(styles)(Activity);
