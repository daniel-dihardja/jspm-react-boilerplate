/**
 * Created by danieldihardja on 03/01/17.
 */

import chai from 'chai';
import {$contentDB} from 'project/components/services/content-db';

var assert = chai.assert;

describe('demo', () => {
    describe('$contentDB', () => {
        it('should pass', (done) =>{
            $contentDB.contentStartPage().then((res) => {
                assert.equal(res.title, 'welcome');
                done();
            });
        })
    });
});