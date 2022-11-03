import assert from 'assert'
import solution from './JoinToString.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr = [1, 3, 0, 7, 9]
    const prefix = "<"
    const separator = ", "
    const postfix = ">"

    // when
    const result = solution(arr, prefix, separator, postfix)

    // then
    assert.deepStrictEqual("<1, 3, 0, 7, 9>", result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr = [1]
    const prefix = "<"
    const separator = ", "
    const postfix = ">"

    // when
    const result = solution(arr, prefix, separator, postfix)

    // then
    assert.deepStrictEqual("<1>", result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr = [1, 3, 0, 7, 9]
    const prefix = ">"
    const separator = ", "
    const postfix = "<"

    // when
    const result = solution(arr, prefix, separator, postfix)

    // then
    assert.deepStrictEqual(">1, 3, 0, 7, 9<", result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr = [12, 6, 6, 1, 1]
    const prefix = "("
    const separator = ", "
    const postfix = ")"

    // when
    const result = solution(arr, prefix, separator, postfix)

    // then
    assert.deepStrictEqual("(12, 6, 6, 1, 1)", result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr = [19, 0, 13, 16, 1]
    const prefix = "["
    const separator = ";"
    const postfix = "]"

    // when
    const result = solution(arr, prefix, separator, postfix)

    // then
    assert.deepStrictEqual("[19;0;13;16;1]", result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr = [3, 18, 17, 6, 9]
    const prefix = ""
    const separator = ""
    const postfix = ""

    // when
    const result = solution(arr, prefix, separator, postfix)

    // then
    assert.deepStrictEqual("3181769", result)
    done();
  });
})
