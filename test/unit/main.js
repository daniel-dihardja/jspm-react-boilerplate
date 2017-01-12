/**
 * Created by danieldihardja on 12/01/17.
 */
var System = require('jspm');
System.import('./test/unit/demo.test')
    .then((res) => {
        run();
    })
    .catch((err) => {
        console.log(err);
        run();
    });