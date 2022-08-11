import assert from 'assert'
import solution from './SwitchUpperLowerCase.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = 'Naver'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('nAVER', result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = 'Kakao'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('kAKAO', result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = 'CoFFee'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('cOffEE', result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = ''

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('', result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = 'A'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('a', result)
    done();
  });

  it('test 6', function (done) {
    // given
    const s = 'v'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual('V', result)
    done();
  });
})
