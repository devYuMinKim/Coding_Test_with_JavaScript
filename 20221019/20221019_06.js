// 제로베이스 프론트엔드 스쿨_Team
/*
[문제 설명]

제로대학교에서 학생들을 대상으로 팀을 꾸리기를 원합니다. 학생마다 측정된 능력치가 존재하고, 이 능력치가 배열으로 주어집니다.

이 때, 능력치가 N이상 M이하인 학생들을 최대한 많이 뽑고 싶습니다.

또한 능력치가 N이상 M이하인 학생이 각 능력치 별로 K명 이상 존재해야 합니다.

이런 경우일 때, 뽑을 수 있는 학생들의 능력치(N과 M)의 합을 반환해주세요. 만약 어떤 경우에도 팀으로 꾸릴 수 없다면 -1을 반환해주세요.

예를 들면 학생들의 능력치 배열이 [10, 10, 11, 11, 11, 12, 12, 13, 14, 14]이고, K = 2인 경우를 생각해보면,

능력치가 10인 학생이 2명이므로 K명 이상 존재하고, 능력치 11, 12인 경우도 K명 이상 존재합니다.

하지만 능력치가 13인 학생이 1명이므로 K명 미만으로 존재하게 되어,

능력치의 범위가 10이상 12이하인 경우에 가장 많은 학생들을 선택할 수 있습니다. 이때의 반환값은 22입니다.

[제한 사항]

- 능력치의 범위는 1 이상 10000 이하입니다.

- K의 범위는 1 이상 1000 이하입니다.

[입력 형식]

- 학생들의 능력치 배열인 stats와 K가 입력으로 주어집니다.

[출력 형식]

- 최대로 팀을 꾸릴 수 있는 능력치 범위 값 N과 M의 합을 반환해주세요.
*/

function solution(stats, k) {
    let arr = [...stats];
    let cou = [];
    let kind = [];
    let N = -1;
    let M = -1;


    for (let i = 0 ; i < arr.length ; i++) {
        if (!kind.includes(arr[i])) kind.push(arr[i]);
    }
    for (let i = 0 ; i < kind.length ; i++) {
        cou.push(0);
    }

    let tmp = arr[0];
    cou[0]++;
    let index = 0;
    for (let i = 1 ; i < arr.length ; i++) {
        if (tmp == arr[i]) cou[index]++;
        else {
            index++;
            tmp = arr[i];
            cou[index]++;
        }
    }

    N = arr[0];
    tmp = arr[0];
    for (let i = 0 ; i < cou.length ; i++, tmp++) {
        if (cou[i] >= k) {
            if (N === -1) {
                N = tmp;
                M = tmp;
            }
            else M = tmp;
        } else {
            N = -1;
            M = -1;
        }
    }

    if (N == -1 && M == -1) return -1;
    return N + M;
}