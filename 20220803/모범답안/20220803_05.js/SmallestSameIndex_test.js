import assert from 'assert'
import solution from './SmallestSameIndex.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const nums = [1, 3, 5, 3, 2]
    const n = 3

    // when
    const result = solution(nums, n)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const nums = [2, 4, 2, 4, 2, 4, 4]
    const n = 4

    // when
    const result = solution(nums, n)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const nums = [7, 7, 7, 6, 5, 10, 4, 4, 1, 8]
    const n = 6

    // when
    const result = solution(nums, n)

    // then
    assert.deepStrictEqual(3, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const nums = []
    const n = 100

    // when
    const result = solution(nums, n)

    // then
    assert.deepStrictEqual(-1, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const nums = [1, 3, 5, 3, 2]
    const n = 99

    // when
    const result = solution(nums, n)

    // then
    assert.deepStrictEqual(-1, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const nums = [1]
    const n = 1

    // when
    const result = solution(nums, n)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });
})
