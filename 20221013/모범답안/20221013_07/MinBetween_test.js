import assert from 'assert'
import solution from './MinBetween.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr = [1, 3, 5, 7, 9]
    const a = 3
    const b = 7

    // when
    const result = solution(arr, a, b)

    // then
    assert.deepStrictEqual(3, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr = []
    const a = 1
    const b = 10

    // when
    const result = solution(arr, a, b)

    // then
    assert.deepStrictEqual(-1, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr = [1, 3, 7, 9]
    const a = 4
    const b = 6

    // when
    const result = solution(arr, a, b)

    // then
    assert.deepStrictEqual(-1, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr = [150]
    const a = 100
    const b = 200

    // when
    const result = solution(arr, a, b)

    // then
    assert.deepStrictEqual(150, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr = [14, 19, 12, 2, 20, 18, 16, 15, 13]
    const a = 5
    const b = 15

    // when
    const result = solution(arr, a, b)

    // then
    assert.deepStrictEqual(12, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr = [1, 100000]
    const a = 50000
    const b = 60000

    // when
    const result = solution(arr, a, b)

    // then
    assert.deepStrictEqual(-1, result)
    done();
  });
})
