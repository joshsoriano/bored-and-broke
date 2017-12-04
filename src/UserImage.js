/*global FB*/
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

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
      return (
         <img className={ classes.userImage } src="http://graph.facebook.com/10215062908025231/picture?height=50"></img>
      );
   }
};

UserImage.propTypes = propTypes;
export default injectSheet(styles)(UserImage);
