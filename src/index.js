/*global FB*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
// import injectSheet from 'react-jss';
// import './index.css';
import PropTypes from 'prop-types';
import Homepage from './Homepage.js';
import LoginCreateAccount from './LoginCreateAccount.js';
import SavedActivities from './SavedActivities.js';
import Settings from './Settings.js';
import Loading from './Loading.js';
import fs from 'fs';

// window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '1960748417506782',
//     xfbml      : true,
//     version    : 'v2.11'
//   });
//   FB.AppEvents.logPageView();
// };
//
// (function(d, s, id){
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) {return;}
//    js = d.createElement(s); js.id = id;
//    js.src = "https://connect.facebook.net/en_US/sdk.js";
//    fjs.parentNode.insertBefore(js, fjs);
//  }(document, 'script', 'facebook-jssdk'));



const propTypes = {
    classes: PropTypes.object.isRequired,
};


const styles = {
    main: {
        backgroundColor: '#64d8ed',
        width: '43px',
        textAlign: 'center',
    },
};

let loggedIn = false;

class BoredAndBroke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }
  componentWillMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1960748417506782',
        cookie     : true,  // enable cookies to allow the server to access
                          // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
      });

      FB.getLoginStatus(function(response) {
        // this.checkStatus(response);
        if (response.status == 'connected') {
          this.state.loggedIn = true;;
        }
      }.bind(this));
    }.bind(this);

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }
  render() {
    // const status = 'This is our project:';
    const { classes } = this.props;
    // let authed = await checkStatus();
    // async function checkStatus() {
    //
    // }

    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //   <Route {...rest} render={props => (
    //     loggedIn ? (
    //       <Component {...props}/>
    //     ) : (
    //       <Redirect to={{
    //         pathname: '/LoginCreateAccount'
    //       }}/>
    //     )
    //   )}/>
    // )

    // async function checkStatus(response) {
    //   if (response.status == 'connected') {
    //     return true;
    //   }
    //   // console.log('checking status');
    //   // FB.getLoginStatus(function(response) {
    //   //     if (response && response.status === 'connected') {
    //   //          console.log("connected was true");
    //   //         return true;
    //   //     } else {
    //   //       console.log('connected was false');
    //   //       return false;
    //   //     }
    //   // });
    // }

    function PrivateRoute ({component: Component, authed, ...rest}) {
      return (
        <Route
          {...rest}
          render={(props) => authed
            ? <Component {...props} />
            : <Redirect to={{pathname: '/LoginCreateAccount'}} />}
        />
      )
    }
    return (
         <Router>
             <div>
                 <Switch>
                     <Route exact path="/" render={() => (
                         <LoginCreateAccount/>
                     )}/>
                     <PrivateRoute authed={ this.state.loggedIn } path="/Homepage" component={ Homepage }/>
                     <PrivateRoute authed={ this.state.loggedIn } path="/SavedActivities" component={ SavedActivities }/>
                     <PrivateRoute authed={ this.state.loggedIn } path="/Settings" component={ Settings }/>
                     <Route path="/LoginCreateAccount" component={ LoginCreateAccount }/>
                     <PrivateRoute authed={ this.state.loggedIn } path="/Loading" component={ Loading }/>
                </Switch>
            </div>
         </Router>
      );
    }
  }


BoredAndBroke.propTypes = propTypes;

ReactDOM.render(
  <BoredAndBroke
    classes={styles.main}
  />,
  document.getElementById('root')
);
