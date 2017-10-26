import React from 'react';
import ReactDOM from 'react-dom';
// import injectSheet from 'react-jss';
// import './index.css';
import PropTypes from 'prop-types';
import Homepage from './Homepage.js';
// import LoginCreateAccount from './LoginCreateAccount.js';
// import SavedActivities from './SavedActivities.js';
// import Settings from './Settings.js';
// import SingleActivityModal from './SingleActivityModal.js';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
=======
>>>>>>> 780432d78f174eb654578967ade6a414a6738184


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
                <Homepage />
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
