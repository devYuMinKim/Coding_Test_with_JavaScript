import assert from 'assert'
import solution from './CountBingo.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const board = [[true, true, true], [true, true, true], [false, false, true]]

    // when
    const result = solution(board)

    // then
    assert.deepStrictEqual(3, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const board = [[true, true, true], [true, true, true], [true, true, true]]

    // when
    const result = solution(board)

    // then
    assert.deepStrictEqual(6, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const board = [[true]]

    // when
    const result = solution(board)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const board = [[false]]

    // when
    const result = solution(board)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const board = [[true, false, true], [false, true, false], [true, false, true]]

    // when
    const result = solution(board)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const board = [[false, true, false], [true, false, true], [false, true, false]]

    // when
    const result = solution(board)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });
})
