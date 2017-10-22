import React from 'react';

class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(this.state.value);
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefualt();
    }

    render() {
        return (
            <div id="slidecontainer">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <input type="range" min="1" max="100" id="radius" value={this.state.value} onChange={this.handleChange} /> {this.state.value} miles</label>
                </form>
            </div>
        );
    }

}
export default Slider;
