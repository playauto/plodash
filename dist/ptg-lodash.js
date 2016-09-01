/**
 *  playauto global lodash addon(ptg-lodash)
 *  2016-07-20 권윤학
 */

(function(root, factory) {
  //AMD / module / root 처리
  //lodash가 있는지 없는치 확인하여 처리
  if (typeof define === 'function' && define.amd) {
    define(['lodash'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('lodash'));
  } else {
    root._ = factory(root._);
  }
}(this, function(_){

  "use strict";

  /**
   * object diff
   * 객체의 다른 항목만 비교하여 리턴해주는 함수
   * @param first 첫번째 obj
   * @param second 두번째 obj
   * @returns {object} 첫번째 객체와 두번째 객체의 다른정보만 뽑은 객체
   */
  function deepDiff(first, second){
    return _.omit(first, function (v, k) {
      return second[k] === v;
    })
  }

  /**
   * 다중 배열을 조합하여 조합된 형태로 리턴해주는 함수
   * @param arg 배열들
   * @returns {Array} 조합된 배열
   */
  function combinations(arg){
    var r = [], max = arg.length-1;
    function helper(arr, i) {
      for (var j=0, l=arg[i].length; j<l; j++) {
        var a = arr.slice(0);
        a.push(arg[i][j]);
        if (i==max) {
          r.push(a);
        } else
          helper(a, i+1);
      }
    }
    helper([], 0);
    return r;
  }

  /**
   * 빈 문자열인지 체크해주는 함수
   * @param str 체크할 문자열
   * @returns {*|boolean} "" 이면 true 아니면 false
   */
  function isEmptyStr(str) {
    return _.isString(str) && str.trim() === '';
  }

  /**
   * null or undefined 체크 함수
   * @param value
   * @returns {boolean} null도 아니고 undefined도 아니면 true
   */
  function isExists(value) {
    return !_.isUndefined(value) && !_.isNull(value);
  }

  /**
   * null or undefined or empty 문자열 확인
   * @param value
   * @returns {boolean} null or undefined or empty 이면 true
   */
  function isNullOrEmpty(value) {
    return isEmptyStr(value) || !isExists(value);
  }

  var ptgLodash = function() {};

  ptgLodash.deepDiff = deepDiff;
  ptgLodash.combinations = combinations;
  ptgLodash.isEmptyStr = isEmptyStr;
  ptgLodash.isExists = isExists;
  ptgLodash.isNullOrEmpty = isNullOrEmpty;

  _.mixin(ptgLodash);

  return _;
}));