import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Checkbox, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        color: '#16A085'
    },
    formInput: {
        padding: '10px'
    },
    searchButton: {
        fontWeight: 'bold',
        marginTop: '15px',
        color: '#E74C3C'
    }
};

class HomepageSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: '',
            distance: 45,
            price: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefualt();
    }

    render() {
        const { classes } = this.props;
        return (
            <Form inline className={ classes.main } controlId="homepageSettings" onSubmit={ this.handleSubmit }>
                <Col componentClass={ControlLabel} sm={4}>
                    <FormGroup className={ classes.formInput } controlId="formZipcode" >
                        Zipcode: <br/>
                        <FormControl name="zipcode" placeholder="Enter Zipcode" value={this.state.zipcode}
                        onChange={ this.handleChange }/>
                    </FormGroup>
                </Col>
                <Col componentClass={ControlLabel} sm={4}>
                    <FormGroup className={ classes.formInput } controlId="formDistance" >
                        Pick Radius: <br/>
                        <FormControl type="range" min="0" max="100" name="distance"
                        value={this.state.distance}
                        onChange={this.handleChange}/> <br/>
                        {this.state.distance} miles
                    </FormGroup>
                </Col>
                <Col componentClass={ControlLabel} sm={4}>
                    <FormGroup className={ classes.formInput } controlId="formPrice">
                        $0 to $100 <br/>
                        <FormControl type="range" min="0" max="100" name="price"
                        value={this.state.price}
                        onChange={this.handleChange}/> <br/>
                        ${this.state.price}
                    </FormGroup>
                </Col>
                <Col sm={12}>
                <div>
                    <Button className={ classes.searchButton } type="submit">Search</Button>
                </div>
                </Col>
            </Form>
        );
    }
}
HomepageSettings.propTypes = propTypes;
export default injectSheet(styles)(HomepageSettings);
