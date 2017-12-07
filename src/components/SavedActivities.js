import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { ControlLabel } from 'react-bootstrap';
import NavigationBar from './NavigationBar.js';
import Activity from '../containers/ActivityContainer';

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
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.main }>
        <NavigationBar />
        <div className={ classes.instructions }>
            <span>Here are the activities you have saved so far:</span>
        </div>
          <div className={ classes.row }>
            <Activity
                savedPage={true}
            >
            </Activity>
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
    );
  }
}
SavedActivities.propTypes = propTypes;
export default injectSheet(styles)(SavedActivities);
