import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';

class App extends React.Component {
    state = {lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    render() {
        if (this.state.lat && !this.state.errorMessage){
            return <SeasonsDisplay lat={this.state.lat} />
        }
        if (!this.state.lat || this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }
        return <div>Loading....</div>
    }
}

ReactDOM.render(<App /> , document.getElementById('root'));