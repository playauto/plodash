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

- [deepDiff](#deepDiff)
- [isEmptyStr](#isEmptyStr)
- [isExists](#isExists)
- [isNullOrEmpty](#isNullOrEmpty)
- [toBoolean](#toBoolean)

# deepDiff #

# isEmptyStr #

# isExists #

# isNullOrEmpty #

# toBoolean #

