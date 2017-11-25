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


class BoredAndBroke extends React.Component {
  render() {
    // const status = 'This is our project:';
    const loggedIn = true;
    const { classes } = this.props;
    return (

// note: may not need the <Switch> to wrap the route below
// <Route exact path="/" render={() => (
//   loggedIn ? (
//     <Redirect to="/Homepage"/>
//   ) : (
//     <Redirect to="/LoginCreateAccount"/>
//   )
// )}/>
// before the switch statement:
// <ul>
//     <li><Link to="/Homepage">Homepage</Link></li>
//     <li><Link to="/SavedActivities">SavedActivities</Link></li>
//     <li><Link to="/Settings">Settings</Link></li>
//     <li><Link to="/LoginCreateAccount">LoginCreateAccount</Link></li>
// </ul>


         <Router>
             <div>
                 <ul>
                     <li><Link to="/Homepage">Homepage</Link></li>
                     <li><Link to="/SavedActivities">SavedActivities</Link></li>
                     <li><Link to="/Settings">Settings</Link></li>
                     <li><Link to="/LoginCreateAccount">LoginCreateAccount</Link></li>
                 </ul>

                 <Switch>
                     <Route exact path="/" render={() => (
                         <LoginCreateAccount/>
                     )}/>
                     <Route path="/Homepage" component={Homepage}/>
                     <Route path="/SavedActivities" component={SavedActivities}/>
                     <Route path="/Settings" component={Settings}/>
                     <Route path="/LoginCreateAccount" component={LoginCreateAccount}/>
                     <Route path="/Loading" component={Loading}/>
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
