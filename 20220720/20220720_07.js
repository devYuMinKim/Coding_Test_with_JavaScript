// 제로베이스 프론트엔드 스쿨_Perfect
/*
[문제 설명]

제로는 어느
날 길을 걷다가 a와 b로만 이루어진 세계로 워프했습니다.

문자열 알고리즘을 풀어야 원래의 세계로 돌아갈 수 있는 미션이 주어지고, 이를 해결해야합니다.

문자열 알고리즘은 a와 b로 이루어진 문자열 중 n개의 문자열을 a는 b로, b는 a로 변경하여 만들 수 있는 최장 부분 문자열을 알아내고 싶습니다.

최장 부분 문자열이란 ‘aaaaabbbb’와 같은 문자열이 있을 때, 최장 부분 문자열의 후보가 될 수 있는 경우는 ‘aaaaa’와 ‘bbbb’이고, ‘aaaaa’가 같은 문자로 이루어진 가장 긴 문자열입니다. 고로 ‘aaaaabbbb’의 최장 부분 문자열은 ‘aaaaa’입니다.

또, ‘abbbaababa’일 경우 후보가 될 수 있는 문자열은 ‘bbb’와 ‘aa’, ‘a’, ‘b’ 4가지가 존재하고 여기서 같은 문자로 이루어진 가장 긴 문자열인 최장 부분 문자열은 ‘bbb’입니다.

이런 경우에 n개의 문자열을 a는 b로, b는 a로 변경하여 만들 수 있는 문자열 중 최장 부분 문자열의 길이를 반환해주세요.

예를 들면 ‘abab’라는 문자열이 주어졌고 n=2인 상황이 있다면, 저희는 a 2개를 b로 바꾸던지, b 2개를 a로 바꾸어서 ‘aaaa’ 혹은 ‘bbbb’ 문자열로 변경할 수 있고 최장 부분 문자열의 길이는 4이기 때문에 4를 반환해주면 됩니다.

[제한 사항]

- n은 1이상 100,000이하이고, 문자열의 길이는 0 이상 n이하입니다.

[입력 형식]

- 변경할 수 있는 문자열의 개수 n과 문자열 ab가 주어집니다.

[출력 형식]

- 주어진 문자열 k의 최장 부분 문자열의 길이를 출력해주세요.
*/
function solution(n, ab) {
  var answer = 0;

  let length = [];

  let lengthCount = 0;
  let tmp = "a";
  for (let i of ab) {
    if (i == tmp) {
      lengthCount++;
    } else {
      length.push(lengthCount);
      lengthCount = 1;
      tmp = i;
    }
  }
  length.push(lengthCount);

  let max = 0;

  for (let i = 0; i < length.length - 2; i++) {
    // console.log(length[i] + length[i + 1] + length[i + 2]);
    let tmp = 0;
    for (let j = 0; j < n * 2 + 1; j++) {
      tmp += length[i + j];
    }
    if (max < tmp) max = tmp;
  }

  answer = max;

  return answer;
}

solution(2, "aabaabaa");
