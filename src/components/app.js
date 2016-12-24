/**
 * Created by danieldihardja on 01/12/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

import '../jspm_packages/npm/onsenui@2.0.5/css/onsenui.css!';
import '../jspm_packages/npm/onsenui@2.0.5/css/onsen-css-components.css!';

import ons from 'onsenui';
import {Navigator, Page} from 'react-onsenui';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.setupPages();
        this.index = 0;
    }

    setupPages() {
        this.pages = {
            home: Home,
            about: About,
            contact: Contact
        };
    }

    renderPage(route, navigator) {
        var key = route.nameId + '-' + this.index;

        // wrap the component inside an object.
        // so it can be used to dynamicly create components via tag
        var o = {
            component: this.pages[route.nameId]
        };

        return <o.component key={key} route={route} navigator={navigator} />;
    }

    render() {
        return (
            <Navigator
                renderPage={this.renderPage.bind(this)}
                initialRoute={{
                    nameId: 'home'
                }}>
            </Navigator>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);