import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';
import eventExample from './eventExample.png';
import logo_offwhite from './images/logo-offwhite.png';
// import Slider from './Slider.js';
// import logo_black from './images/logo-black.png';
// import Slider from './Slider.js';
import HomepageSettings from './HomepageSettings.js';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#2C3E50',
        textAlign: 'center',
        height: '900px',
        // height: '100%',
    },
    titleContainer: {
        paddingTop: '20px',
        paddingBottom: '20px',

    },
    title: {
        color: '#ECF0F1',
        // fontWeight: '500',
        fontSize: '24px',
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '15px',
    },
    logo_offwhite: {
        paddingLeft: '10px',
        color: '#ECF0F1',
    },
    user: {
        paddingRight: '10px',
        color: '#ECF0F1',
    },
    homepageSettings: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    zipAndCity: {
        marginRight: '120px',
        color: '#16A085',
    },
    pickRadius: {
        marginRight: '120px',
        color: '#16A085',
    },
    priceRange: {
        color: '#16A085',
    },
    resultsContainer: {
        paddingTop: '20px',
        // justifyContent: 'center',
    },
    row: {
        display: 'flex',
        marginBottom: '70px',
    },
    element:
    {
        marginLeft: '80px',
        marginRight: '80px',
    },
    space: {
        marginBottom: '100px',
    },
};

class Homepage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.main }>
        <div className={ classes.navBar }>
            <div className={ classes.logo_offwhite }>
                <img src={logo_offwhite} className={ classes.envelopeImage } height='40px' />
            </div>
            <div className={ classes.user }>Jane Doe ⬇️ </div>
        </div>
        <div className={ classes.homepageSettings }>
            <HomepageSettings />
        </div>
        <div className={ classes.titleContainer }>
            <span className={ classes.title }>activities we found for you:</span>
        </div>
        <div className={ classes.resultsContainer }>
            <div className={ classes.row }>
                <div className={ classes.element }>
                    <img src={eventExample} className={ classes.envelopeImage } height='100px' />
                </div>
                <div className={ classes.element }>
                    <img src={eventExample} className={ classes.envelopeImage } height='100px' />
                </div>
                <div className={ classes.element }>
                    <img src={eventExample} className={ classes.envelopeImage } height='100px' />
                </div>
                <div className={ classes.element }>
                    <img src={eventExample} className={ classes.envelopeImage } height='100px' />
                </div>
            </div>
            <div className={ classes.row }>
                <div className={ classes.element }>
                    <img src={eventExample} className={ classes.envelopeImage } height='100px' />
                </div>
                <div className={ classes.element }>
                    <img src={eventExample} className={ classes.envelopeImage } height='100px' />
                </div>
                <div className={ classes.element }>
                    <img src={eventExample} className={ classes.envelopeImage } height='100px' />
                </div>
                <div className={ classes.element }>
                    <img src={eventExample} className={ classes.envelopeImage } height='100px' />
                </div>
            </div>
            <div className={ classes.row }>
                <div className={ classes.element }>
                    <img src={eventExample} className={ classes.envelopeImage } height='100px' />
                </div>
                <div className={ classes.element }>
                    <img src={eventExample} className={ classes.envelopeImage } height='100px' />
                </div>
                <div className={ classes.element }>
                    <img src={eventExample} className={ classes.envelopeImage } height='100px' />
                </div>
                <div className={ classes.element }>
                    <img src={eventExample} className={ classes.envelopeImage } height='100px' />
                </div>
            </div>
        </div>
        <div className={ classes.space } />
        <div>
            <Button bastyle="primary" bsSize="large">Click Me!!!!</Button>
        </div>
      </div>
    );
  }
}
Homepage.propTypes = propTypes;
export default injectSheet(styles)(Homepage);
