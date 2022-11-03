import assert from 'assert'
import solution from './CountMatchedNumber.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = '134246'
    const n = 4

    // when
    const result = solution(s, n)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = '4882305038'
    const n = 8

    // when
    const result = solution(s, n)

    // then
    assert.deepStrictEqual(3, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = '0'
    const n = 0

    // when
    const result = solution(s, n)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = '0'
    const n = 1

    // when
    const result = solution(s, n)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = '44435013785452732466'
    const n = 4

    // when
    const result = solution(s, n)

    // then
    assert.deepStrictEqual(5, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const s = '30812522681139093477'
    const n = 7

    // when
    const result = solution(s, n)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });
})
