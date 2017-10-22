import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Carousel from 'react-bootstrap/lib/Carousel';
import Button from 'react-bootstrap/lib/Button';

const propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func,
};

const defaultProps = {
  // hasEmail: false,
  onRequestClose: () => {},
};

const styles = {
    // main: {
    //     backgroundColor: '#6386ef',
    //     textAlign: 'center',
    //     height: '300px',
    //     // marginLeft: '50px',
    // },
    // titleContainer: {
    //     paddingTop: '20px',
    //     paddingBottom: '20px',
    //
    // },
    // title: {
    //     color: '#efedff',
    //     fontWeight: '500',
    //     fontSize: '24px',
    // },
    // navBar: {
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     paddingTop: '15px',
    // },
    // logo: {
    //     paddingLeft: '10px',
    // },
    // user: {
    //     paddingRight: '10px',
    // },
    // homepageSettings: {
    //     display: 'flex',
    //     justifyContent: 'center',
    // },
    // zipAndCity: {
    //     marginRight: '100px',
    // },
    // pickRadius: {
    //     marginRight: '100px',
    // },
    // resultsContainer: {
    //     paddingTop: '20px',
    // },
    // firstRow: {
    //     display: 'flex',
    // },
    // element: {
    //     border: '1px solid white',
    //     marginLeft: '80px',
    //     marginRight: '80px',
    // },
    // elementText: {
    //     padding: '15px',
    // },
    // space: {
    //     marginBottom: '100px',
    // },
    main: {
      position: 'relative',
      height: '300px',
      width: '450px',
      margin: 'auto',
      background: 'white',
    },
    titleTextContainer: {
      paddingBottom: '4px',
      justifyContent: 'center',
      display: 'flex',
    },
    titleText: {
      color: '#b5ccbb',
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
      color: '#b5ccbb',
      fontSize: '14px',
    },
    honeyEmail: {
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
};

class Homepage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
    //   <div className={ classes.main }>
    //     <div className={ classes.navBar }>
    //         <span className={ classes.logo }>Bored and Broke</span>
    //         <div className={ classes.user }>Jane Doe ⬇️ </div>
    //     </div>
    //     <div className={ classes.titleContainer }>
    //         <span className={ classes.title }>Bored and Broke</span>
    //     </div>
    //     <div>
    //         <Carousel>
    //             <Carousel.Item>
    //                 <img width={900} height={500} alt="900x500" src="https://github.com/joshsoriano/bored-and-broke/blob/front-end/beachDayexample.png"/>
    //                 <Carousel.Caption>
    //                     <h3>First slide label</h3>
    //                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //                 </Carousel.Caption>
    //             </Carousel.Item>
    //         </Carousel>
    //     </div>
    //     <div className={ classes.space } />
    //     <div>
    //         <Button bastyle="primary" bsSize="large">Click Me!!!!</Button>
    //     </div>
    //   </div>
    // );
        <div className={ classes.main }>
          <div>
            // <Button onClick={ this.props.onRequestClose } />
            <Button bastyle="primary" bsSize="large">{ this.props.onRequestClose }</Button>
          </div>
        //   <div className={ classes.imageContainer }>
        //     <img alt="" src="//cdn.joinhoney.com/images/no-email.svg" className={ classes.envelopeImage } />
        //   </div>
          <div className={ classes.titleTextContainer }>
            <span className={ classes.titleText }>
              Oops, we don’t have your email yet.
            </span>
          </div>
          <div className={ classes.descriptionTextContainer }>
            <span className={ classes.descriptionText }>
              We first need your email address to send you a gift card. Please
              contact us at&nbsp;
              <a href="mailto:yourfriends@joinhoney.com">
                <span className={ classes.honeyEmail }>yourfriends@joinhoney.com</span>
              </a>
              &nbsp;to add your email to your account.
            </span>
          </div>
        </div>
    );
  }
}
Homepage.propTypes = propTypes;
export default injectSheet(styles)(Homepage);



// from past: ----------------------------------------------


// const React = require('react');
// const injectSheet = require('react-jss').default;
// const { constants, CloseButton } = require('@honeyscience/honey-react-common');
//
// const { Component, PropTypes } = React;
// const { Colors } = constants;
//
// const propTypes = {
//   classes: PropTypes.object.isRequired,
//   onRequestClose: PropTypes.func,
// };

// const defaultProps = {
//   hasEmail: false,
//   onRequestClose: () => {},
// };
//
// const styles = {
//   main: {
//     position: 'relative',
//     height: '300px',
//     width: '450px',
//     margin: 'auto',
//     background: 'white',
//   },
//   titleTextContainer: {
//     paddingBottom: '4px',
//     justifyContent: 'center',
//     display: 'flex',
//   },
//   titleText: {
//     color: Colors.grey_xxdark,
//     fontWeight: '500',
//     fontSize: '18px',
//   },
//   descriptionTextContainer: {
//     justifyContent: 'center',
//     display: 'flex',
//     textAlign: 'center',
//     marginLeft: '42px',
//     marginRight: '42px',
//   },
//   descriptionText: {
//     color: Colors.grey_xxdark,
//     fontSize: '14px',
//   },
//   honeyEmail: {
//     color: Colors.main,
//     textDecoration: 'underline',
//   },
//   imageContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     paddingBottom: '36px',
//     paddingTop: '57px',
//   },
//   envelopeImage: {
//     width: '93px',
//     height: '71px',
//   },
// };
//
// class NoEmailPopUp extends Component {
//   render() {
//     const { classes } = this.props;
//
//     return (
//       <div className={ classes.main }>
//         <div>
//           <CloseButton onClick={ this.props.onRequestClose } />
//         </div>
//         <div className={ classes.imageContainer }>
//           <img alt="" src="//cdn.joinhoney.com/images/no-email.svg" className={ classes.envelopeImage } />
//         </div>
//         <div className={ classes.titleTextContainer }>
//           <span className={ classes.titleText }>
//             Oops, we don’t have your email yet.
//           </span>
//         </div>
//         <div className={ classes.descriptionTextContainer }>
//           <span className={ classes.descriptionText }>
//             We first need your email address to send you a gift card. Please
//             contact us at&nbsp;
//             <a href="mailto:yourfriends@joinhoney.com">
//               <span className={ classes.honeyEmail }>yourfriends@joinhoney.com</span>
//             </a>
//             &nbsp;to add your email to your account.
//           </span>
//         </div>
//       </div>
//     );
//   }
// }
//
// NoEmailPopUp.propTypes = propTypes;
// NoEmailPopUp.defaultProps = defaultProps;
//
// module.exports = injectSheet(styles)(NoEmailPopUp);
