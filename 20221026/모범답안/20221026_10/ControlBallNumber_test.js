import assert from 'assert'
import solution from './ControlBallNumber.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const array = [1, 3, 4]

    // when
    const result = solution(array)

    // then
    assert.deepStrictEqual(['In', 'In', 'Out', 'In', 'In', 'End'], result)
    done();
  });

  it('test 2', function (done) {
    // given
    const array = [1]

    // when
    const result = solution(array)

    // then
    assert.deepStrictEqual(['In', 'End'], result)
    done();
  });

  it('test 3', function (done) {
    // given
    const array = [2]

    // when
    const result = solution(array)

    // then
    assert.deepStrictEqual(['In', 'Out', 'In', 'End'], result)
    done();
  });

  it('test 4', function (done) {
    // given
    const array = []

    // when
    const result = solution(array)

    // then
    assert.deepStrictEqual(['End'], result)
    done();
  });

  it('test 5', function (done) {
    // given
    const array = [2, 4]

    // when
    const result = solution(array)

    // then
    assert.deepStrictEqual(['In', 'Out', 'In', 'In', 'Out', 'In', 'End'], result)
    done();
  });

  it('test 6', function (done) {
    // given
    const array = [5]

    // when
    const result = solution(array)

    // then
    assert.deepStrictEqual(['In', 'Out', 'In', 'Out', 'In', 'Out', 'In', 'Out', 'In' ,'End'], result)
    done();
  });
})
