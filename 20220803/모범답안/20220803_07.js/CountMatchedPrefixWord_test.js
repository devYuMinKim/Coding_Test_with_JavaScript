import assert from 'assert'
import solution from './CountMatchedPrefixWord.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const array = ['apple', 'banana', 'kakao', 'naver', 'apache']
    const p = 'a'

    // when
    const result = solution(array, p)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const array = ['asjefkl', 'aeklfj', 'asifljl', 'ruihgjd', 'djgkln']
    const p = 'as'

    // when
    const result = solution(array, p)

    // then
    assert.deepStrictEqual(2, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const array = ['cloff', 'vxqql', 'tkafv', 'ophik', 'lscmj']
    const p = 't'

    // when
    const result = solution(array, p)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const array = []
    const p = 'naver'

    // when
    const result = solution(array, p)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const array = ['uehex', 'gevhl', 'bhitm', 'csoqm', 'xsqcf']
    const p = 'naver'

    // when
    const result = solution(array, p)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const array = ['mmzuf', 'sfnki', 'qdpov', 'zpdtg', 'prozo']
    const p = ''

    // when
    const result = solution(array, p)

    // then
    assert.deepStrictEqual(5, result)
    done();
  });
})
