import React from 'react';
import ReactDOM from 'react-dom';
// import injectSheet from 'react-jss';
// import './index.css';
// import Homepage from './Homepage.js';
// import LoginCreateAccount from './LoginCreateAccount.js';
// import SavedActivities from './SavedActivities.js';
// import Settings from './Settings.js';
import SingleActivity from './SingleActivity.js';
import PropTypes from 'prop-types';

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
    const { classes } = this.props;
    return (
          <div className={ classes.main }>
            <div>
                <SingleActivity />
            </div>

         </div>
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
