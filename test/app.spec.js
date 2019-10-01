// Import chai.
let chai = require('chai'); 
// Tell chai that we'll be using the "should" style assertions.
chai.should();

let add = require('../src/app').add;

describe('Test Add Function', () => {
    it('Result of 2 + 2 should be 4', () => {
        add(2,2).should.equal(4);
      });
})