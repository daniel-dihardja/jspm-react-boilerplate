/**
 * Created by danieldihardja on 21/12/16.
 */
class AppDbService {

    constructor() {

    }

    init() {
        console.log('app db init');
        return true;
    }
}

const instance = new AppDbService();
export default instance;