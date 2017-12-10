import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import Carousel from 'react-bootstrap/lib/Carousel';
import {Form, FormGroup, ControlLabel, FormControl, Col, Checkbox} from 'react-bootstrap'
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import blackBackground from '../images/blackBackground.jpg';
import logo_black from '../images/logo-black.png';
import FacebookLinkButton from './FacebookLinkButton.js';

const propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func,
    savedAlready: PropTypes.bool,
    readyForCarousel: PropTypes.bool,
    userBio: PropTypes.string,
    userTagline: PropTypes.string,
    date: PropTypes.number,
    location: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    link: PropTypes.string,
};

const defaultProps = {
  onRequestClose: () => {},
};

const styles = {
    main: {
      position: 'relative',
      width: '100px',
      background: '#1ABC9C',
      fontFamily: 'Open Sans',
    },
    titleTextContainer: {
      paddingBottom: '4px',
      justifyContent: 'center',
      display: 'flex',
      fontFamily: 'Open Sans',
    },
    titleText: {
      color: 'black',
      fontWeight: '500',
      fontSize: '18px',
      fontFamily: 'Open Sans',
    },
    titleSubText: {
      color: 'black',
      fontWeight: '500',
      fontSize: '15px',
      fontFamily: 'Open Sans',
    },
    descriptionTextContainer: {
      justifyContent: 'center',
      display: 'flex',
      textAlign: 'center',
      marginLeft: '42px',
      marginRight: '42px',
      fontFamily: 'Open Sans',
    },
    descriptionText: {
      color: 'black',
      fontSize: '14px',
      fontFamily: 'Open Sans',
    },
    link: {
      color: '#6386ef',
      textDecoration: 'underline',
      fontFamily: 'Open Sans',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '36px',
      paddingTop: '57px',
      fontFamily: 'Open Sans',
    },
    envelopeImage: {
      width: '93px',
      height: '71px',
    },
    buttonContainer: {
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '15px',
        fontFamily: 'Open Sans',
    },
    carouselOn: {
        opacity: 0,
        height: '10px',
        fontFamily: 'Open Sans',
    },
    carousel: {
        backgroundColor: 'black',
    },
    modalContainer: {
        position: 'relative',
        fontFamily: 'Open Sans',
    },
    taglineStyle: {
        opacity: 0,
        height: '10px',
        fontFamily: 'Open Sans',
    },

    infoBtn: {
        backgroundColor: '#2d3e4f',
        fontFamily: 'Open Sans',
    },
    unsaveB: {
        opacity: 0,
        height: '5px',
        fontFamily: 'Open Sans',
    },
    saveBon: {
        opacity: 0,
        fontFamily: 'Open Sans',
    },
    closeBtn: {
        fontFamily: 'Open Sans',
    },
};

class SingleActivityModal extends React.Component {
    constructor(props) {
        super(props);
        this.changeToSecondState = this.changeToSecondState.bind(this);
        this.changeToThirdState = this.changeToThirdState.bind(this);
        this.removeFromSaved = this.removeFromSaved.bind(this);
        this.getTaglineState = this.getTaglineState.bind(this);
        this.handleTagline = this.handleTagline.bind(this);
        this.onMoreClick = this.onMoreClick.bind(this);
        this.state = {
            show: false,
            tagline: false,
            secondState: true,
            thirdState: true,
            value: '',
            // tagLongEnough: false,
        };
        this.props.actions.getTagline(this.props.userId, this.props.activityId);
    }

    changeToSecondState() {
        this.setState({
            secondState: this.props.savedAlready,
      });
      // more logic here to add this event to a user's list of saved events
    };

    getTaglineState() {
        const taglineVal = this.state.value;  //this is the most accurate one! Use this!
        // console.log("taglineVal:", taglineVal)
        const tagLength = this.state.value.length; //need to make sure it's not too long
    };

    handleTagline(e) {
        this.setState({
            value: e.target.value, //note that the taglineVal is more accurate
      });
    };

    changeToThirdState(e) {
        this.setState({
            thirdState: this.props.readyForCarousel,
            secondState: !this.props.savedAlready,
      });
      //pull the other user's who have also liked this event
    };

    removeFromSaved() {
        this.setState({
            secondState: true,
            thirdState: true,
      });
      //more logic here to remove event from the user's list of saved events
    };

    someFun = () => {
        const saved = null;
        this.props.callbackFromParent(saved);
    }

    onMoreClick = () => {
        this.setState({
            show: true,
      });
    }

    render() {
        const { classes, showModal, userBio, userTagline, date, location, price, description, link } = this.props;
        const { secondState, thirdState, value, tagLongEnough } = this.state;
        const taglineClasses = classNames({
            [classes.taglineStyle]: this.state.secondState,
        });

        const carouselClasses = classNames({
            [classes.carouselOn]: this.state.thirdState,
            [classes.carousel]: true,
        });

        const saveButtonClasses = classNames({
            [classes.buttonContainer]: true,
            [classes.unsaveB]: !this.state.thirdState,
        });

        const unSaveButtonClasses = classNames({
            [classes.buttonContainer]: true,
            [classes.saveBon]: this.state.thirdState,
        });

        let close = () => this.setState({ show: false });

        return (
            <div className="modalContainer" style={{ height: 50 }}>
                <Button
                    className = { classes.infoBtn }
                    bsStyle="primary"
                    bsSize="small"
                    onClick= {this.onMoreClick}
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
                        <Modal.Title className={ classes.titleText } id="contained-modal-title">World Series, Game 7: Dodgers vs. Astros</Modal.Title>
                        <h5 className={ classes.titleSubText }>Date: {this.props.date}</h5>
                        <h5 className={ classes.titleSubText }>Location: { this.props.location}</h5>
                        <h5 className={ classes.titleSubText }>Price: {this.props.price}</h5>
                    </Modal.Header>
                    <Modal.Body>

                        <div className={ classes.descriptionTextContainer }>
                          <span className={ classes.descriptionText }>
                            {this.props.description}
                            <p>See more at: {this.props.link} </p>
                          </span>
                        </div>

                        <div className = { saveButtonClasses }>
                          <Button onClick={ this.changeToSecondState } bastyle="primary" bsSize="large">{ this.props.onRequestClose } Save Event </Button>
                        </div>

                        <div className={ unSaveButtonClasses }>
                          <Button onClick={ this.removeFromSaved } bastyle="primary" bsSize="large">{ this.props.onRequestClose } Unsave </Button>
                        </div>

                        <div className={ taglineClasses }>
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail" validationState={ this.getTaglineState() }>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Tagline:
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="Name" value={ this.state.value } placeholder="What's your vibes?" onChange={ this.handleTagline } />
                                  </Col>
                                </FormGroup>
                            </Form>

                            <div className={ classes.buttonContainer }>
                              <Button onClick={ this.changeToThirdState } disabled={ !this.state.value }
                                bastyle="primary" bsSize="small"> { this.props.onRequestClose } Save Tagline </Button>
                            </div>

                            <div className={ classes.buttonContainer }>
                              <Button onClick={ this.changeToThirdState } bastyle="primary" bsSize="small">{ this.props.onRequestClose } Skip </Button>
                            </div>

                        </div>
                        <div className={ carouselClasses }>
                          <Carousel interval={ null }>
                              <Carousel.Item>
                                <img align="middle" src={blackBackground}/>
                                <Carousel.Caption>
                                  <h3>User 1</h3>
                                  <p>Bio: My friends and I are poor and looking for fun things to do!</p>
                                  <p>"Looking forward to tonight's concert!"</p>
                                  <FacebookLinkButton />
                                </Carousel.Caption>
                              </Carousel.Item>

                              <Carousel.Item>
                                <img alt=" " src={blackBackground}/>
                                <Carousel.Caption>
                                  <h3>User 2</h3>
                                  <p>Bio: {this.props.userBio}</p>
                                  <p>Tagline: {this.props.userTagline}</p>
                                  <FacebookLinkButton />
                                </Carousel.Caption>
                              </Carousel.Item>
                          </Carousel>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}


SingleActivityModal.propTypes = propTypes;
export default injectSheet(styles)(SingleActivityModal);
