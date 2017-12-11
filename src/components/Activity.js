import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import SingleActivityModal from '../containers/SingleActivityModalContainer';
import SavedActModal from '../containers/SavedActModalContainer';
import laSkyline1 from '../images/filler-images/la-skyline-1.jpeg';

const propTypes = {
    classes: PropTypes.object.isRequired,
    savedPage: PropTypes.bool,
    activityName: PropTypes.string,
    activityPrice: PropTypes.number,
    activityLocation: PropTypes.string,
    activityDate: PropTypes.number,
    activityDescription: PropTypes.string,
    activityLink: PropTypes.string,
    activityImage: PropTypes.string,
    activityId: PropTypes.number,
    activitySource: PropTypes.string,
};

const styles = {
    activityTitle: {
        margin: '5px',
        fontFamily: 'Open Sans',
    },
    activityPrice: {
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

    render() {
        const {
            classes,
            savedPage,
            activityDescription,
            activityImage,
            activityDate,
            activityName,
            activityPrice,
            activityLocation,
            activityLink,
            activitySource
        } = this.props;
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
                  image={this.props.activityImage}
                  id={this.props.activityId}
                  apisource={this.props.activitySource}
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
                    image={this.props.activityImage}
                    id={this.props.activityId}
                    apisource={this.props.activitySource}

                >
                </SavedActModal>)
        }
        let imgSrc = this.props.activityImage;
        if (this.props.activityImage === null || this.props.activityImage === "") {
            imgSrc = laSkyline1;
        }

        return (
            <Col sx={12} sm={6} md={3}>
                <Thumbnail src={imgSrc} alt="242x200">
                    <div className = {classes.textDetails}>
                        <h3 className = {classes.activityTitle}>{this.props.activityName}</h3>
                        <p className = {classes.activityDesc}>Price: ${this.props.activityPrice}</p>
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
