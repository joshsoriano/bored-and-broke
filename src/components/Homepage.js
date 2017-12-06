import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import NavigationBar from './NavigationBar.js';
import HomepageSettings from './HomepageSettings.js';
import SingleActivityModal from './SingleActivityModal.js';
import { getUserID } from './userID';
import Activity from './Activity.js';
// import LoginCreateAccount from './LoginCreateAccount.js';
// import SavedActivities from './SavedActivities.js';
// import Settings from './Settings.js';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import dataImage1 from '../images/fakeData1.png';
import dataImage2 from '../images/fakeData2.png';
import dataImage3 from '../images/fakeData3.png';
import dataImage4 from '../images/dataImage4.png';

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
    this.state = { activities: [] };
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
    // Eventually we will use this function to load the activities.
    // this.setState({ activities: database.getFutureActivities() });
  }


  render() {
    // Map through the activities list here.
    const { classes } = this.props;

    return (
      <div className={ classes.main }>
        <NavigationBar />
        <div className={ classes.homepageSettings }>
            <HomepageSettings />
        </div>
        <div className={ classes.resultsContainer }>
            <div className={ classes.row }>

                <Activity
                    eventName="Holiday Charity Event"
                    eventImage={ dataImage1 }
                    eventDescription="Sat, December 16, 2017 5:30 PM – 8:00 PM FREE"
                >
                </Activity>
                <Activity
                    eventName="NFL Alumni CFL Event"
                    eventImage={ dataImage2 }
                    eventDescription="Sun, December 10, 2017 6:00 PM – 9:00 PM $20"
                >
                </Activity>
                <Activity
                    eventName="Hiphop&R&B concert"
                    eventImage={ dataImage3 }
                    eventDescription="Tue, Jan 9 2018, 9:00 PM - 11:30 PM $15"
                >
                </Activity>
                <Activity
                    eventName="Garibaldi Holiday Concert"
                    eventImage={ dataImage4 }
                    eventDescription="Fri, December 8, 2017 7:30 PM – 10:00 PM FREE"
                >
                </Activity>

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
