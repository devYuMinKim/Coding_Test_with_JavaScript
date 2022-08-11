import assert from 'assert'
import solution from './CountPrefixWordNumber.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const array = ['n', 'nav', 'nev']
    const s = 'naver'

    // when
    const result = solution(array, s)

    // then
    assert.deepStrictEqual(2, result)
    done()
  })

  it('test 2', function (done) {
    // given
    const array = ['a', 'p', 'app', 'apples']
    const s = 'apple'

    // when
    const result = solution(array, s)

    // then
    assert.deepStrictEqual(2, result)
    done()
  })

  it('test 3', function (done) {
    // given
    const array = []
    const s = 'google'

    // when
    const result = solution(array, s)

    // then
    assert.deepStrictEqual(0, result)
    done()
  })

  it('test 4', function (done) {
    // given
    const array = ['n', 'c', 'cn', 'ncn']
    const s = 'nc'

    // when
    const result = solution(array, s)

    // then
    assert.deepStrictEqual(1, result)
    done()
  })

  it('test 5', function (done) {
    // given
    const array = ['nodejs']
    const s = 'nodejs'

    // when
    const result = solution(array, s)

    // then
    assert.deepStrictEqual(1, result)
    done()
  })

  it('test 6', function (done) {
    // given
    const array = ['javascript']
    const s = 'java'

    // when
    const result = solution(array, s)

    // then
    assert.deepStrictEqual(0, result)
    done()
  })
})
