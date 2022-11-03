import assert from 'assert'
import solution from './CandyPrice.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const n = 11
    const price = 10

    // when
    const result = solution(n, price)

    // then
    assert.deepStrictEqual(100, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const n = 90
    const price = 38

    // when
    const result = solution(n, price)

    // then
    assert.deepStrictEqual(3116, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const n = 98
    const price = 65

    // when
    const result = solution(n, price)

    // then
    assert.deepStrictEqual(5850, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const n = 48
    const price = 85

    // when
    const result = solution(n, price)

    // then
    assert.deepStrictEqual(3740, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const n = 23
    const price = 26

    // when
    const result = solution(n, price)

    // then
    assert.deepStrictEqual(546, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const n = 27
    const price = 79

    // when
    const result = solution(n, price)

    // then
    assert.deepStrictEqual(1975, result)
    done();
  });
})
