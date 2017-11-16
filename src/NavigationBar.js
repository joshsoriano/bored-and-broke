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
// import SavedActivities from './SavedActivities.js'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
// import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'


const LINKS = [
    { to: './SavedActivities.js', title: 'SAVED_ACTIVITIES'},
];

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    navbar: {
        backgroundColor: '#2C3E50',
        height: '100px',
        border: 'none',
    },
    navbarContent: {
        marginTop: '12.5px',
    },
    logoLink: {
        marginTop: '8px',
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

    // onNavItemClick() {
    //     this.context.router.push('./SavedActivities');
    //     // <Redirect to='/SavedActivities'/>
    //     <Route exact path="/" render={() => (
    //         <Redirect to="/SavedActivities"/>
    //     )}/>
    //         // {() => hashHistory.push(`/mySite/accountview?id=${account.AccountName}`)}
    // }
    // onClick={ this.onNavItemClick }

    // <Router>
    //     <div>
    //         <ul>
    //             <li><Link to="/SavedActivities">SavedActivities</Link></li>
    //         </ul>
    //         <Route path="/SavedActivities" component={SavedActivities}/>
    //     </div>
    // </Router>


    render() {
        const { classes } = this.props;
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
                                <MenuItem eventKey={3.1}>
                                    <Link to="/Homepage">Homepage</Link>
                                </MenuItem>
                                <MenuItem eventKey={3.2}>
                                    <Link to="/SavedActivities">SavedActivities</Link>
                                </MenuItem>
                                <MenuItem eventKey={3.3}>
                                    <Link to="/Settings">Settings</Link>
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.4}>
                                    <Link to="/LoginCreateAccount">Log Out</Link>
                                </MenuItem>
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
