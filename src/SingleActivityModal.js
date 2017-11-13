import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';
import eventExample from './eventExample.png';
import logo_black from './images/logo-black.png';

const propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func,
    showModal: PropTypes.bool,

};

const defaultProps = {
  onRequestClose: () => {},
};

const styles = {
    main: {
      position: 'relative',
      height: '600px',
      width: '650px',
      margin: 'auto',
      background: '#1ABC9C',
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
    carouselOn: {
        opacity: '0',
    },
    // tagline: {
    //     opacity: '0',
    // }
};

class SingleActivityModal extends React.Component {
  render() {
    const { classes, showModal } = this.props;
    const isTimeForUsers = true; // when true, no carousel (because opacity is turned to 0. When false, carousel is there)

    // const taglineClasses = classNames({
    //     [classes.tagLine]: true,
    // });

    const carouselClasses = classNames({
        [classes.carouselOn]: isTimeForUsers,
    });

    // To be used below:
    // <div className={ taglineClasses }>
    //   <span>Please input your tagline for the event!</span>
    // </div>

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
          <div className={ carouselClasses }>
            <Carousel>
                <Carousel.Item>
                  <img width={300} height={300} align="middle" src={eventExample}/>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={200} height={200} src={logo_black}/>
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={200} height={200} alt="900x500" src="/assets/carousel.png"/>
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
    );
  }
}
SingleActivityModal.propTypes = propTypes;
export default injectSheet(styles)(SingleActivityModal);
