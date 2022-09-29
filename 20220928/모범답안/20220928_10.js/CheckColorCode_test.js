import assert from 'assert'
import solution from './CheckColorCode.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = 'DACC32'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = 'AAAAAA'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = '000000'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = 'A0B2C4'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = 'ABAB'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const s = '01234567'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });
})
