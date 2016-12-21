/**
 * Created by danieldihardja on 21/12/16.
 */

import 'bluebird';
import PouchDB from 'pouchdb';

class ContentDbService {

    constructor() {
        this.db = null;
    }

    init() {
        console.log('content db init');
        this.db = new PouchDB('content');
        return this.db != null;
    }

    sync() {
        return Promise.resolve();
    }
}

const instance = new ContentDbService();
export default instance;