/**
 * Created by danieldihardja on 01/12/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './states/home';
import About from './states/about';
import Contact from './states/contact';

import {Page, Button, Toolbar, ToolbarButton, Icon} from 'react-onsenui';

import '../jspm_packages/npm/onsenui@2.0.5/css/onsenui.css!';
import '../jspm_packages/npm/onsenui@2.0.5/css/onsen-css-components.css!';

import ons from 'onsenui';

class App extends React.Component {

    onClick() {
        ons.notification.alert('Hello world!');
    }

    render() {
        return (
            <Page
                renderToolbar={ () =>
                    <Toolbar>
                        <div className='left'>Left</div>
                        <div className='center'>Onsen Demo</div>
                        <div className='right'>
                            <ToolbarButton onClick={this.onClick.bind(this)}>
                                <Icon icon='md-more-vert' />
                            </ToolbarButton></div>
                    </Toolbar>
                }>
                <Button onClick={this.onClick.bind(this)}>Tap!</Button>
            </Page>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);