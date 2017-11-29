import React from 'react';
import $ from 'jquery';
import * as activity from './backend/activity.js';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Button from 'react-bootstrap/lib/Button';
import eventExample from './eventExample.png';
import logo_black from './images/logo-black.png';
import NavigationBar from './NavigationBar.js';
import logo_offwhite from './images/logo-offwhite.png';
import HomepageSettings from './HomepageSettings.js';
import SingleActivityModal from './SingleActivityModal.js';
import Activity from './Activity.js';
// import LoginCreateAccount from './LoginCreateAccount.js';
// import SavedActivities from './SavedActivities.js';
// import Settings from './Settings.js';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#ECF0F1',
        textAlign: 'center',
    },
    titleContainer: {
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    title: {
        color: '#2C3E50',
        fontSize: '36px',
    },
    logo_offwhite: {
        paddingLeft: '10px',
        color: '#ECF0F1',
    },
    user: {
        paddingRight: '10px',
        color: '#ECF0F1',
    },
    homepageSettings: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    zipAndCity: {
        marginRight: '120px',
        color: '#16A085',
    },
    pickRadius: {
        marginRight: '120px',
        color: '#ECF0F1',
    },
    priceRange: {
        color: '#ECF0F1',
    },
    resultsContainer: {
        padding: '25px',
        // justifyContent: 'center',
    },
    row: {
        display: 'flex',
        marginBottom: '10px',
    },
    element: {
        marginLeft: '80px',
        marginRight: '80px',
    },
};

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activities: [] };
  }

  componentDidMount() {
    this.Homepage();
  }

  Homepage() {
    // For demo.
    this.setState({ activities: activity.retrieve() });

    // Eventually we will use this function to load the activities.
    // this.setState({ activities: database.getFutureActivities() });
  }

  render() {

    // Map through the activities list here.
    //
    //
    const { classes } = this.props;

    // const routing =
    //     (<Router>
    //         <div>
    //             <ul>
    //                 <li><Link to="/Homepage">Homepage</Link></li>
    //                 <li><Link to="/SavedActivities">SavedActivities</Link></li>
    //                 <li><Link to="/Settings">Settings</Link></li>
    //                 <li><Link to="/LoginCreateAccount">LoginCreateAccount</Link></li>
    //             </ul>
    //
    //             <Route exact path="/" render={() => (
    //                 <LoginCreateAccount/>
    //             )}/>
    //             <Route path="/Homepage" component={Homepage}/>
    //             <Route path="/SavedActivities" component={SavedActivities}/>
    //             <Route path="/Settings" component={Settings}/>
    //             <Route path="/LoginCreateAccount" component={LoginCreateAccount}/>
    //         </div>
    //     </Router>);

    return (
      <div className={ classes.main }>
        <NavigationBar />
        <div className={ classes.homepageSettings }>
            <HomepageSettings />
        </div>
        <div className={ classes.titleContainer }>
            <span className={ classes.title }>Your Activity Feed</span>
        </div>
        <div className={ classes.resultsContainer }>
            <div className={ classes.row }>

                <Activity />
                <Activity />
                <Activity />
                <Activity />
            </div>
            <div className={ classes.row }>
                <Activity />
                <Activity />
                <Activity />
                <Activity />
            </div>
        </div>
      </div>
    );
  }
}
Homepage.propTypes = propTypes;
export default injectSheet(styles)(Homepage);
