import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './component/season';
import Loader from './component/loader';

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
    }

    // state = {lat: null, errorMessage: ''};
    // samething as using constructor and initial state inside it   

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message})
        );
    }

    //尽量避免conditional render在 render方法中，一般情况都拿出来放在单独函数里。
    //否则这里需要在每个return都外包一层border，代码会很多冗余

    renderContent () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>err: {this.state.errorMessage}</div>;
        } 

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat = {this.state.lat}/>;
        } 

        return <Loader message="Please accept loction request" />;
    }

    render() {
        return <div className="border red">
            {this.renderContent()}
        </div>;
    }
};

ReactDOM.render(<App/>, document.getElementById('root'));