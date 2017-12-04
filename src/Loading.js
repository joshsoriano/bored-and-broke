import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import eventExample from './eventExample.png';
import NavigationBar from './NavigationBar.js';
import logo_offwhite from './images/logo-offwhite.png';
import { getUserID } from './userID';


const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {};

class Loading extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(getUserID());
    const { classes } = this.props;
    return (
     <div>
     L o a d i n g
     </div>
    );
  }
}
Loading.propTypes = propTypes;
export default injectSheet(styles)(Loading);
