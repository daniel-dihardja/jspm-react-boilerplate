/**
 * Created by danieldihardja on 12/01/17.
 */
var System = require('jspm');


/**
 * Solution to test es6 modules with JSPM in node ( mocha )
 */
System.import('./test/unit/demo.test')
    .then((res) => {
        run();
    })
    .catch((err) => {
        console.log(err);
        run();
    });