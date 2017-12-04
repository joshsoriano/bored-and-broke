/*global FB*/
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Image from 'react-bootstrap/lib/Image';
import logo from './images/logo-white.png';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import LoginCreateAccount from './LoginCreateAccount.js';
import SavedActivities from './SavedActivities.js';
import Settings from './Settings.js';
import Homepage from './Homepage.js';
import UserImage from './UserImage.js';
import './styles.css';


const LINKS = [
    { to: './SavedActivities.js', title: 'SAVED_ACTIVITIES'},
];

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    navbar: {
        backgroundColor: '#2C3E50',
        height: '80px',
        border: 'none',
        fontFamily: 'Open Sans',
    },
    navbarContent: {
        marginTop: '0px',
    },
    logoLink: {
        marginTop: '8px',
    },
    space: {
        marginBottom: '5px',
    },
    aNavItem: {
        marginLeft: '10px',
    },
    dropdownMenu: {
      border: 'none',
      borderRadius: '0',
      WebkitBoxShadow: 'none',
      boxShadow: 'none',
    }
}

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
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
                        // document.location.reload();
                        // console.log("logged out: " + response.status);
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
                            <NavDropdown eventKey={3} title={ <UserImage /> } id="basic-nav-dropdown">
                                <span className={classes.aNavItem}>
                                    <Link to="/Homepage">Homepage</Link>
                                </span>
                                <div className={ classes.space } />
                                <span className={classes.aNavItem}>
                                    <Link to="/SavedActivities">Saved Activities</Link>
                                </span>
                                <div className={ classes.space } />
                                <span className={classes.aNavItem}>
                                    <Link to="/Settings">Settings</Link>
                                </span>
                                <MenuItem divider />
                                <div className={ classes.space } />
                                <span className={classes.aNavItem}>
                                    <Link to="/LoginCreateAccount" onClick={fbLogoutUser}>Logout</Link>
                                </span>
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
