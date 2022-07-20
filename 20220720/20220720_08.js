// 제로베이스 프론트엔드 스쿨_Transform
/*
[문제 설명]

문자열이 하나 주어지고, 이 문자열은 ‘x’와 ‘y’ 그리고 ‘z’로만 이루어져 있는 문자열입니다.

이 문자열을 저희가 목표로 하는 문자열로 바꾸고 싶은데, 바꿀 때 규칙이 존재합니다.

‘xy’ 문자열은 ‘yx’로 바꿀 수 있고, ‘yz’ 문자열은 ‘zy’로 바꿀 수 있습니다.

이 때, 문자열 두 개가 주어지고 처음 주어진 문자열 ‘ini’를 바꾸고 싶은 문자열 ‘trans’로 바꿀 수 있는지 여부를 반환해주세요.

예를 들어 ini = ‘xyyxyz’ 로 주어지고 trans = ‘yyxxzy’이라면, 저희는 다음과 같은 순서로 이 문자를 바꿀 수 있습니다.

‘xy’yxyz -> ‘yx’yxyz / y’xy’xyz -> y’yx’xyz / yyxx’yz’ -> yyxx’zy’ 로 3번에 걸쳐 바꾸면, trans와 같아지게 됩니다. 이 경우 문자열을 목표한 trans로 바꿀 수 있기 때문에 ‘YES’를 반환해주시면 되고, 만약 불가능할 경우 ‘NO’를 반환해주시면 됩니다

[제한 사항]

- 문자열은 1 이상 100,000이하의 길이를 가지고 있고 항상 x, y, z 로만 이루어져 있습니다.

[입력 형식]

- 원래의 문자열 ini와 바뀌어야 하는 문자열 trans가 주어집니다.

[출력 형식]

- ini를 trans로 바꿀 수 있다면 ‘YES’를 반환, 아니라면 ‘NO’를 반환해주세요.
*/
function solution(ini, trans) {
  var answer = "YES";

  return answer;
}

function justice(ini, trans) {
  let bool = true;
  for (let i = 0; i < ini.length(); i++) {
    if (ini.charAt(i) == trans.charAt(i)) continue;
    else {
      bool = false;
      break;
    }
  }

  return bool;
}

solution("x", "y");
