import assert from 'assert'
import solution from './UniqueOccurrencesNumber.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr = [1, 3, 5, 4, 3, 1, 1]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr = [6, 18, 12, 3, 1, 12]

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const fruits = [5, 18, 2, 1, 7, 13]

    // when
    const result = solution(fruits)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const fruits = [5, 1, 1, 6, 4, 6, 4, 4, 1, 1]

    // when
    const result = solution(fruits)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const fruits = [1]

    // when
    const result = solution(fruits)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const fruits = [10, 9, 9, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6]

    // when
    const result = solution(fruits)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });
})
