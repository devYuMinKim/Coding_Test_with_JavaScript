import assert from 'assert'
import solution from './CountEqualElement.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const nums = [2, 5, 6, 3, 2, 6, 6]

    // when
    const result = solution(nums)

    // then
    assert.deepStrictEqual(4, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const nums = [8, 5, 10, 10, 10, 6, 10, 9, 5, 6]

    // when
    const result = solution(nums)

    // then
    assert.deepStrictEqual(8, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const nums = [100]

    // when
    const result = solution(nums)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const nums = []

    // when
    const result = solution(nums)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const nums = [100, 100, 100]

    // when
    const result = solution(nums)

    // then
    assert.deepStrictEqual(3, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const nums = [7, 8, 5, 10, 6, 5, 10, 7, 9, 5]

    // when
    const result = solution(nums)

    // then
    assert.deepStrictEqual(5, result)
    done();
  });
})
