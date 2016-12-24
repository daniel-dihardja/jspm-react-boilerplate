/**
 * Created by danieldihardja on 01/12/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './states/home';
import About from './states/about';
import Contact from './states/contact';

import '../jspm_packages/npm/onsenui@2.0.5/css/onsenui.css!';
import '../jspm_packages/npm/onsenui@2.0.5/css/onsen-css-components.css!';

import ons from 'onsenui';
import {Navigator, Toolbar, Page, Button, BackButton} from 'react-onsenui';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.index = 0;
    }

    goBack(navigator) {
        navigator.popPage();
    }

    renderToolbar(route, navigator) {
        const backButton = route.hasBackButton ? <BackButton onClick={this.goBack.bind(this, navigator)}>Back</BackButton> : null;
        return (
            <Toolbar>
                <div className="left">{backButton}</div>
                <div className="center">{route.title}</div>
            </Toolbar>
        );
    }

    pushPage(navigator) {
        navigator.pushPage({
            title: `Another Page ${this.index}`,
            hasBackButton: true
        });
        this.index ++;
    }

    renderPage(route, navigator) {
        return(
            <Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
                <section style={{margin: '16px', textAlign: 'center'}}>
                    <Button onClick={this.pushPage.bind(this, navigator)}>
                        Push Page
                    </Button>
                </section>
            </Page>
        );
    }

    render() {
        return (
            <Navigator
                renderPage={this.renderPage.bind(this)}
                initialRoute={{
                    title: 'First Page',
                    hasBackButton: false
                }}>
            </Navigator>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);