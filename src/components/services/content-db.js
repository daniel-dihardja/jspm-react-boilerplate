/**
 * Created by danieldihardja on 21/12/16.
 */

import 'bluebird';

class ContentDbService {

    constructor() {

    }

    init() {
        console.log('content db init');
        return true;
    }

    sync() {
        return Promise.resolve();
    }
}

const instance = new ContentDbService();
export default instance;