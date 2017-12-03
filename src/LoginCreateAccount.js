import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import LoginButton from './LoginButton.js';
import logoBlack from './images/logo-black.png';
import logoArt from './images/logo3.png';
import { CSSTransitionGroup } from 'react-transition-group';
import './styles.css';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    background: {
        textAlign: 'center',
        height: '900px',
        backgroundImage: `url(${logoArt})`,
    },
    leftMain: {
        backgroundImage: `url(${logoArt})`,
        height: '100%',
    },
    rightMain: {
        backgroundColor: '#ECF0F1',
        height: '100%',
    },
    instructions: {
        font: "Verdana",
        margin: 'auto',
        marginBottom: '50px',
        fontSize: '15px',
    },
    envelopeImage: {
        display: 'block',
        margin: 'auto',
    },
    boxSpacer: {
        height: '25%',
    },
    logoSpacer: {
        height: '10%',
    },
    instructionSpacer: {
        height: '15%',
    },
    loginSpacer: {
        height: '5%',
    },
    loginButton: {
        margin: 'auto',
    },
    box: {
      borderRadius: '5px',
      background: 'white',
      padding: '20px',
      width: '550px',
      height: '300px',
      textAlign: 'center',
      margin: 'auto',
      boxShadow: '0px 0px 10px 1px #CCCCCC',
    },
};

class LoginCreateAccount extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false }

    setInterval(() => {
      this.setState({ show: !this.state.show })
    }, 5000)
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={ classes.background }>
            <div className={ classes.boxSpacer }></div>
            <CSSTransitionGroup
              transitionName="login"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}>
              <div className={ classes.box }>
                <div className={ classes.logoSpacer }></div>
                <img src={logoBlack} className={ classes.envelopeImage } alt="" height='60px' />
                <div className={ classes.instructionSpacer }></div>
                <span className={ classes.instructions }>Connect with Facebook to start browsing events near you!</span>
                <div className={ classes.loginSpacer }></div>
                <LoginButton />
              </div>
            </CSSTransitionGroup>
        </div>
      </div>


    );
  }
}
LoginCreateAccount.propTypes = propTypes;
export default injectSheet(styles)(LoginCreateAccount);

// const { classes } = this.props;
// return (
//   <div className={ classes.main }>
//     <Col className={ classes.leftMain } md={6}>
//     </Col>
//     <Col className={ classes.rightMain } md={6}>
//       <div className={ classes.logoSpacer } />
//       <CSSTransitionGroup
//         transitionName="login"
//         transitionAppear={true}
//         transitionAppearTimeout={500}
//         transitionEnter={false}
//         transitionLeave={false}>
//         <img src={logoLightTeal} className={ classes.envelopeImage } height='80px' />
//       </CSSTransitionGroup>
//       <div className={ classes.instructionSpacer } />
//       <div className={ classes.instructions }>
//           <CSSTransitionGroup
//             transitionName="login"
//             transitionAppear={true}
//             transitionAppearTimeout={500}
//             transitionEnter={false}
//             transitionLeave={false}>
//             <span>Connect with Facebook to start browsing events near you!</span>
//           </CSSTransitionGroup>
//       </div>
//       <div className={ classes.loginButton }>
//           <CSSTransitionGroup
//             transitionName="login"
//             transitionAppear={true}
//             transitionAppearTimeout={500}
//             transitionEnter={false}
//             transitionLeave={false}>
//             <LoginButton />
//           </CSSTransitionGroup>
//       </div>
//     </Col>
//   </div>
// );
