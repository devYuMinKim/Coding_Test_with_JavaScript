import assert from 'assert'
import solution from './TruncateLetterArray.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr = ['We can', 'give advice', 'but we cannot give conduct']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(['We', 'advice', 'but', 'can', 'cannot', 'conduct', 'give', 'we'], result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr = ['Hello', 'world', 'Nice World']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(['Hello', 'Nice', 'World', 'world'], result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr = ['Hi', 'My Name', 'Is dave']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(['Hi', 'Is', 'My', 'Name', 'dave'], result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr = ['Better late', 'than never']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(['Better', 'late', 'never', 'than'], result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr = ['Slow', 'and', 'steady', 'win the race']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(['Slow', 'and', 'race', 'steady', 'the', 'win'], result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr = ['Rome is', 'not built', 'in a day']

    // when
    const result = solution(arr)

    // then
    assert.deepStrictEqual(['Rome', 'a', 'built', 'day', 'in', 'is', 'not'], result)
    done();
  });
})
