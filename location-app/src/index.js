import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './component/season';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => {console.log(position)},
//         (err) => {console.log(err)}
//     );
//     return <div>Hello</div>;
// }

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {lat: null, errorMessage: ''};
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude})
            },
            (err) => {this.setState({ errorMessage: err.message})}
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>err: {this.state.errorMessage}</div>
        } 

        if (!this.state.errorMessage && this.state.lat) {
            return <div>latitude: {this.state.lat}</div>
        } 

        return <div>loading</div>;

    }
};

ReactDOM.render(<App/>, document.getElementById('root'));