import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import Carousel from 'react-bootstrap/lib/Carousel';
import {Form, FormGroup, ControlLabel, FormControl, Col, Checkbox} from 'react-bootstrap'
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import eventExample from './eventExample.png';
import logo_black from './images/logo-black.png';

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
    //   height: '100px',
      width: '100px',
      background: '#1ABC9C',
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
    modalContainer: {
        position: 'relative',
    },
    // modalContainer {
    //      position: absolute,
    // }
    // modal {
    //      position: absolute,
    // },
    // modalContainer {
    //      position: absolute,
    // },
    // modalBackdrop {
    //     position: absolute,
    // },
    taglineStyle: {
        opacity: 0,
    },
};

class SingleActivityModal extends React.Component {
    constructor(props) {
        super(props);
        // this.onNavItemClick = this.onNavItemClick.bind(this);
        this.state = {
            show: false,
            tagline: false,
        };
    }

    render() {
        const { classes, showModal } = this.props;
        const isTimeForUsers = true; // when true, no carousel (because opacity is turned to 0. When false, carousel is there)
        // const taglineClasses = classNames({
        //     [classes.tagLine]: true,
        // });
        const isActivitySaved = false; // when true, no form for tagline
        const taglineShow = isActivitySaved;

        const carouselClasses = classNames({
            [classes.carouselOn]: isTimeForUsers,
        });

        const taglineClasses = classNames({
            [classes.taglineStyle]: taglineShow,
        });

        let close = () => this.setState({ show: false });

        return (
            <div className="modalContainer" style={{ height: 50 }}>
                <Button
                    bsStyle="primary"
                    bsSize="small"
                    onClick={() => this.setState({ show: true })}
                >
                    More Info
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title"> We are so glad you are excited about the event!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                        <div className={ taglineClasses }>

                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Tagline:
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="Name" placeholder="What's your vibes?" />
                                  </Col>
                                </FormGroup>

                                <FormGroup>
                                  <Col smOffset={2} sm={10}>
                                    <Checkbox>Save</Checkbox>
                                  </Col>
                                </FormGroup>

                                <FormGroup>
                                  <Col smOffset={2} sm={10}>
                                    <Button type="submit">
                                      Skip
                                    </Button>
                                  </Col>
                                </FormGroup>


                            </Form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


SingleActivityModal.propTypes = propTypes;
export default injectSheet(styles)(SingleActivityModal);
