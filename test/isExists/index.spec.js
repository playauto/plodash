/** isExists 테스트 로직
 *  최은서 2016-08-31
 */

var expect = require('chai').expect;

module.exports = function(_) {
  describe('isExists Test', function() {

    it('exists', function() {
      expect(_.isExists).to.be.a('function');
    });

    it('_.isExists() 테스트', function(){
      expect(_.isExists(undefined)).to.be.false;
      expect(_.isExists(null)).to.be.false;
      expect(_.isExists([])).to.be.true;
      expect(_.isExists({})).to.be.true;
      expect(_.isExists('')).to.be.true;
    });

    it('_.isExists(undefined)', function() {
      expect(_.isExists(undefined)).to.be.false;
    });

    it('_.isExists(null)', function() {
      expect(_.isExists(null)).to.be.false;
    });

    it('_.isExists("")', function() {
      expect(_.isExists('')).to.be.true;
    });
  });
};
