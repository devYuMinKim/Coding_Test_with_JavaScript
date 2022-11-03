import assert from 'assert'
import solution from './IntersectionTwoArray.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr1 = [1, 3, 6, 9, 12]
    const arr2 = [2, 4, 6, 8, 10, 12]

    // when
    const result = solution(arr1, arr2)

    // then
    assert.deepStrictEqual([6, 12], result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr1 = [2, 8, 0, 1]
    const arr2 = [9, 7, 0, 4, 8]

    // when
    const result = solution(arr1, arr2)

    // then
    assert.deepStrictEqual([0, 8], result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr1 = [8, 5, 6, 0, 9]
    const arr2 = [4, 1, 3, 5, 2, 8]

    // when
    const result = solution(arr1, arr2)

    // then
    assert.deepStrictEqual([5, 8], result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr1 = [8, 13, 3, 14, 9, 0, 10, 2]
    const arr2 = [18, 14, 20, 13, 0, 19, 4, 6]

    // when
    const result = solution(arr1, arr2)

    // then
    assert.deepStrictEqual([0, 13, 14], result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr1 = [9, 8, 20, 2, 6]
    const arr2 = [10, 11, 9, 4, 2, 19]

    // when
    const result = solution(arr1, arr2)

    // then
    assert.deepStrictEqual([2, 9], result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr1 = [5, 6, 11, 1, 8, 16, 9, 20, 3, 18, 7, 15]
    const arr2 = [13, 16, 8, 5, 10, 4, 14, 0, 1, 15, 9, 17, 19]

    // when
    const result = solution(arr1, arr2)

    // then
    assert.deepStrictEqual([1, 5, 8, 9, 15, 16], result)
    done();
  });
})
