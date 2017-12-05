/*global FB*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Homepage from './components/Homepage.js';
import LoginCreateAccount from './components/LoginCreateAccount.js';
import SavedActivities from './components/SavedActivities.js';
import Settings from './components/Settings.js';
import Loading from './components/Loading.js';
import injectSheet from 'react-jss';
import App from './containers/AppContainer';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, createLogger());
export const store = createStore(rootReducer, middleware);


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
    let loggedIn = true;
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

     function checkStatus() {
       FB.getLoginStatus(function(response) {
           alert("checked login status");
           if (response.status === 'connected') {
             loggedIn = true;
           }
         });
     }

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        loggedIn ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/LoginCreateAccount'
          }}/>
        )
      )}/>
    )
    return (
         <Router>
             <div>
                 <Switch>
                     <Route exact path="/" render={() => (
                         <LoginCreateAccount/>
                     )}/>
                     <PrivateRoute path="/Homepage" component={Homepage}/>
                     <PrivateRoute path="/SavedActivities" component={SavedActivities}/>
                     <PrivateRoute path="/Settings" component={Settings}/>
                     <Route path="/LoginCreateAccount" component={LoginCreateAccount}/>
                     <PrivateRoute path="/Loading" component={Loading}/>

                     <Route path="/DemoTest" component={App}/>

                </Switch>
            </div>
         </Router>
      );
    }
  }



BoredAndBroke.propTypes = propTypes;

ReactDOM.render(
  <Provider store={store}>
    <BoredAndBroke
      classes={styles.main}
    />
  </Provider>,
  document.getElementById('root')
);
