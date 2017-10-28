import React from 'react';
import Slider from './Slider.js';

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
        event.preventDefualt();
    }

    render() {
        return (
            <div class="container">
                <form onSubmit={this.handleSubmit}>
                    <div class="row">
                        <div class="col-sm-4">
                            <span> Zipcode: </span>
                            <input id="zipcodeInput" placeholder="Enter Zipcode" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div class="col-sm-4"> Pick Radius:
                            <Slider />
                        </div>
                        <div class="col-sm-4"> $0 to $100
                            <Slider />
                        </div>

                    </div>
                    <div>
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
        );
    }

}
export default HomepageSettings;
