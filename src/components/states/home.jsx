import React from 'react';

import appDbService from '../services/app-db';
import contentDbService from '../services/content-db';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        appDbService.init();
        contentDbService.init();
        contentDbService.sync()
            .then(function(res) {
                console.log('synced');
            })
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;