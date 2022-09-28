// 제로베이스 프론트엔드 스쿨_StringRotation
/*
하나의 문자열에서 특정 지점을 쪼개 순서를 바꾸는 것을 문자열을 회전시켰다고 표현합니다.

예를들면 "HelloWorld" 라는 문자열에서 "Hello", "World"를 쪼개고 회전시키면 "WorldHello"라는 문자열이 됩니다.

S1과 S2 두가지 문자열이 주어졌을 때 S2가 S1을 회전시켜 나온 결과인지 판단하는 함수를 작성하세요.

[입력]
문자열 S1, S2

[출력]
문자열 S2가 S1의 회전에 의한 결과라면 1, 아니라면 0
*/

function solution(S1, S2) {
  let a1 = [];
  let a2 = [];

  for (let i = 0 ; i < 52 ; i++) {
    a1.push(0);
    a2.push(0);
  }

  for (let i = 0 ; i < S1.length ; i++) {
    // console.log(S1.charCodeAt(i));
    a1[S1.charCodeAt(i) - 65]++;
  }

  for (let i = 0 ; i < S1.length ; i++) {
    a2[S2.charCodeAt(i) - 65]++;
  }

  if (JSON.stringify(a1) === JSON.stringify(a2)) {
    return 1;
  } else {
    return 0;
  }

}

console.log(solution("HelloWorld", "WorldHello"));