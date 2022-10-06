import assert from 'assert'
import solution from './MatrixHasOutline.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const matrix = [[true, true, true, true], [true, true, false, true], [true, false, true, true], [true, true, true, true]]

    // when
    const result = solution(matrix)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const matrix = [[true, true], [true, true]]

    // when
    const result = solution(matrix)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const matrix = [[true]]

    // when
    const result = solution(matrix)

    // then
    assert.deepStrictEqual(true, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const matrix = [[true, false], [true, true]]

    // when
    const result = solution(matrix)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const matrix = [[false]]

    // when
    const result = solution(matrix)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const matrix = [[false, true, false], [true, false, true], [false, true, false]]

    // when
    const result = solution(matrix)

    // then
    assert.deepStrictEqual(false, result)
    done();
  });
})
