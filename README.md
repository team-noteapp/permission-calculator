# 펄미션 계산기

본 패키지는 ㄴㅌ(이하 noteapp) 전용으로 만들어졌습니다

사용법은 아래와 같습니다

```javascript
import { PERMISSION, calculate, check } from '@noteapp/permission';

calculate('READ_TODO', 'EDIT_TODO', 'MANAGE_TODO', 'MANAGE_CHANNEL'); // Some number

check(user_permission, PERMISSION.READ_TODO); // boolean
```
