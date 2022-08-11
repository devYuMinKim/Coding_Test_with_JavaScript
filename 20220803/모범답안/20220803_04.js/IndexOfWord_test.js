import assert from 'assert'
import solution from './IndexOfWord.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const sentence = 'Hello every world'
    const word = 'every'

    // when
    const result = solution(sentence, word)

    // then
    assert.deepStrictEqual(1, result)
    done();
  });

  it('test 2', function (done) {
    // given
    const sentence = 'i love eating burger'
    const word = 'i'

    // when
    const result = solution(sentence, word)

    // then
    assert.deepStrictEqual(0, result)
    done();
  });

  it('test 3', function (done) {
    // given
    const sentence = 'My name is Dave'
    const word = 'Dave'

    // when
    const result = solution(sentence, word)

    // then
    assert.deepStrictEqual(3, result)
    done();
  });

  it('test 4', function (done) {
    // given
    const sentence = 'Ut congue ante nec libero malesuada accumsan'
    const word = 'acc'

    // when
    const result = solution(sentence, word)

    // then
    assert.deepStrictEqual(-1, result)
    done();
  });

  it('test 5', function (done) {
    // given
    const sentence = ''
    const word = 'every'

    // when
    const result = solution(sentence, word)

    // then
    assert.deepStrictEqual(-1, result)
    done();
  });

  it('test 6', function (done) {
    // given
    const sentence = ''
    const word = ''

    // when
    const result = solution(sentence, word)

    // then
    assert.deepStrictEqual(-1, result)
    done();
  });
})
