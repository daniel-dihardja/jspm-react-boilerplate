/**
 * Created by danieldihardja on 21/12/16.
 */

import 'bluebird';
import PouchDB from 'pouchdb';

class ContentDbService {

    constructor() {
        this.db = null;
        this.isReady = null;
    }

    init() {
        console.log('content db init');
        if(this.isReady !== null) {
            return this.isReady;
        }
        this.db = new PouchDB('content');
        this.isReady = (this.db !== null);
        return this.isReady;
    }

    contentWelcome() {
        return Promise.resolve({title: 'welcome'});
    }

    sync() {
        return Promise.resolve();
    }
}

// export a singleton instance
export const $contentDB = new ContentDbService();
