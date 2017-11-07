import React from 'react';
import { Row, Col } from 'react-bootstrap';

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
        return (
            <form onSubmit={this.handleSubmit}>
                <Row>
                    <Col sm={4}>
                        <span> Zipcode: </span>
                        <input
                            name="zipcode"
                            placeholder="Enter Zipcode"
                            value={this.state.zipcode}
                            onChange={this.handleChange} />
                    </Col>
                    <Col sm={4}> Pick Radius:
                        <div id="slidecontainer">
                            <label>
                                <input type="range" min="0" max="100"
                                name="distance"
                                value={this.state.distance}
                                onChange={this.handleChange} />
                                {this.state.distance} miles
                            </label>
                        </div>
                    </Col>
                    <Col sm={4}> $0 to $100
                        <div id="slidecontainer">
                            <label>
                                <input type="range" min="0" max="100"
                                name="price"
                                value={this.state.price}
                                onChange={this.handleChange} />
                                ${this.state.price}
                            </label>
                        </div>
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
