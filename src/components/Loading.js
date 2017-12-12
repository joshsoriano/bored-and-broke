/**
    This file controls the loading page which happens immediately after login. It sets up all necessary data for the homepage.
**/

import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { BrowserRouter as Redirect } from 'react-router-dom';
import { getUserID, getUserName } from './userID';
import '../styles.css';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    background: {
        textAlign: 'center',
        height: '900px',
        backgroundColor: '#ECF0F1',
    },
    spacer: {
        height: '25%',
    },
};

class Loading extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ticketMaster: false,
            eventbrite: false,
            eventful: false,
            called: false, // True if the APIs have been called.
            cities: ["Los Angeles", "Seattle", "San Francisco"]
        }
    }

    componentDidMount() {
        this.props.actions.isUpdateNeeded();
        this.props.actions.findOrCreateUser( getUserID(), getUserName());
    }

    retrieveTicketMaster(city) {
        // Add TicketMaster activities.
        $.getJSON("https://app.ticketmaster.com/discovery/v2/events.json", {
            countryCode: "US",
            city: city,
            apikey: "uWhf6Zv92eNoIQA4E16MdCe7HC2DSEMS"
        }).done((result) => {
            result._embedded.events.map((event) => {
                let activity = { };

                // Build the activity object.
                activity.name = event.name;
                activity.date = event.dates.start.localDate.replace(/-/g, '');
                activity.location = event._embedded.venues[0].name; // Use the first venue name available.
                activity.link = event.url;
                activity.source = "TicketMaster";
                activity.description = "Click the link for more information.";
                activity.imageUrl = event.images[0].url; // Use the first image available.
                activity.price = event.priceRanges ? event.priceRanges[0].min : -1;

                // Add it to the database.
                this.addActivity(activity, city);
                if (city === this.state.cities[this.state.cities.length - 1]) {
                    this.setState({ ticketMaster: true });
                }
            })
        })
    }

    retrieveEventbrite(city) {
        // Add Eventbrite activities.
        $.getJSON("https://www.eventbriteapi.com/v3/events/search/?token=WJKCHNMPIP6DBF5S3XQF", {
            "location.address": city,
            "location.within": "10mi"
        }).done((result) => {
            result.events.map((event) => {
                let activity = { };

                // Build the activity object.
                activity.name = event.name.text;
                activity.date = event.start.local.replace(/-/g, '').substring(0, 8);
                // activity.location This API doesn't provide location info.
                activity.link = event.url;
                activity.source = "Eventbrite";
                activity.description = "Click the link for more information.";
                activity.imageUrl = event.logo ? event.logo.url : ""; // In case there isn't a logo.
                activity.price = -1; // This API doesn't provide price either.

                // Add it to the database.
                this.addActivity(activity, city);
                if (city === this.state.cities[this.state.cities.length - 1]) {
                    this.setState({ eventbrite: true });
                }
            })
        });
    }

    retrieveEventful(city) {
        // Add Eventful activities.
        $.getJSON("http://api.eventful.com/json/events/search?callback=?", {
            app_key: "XgSXTL5TkHCfnxCm",
            location: city,
            date: "Future",
            within: 10,
            units: "mi"
        }).done((result) => {
            result.events.event.map((event) => {
                let activity = { };

                // Build the activity object.
                activity.name = event.title;
                activity.date = event.start_time.replace(/-/g, '').substring(0, 8);
                activity.location = event.venue_name;
                activity.link = event.url;
                activity.source = "Eventful";
                activity.description = event.description;
                activity.imageUrl = event.image ? event.image.medium.url : "";  // In case there isn't an image.
                activity.price = -1; // Not available for this API.

                // Add it to the database.
                this.addActivity(activity, city);
                if (city === this.state.cities[this.state.cities.length - 1]) {
                    this.setState({ eventful: true });
                }
            })
        });
    }

    addActivity(activity, city) {
        this.props.actions.addActivity(
            activity.name,
            activity.date,
            activity.location,
            activity.imageUrl,
            activity.link,
            activity.price,
            activity.description,
            activity.source,
            city
        );
    }

    updateDatabase() {
        for (let i=0; i < this.state.cities.length; i++) {
            this.retrieveTicketMaster(this.state.cities[i]);
            this.retrieveEventbrite(this.state.cities[i]);
            this.retrieveEventful(this.state.cities[i]);
        }
        this.setState({called: true});
    }

    render() {
        const { classes } = this.props;

        // is_update_needed and is_first_time are null until the response comes back.
        if ( (this.props.is_update_needed != null && this.props.is_first_time != null) &&
           (!this.props.is_update_needed || (this.state.ticketMaster && this.state.eventbrite && this.state.eventful)) ) {

            // We want to redirect when we know that:
            //  (1) An update is not needed OR the activities have all been added.
            //  (2) And that findOrCreateUser has set the is_first_time boolean.
            return <Redirect to='/Homepage'/>

        } else if (!this.state.called && this.props.is_update_needed) {
            // We only want to call the APIs once.
            this.updateDatabase();
            return (
                <div className={ classes.background }>
                    <div className={ classes.spacer }></div>
                    <div className="spinner">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div>
                </div>
            )

        } else {
            return (
                <div className={ classes.background }>
                    <div className={ classes.spacer }></div>
                    <div className="spinner">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div>
                </div>
            )
        }
    }
}

Loading.propTypes = propTypes;
export default injectSheet(styles)(Loading);
