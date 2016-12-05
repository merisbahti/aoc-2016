/* globals it, describe */
const { sectorIdSum, part2 } = require('../../src/a4/sol.js')

var assert = require('assert')

describe('solution', function () {
  it('return correct answer for problem examples part 1', function (done) {
    const exampleInput = `aaaaa-bbb-z-y-x-123[abxyz]
a-b-c-d-e-f-g-h-987[abcde]
not-a-real-room-404[oarel]
totally-real-room-200[decoy]`
    assert.equal(sectorIdSum(exampleInput), 1514)
    done()
  })
})

describe('solution', function () {
  it('return correct answer for problem 2 and the example', function (done) {
    const { readFile } = require('fs')
    readFile('test/a4/solInput', 'utf8', (err, data) => {
      if (err) throw new Error(err)
      assert.equal(245102, sectorIdSum(data))
      done()
    })
  })
})

describe('solution', function () {
  it('return correct answer for problem 2 and the example', function (done) {
    const { readFile } = require('fs')
    readFile('test/a4/solInput', 'utf8', (err, data) => {
      if (err) throw new Error(err)
      assert.equal(1849, part2(data))
      done()
    })
  })
})
