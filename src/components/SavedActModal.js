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
import {getUserID} from './userID';

const propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func,
    savedAlready: PropTypes.bool,
    readyForCarousel: PropTypes.bool,
    userBio: PropTypes.string,
    userTagline: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    id: PropTypes.number,
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
    showUserTagline: {
        opacity: 0,
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
        this.handleTagline = this.handleTagline.bind(this);
        this.onMoreInfo = this.onMoreInfo.bind(this);
        const dateT = this.props.date;
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
            show: false,
            tagline: false,
            secondState: this.props.savedAlready,
            thirdState: true,
            value: '',
            formattedDate: dateF4
            // tagLongEnough: false,
        };
        console.log(this.state.formattedDate);
    }


    changeToSecondState() {
        this.setState({
            secondState: this.props.savedAlready,
      });
    };

    getTaglineState() {
        const taglineVal = this.state.value;  //this is the most accurate one! Use this!
        console.log("taglineVal:", taglineVal)
        const tagLength = this.state.value.length; //need to make sure it's not too long
    };

    handleTagline(e) {
        this.setState({
            value: e.target.value, //note that the taglineVal is more accurate
      });
      console.log("tagline is:", this.state.value);
    };

    changeToThirdState(e) {
        this.setState({
            thirdState: this.props.readyForCarousel,
            secondState: !this.props.savedAlready,
      });
      let taglineVal = this.state.value;
      let userId = getUserID();
      this.props.actions.updateTagline(userId, this.props.id, taglineVal);
    };

    removeFromSaved() {
        let userId = getUserID();
        this.props.actions.unsaveActivity(userId, this.props.id);
        this.setState({
            secondState: true,
            thirdState: true,
      });
      window.location = '/SavedActivities';
    };


    onMoreInfo = () => {
        let userId = getUserID();
        this.props.actions.getTagline(userId, this.props.id);
        this.setState({
            show: true
        })
    };
    //
    // stringInsert = () => {
    //     const dateToUse = this.props.date;
    //     console.log('date', dateToUse);
        // const slash = "-";
        // const dateFormatted = [dateToUse.slice(0, 3), slash, dateToUse.slice(3)].join('');
        // console.log(dateFormatted);

    // };

    render() {
        const { classes, showModal, userBio, userTagline, date, location, price, description, link, apisource } = this.props;
        const { secondState, thirdState, value, tagLongEnough, formattedDate } = this.state;
        const taglineClasses = classNames({
            [classes.taglineStyle]: this.state.secondState,
        });

        const carouselClasses = classNames({
            [classes.carouselOn]: this.state.thirdState,
            [classes.carousel]: true,
        });

        const showTaglineClasses = classNames({
            [classes.showUserTagline]: !this.state.thirdState,
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
                    onClick= {this.onMoreInfo}
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
                        <Modal.Title className={ classes.titleText } id="contained-modal-title">{this.props.name}</Modal.Title>
                        <h5 className={ classes.titleSubText }>Date: {this.state.formattedDate}</h5>
                        <h5 className={ classes.titleSubText }>Location: {this.props.location}</h5>
                        <h5 className={ classes.titleSubText }>Price: ${this.props.price}</h5>
                        <p className={showTaglineClasses}> Here is your tagline: {this.props.tagline} </p>
                    </Modal.Header>
                    <Modal.Body>

                        <div className={ classes.descriptionTextContainer }>
                          <span className={ classes.descriptionText }>
                            {this.props.description}
                            <p><a href={this.props.link}>See more on { this.props.apisource }</a></p>
                          </span>
                        </div>

                        <div className={ unSaveButtonClasses }>
                          <Button onClick={ this.removeFromSaved } bastyle="primary" bsSize="large">{ this.props.onRequestClose } Unsave </Button>
                        </div>


                        <div className={ taglineClasses }>
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail">
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
                                bastyle="primary" bsSize="small"> { this.props.onRequestClose } Save/update tagline </Button>
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
