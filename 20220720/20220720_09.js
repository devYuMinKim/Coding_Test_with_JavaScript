// 제로베이스 프론트엔드 스쿨_Messenger
/*
[문제 설명]

제주도에 있는 제로는 저희와 메신저를 통해서 연락을 하려고 합니다.

제로와 저희가 사용하고 있는 메신저는 제로가 직접 만든 메신저여서 w를 uu로 보내고, m을 nn으로 보내는 버그가 존재합니다.

버그를 잡는 것이 중요한데, 제로는 버그를 잡을 생각이 없어 보입니다.

그래서 저희는 제로가 메세지를 보냈을 때, 버그를 고려하여 원래 보내려던 메세지의 가능한 가짓수를 생각해보기로 했습니다.

만약 제로가 보낸 메세지가 'bannauua'라면, ['bannauua',
'bamauua', 'bannawa', 'banawa'] 4가지의 경우의 수가 존재합니다.

이 때 저희는 숫자 4를 반환해주면 됩니다.

[제한 사항]

- message의 길이는 1 이상 100,000 이하입니다.

- message에는 알파벳 소문자만 존재합니다.

[입력 형식]

- 문자열 'message'가 입력으로 주어집니다.

[출력 형식]

- 주어진 문자열에서 버그를 고려하여 원래 보내려던 메세지의 가능한 가짓수를 반환해주세요
*/
function solution(message) {
  var answer = 0;
  let count = 0;

  let prev;

  for (let i of message) {
    if (!prev) {
      prev = i;
      continue;
    }
    if (prev == "u" && i == "u") {
      count++;
    } else if (prev == "n" && i == "n") {
      count++;
    }

    prev = i;
  }

  answer = Math.pow(count, 2);
  console.log(answer);

  return answer;
}

solution("nnn");
