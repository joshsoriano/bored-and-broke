import React from 'react';

class Slider extends React.Component {
    render() {
    return (
        <div id="slidecontainer">
            <form>
                <input type="range" min="1" max="100" id="myRange"></input>
            </form>
        </div>
    );
    }
}
export default Slider;
