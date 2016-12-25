import React from 'react';
import AppPage from './app-page';
import $contentDb from '../services/content-db';
import {Toolbar, Page, Button} from 'react-onsenui';

class Home extends AppPage {

    constructor(props) {
        super(props);
        console.log('props');
    }

    componentDidMount() {
        $contentDb.init();
        $contentDb.sync().then(function(res) {
            console.log('synced');
        });
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className="center">Home</div>
            </Toolbar>
        );
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar.bind(this)}>
                <section style={{margin: '16px'}}>
                    <h1>Home</h1>
                </section>
                <section style={{margin: '16px'}}>
                    <Button onClick={super.nextPage.bind(this, 'about')}>About</Button>
                </section>
                <section style={{margin: '16px'}}>
                    <Button onClick={super.nextPage.bind(this, 'contact')}>Contact</Button>
                </section>
            </Page>
        );
    }
}

export default Home;