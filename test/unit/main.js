/**
 * Created by danieldihardja on 12/01/17.
 */
var System = require('jspm');

/**
 * Solution to test es6 modules in mocha with jspm dependencies
 */
System.import('./test/unit/all.test')
    .then((res) => {
        run();
    })
    .catch((err) => {
        console.log(err);
        run();
    });