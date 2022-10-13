import assert from 'assert'
import solution from './SoccerTicket.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const arr = [3, 2, 1, 5]
    const t = 1

    // when
    const result = solution(arr, t)

    // then
    assert.deepStrictEqual(15, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const arr = [34]
    const t = 1

    // when
    const result = solution(arr, t)

    // then
    assert.deepStrictEqual(35, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const arr = [40, 60, 58, 71]
    const t = 2


    // when
    const result = solution(arr, t)

    // then
    assert.deepStrictEqual(466, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const arr = [37, 45, 3, 99, 29]
    const t = 3

    // when
    const result = solution(arr, t)

    // then
    assert.deepStrictEqual(654, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const arr = [82, 69, 70, 60, 49, 85]
    const t = 4

    // when
    const result = solution(arr, t)

    // then
    assert.deepStrictEqual(1684, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const arr = [79, 15]
    const t = 5

    // when
    const result = solution(arr, t)

    // then
    assert.deepStrictEqual(480, result)
    done();
  });
})
