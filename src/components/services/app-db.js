/**
 * Created by danieldihardja on 21/12/16.
 */

import 'bluebird';
import PouchDB from 'pouchdb';

class AppDbService {

    constructor() {
        this.db = null;
        this.isReady = null;
    }

    init() {
        console.log('app db init');
        if(this.isReady !== null) {
            return this.isReady;
        }
        this.db = new PouchDB('app');
        this.isReady = (this.db !== null);
        return this.isReady;
    }
}

const instance = new AppDbService();
export default instance;