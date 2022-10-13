/**
 * @param p {string}
 * @param s {string}
 * @returns {boolean}
 */
function solution(p, s) {
  const words = s.split(' ');
  const map = new Map();

  if (words.length !== p.length) return false;
  if (new Set(words).size !== new Set(p).size) return false;

  for (let i = 0; i < p.length; i++) {
    if (map.has(p[i]) && map.get(p[i]) !== words[i]) return false;
    map.set(p[i], words[i]);
  }
  return true;

}

solution