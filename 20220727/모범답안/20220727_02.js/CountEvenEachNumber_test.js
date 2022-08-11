import assert from 'assert'
import solution from './CountEvenEachNumber.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const n = 2875812

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(4, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const n = 1

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const n = 2

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const n = 876382

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(4, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const n = 158

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const n = 96273849

    // when
    const result = solution(n)

    // then
    assert.deepStrictEqual(4, result)
    done();
  });
})
