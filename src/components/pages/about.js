import React from 'react';
import AppPage from './app-page';
import {$contentDB} from '../services/content-db';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';

class About extends AppPage {

    constructor(props) {
        super(props);
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className="left">
                    <BackButton>Back</BackButton>
                </div>
                <div className="center">About</div>
            </Toolbar>
        );
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar.bind(this)}>
                <section style={{margin: '16px'}}>
                    <h1>About</h1>
                </section>
            </Page>
        );
    }
}

export default About;
