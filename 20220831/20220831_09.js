// 제로베이스 프론트엔드 스쿨_WidthOfTriangle
/*
[문제 설명]
세 점의 좌표 x1,y1,x2,y2,x3,y3가 주어질 때, 세 점으로 만들 수 있는 삼각형의 넓이에 2를 곱하여 출력하는 함수, solution을 완성해주세요.

[제한 사항]

만약 세 점이 일직선상에 위치하는 경우에는 0을 출력합니다.
[입력 형식]

points는 세 점의 x, y좌표가 x1,y1,x2,y2,x3,y3 순서대로 있는 길이가 6인 배열입니다.
각 좌표 값은 -1,000 이상 1,000 이하의 정수입니다. [출력 형식]
세 점을 연결하여 만들 수 있는 삼각형의 넓이에 2를 곱하여 int 형식으로 출력합니다.
*/

function solution(points) {
  let arr = [];
  for (let element of points) {
    arr.push(element);
  }

  let first = (arr[0] * arr[3]) + (arr[2] * arr[5]) + (arr[4] * arr[1]);
  let second = (arr[1] * arr[2]) + (arr[3] * arr[4]) + (arr[5] * arr[0]);
  let re = (first - second) * 0.5;
  if (re >= 0) {
    return re * 2;
  } else {
    return re * 2 * -1;
  }
}

console.log(solution([0, 0, 0, 5, 5, 0]));

// 참고: https://medium.com/@joongi1978/algorithm-3-%EC%84%B8-%EC%A0%90%EC%9D%84-%EC%95%8C-%EB%95%8C-%EC%82%BC%EA%B0%81%ED%98%95%EC%9D%98-%EB%84%93%EC%9D%B4%EB%A5%BC-%EA%B5%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EC%82%AC%EC%84%A0-%EC%8B%A0%EB%B0%9C%EB%81%88-%EA%B3%B5%EC%8B%9D-232ed0dc94d8