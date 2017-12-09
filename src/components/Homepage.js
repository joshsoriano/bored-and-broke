import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import NavigationBar from './NavigationBar.js';
import HomepageSettings from './HomepageSettings.js';
import SingleActivityModal from './SingleActivityModal.js';
import Activity from '../containers/ActivityContainer.js';
// import LoginCreateAccount from './LoginCreateAccount.js';
// import SavedActivities from './SavedActivities.js';
// import Settings from './Settings.js';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { getUserID, getUserName } from './userID';
import BioModal from '../containers/BioModalContainer.js';

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
        fontFamily: 'Open Sans',
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
  }

  componentWillMount() {
    if(getUserID() === null) {
      window.location = "/LoginCreateAccount";
    }
  }

  componentDidMount() {
    this.Homepage();
  }

  Homepage() {
    // Un-hardcode the price limit.
    const userID = getUserID();
    const userName = getUserName();
    this.props.actions.getActivities(50 /* price limit */);
    this.props.actions.findOrCreateUser(userID, userName);
  }


  // <div>this.state.activities.map(function(activity){
  //     return <div>{activity.name}</div>
  // });
  // </div>

//   <button onClick={this.props.actions.getActivities(50)}>Test!</button>
//   <div style={{ padding: '30px' }}>{this.props.activities}</div>

// <Activity
//     savedPage={true}
//     activityName={item.name}
// >
// </Activity>
//
// <Activity
//     savedPage={true}
// >
// </Activity>
//
// <Activity
//     savedPage={true}
// >
// </Activity>
//
// <Activity
//     savedPage={true}
// >
// </Activity>

  render() {
    // Map through the activities list here.
    const { classes } = this.props;

    const activityDetails = this.props.activities.map(item => (
        <Activity
            activityName={item.name}
            activityPrice={item.price}
            activityDate={item.date}
            activityLocation={item.location}
            savedPage={true}
            activityLink={item.link}
            activityDescription={item.description}
        />
    ));

    let final = [];
    let rowsArray = [];
    for (let i = 0; i < activityDetails.length; i++) {
        rowsArray.push(activityDetails[i]);
        if(i % 4 === 3 && i > 0) {
            final.push(<div className={classes.row}> {rowsArray} </div>);
            rowsArray = [];
        }
    }

    return (
      <div className={ classes.main }>
        <BioModal />
        <NavigationBar />
        <div className={ classes.homepageSettings }>
            <HomepageSettings />
        </div>
        <div className={ classes.resultsContainer }>
            {final}
        </div>
      </div>
    );
  }
}
Homepage.propTypes = propTypes;
export default injectSheet(styles)(Homepage);
