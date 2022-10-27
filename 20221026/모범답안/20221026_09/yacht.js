
/**
 * 
 * @param arr {number[]}
 * @return {number}
 */
function solution(arr) {
    let checker = new Checker(arr);
    return checker.getMaxScore();
}

class Checker {
    constructor(arr) {
        this.arr = arr;
        this.sum_arr = arr.reduce((acc, it) => acc + it, 0);
        this.sorted_arr = arr;
        this.sorted_arr = [...arr].sort((a, b) => a - b);

        this.diff = [];

        for (let i = 1; i < 5; i++) {
            this.diff.push(this.sorted_arr[i] - this.sorted_arr[i - 1]);
        }

        this.counts = [0, 0, 0, 0, 0, 0];
        this.arr.forEach(it => { this.counts[it - 1]++; });
        this.sorted_counts = [...this.counts].sort((a, b) => a - b);
    }

    checkYacht() {
        if (this.counts.find(it => it === 5) != undefined) {
            return 50;
        }

        return 0;
    }

    check4Kind() {
        if (this.sorted_counts[this.sorted_counts.length - 1] >= 4) {
            return this.sum_arr;
        }

        return 0;
    }

    checkFullHouse() {
        if (this.sorted_arr[0] === this.sorted_arr[1] && this.sorted_arr[2] === this.sorted_arr[4]) {
            return this.sum_arr;
        } else if (this.sorted_arr[0] === this.sorted_arr[2] && this.sorted_arr[3] === this.sorted_arr[4]) {
            return this.sum_arr;
        }

        return 0;
    }

    checkLStraight() {
        if (this.diff.every(it => it === 1)) {
            return 30;
        }

        return 0;
    }

    checkSStraight() {
        if (this.diff.slice(0, 3).every(it => it === 1)) {
            return 15;
        } else if (this.diff.slice(1, 4).every(it => it === 1)) {
            return 15;
        }
        
        return 0;    
    }

    checkOthers() {
        let score = 0;
        for (let i = 1; i <= 6; i++) {
            score = Math.max(score, i * this.counts[i - 1]);
        }

        return score;
    }

    getMaxScore() {
        return [
            this.checkYacht(),
            this.check4Kind(),
            this.checkFullHouse(),
            this.checkLStraight(),
            this.checkSStraight(),
            this.checkOthers()
        ].reduce((acc, it) => Math.max(acc, it), 0);
    }
}
