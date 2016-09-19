/**
 *  isBoolean 테스트 코드
 *  2016-09-19 권윤학
 */

var expect = require('chai').expect;

module.exports = function(_) {
  describe('isBoolean Test', function() {

    it('exists', function() {
      expect(_.isBoolean).to.be.a('function');
    });

    it('_.isBoolean(1) is true', function() {
      expect(_.isBoolean(1)).to.be.true;
    });

    it('_.isBoolean("1") is true', function() {
      expect(_.isBoolean("1")).to.be.true;
    });

    it('_.isBoolean(true) is true', function() {
      expect(_.isBoolean(true)).to.be.true;
    });

    it('_.isBoolean("true") is true', function() {
      expect(_.isBoolean("true")).to.be.true;
    });

    it('_.isBoolean(0) is false', function() {
      expect(_.isBoolean(0)).to.be.false;
    });

    it('_.isBoolean("0") is false', function() {
      expect(_.isBoolean("0")).to.be.false;
    });

    it('_.isBoolean(false) is false', function() {
      expect(_.isBoolean(false)).to.be.false;
    });

    it('_.isBoolean("false") is false', function() {
      expect(_.isBoolean("false")).to.be.false;
    });

    it('_.isBoolean("test") is false', function() {
      expect(_.isBoolean("test")).to.be.false;
    });

  });
};