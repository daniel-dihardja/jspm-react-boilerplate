/**
 * Created by danieldihardja on 01/12/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './states/home.jsx!';
//import About from './states/about.jsx!';
//import Contact from './states/contact.jsx!';

class App extends React.Component {

    render() {
        return (<Home />);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);