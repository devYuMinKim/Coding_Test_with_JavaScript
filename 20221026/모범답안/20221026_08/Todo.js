
/**
 * 
 * @param y {number}
 * @param m {number}
 * @param d {number}
 * @param repeat {'y' | 'm' | 'd'}
 * @return string
 */
function solution (y, m, d, repeat) {
    if (repeat === 'd') {
        d += 1;

        if (getEndDate(y, m) < d) {
            d = 1;
            m += 1;
        }

        if (m > 12) {
            m = 1;
            y += 1;
        }
    }

    if (repeat === 'm') {
        m += 1;

        if (m > 12) {
            m = 1;
            y += 1;
        }

        if (getEndDate(y, m) < d) {
            d = getEndDate(y, m);
        }
    }

    if (repeat === 'y') {
        y += 1;
        if (getEndDate(y, m) < d) {
            d = getEndDate(y, m);
        }
    }

    return `${y}-${m}-${d}`;

}

function isLeapYear(y) {
    return y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0);
}

function getEndDate(y, m) {
    let endDate = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (isLeapYear(y) && m == 2)
        return 29;
    return endDate[m];
}
