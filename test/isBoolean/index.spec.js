/**
 *  toBoolean 테스트 코드
 *  2016-09-19 권윤학
 */

var expect = require('chai').expect;

module.exports = function(_) {
  describe('toBoolean Test', function() {

    it('exists', function() {
      expect(_.toBoolean).to.be.a('function');
    });
    
    it('_.toBoolean(1) is true', function() {
      expect(_.toBoolean(1)).to.be.true;
    });

    it('_.toBoolean("1") is true', function() {
      expect(_.toBoolean("1")).to.be.true;
    });

    it('_.toBoolean(true) is true', function() {
      expect(_.toBoolean(true)).to.be.true;
    });

    it('_.toBoolean("true") is true', function() {
      expect(_.toBoolean("true")).to.be.true;
    });

    it('_.toBoolean(0) is false', function() {
      expect(_.toBoolean(0)).to.be.false;
    });

    it('_.toBoolean("0") is false', function() {
      expect(_.toBoolean("0")).to.be.false;
    });

    it('_.toBoolean(false) is false', function() {
      expect(_.toBoolean(false)).to.be.false;
    });

    it('_.toBoolean("false") is false', function() {
      expect(_.toBoolean("false")).to.be.false;
    });

    it('_.toBoolean("test") is false', function() {
      expect(_.toBoolean("test")).to.be.false;
    });

  });
};