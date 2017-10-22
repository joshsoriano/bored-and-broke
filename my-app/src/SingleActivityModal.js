import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';
import eventExample from './eventExample.png';

const propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func,
};

const defaultProps = {
  onRequestClose: () => {},
};

const styles = {
    main: {
      position: 'relative',
      height: '400px',
      width: '550px',
      margin: 'auto',
      background: '#63d8ed',
      marginTop: '100px',
    },
    titleTextContainer: {
      paddingBottom: '4px',
      justifyContent: 'center',
      display: 'flex',
    },
    titleText: {
      color: 'black',
      fontWeight: '500',
      fontSize: '18px',
    },
    descriptionTextContainer: {
      justifyContent: 'center',
      display: 'flex',
      textAlign: 'center',
      marginLeft: '42px',
      marginRight: '42px',
    },
    descriptionText: {
      color: 'black',
      fontSize: '14px',
    },
    link: {
      color: '#6386ef',
      textDecoration: 'underline',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '36px',
      paddingTop: '57px',
    },
    envelopeImage: {
      width: '93px',
      height: '71px',
    },
    buttonContainer: {
        marginTop: '20px',
        display: 'flex',
        marginLeft: '20px',
        marginRight: '20px',
        justifyContent: 'space-between',
    },
};

class SingleActivityModal extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={ classes.main }>
          <div className={ classes.imageContainer }>
            <img src={eventExample} className={ classes.envelopeImage } />
          </div>
          <div className={ classes.titleTextContainer }>
            <span className={ classes.titleText }>
              We are so glad you are excited about the event!
            </span>
          </div>
          <div className={ classes.descriptionTextContainer }>
            <span className={ classes.descriptionText }>
              We know you will love the activity. Please
              see more information here at&nbsp;
              <a href="mailto:yourfriends@joinhoney.com">
                <span className={ classes.link }>facebook.com</span>
              </a>
              &nbsp;to browse more events, or see a previous one, please use the arrows below.
            </span>
          </div>
          <div className={ classes.buttonContainer }>
            <Button bastyle="primary" bsSize="large">{ this.props.onRequestClose }Previous </Button>
            <Button bastyle="primary" bsSize="large">{ this.props.onRequestClose }Next> </Button>
          </div>
        </div>
    );
  }
}
SingleActivityModal.propTypes = propTypes;
export default injectSheet(styles)(SingleActivityModal);
