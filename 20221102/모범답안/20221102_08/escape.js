/**
 * @param {array} stocks
 * @return {int}
 */
function solution(stocks) {
    let answer = 0;
    let n = stocks.length;

    const segTree = new SegTree(stocks);
    for (let r = n - 2; r >= 0; r--) {
            let cur = segTree.query(r, r);
            if (cur > stocks[r + 1]) {
                let dif = cur - stocks[r + 1];
                answer += dif;
                segTree.update(0, r, -dif);
                cur = stocks[r + 1];
            }
        stocks[r] = cur;
    }

    const x = segTree.query(0, 0), y = segTree.query(n - 1, n - 1);

    if (x >= 0) answer += y;
    else answer += -x + y - x;

    return answer;
}

class SegTree {
    constructor(nums = [], n = nums.length - 1) {
        this.nums = nums;
        this.n = n;
        this.root = this._newNode();
        this._build(this.root, 0, n);
        this.update = (x, y, z) => {
            x = Math.max(x, 0);
            y = Math.min(y, n);
            return this._update(this.root, 0, n, x, y, z);
        };
        this.query = (x, y) => {
            x = Math.max(x, 0);
            y = Math.min(y, n);
            return this._query(this.root, 0, n, x, y);
        };
    }
    _newNode(val = 0, left = null, right = null) {
        return {
            val,
            left,
            right,
            add: 0
        };
    }
    _down(node, l, r) {
        const {
            left,
            right
        } = node;
        if (!left || !right) return;
        const mid = Math.floor((l + r) / 2);
        left.add += node.add;
        left.val += node.add * (mid - l + 1);
        right.add += node.add;
        right.val += node.add * (r - mid);
        node.add = 0;
    }
    _up(node) {
        const {
            left,
            right
        } = node;
        if (!left || !right) return;
        node.val = left.val + right.val;
    }
    _build(node = this.root, l, r) {
        if (l === r) {
            var _this$nums$l;
            node.val = (_this$nums$l = this.nums[l]) !== null && _this$nums$l !== void 0 ? _this$nums$l : 0;
            return;
        }
        const mid = Math.floor((l + r) / 2);
        node.left = this._newNode();
        node.right = this._newNode();
        this._build(node.left, l, mid);
        this._build(node.right, mid + 1, r);
        node.val = node.left.val + node.right.val;
    }
    _update(node, l, r, x, y, z) {
        if (!node) return;
        if (l === x && r === y) {
            node.add += z;
            node.val += z * (r - l + 1);
            return;
        }
        this._down(node, l, r);
        const mid = Math.floor((l + r) / 2);
        if (y <= mid) this._update(node.left, l, mid, x, y, z);else if (x > mid) this._update(node.right, mid + 1, r, x, y, z);else this._update(node.left, l, mid, x, mid, z), this._update(node.right, mid + 1, r, mid + 1, y, z);
        this._up(node);
    }
    _query(node, l, r, x, y) {
        if (y < x) return 0;
        if (!node) return 0;
        if (l === x && r === y) return node.val;
        this._down(node, l, r);
        let res = 0,
            mid = Math.floor((l + r) / 2);
        if (y <= mid) res = this._query(node.left, l, mid, x, y);else if (x > mid) res = this._query(node.right, mid + 1, r, x, y);else res = this._query(node.left, l, mid, x, mid) + this._query(node.right, mid + 1, r, mid + 1, y);
        this._up(node);
        return res;
    }
}
