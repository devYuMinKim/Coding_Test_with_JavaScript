// 제로베이스 프론트엔드 스쿨_Todo
/*
[문제 설명]
일정 관리 앱에는 보통 특정한 주기로 반복되는 일정을 등록할 수 있습니다.
예를 들어 매달 반복으로 공과금 납부, 매년 반복으로 친구의 생일을 일정으로 등록하는 경우가 있습니다.

매일 반복, 매달 반복, 매년 반복을 지원하는 일정 관리 앱이 있습니다.
이 앱에서는 매달/매년 반복으로 설정된 반복 일정의 날짜를 계산할 때, 다음 달 또는 다음 해에 등록된 날짜가 없는 경우 해당 달의 말일로 설정합니다.
예를 들어 3월 31일에 등록된 매달 반복 일정의 다음 일정은 4월 30일입니다.

위의 일정관리 앱에 반복 일정이 등록된 날짜와 반복 주기가 주어졌을 때 다음 반복 일정이 언제인지 출력하는 함수, solution을 출력해 주세요.

[제한 사항]
- 1월부터 12월까지의 말일은 31, 28 (윤년의 경우 29), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31일입니다.
- 윤년은 400으로 나누어 떨어지는 해, 또는 4로 나누어 떨어지면서 100으로 나누어 떨어지지 않는 해를 말합니다.

[입력 형식]
- y는 연도를 나타내는 2000 이상 2040 이하의 정수입니다.
- m은 달을 나타내는 1 이상 12 이하의 정수입니다.
- d는 날짜를 나타내는 1 이상 (해당 달의 말일) 이하의 정수입니다.
- repeat은 'y', 'm', 'd' 중 하나인 문자열로, 각각 매년 반복, 매달 반복, 매일 반복을 나타냅니다.

[출력 형식]
- 다음 반복 일정의 날짜를 leading zero가 없는 (year)-(month)-(date) 형태의 문자열로 출력합니다.
*/

function solution(y, m, d, repeat) {
  let answer = "";

  switch (repeat) {
    case "y":
      if (m === 2 && d === 29 && leapYear(y)) {
        // 올해가 윤년인 경우
        answer += y + 1;
        answer += "-";
        answer += m;
        answer += "-";
        answer += 28;
      } else if (m === 2 && d === 28 && leapYear(y + 1)) {
        // 다음해가 윤년인 경우
        answer += y + 1;
        answer += "-";
        answer += m;
        answer += "-";
        answer += 29;
      } else {
        answer += y + 1;
        answer += "-";
        answer += m;
        answer += "-";
        answer += d;
      }

      break;
    case "m":
      answer += y;
      answer += "-";
      if ((m === 3 || m === 5 || m === 7 || m === 8 || m === 10) && d === 31) {
        // 말일이 31일인 경우
        answer += m + 1;
        answer += "-";
        answer += d - 1;
      } else if (m === 1 && d === 31) {
        // 다음달이 2월이라 윤년 여부를 체크해야 하는 경우
        if (leapYear(y)) {
          answer += m + 1;
          answer += "-";
          answer += 29;
        } else {
          answer += m + 1;
          answer += "-";
          answer += 28;
        }
      } else {
        answer += m + 1;
        answer += "-";
        answer += d + 1;
      }

      break;
    case "d":
      answer += y;
      answer += "-";
      if (
        (m === 1 ||
          m === 3 ||
          m === 5 ||
          m === 7 ||
          m === 8 ||
          m === 10 ||
          m === 12) &&
        d === 31
      ) {
        // 다음 달로 넘겨야 하는 경우
        answer += m + 1;
        answer += "-";
        answer += 1;
      } else if (m === 2) {
        // 윤년 체크
        if (leapYear(y) && d === 29) {
          answer += 3;
          answer += "-";
          answer += 1;
        } else if (!leapYear(y) && d === 28) {
          answer += 3;
          answer += "-";
          answer += 1;
        } else {
          answer += m;
          answer += "-";
          answer += d + 1;
        }
      } else {
        if (d === 30) {
          answer += m + 1;
          answer += "-";
          answer += 1;
        } else {
          answer += m;
          answer += "-";
          answer += d + 1;
        }
      }
  }

  return answer;
}

// 윤년 판별
function leapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

console.log(solution(2022, 5, 31, "m")); // output: "2022-6-30"
