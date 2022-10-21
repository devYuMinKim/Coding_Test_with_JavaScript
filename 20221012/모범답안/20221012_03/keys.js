/**
 * @param {str} keys
 * @param {str} doors
 * @return {str}
 */
function solution(keys, doors) {
    keys = keys.split('');
    doors = doors.split('');

    while (keys.length) {
        if (keys.pop().toUpperCase() !== doors.shift()) {
            return 'NO'
        }
    }
    
    return 'YES'
}
