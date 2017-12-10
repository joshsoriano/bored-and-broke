import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { ControlLabel } from 'react-bootstrap';
import NavigationBar from './NavigationBar.js';
import Activity from '../containers/ActivityContainer';
import { getUserID } from './userID';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#2C3E50',
        textAlign: 'center',
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '15px',
    },
    user: {
        marginRight: '15px',
        color: '#ECF0F1',
    },
    instructions: {
        marginBottom: '50px',
        color: '#ECF0F1',
        fontFamily: 'Open Sans',
    },
    row: {
        display: 'flex',
        marginBottom: '70px',
    },
    element: {
        marginLeft: '80px',
        marginRight: '80px',

    },
};

class SavedActivities extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
        const myId = getUserID();
        this.props.actions.getSaved(myId);
    }

  render() {
    const { classes } = this.props;
    console.log('saved_activities', this.props.saved_activities);

    let activityDetails = this.props.saved_activities.map(item => (
        <Activity
            activityName={item.activity.name}
            activityPrice={item.activity.price}
            activityDate={item.activity.date}
            activityLocation={item.activity.location}
            savedPage={false}
            activityLink={item.activity.link}
            activityDescription={item.activity.description}
            activityImage={item.activity.image_url}
            activityId={item.activity.id}
        />
    ));

    let final = [];
    let rowsArray = [];
    for (let i = 0; i < activityDetails.length; i++) {
        rowsArray.push(activityDetails[i]);
        if(i % 4 === 3 && i > 0 || (i === activityDetails.length - 1)) {
            final.push(<div className={classes.row}> {rowsArray} </div>);
            rowsArray = [];
        }
        if(activityDetails.length < 4 && i === activityDetails.length - 1) {
            final.push(<div className={classes.row}> {rowsArray} </div>);
        }
    }

    return (
      <div className={ classes.main }>
        <NavigationBar />
        <div className={ classes.instructions }>
            <span>Here are the activities you have saved so far:</span>
        </div>
        {final}
    </div>
    );
  }
}
SavedActivities.propTypes = propTypes;
export default injectSheet(styles)(SavedActivities);
