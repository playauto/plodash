/**
 *  isNullOrEmpty 테스트 로직
 *  2016-09-01 권윤학
 */

var expect = require('chai').expect;

module.exports = function(_) {
  describe('isNullOrEmpty Test', function() {

    it('exists', function() {
      expect(_.isNullOrEmpty).to.be.a('function');
    });

    it('_.isNullOrEmpty() 테스트', function(){
      expect(_.isNullOrEmpty(undefined)).to.be.true;
      expect(_.isNullOrEmpty(null)).to.be.true;
      expect(_.isNullOrEmpty('')).to.be.true;
      expect(_.isNullOrEmpty([])).to.be.false;
      expect(_.isNullOrEmpty({})).to.be.false;
    });

    it('_.isNullOrEmpty(undefined)', function() {
      expect(_.isNullOrEmpty(undefined)).to.be.true;
    });

    it('_.isNullOrEmpty(null)', function() {
      expect(_.isNullOrEmpty(null)).to.be.true;
    });

    it('_.isNullOrEmpty("")', function() {
      expect(_.isNullOrEmpty('')).to.be.true;
    });

    it('_.isNullOrEmpty(true)', function() {
      expect(_.isNullOrEmpty(true)).to.be.false;
    });

    it('_.isNullOrEmpty(false)', function() {
      expect(_.isNullOrEmpty(false)).to.be.false;
    });
  });
};
