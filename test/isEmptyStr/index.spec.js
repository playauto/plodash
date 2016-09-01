/**
 *  isEmptyStr 테스트 코드
 *  2016-08-26 권윤학
 */

var expect = require('chai').expect;

module.exports = function(_) {
  describe('isEmptyStr Test', function() {

    it('exists', function() {
      expect(_.isEmptyStr).to.be.a('function');
    });

    it('_.isEmptyStr() 테스트', function(){
      expect(_.isEmptyStr()).to.be.false;
      expect(_.isEmptyStr(0)).to.be.false;
      expect(_.isEmptyStr([])).to.be.false;
      expect(_.isEmptyStr({})).to.be.false;
      expect(_.isEmptyStr(null)).to.be.false;
    });

    it('_.isEmptyStr("")', function() {
      expect(_.isEmptyStr("")).to.be.true;
    });

    it('_.isEmptyStr(" ")', function() {
      expect(_.isEmptyStr(" ")).to.be.true;
    });

    it('_.isEmptyStr("test")', function() {
      expect(_.isEmptyStr('test')).to.be.false;
    });
  });
};