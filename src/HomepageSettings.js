import React from 'react';
import Slider from './Slider.js';
import { Row, Col } from 'react-bootstrap';

class HomepageSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log('zip' + this.state.value);
        console.log(this.Slider.state.value);
        event.preventDefualt();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Row>
                    <Col sm={4}>
                        <span> Zipcode: </span>
                        <input id="zipcodeInput" placeholder="Enter Zipcode" value={this.state.value} onChange={this.handleChange} />
                    </Col>
                    <Col sm={4}> Pick Radius:
                        <Slider />
                    </Col>
                    <Col sm={4}> $0 to $100
                        <Slider />
                    </Col>
                </Row>
                <div>
                    <button type="submit">Search</button>
                </div>
            </form>
        );
    }

}
export default HomepageSettings;
