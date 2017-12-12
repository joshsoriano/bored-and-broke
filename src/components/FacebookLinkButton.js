/**
    This file creates a button with a link to a specified user's Facebook profile.
**/

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Button } from 'react-bootstrap';

const propTypes = {
    classes: PropTypes.object.isRequired,
    userID: PropTypes.string,
};

const styles = {
    btn: {
        backgroundColor: '#3B5998',
        color: 'white',
        fontFamily: 'Open Sans',
    },
};

class FacebookLinkButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const link = 'https://www.facebook.com/' + this.props.userID;
        window.open(link);
    }

    render() {
        const { classes } = this.props;
        return(
            <Button className={ classes.btn } onClick={ this.handleClick }>View Profile on Facebook</Button>
        );
    }
}

FacebookLinkButton.propTypes = propTypes;
export default injectSheet(styles)(FacebookLinkButton);
