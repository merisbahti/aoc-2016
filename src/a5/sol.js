const crypto = require('crypto')
const md5hash = name => crypto.createHash('md5').update(name).digest('hex')

const getPass = (id) => {
  return iteratep2(id)
}

const iterate = (id) => {
  var acc = []
  var index = 0
  while (acc.length !== 8) {
    const newHash = md5hash(id + (index++))
    if (newHash.slice(0, 5) === '00000') {
      acc = [...acc, newHash[5]]
      console.log(`acc: ${acc}`)
    }
  }
  return acc.join('')
}


const iteratep2 = (id) => {
  var acc = {0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, 5: undefined, 6: undefined, 7: undefined}
  var index = 0
  while (Object.keys(acc).reduce((s, x) => s + (acc[x] === undefined ? 0 : 1), 0) !== 8) {
    const newHash = md5hash(id + (index++))
    if (newHash.slice(0, 5) === '00000') {
      const pos = newHash[5]
      const part = newHash[6]
      if (Object.keys(acc).includes(pos) && acc[pos] === undefined) acc[pos] = part
    }
  }

  return [0, 1, 2, 3, 4, 5, 6, 7].map(x => acc[x]).join('')
}

module.exports = { getPass }
