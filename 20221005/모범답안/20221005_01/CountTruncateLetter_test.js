import assert from 'assert'
import solution from './CountTruncateLetter.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const s = 'Hello world Nice world'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(3, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const s = 'Hello world Nice World'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(4, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const s = 'Apple naver Kakao Naver'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(4, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const s = 'Where there is a will there is a way'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(6, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const s = 'The road to success and the road to failure are almost exactly the same'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(11, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const s = 'It is better to fail in originality than to succeed in imitation'

    // when
    const result = solution(s)

    // then
    assert.deepStrictEqual(10, result)
    done();
  });
})
