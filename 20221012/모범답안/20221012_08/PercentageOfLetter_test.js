import assert from 'assert'
import solution from './PercentageOfLetter.js'

describe('Custom Test', function () {
  it('test 1', function (done) {
    // given
    const text = 'google'
    const s = 'o'

    // when
    const result = solution(text, s)

    // then
    assert.deepStrictEqual(33, result)
    done()
  })

  it('test 2', function (done) {
    // given
    const text = 'naver'
    const s = 'o'

    // when
    const result = solution(text, s)

    // then
    assert.deepStrictEqual(0, result)
    done()
  })

  it('test 3', function (done) {
    // given
    const text = 'a'
    const s = 'a'

    // when
    const result = solution(text, s)

    // then
    assert.deepStrictEqual(100, result)
    done()
  })

  it('test 4', function (done) {
    // given
    const text = 'nrttxlpujq'
    const s = 'd'

    // when
    const result = solution(text, s)

    // then
    assert.deepStrictEqual(0, result)
    done()
  })

  it('test 5', function (done) {
    // given
    const text = 'bnwbjmyzagosnvljorpi'
    const s = 'a'

    // when
    const result = solution(text, s)

    // then
    assert.deepStrictEqual(5, result)
    done()
  })

  it('test 6', function (done) {
    // given
    const text = 'okvyyvahyhtdyffoaeezoyvmczeekftvjlfuwoybxstmjkqvykoflvoknhmxjfjdphgkspczaearxiojdisadurghlbtfzlbqcds'
    const s = 'v'

    // when
    const result = solution(text, s)

    // then
    assert.deepStrictEqual(6, result)
    done()
  })
})
