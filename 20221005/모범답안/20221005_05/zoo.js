/**
 * @param note {Array}
 */
function solution(note) {

    var animal_dict = {};

    for (var i in note) {
        if (note[i] in animal_dict) {
            animal_dict[note[i]] += 1;
        } else {
            animal_dict[note[i]] = 1;
        }
    }
    
    var sortable = [];
    for (var name in animal_dict) {
        sortable.push([name, animal_dict[name]]);
    }

    sortable.sort(function(a, b) {
        var o1 = b[1]
        var o2 = a[1]
        var p1 = b[0]
        var p2 = a[0]

        if (o1 < o2) return -1;
        if (o1 > o2) return 1;
        if (p1 > p2) return -1;
        if (p1 < p2) return 1;
        return 0;
    });

    return sortable[0][0]
}