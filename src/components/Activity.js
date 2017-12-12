import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
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
    activityQueryCity: PropTypes.string,
    dash: PropTypes.string,
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
        const dateT = this.props.activityDate;
        const dateToUse = dateT.toString();
        const slash = "-";
        const date1 = dateToUse.slice(0,4);
        const date2 = dateToUse.slice(4,6);
        const date3 = dateToUse.slice(6,8);
        const dateF1 = date1.concat(slash);
        const dateF2 = dateF1.concat(date2);
        const dateF3 = dateF2.concat(slash);
        const dateF4 = dateF3.concat(date3);
        this.state = {
            formattedDate: dateF4
        };
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
            activitySource,
            activityQueryCity
        } = this.props;

        let modalType =
            (<SingleActivityModal
                savedAlready={ false } // when false nothing happens, when true the carousel goes away
                readyForCarousel={ false } // when true the tagline dissapears, when false nothing happens
                userBio="New to LA and excited to explore!"
                userTagline="Does anyone want to carpool?"
                date={ this.props.activityDate }
                location={ this.props.activityLocation }
                price={ this.props.activityPrice }
                description={ this.props.activityDescription }
                link={ this.props.activityLink }
                image={ this.props.activityImage }
                id={ this.props.activityId }
                apisource={ this.props.activitySource }
                queryCity={ this.props.activityQueryCity }
            >
            </SingleActivityModal>)

        if (!this.props.savedPage) {
            modalType =
                (<SavedActModal
                    savedAlready={ false } // when false nothing happens, when true the carousel goes away
                    readyForCarousel={ false } // when true the tagline dissapears, when false nothing happens
                    userBio="Hi!!!!!!!!!!"
                    userTagline="Ready for the party!"
                    date={ this.props.activityDate }
                    location={ this.props.activityLocation }
                    price={ this.props.activityPrice }
                    description={ this.props.activityDescription }
                    link={ this.props.activityLink }
                    image={ this.props.activityImage }
                    id={ this.props.activityId }
                    apisource={ this.props.activitySource }
                    queryCity={ this.props.activityQueryCity }
                    >
                </SavedActModal>)
        }
        let imgSrc = this.props.activityImage;
        if (this.props.activityImage === null || this.props.activityImage === "") {
            imgSrc = laSkyline1;
        }
        let price = (this.props.activityPrice > -1) ? this.props.activityPrice : "-";
        let location = this.props.activityLocation ? this.props.activityLocation : this.props.activityQueryCity;

        return (
            <Col sx={ 12 } sm={ 6 } md={ 3 }>
                <Thumbnail src={ imgSrc } alt="242x200">
                    <div className = { classes.textDetails }>
                        <h3 className = { classes.activityTitle }>{ this.props.activityName }</h3>
                        <p className = { classes.activityDesc }>Price: ${ price }</p>
                        <p className = { classes.activityDesc }>Date: { this.state.formattedDate }</p>
                        <p className = { classes.activityDesc }>Location: { location }</p>
                        { modalType }
                    </div>
                </Thumbnail>
            </Col>
        )
    }
};

Activity.propTypes = propTypes;
export default injectSheet(styles)(Activity);
