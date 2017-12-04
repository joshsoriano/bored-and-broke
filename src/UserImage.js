/*global FB*/
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = { };

class UserImage extends React.Component {
    render() {
     return (
        <img src="http://graph.facebook.com/10215062908025231/picture?height=50"></img>
     );
   }
};

UserImage.propTypes = propTypes;
export default injectSheet(styles)(UserImage);
