import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Homepage from './containers/HomepageContainer';
import LoginCreateAccount from './components/LoginCreateAccount.js';
import SavedActivities from './containers/SavedActivitiesContainer';
import Settings from './containers/SettingsContainer';
import Loading from './containers/LoadingContainer';

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
    return (
         <Router>
             <div>
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
  <Provider store={store}>
    <BoredAndBroke
        classes={styles.main}
    />
  </Provider>,
  document.getElementById('root')
);
