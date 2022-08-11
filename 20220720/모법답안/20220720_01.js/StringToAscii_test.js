import assert from 'assert'
import solution from './StringToAscii.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = 'work'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual([119, 111, 114, 107], result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = 'Google'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual([71, 111, 111, 103, 108, 101], result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = 'AlGoRitHm'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual([65, 108, 71, 111, 82, 105, 116, 72, 109], result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = ''

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual([], result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = 'A'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual([65], result)
    done();
  });

  it('test 6', function (done) {
    // given
    const s = 'z'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual([122], result)
    done();
  });
})
