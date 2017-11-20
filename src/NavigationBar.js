/*global FB*/
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader'
import NavItem from 'react-bootstrap/lib/NavItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Image from 'react-bootstrap/lib/Image'
import logo from './images/logo-white.png'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import LoginCreateAccount from './LoginCreateAccount.js';
import SavedActivities from './SavedActivities.js';
import Settings from './Settings.js';
import Homepage from './Homepage.js';


const LINKS = [
    { to: './SavedActivities.js', title: 'SAVED_ACTIVITIES'},
];

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    navbar: {
        backgroundColor: '#2C3E50',
        height: '75px',
        border: 'none',
    },
    navbarContent: {
        marginTop: '12.5px',
    },
    logoLink: {
        marginTop: '8px',
    },
    space: {
        marginBottom: '5px',
    }
}

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        // this.onNavItemClick = this.onNavItemClick.bind(this);
        // this.state = {
        //
        // };
    }


    render() {
        const { classes } = this.props;
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

         function fbLogoutUser() {
            FB.getLoginStatus(function(response) {
                if (response && response.status === 'connected') {
                    FB.logout(function(response) {
                        document.location.reload();
                    });
                }
            });
        }

        return(
            <div>
                <Navbar inverse collapseOnSelect className={classes.navbar}>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a className={classes.logoLink} href="#">
                            <img className={classes.logo} src={logo} height="30px" alt="user pic" />
                        </a>
                    </Navbar.Brand>
                        <Navbar.Toggle />
                        </Navbar.Header>
                    <Navbar.Collapse className={classes.navbarContent}>
                        <Nav pullRight>
                            <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
                                <Link to="/Homepage">Homepage</Link>
                                <div className={ classes.space } />
                                <Link to="/SavedActivities">SavedActivities</Link>
                                <div className={ classes.space } />
                                <Link to="/Settings">Settings</Link>
                                <MenuItem divider />
                                <Link to="/LoginCreateAccount">Log Out</Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>


        );
    }
};

NavigationBar.propTypes = propTypes;
export default injectSheet(styles)(NavigationBar);
