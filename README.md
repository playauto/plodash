# Playauto Lodash Addon #

Lodash를 라이브러리 사용하면서 Lodash([https://lodash.com/docs/](https://lodash.com/docs/))에 없지만 자주 사용되는
함수들을 모아서 Addon한 라이브러리입니다.

아직 운영방안에 대해 정해진게 없어서 bower / npm에는 업로드하지 않은 상태이므로
Semantic versioning에 따른 버전 표기로 진행 안하고
1.0.* 버전으로만 진행합니다.

저장소 자체는 공개이나 오픈소스로 정말 운영할지 다시 비공개 라이브러리로 운영할지는 추후 검토

# 설치 방법 #

using npm

```
npm install https://github.com/playauto/plodash.git --save
```

using bower

```
bower install https://github.com/playauto/plodash.git#latest --save
```

# 사용 방법 #

in Node.js

```
//require ptg-lodash
var _ = require('ptg-lodash');
```

in a browser

dist/ 폴더에 있는 ptg-lodash.js or ptg-lodash.min.js 파일을 
lodash.js 다음으로 불러와서 사용하면 됩니다.

```
<script src='vendor/lodash/lodash.min.js'></script>
<script src='vendor/ptg-lodash/dist/ptg-lodash.min.js'></script>
```

# Addons #

- [deepDiff](#deepdiff) object를 비교하여 다른 항목들만 뽑는 처리
- [isEmptyStr](#isemptystr) 빈 문자열인지 체크해주는 함수
- [isExists](#isexists) null or undefined 체크 함수
- [isNullOrEmpty](#isnullorempty) null or undefined or empty 문자열 확인
- [toBoolean](#toboolean) true인지 false인지 확인해주는 라이브러리 ("true" / 1 / true[boolean])

# deepDiff #

# isEmptyStr #
#### _.isEmptyStr(str) ####

isEmptyStr 은 빈문자열인지를 파악하는 함수입니다.

#### Arguments ####
str(String): 검사할 문자열(string이 아닌 경우 false 리턴)

#### Returns ####
(Boolean): 빈 문자열인 경우 true 그외에는 false

#### Example ####

```
//빈문자열 인경우
if(_.isEmptyStr(" ")) {
  //해당 조건으로 들어온다
  
}

or

var str = _.isEmptyStr(str) ? "기본값" : str;
```

# isExists #
#### _.isExists(value) ####

isExists 은 정상적인 값으로 존재하는지 확인하는 함수입니다(null or undefined가 아닌지)

#### Arguments ####
value(Value): 검사할 값(형 제한 없음)

#### Returns ####
(Boolean): null도 아니고 undefined도 아니면 true

#### Example ####

```
//obj.val 값이 존재한다면
if(_.isExists(obj.val)) {
  //해당 조건으로 들어온다
}
```


# isNullOrEmpty #
#### _.isNullOrEmpty(value) ####

isNullOrEmpty 은 isExists와 isEmptyStr를 합친 함수로
정상적으로 존재하는 값이면서 빈문자열이 아닌 경우를 체크하기 위한 함수입니다.

#### Arguments ####
value(Value): 검사할 값(형 제한 없음)

#### Returns ####
(Boolean): null 혹은 undefined 혹은 빈문자열일 경우 true 그외에 false

#### Example ####

```
//obj.val 값이 있을경우
if(!_.isNullOrEmpty(obj.val)) {
  //해당 조건으로 들어온다
}
```

# toBoolean #
#### _.toBoolean(str, trueValues) ####

toBoolean 은 true 값인지 확인하는 함수로
기본적으로 문자열 "true" / 1 같은 값을 true로 보기 위한 함수

#### Arguments ####
str(String / Number): 검사할 값(숫자 혹은 문자열)
trueValues(Array): true로 인식할 값들 미입력시(["true", 1])

#### Returns ####
(Boolean): true로 인식되는 값들은 true로 리턴되며 그외의 값들은 false

#### Example ####

```
var flag = _.toBoolean("true");
// => true

var flag = _.toBoolean(1);
// => true

var flag = _.toBoolean("false");
// => false

var flag = _.toBoolean(0);
// => false

var flag = _.toBoolean("test");
// => false
```