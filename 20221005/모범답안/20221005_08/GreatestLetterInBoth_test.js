import assert from 'assert'
import solution from './GreatestLetterInBoth.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = 'acBfbsTES'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('S', result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = 'aA'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('A', result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = 'aAzZ'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('Z', result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = 'iSklTpxVxi'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('', result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = 'vxofFuUNALUWDZUhtgWO'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('U', result)
    done();
  });

  it('test 6', function (done) {
    // given
    const s = 'FfbKycSNMnzjJBQKOmxL'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('N', result)
    done();
  });
})
