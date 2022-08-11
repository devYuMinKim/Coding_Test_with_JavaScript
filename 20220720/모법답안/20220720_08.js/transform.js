/**
 * @param {string} ini
 * @param {string} trans
 * @return {string}
 */
 function solution(ini, trans) {
    let i = 0;
    let j = 0;

    while (i < ini.length || j < trans.length) {
        while (ini[i] == "y") i++;
        while (trans[j] == "y") j++;

        if ((i == ini.length || j == ini.length) && i != j) return "NO";
        if (ini[i] !== trans[j]) return "NO";
        if (ini[i] == "x" && i > j) return "NO";
        if (ini[i] == "z" && i < j) return "NO";

        i++;
        j++;
    }

    return "YES";
}
