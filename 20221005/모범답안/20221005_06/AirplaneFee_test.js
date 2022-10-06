import assert from 'assert'
import solution from './AirplaneFee.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr = [3, 1, 5]
    const fee = 10

    // when
    const result = solution(arr, fee)

    // then
    assert.deepStrictEqual(80, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr = [37, 89]
    const fee = 91

    // when
    const result = solution(arr, fee)

    // then
    assert.deepStrictEqual(9282, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr = [92, 60, 99]
    const fee = 3

    // when
    const result = solution(arr, fee)

    // then
    assert.deepStrictEqual(606, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr = [35, 66, 51, 31]
    const fee = 26

    // when
    const result = solution(arr, fee)

    // then
    assert.deepStrictEqual(3822, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr = [95, 23, 1, 10, 48]
    const fee = 5

    // when
    const result = solution(arr, fee)

    // then
    assert.deepStrictEqual(715, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr = [29, 47, 85, 33, 56, 15]
    const fee = 8

    // when
    const result = solution(arr, fee)

    // then
    assert.deepStrictEqual(1712, result)
    done();
  });
})
