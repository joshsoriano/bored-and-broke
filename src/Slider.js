import React from 'react';

class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 50};
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(this.state.value);
        this.setState({value: event.target.value});
    }

    // handleSubmit(event) {
    //     event.preventDefualt();
    // }

    render() {
        return (
            <div id="slidecontainer">
                <label>
                <input type="range" min="0" max="100" id="radius" value={this.state.value} onChange={this.handleChange} /> {this.state.value} </label>
            </div>
        );
    }

}
export default Slider;
