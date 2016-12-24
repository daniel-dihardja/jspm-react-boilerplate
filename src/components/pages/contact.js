import React from 'react';
import AppPage from './app-page';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';

class Contact extends AppPage {

    constructor(props) {
        super(props);
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className="left">
                    <BackButton>Back</BackButton>
                </div>
                <div className="center">Contact</div>
            </Toolbar>
        );
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar.bind(this)}>
                <section style={{margin: '16px'}}>
                    <h1>Contact</h1>
                </section>
            </Page>
        );
    }
}

export default Contact;