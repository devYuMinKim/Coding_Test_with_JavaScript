import assert from 'assert'
import solution from './CountTruncateLetterArray.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr = ['no pain', 'no', 'gain']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(3, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr = ['Hello', 'world', 'Nice World']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(4, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr = ['We can give advice but we cannot give conduct']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(8, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr = ['Better late', 'than never']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(4, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr = ['Slow', 'and', 'steady', 'win the race']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(6, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr = ['Rome is', 'not built', 'in a day']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(7, result)
    done();
  });
})
