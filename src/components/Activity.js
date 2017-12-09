import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import SingleActivityModal from './SingleActivityModal.js';
import SavedActModal from './SavedActModal.js';

const propTypes = {
    classes: PropTypes.object.isRequired,
    savedPage: PropTypes.bool,
    activityName: PropTypes.string,
    activityPrice: PropTypes.string,
    activityLocation: PropTypes.sting,
    activityDate: PropTypes.string,
    activityDescription: PropTypes.string,
    activityLink: PropTypes.string,
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
    constructor(props) {
      super(props)
    }


    // Need to assign a role to savedPage prop here


    render() {
        const { classes, savedPage, activityDescription } = this.props;
        // this.props.savedPage
        let modalType =
            (<SingleActivityModal
                  savedAlready={ false } // when false nothing happens, when true the carousel goes away
                  readyForCarousel={ false } // when true the tagline dissapears, when false nothing happens
                  userBio="New to LA and excited to explore!"
                  userTagline="Does anyone want to carpool?"
                  date={this.props.activityDate}
                  location={this.props.activityLocation}
                  price={this.props.activityPrice}
                  description={this.props.activityDescription}
                  link={this.props.activityLink}
            >
            </SingleActivityModal>)

        if (!this.props.savedPage) {
            modalType =
                (<SavedActModal
                    savedAlready={ false } // when false nothing happens, when true the carousel goes away
                    readyForCarousel={ false } // when true the tagline dissapears, when false nothing happens
                    userBio="Hi!!!!!!!!!!"
                    userTagline="Ready for the party!"
                    date={this.props.activityDate}
                    location={this.props.activityLocation}
                    price={this.props.activityPrice}
                    description={this.props.activityDescription}
                    link={this.props.activityLink}
                >
                </SavedActModal>)
        }

        return (
            <Col sx={12} sm={6} md={3}>
                <Thumbnail src="http://via.placeholder.com/350x250" alt="242x200">
                    <div className = {classes.textDetails}>
                        <h3 className = {classes.activityTitle}>{this.props.activityName}</h3>
                        <p className = {classes.activityDesc}>Price:${this.props.activityPrice}</p>
                        <p className = {classes.activityDesc}>Date: {this.props.activityDate}</p>
                        <p className = {classes.activityDesc}>Location: {this.props.activityLocation}</p>

                        {modalType}
                    </div>
                </Thumbnail>
            </Col>
        )
    }
};

Activity.propTypes = propTypes;
export default injectSheet(styles)(Activity);
