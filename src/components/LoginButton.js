/**
    This file creates a Facebook login button using the Facebook API.
**/

/*global FB*/
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Button } from 'react-bootstrap';
import fbButton from '../images/fb_login.png';
import { saveUserID, saveUserName } from './userID';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    loginButton: {
        cursor: 'pointer',
    },
};

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_time: false
        }
    }

    componentDidMount() {
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '1960748417506782',
                cookie     : true,  // enable cookies to allow the server to access
                                  // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.1' // use version 2.1
            });

            FB.getLoginStatus(function(response) {
                this.statusChangeCallback(response);
            }.bind(this));
        }.bind(this);

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML =
              'Thanks for logging in, ' + response.name + '!';
        });
    }

    redirectLoggedInUser() {
        window.location = "/Loading";
    }

    // This is called with the results from from FB.getLoginStatus().
    statusChangeCallback(response) {
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.testAPI();
            FB.api('/me', function(response) {
                console.log('Good to see you, ' + response.name + '.');
                saveUserID(response.id);
                saveUserName(response.name);
                this.redirectLoggedInUser();
            }.bind(this));
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            document.getElementById('status').innerHTML = 'Please log ' +
              'into this app.';
        } else {
            console.log('Not logged in to Facebook');
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
        }
    }

    // This function is called when someone finishes with the Login Button.
    checkLoginState() {
        FB.getLoginStatus(function(response) {
            this.statusChangeCallback(response);
        }.bind(this));
    }

    handleClick() {
        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');
                    saveUserID(response.id);
                    saveUserName(response.name);
                    window.location = "/Loading";
                }.bind(this));
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    }

    mouseOver() {
        return "";
    }

    render() {
        const { classes } = this.props;
        return <img src={ fbButton } height='50px' onMouseOver={ this.mouseOver } className={ classes.loginButton } onClick={this.handleClick}/>
    }
}

LoginButton.propTypes = propTypes;
export default injectSheet(styles)(LoginButton);
