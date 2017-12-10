import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Checkbox, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { getUserID } from './userID';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

const propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    main: {
        color: '#16A085',
        fontFamily: 'Open Sans',
    },
    formInput: {
        padding: '10px'
    },
    searchButton: {
        fontWeight: 'bold',
        marginTop: '15px',
        color: '#E74C3C',
        fontFamily: 'Open Sans',
    }
};

class HomepageSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
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
        event.preventDefault();
        this.props.actions.getActivities(getUserID(), this.state.price);
    }

    render() {
        const { classes } = this.props;
        return (
            <Form inline className={ classes.main } controlId="homepageSettings" onSubmit={ this.handleSubmit }>
                <Col componentClass={ControlLabel} sm={6}>
                    <FormGroup className={ classes.formInput } controlId="formZipcode" >
                        City: <br/>
                        <FormControl name="city" value={this.state.city} onChange={this.handleChange} componentClass="select" placeholder="select">
                          <option value="select">select</option>
                          <option value="LosAngeles">Los Angeles</option>
                          <option value="Westchester">Westchester</option>
                          <option value="PlayaVista">Playa Vista</option>
                          <option value="PlayaDelRey">Playa Del Rey</option>
                          <option value="MarinaDelRey">Marina Del Rey</option>
                          <option value="VeniceBeach">Venice Beach</option>
                          <option value="ManhattanBeach">Manhattan Beach</option>
                          <option value="HermosaBeach">Hermosa Beach</option>
                          <option value="PalosVerdes">Palos Verdes</option>
                          <option value="ArtsDistrict">Arts District</option>
                          <option value="SoHo">SoHo</option>
                          <option value="PacificPalisades">Pacific Palisades</option>
                          <option value="Malibu">Malibu</option>
                          <option value="SilverLake">Silver Lake</option>
                        </FormControl>
                    </FormGroup>
                </Col>
                <Col componentClass={ControlLabel} sm={6}>
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
