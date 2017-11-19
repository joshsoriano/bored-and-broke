import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';
import {Form, FormGroup, ControlLabel, FormControl, Col, Checkbox} from 'react-bootstrap'
import eventExample from './eventExample.png';
// import logo from './logo.png';
import NavigationBar from './NavigationBar.js';
import logo_offwhite from './images/logo-offwhite.png';

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
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '15px',
    },
    user: {
        marginRight: '15px',
        color: '#ECF0F1',
    },
    instructions: {
        marginBottom: '50px',
        color: '#ECF0F1',
    },
    // formInput: {
    //     width: '500px',
    //     margin: 'auto',
    //     color: '#ECF0F1',
    // },
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
};

class SavedActivities extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.main }>
        <NavigationBar />
        <div className={ classes.instructions }>
            <span>Here are the activities you have saved so far:</span>
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
    );
  }
}
SavedActivities.propTypes = propTypes;
export default injectSheet(styles)(SavedActivities);
