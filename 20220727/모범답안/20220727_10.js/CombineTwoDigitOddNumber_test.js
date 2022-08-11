import assert from 'assert'
import solution from './CombineTwoDigitOddNumber.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const array = [1, 3, 4]

    // when
    const result = solution(array)

    // then
    assert.deepStrictEqual(4, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const array = [1, 4, 6, 8]

    // when
    const result = solution(array)

    // then
    assert.deepStrictEqual(3, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const array = [4, 2, 6, 8, 4, 2]

    // when
    const result = solution(array)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const array = []

    // when
    const result = solution(array)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const array = [5]

    // when
    const result = solution(array)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const array = [5, 5]

    // when
    const result = solution(array)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });
})
