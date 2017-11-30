import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import SingleActivityModal from './SingleActivityModal.js';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    activityTitle: {
        margin: '5px',
    },
    activityDesc: {
        marginBottom: '10px',
    },
    textDetails: {
        paddingTop: '0px',
        color: '#2C3E4E',
    },
};

class Activity extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Col sx={12} sm={6} md={3}>
                <Thumbnail src="http://via.placeholder.com/350x250" alt="242x200">
                    <div className = {classes.textDetails}>
                        <h3 className = {classes.activityTitle}>Activity Title</h3>
                        <p className = {classes.activityDesc}>Activity Description</p>

                        <SingleActivityModal
                              savedAlready={ true }
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
