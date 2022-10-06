import assert from 'assert'
import solution from './DuplicatedNumber.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr1 = [1, 7, 8, 4]
    const arr2 = [2, 4, 6, 8]

    // when
    const result = solution(arr1, arr2)

    // then
    assert.deepStrictEqual([4, 8], result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr1 = [6, 3, 2, 7, 5]
    const arr2 = [2, 7, 5, 10, 4]

    // when
    const result = solution(arr1, arr2)

    // then
    assert.deepStrictEqual([2, 5, 7], result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr1 = [1]
    const arr2 = [10]

    // when
    const result = solution(arr1, arr2)

    // then
    assert.deepStrictEqual([], result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

    // when
    const result = solution(arr1, arr2)

    // then
    assert.deepStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const arr2 = [10]

    // when
    const result = solution(arr1, arr2)

    // then
    assert.deepStrictEqual([], result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr1 = [20, 20, 14, 10, 6]
    const arr2 = [7, 4, 9, 9, 2]

    // when
    const result = solution(arr1, arr2)

    // then
    assert.deepStrictEqual([], result)
    done();
  });
})
