/**
 * Created by danieldihardja on 21/12/16.
 */

import 'bluebird';
import PouchDB from 'pouchdb';

class AppDbService {

    constructor() {
        this.db = null;
    }

    init() {
        console.log('app db init');
        this.db = new PouchDB('content');
        return this.db != null;
    }
}

const instance = new AppDbService();
export default instance;