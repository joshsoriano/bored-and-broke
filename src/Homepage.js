import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';
import eventExample from './eventExample.png';
import logo from './logo.png';
import BBNavbar from './Navbar.js';



const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#63d8ed',
        textAlign: 'center',
        height: '900px',
        // height: '100%',
    },
    titleContainer: {
        paddingTop: '20px',
        paddingBottom: '20px',

    },
    title: {
        color: '#efedff',
        // fontWeight: '500',
        fontSize: '24px',
    },
    logo: {
        paddingLeft: '10px',
    },
    user: {
        paddingRight: '10px',
    },
    homepageSettings: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    zipAndCity: {
        marginRight: '120px',
    },
    pickRadius: {
        marginRight: '120px',
    },
    resultsContainer: {
        paddingTop: '20px',
    },
    row: {
        display: 'flex',
        marginBottom: '70px',
    },
    element: {
        // border: '1px solid white',
        marginLeft: '80px',
        marginRight: '80px',
        // width: '20px',
        // height: '20px',

    },
    // elementText: {
    //     padding: '15px',
    // },
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
            <BBNavbar />
        </div>
        <div className={ classes.homepageSettings }>
            <div className={ classes.zipAndCity }>90045 <span>⬇️</span> </div>
            <div className={ classes.pickRadius }>pick Radius</div>
            <div className={ classes.priceRange }> $0 to $50</div>
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
