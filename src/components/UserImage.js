/*global FB*/
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { getUserID } from './userID';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    userImage: {
        borderRadius: '50%',
    },
};

class UserImage extends React.Component {
    render() {
      const { classes } = this.props;
      const userID = getUserID();
      const imgSrc = "http://graph.facebook.com/" + userID + "/picture?height=50";
      return (
         <img className={ classes.userImage } src={ imgSrc } alt='User'></img>
      );
   }
};

UserImage.propTypes = propTypes;
export default injectSheet(styles)(UserImage);
