// 제로베이스 프론트엔드 스쿨_Billboard
/*
[문제 설명]
n개의 문자를 보여주는 크기가 n인 전광판이 있습니다. 전광판의 문자는 오른쪽에서 왼쪽으로 반복해서 흘러가며, 1초에 한 글자씩 흘러갑니다.

예를 들어, 크기가 5인 전광판에 "Snowball" 노출한다고 가정할 때, 시간 t의 변화에 따른 노출 예시는 다음과 같습니다.

t : 0초
전광판 : .....

t : 1초
전광판 : ....S

t : 5초
전광판 : Snowb

t : 10초
전광판 : all..

t : 15초
전광판 : ...Sn

전광판의 크기 n과 전광판에 노출할 문자 s 그리고 시간 t가 주어질 때, t 초 후의 전광판에 표시될 문구를 출력하는 함수, solution을 완성해주세요.

[제한 사항]

전광판의 문자는 1초부터 흐르기 시작합니다.
[입력 형식]

n은 1 이상 50 이하의 정수입니다.
s는 길이가 1 이상 100 이하의 문자열입니다.
s는 알파벳 대/소문자와 숫자로 구성됩니다.
t는 1 이상 1000 이하의 정수입니다.
[출력 형식]

t 초 후, 주어진 전광판에 노출되는 문자를 출력합니다.
전광판의 공백은 마침표(".")로 대체하여 출력합니다.
*/

function solution(n, s, t) {
  let result = '';
  
  let str = '';
  for (let element of s) {
    str += element;
  }

  let sample = [];
  for (let i = 0 ; i < n ; i++) {
    sample.push('.');
  }

  for (let i = 0 ; i < t % (str.length * 2) ; i++) {
    sample.shift();
    sample.push(i < str.length ? str.substring(i, i + 1) : '.');
  }

  for (let element of sample) {
    result += element;
  }

  return result;
 }


 console.log(solution(5, "Snowball", 18));