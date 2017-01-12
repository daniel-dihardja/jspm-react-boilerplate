/**
 * Created by danieldihardja on 03/01/17.
 */

import chai from 'chai';
import {$contentDB} from 'project/components/services/content-db';

var assert = chai.assert;

describe('demo', function() {
    describe('test1', function() {
        it('should pass', function(done) {
            $contentDB.contentStartPage().then(function(res) {
                assert.equal(res.title, 'welcome');
                done();
            });
        })
    });
});