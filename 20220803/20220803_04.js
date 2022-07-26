// 제로베이스 프론트엔드 스쿨_IndexOfWord
/*
[문제 설명]
문장 sentence에서 word가 몇 번째 인덱스의 단어와 일치하는지를 출력하는 함수, solution을 완성해주세요.
sentence에서 단어의 구분은 공백(" ")으로 구분합니다.

예를 들어, sentence가 "Hello every world" 이고, word가 "every" 일 때 결과는 1 입니다.

[제한 사항]
- sentence에서 word와 일치하는 단어가 없으면 -1을 반환합니다.

[입력 형식]
- sentence와 word는 길이가 1000 이하의 문자열입니다.
- sentence와 word는 알파벳 대/소문자로 구성됩니다.

[출력 형식]
- word와 일치하는 단어의 인덱스를 반환합니다.
*/

function solution(sentence, word) {
  var answer = -1;
  let answers = [];
  let bool = false;

  let array = sentence.split(" ");

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      answers.push(i);
      bool = true;
    }
  }

  if (!bool) return answer;
  else if (answers.length == 1) return answers[0];
  else return answers;
}

let sentence = "Hello every world";
let word = "every";

console.log(solution(sentence, word));
