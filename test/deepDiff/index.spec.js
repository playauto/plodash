/**
 *  deepDiff 테스트 코드
 *  2016-08-29 권윤학
 */

var expect = require('chai').expect;

module.exports = function(_) {
  describe('deepDiff Test', function() {

    it('exists', function() {
      expect(_.deepDiff).to.be.a('function');
    });


  });
};