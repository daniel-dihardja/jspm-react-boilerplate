/**
 * Created by danieldihardja on 24/12/16.
 */
import React from 'react';

class AppPage extends React.Component {
    constructor(props) {
        super(props);
    }

    nextPage(nameId, params) {
        this.props.navigator.pushPage({
            nameId: nameId,
            params: params
        });
    }
}

export default AppPage;