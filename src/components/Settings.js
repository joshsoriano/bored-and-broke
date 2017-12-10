// /*global FB*/
// import React from 'react';
// import PropTypes from 'prop-types';
// import injectSheet from 'react-jss';
// import Button from 'react-bootstrap/lib/Button';
// import { Form, FormGroup, ControlLabel, FormControl, Col, Collapse, Well } from 'react-bootstrap'
// import NavigationBar from './NavigationBar.js';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
// import { getUserID, removeUserID, getUserName } from './userID';
//
// const propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// const styles = {
//     main: {
//         backgroundColor: '#16A085',
//         textAlign: 'center',
//         height: '900px',
//         fontFamily: 'Open Sans',
//     },
//     user: {
//         marginRight: '15px',
//         color: '#ECF0F1',
//     },
//     instructions: {
//         marginBottom: '50px',
//         color: '#ECF0F1',
//         marginTop: '20px',
//         fontFamily: 'Open Sans'
//     },
//     formInput: {
//         width: '500px',
//         margin: 'auto',
//         color: '#ECF0F1',
//         fontFamily: 'Open Sans'
//     },
//     name: {
//         color: '#d4d4d4',
//         fontFamily: 'Open Sans',
//     },
//     deactivateWell: {
//         color: 'black'
//     },
//     deactivateBtns: {
//         marginTop: '5px'
//     },
//     deactivateAccnt: {
//         marginTop: '10px',
//         marginBottom: '5px'
//     },
//     save: {
//         fontWeight: 'bold',
//         color: '#2C3E50',
//         backgroundColor: '#ECF0F1',
//         marginTop: '15px',
//         fontFamily: 'Open Sans'
//     },
//     rightCol: {
//         justifyContent: 'left',
//         display: 'flex'
//     }
// };
//
// const userName = getUserName();
// const userID = getUserID();
//
// class Settings extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleBio = this.handleBio.bind(this);
//       this.deactivateAccount = this.deactivateAccount.bind(this);
//       // this.fbLogoutUser = this.fbLogoutUser.bind(this);
//       this.saveSettings = this.saveSettings.bind(this);
//
//       alert(this.props.user.bio);
//
//       this.state = {
//         value: this.props.user.bio
//       };
//
//     }
//
//     //  fbLogoutUser() {
//     //    console.log('logging out user');
//     //    removeUserID();
//     //     FB.getLoginStatus(function(response) {
//     //         console.log(response);
//     //         if (response) {
//     //             FB.logout(function(response) {
//     //                 window.location = '/LoginCreateAccount';
//     //             });
//     //         }
//     //     });
//     // }
//
//     componentDidMount() {
//       this.props.actions.getUser(userID);
//       // this.props.user.bio
//     }
//
//     handleBio = (e) => {
//       this.setState({
//           value: e.target.value, //note that the taglineVal is more accurate
//       });
//     }
//
//     saveSettings() {
//       alert(this.state.value);
//       const bio = this.state.value;
//       this.props.actions.saveUserSettings(bio, userID);
//       // alert(typeof(this.state.value));
//       this.props.actions.getUser(userID);
//     }
//
//     deactivateAccount = () => {
//       this.props.actions.removeUser(userID);
//     }
//
//   render() {
//     const { classes } = this.props;
//     window.fbAsyncInit = function() {
//       FB.init({
//         appId            : '1960748417506782',
//         autoLogAppEvents : true,
//         xfbml            : true,
//         version          : 'v2.11'
//       });
//     };
//
//     (function(d, s, id){
//        var js, fjs = d.getElementsByTagName(s)[0];
//        if (d.getElementById(id)) {return;}
//        js = d.createElement(s); js.id = id;
//        js.src = "https://connect.facebook.net/en_US/sdk.js";
//        fjs.parentNode.insertBefore(js, fjs);
//      }(document, 'script', 'facebook-jssdk'));
//
//      function fbLogoutUser() {
//        removeUserID();
//         FB.getLoginStatus(function(response) {
//             if (response && response.status === 'connected') {
//                 FB.logout(function(response) {
//                     // document.location.reload();
//                     // console.log("logged out: " + response.status);
//                 });
//             }
//         });
//     }
//
//     return (
//       <div className={ classes.main }>
//         <NavigationBar />
//
//         <div>
//             <h4 className={ classes.instructions }>Please enter your information below. Feel free to change it whenever!</h4>
//         </div>
//         <div className={ classes.formInput }>
//             <Form horizontal>
//
//                 <FormGroup controlId="formHorizontalName">
//                   <Col componentClass={ControlLabel} sm={6}>
//                     Name
//                   </Col>
//                   <Col className={ classes.rightCol } sm={6}>
//                     <FormControl.Static className={ classes.name }>
//                       { userName }
//                     </FormControl.Static>
//                   </Col>
//                 </FormGroup>
//
//                 <FormGroup controlId="formHorizontalBio">
//                   <Col componentClass={ControlLabel} sm={6}>
//                     Bio
//                   </Col>
//                   <Col className={ classes.rightCol } sm={6}>
//                     <textarea className="form-control" rows="3" value={ this.state.value } placeholder="Describe yourself!" onChange={ this.handleBio }></textarea>
//                   </Col>
//                 </FormGroup>
//
//                 <FormGroup controlId="formHorizontalDeactivate" >
//                   <Col componentClass={ControlLabel} sm={6}>
//                     No longer want to use Bored&Broke?
//                   </Col>
//                   <Col className={ classes.rightCol } sm={6}>
//                     <Button onClick={() => this.setState({ open: !this.state.open })} className={ classes.deactivateAccnt }>
//                       Deactivate Account
//                     </Button>
//                     <Collapse in={this.state.open}>
//                       <div>
//                         <Well className={ classes.deactivateWell }>
//                           Are you sure you want to remove your account from BoredBroke.com
//                           <div className={ classes.deactivateBtns }>
//                               <Button onClick={() => this.setState({ open: !this.state.open })}>
//                                 NO!
//                               </Button>
//                               <Button onClick={() => {fbLogoutUser, this.deactivateAccount()}} href="/LoginCreateAccount" bsStyle="danger">
//                                   Yes
//                               </Button>
//                           </div>
//                         </Well>
//                       </div>
//                     </Collapse>
//                   </Col>
//                 </FormGroup>
//
//                 <FormGroup controlId="formHorizontalSave" >
//                   <Col sm={12}>
//                     <Button className={ classes.save } onClick={() => this.saveSettings} href="/Homepage">Save</Button>
//                   </Col>
//                 </FormGroup>
//
//             </Form>
//         </div>
//       </div>
//     );
//   }
// }
// Settings.propTypes = propTypes;
// export default injectSheet(styles)(Settings);

/*global FB*/
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Button from 'react-bootstrap/lib/Button';
import { Form, FormGroup, ControlLabel, FormControl, Col, Collapse, Well } from 'react-bootstrap'
import NavigationBar from './NavigationBar.js';
import { getUserName, getUserID, removeUserID } from './userID';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#16A085',
        textAlign: 'center',
        height: '900px',
        fontFamily: 'Open Sans',
    },
    user: {
        marginRight: '15px',
        color: '#ECF0F1',
    },
    instructions: {
        marginBottom: '50px',
        color: '#ECF0F1',
        marginTop: '20px',
        fontFamily: 'Open Sans'
    },
    formInput: {
        width: '500px',
        margin: 'auto',
        color: '#ECF0F1',
        fontFamily: 'Open Sans'
    },
    name: {
        color: '#d4d4d4',
        fontFamily: 'Open Sans',
    },
    deactivateWell: {
        color: 'black'
    },
    deactivateBtns: {
        marginTop: '5px'
    },
    deactivateAccnt: {
        marginTop: '10px',
        marginBottom: '5px'
    },
    save: {
        fontWeight: 'bold',
        color: '#2C3E50',
        backgroundColor: '#ECF0F1',
        marginTop: '15px',
        fontFamily: 'Open Sans'
    },
    rightCol: {
        justifyContent: 'left',
        display: 'flex'
    }
};

const id = getUserID();
const name = getUserName();

class Settings extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      value: this.props.user.bio
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
    this.deactivateAccount = this.deactivateAccount.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  saveSettings() {
    this.props.actions.saveUserSettings(this.state.value, id);
    this.props.actions.getUser(id);
    alert('Settings saved!');
  }

  deactivateAccount() {
    removeUserID();
     FB.getLoginStatus(function(response) {
         if (response && response.status === 'connected') {
             FB.logout(function(response) {
                  alert('logged out!');
                 // document.location.reload();
                 // console.log("logged out: " + response.status);
             });
         }
     });
     this.props.actions.removeUser(id);
     return <Redirect to='/LoginCreateAccount'/>
  }

  saveSettings() {
    this.props.actions.saveUserSettings(this.state.value, id);
    this.props.actions.getUser(id);
  }



  render() {
    const { classes } = this.props;
    const userName = getUserName();

    window.fbAsyncInit = function() {
        FB.init({
          appId            : '1960748417506782',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v2.11'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

    return (
      <div className={ classes.main }>
        <NavigationBar />

        <div >
            <Col className={ classes.instructions } sm={12}>
                <span>Please enter your information below. Feel free to change it whenever!</span>
            </Col>
        </div>
        <div className={ classes.formInput }>
            <Form horizontal>

                <FormGroup controlId="formHorizontalName">
                  <Col componentClass={ControlLabel} sm={6}>
                    Name
                  </Col>
                  <Col className={ classes.rightCol } sm={6}>
                    <FormControl.Static className={ classes.name }>
                      { userName }
                    </FormControl.Static>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalBio">
                  <Col componentClass={ControlLabel} sm={6}>
                    Bio
                  </Col>
                  <Col className={ classes.rightCol } sm={6}>
                    <textarea className="form-control" value={this.state.value} onChange={this.handleChange} rows="3" placeholder="Talk about yourself!"></textarea>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalDeactivate" >
                  <Col componentClass={ControlLabel} sm={6}>
                    No longer want to use Bored&Broke?
                  </Col>
                  <Col className={ classes.rightCol } sm={6}>
                    <Button onClick={() => this.setState({ open: !this.state.open })} className={ classes.deactivateAccnt }>
                      Deactivate Account
                    </Button>
                    <Collapse in={this.state.open}>
                      <div>
                        <Well className={ classes.deactivateWell }>
                          Are you sure you want to remove your account from BoredBroke.com
                          <div className={ classes.deactivateBtns }>
                              <Button onClick={() => this.setState({ open: !this.state.open })}>
                                NO!
                              </Button>
                              <Button onClick={this.deactivateAccount} bsStyle="danger">
                                  Yes
                              </Button>
                          </div>
                        </Well>
                      </div>
                    </Collapse>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalSave" >
                  <Col sm={12}>
                    <Button className={ classes.save } onClick={ this.saveSettings } >Save</Button>
                  </Col>
                </FormGroup>

            </Form>
        </div>
      </div>
    );
  }
}
Settings.propTypes = propTypes;
export default injectSheet(styles)(Settings);
