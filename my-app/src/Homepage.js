import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        backgroundColor: '#63d8ed',
        textAlign: 'center',
        height: '600px',
        // marginLeft: '50px',
    },
    titleContainer: {
        paddingTop: '20px',
        paddingBottom: '20px',

    },
    title: {
        color: '#efedff',
        fontWeight: '500',
        fontSize: '24px',
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '15px',
    },
    logo: {
        paddingLeft: '10px',
    },
    user: {
        paddingRight: '10px',
    },
    homepageSettings: {
        display: 'flex',
        justifyContent: 'center',
    },
    zipAndCity: {
        marginRight: '100px',
    },
    pickRadius: {
        marginRight: '100px',
    },
    resultsContainer: {
        paddingTop: '20px',
    },
    firstRow: {
        display: 'flex',
    },
    element: {
        border: '1px solid white',
        marginLeft: '80px',
        marginRight: '80px',
    },
    elementText: {
        padding: '15px',
    },
};

class Homepage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={ classes.main }>
        <div className={ classes.navBar }>
            <span className={ classes.logo }>Bored and Broke</span>
            <div className={ classes.user }>Jane Doe ⬇️ </div>
        </div>
        <div className={ classes.homepageSettings }>
            <div className={ classes.zipAndCity }>90045 <span>⬇️</span> </div>
            <div className={ classes.pickRadius }>pick Radius</div>
            <div className={ classes.priceRange }> $0-$50</div>
        </div>
        <div className={ classes.titleContainer }>
            <span className={ classes.title }>Bored and Broke</span>
        </div>
        <div className={ classes.resultsContainer }>
            <div className={ classes.firstRow }>
                <div className={ classes.element }>
                    <span className={ classes.elementText }>Concert1</span>
                </div>
                <div className={ classes.element }>
                    <span className={ classes.elementText }>Hike1</span>
                </div>
                <div className={ classes.element }>
                    <span className={ classes.elementText }>BeachDay1</span>
                </div>
                <div className={ classes.element }>
                    <span className={ classes.elementText }>Concert2</span>
                </div>
                <div className={ classes.element }>
                    <span className={ classes.elementText }>DogDay1</span>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
Homepage.propTypes = propTypes;
export default injectSheet(styles)(Homepage);
