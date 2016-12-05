const sectorIdSum = (input) => {
  const rooms = input.trim().split('\n').map(s => s.match(/([a-z-]+)-(\d+)\[([a-z]{5})]/).slice(1)).map(x =>
    [x[0].split('').filter(c => c !== '-'), ...x.slice(1)]) // remove all the hyphens

  const sorted = rooms.map(x => {
    const freq = calcFrequency(x[0])
    return [new Set(x[0].sort((a, b) => {
      if (freq[b] - freq[a] === 0) {
        return a.charCodeAt(0) - b.charCodeAt(0)
      } else {
        return freq[b] - freq[a]
      }
    })), ...x.slice(1)]
  }).reduce((acc, x) => {
    return acc + (Array.from(x[0]).slice(0, 5).join('') === x[2] ? parseInt(x[1]) : 0)
  }, 0)
  return sorted
}

const part2 = input => {
  const rooms = input.trim().split('\n').map(s => s.match(/([a-z-]+)-(\d+)\[([a-z]{5})]/).slice(1)).map(x =>
    [x[0].split('').filter(c => c !== '-'), ...x.slice(1)]) // remove all the hyphens

  const roomNamesAndSectorIDs = input.trim().split('\n').map(s =>
    s.match(/([a-z-]+)-(\d+)\[([a-z]{5})]/).slice(1)).map(x =>
    [x[0].split(''), ...x.slice(1)]) // remove all the hyphens

  const correctIndexes = rooms.map(x => {
    const freq = calcFrequency(x[0])
    return [new Set(x[0].concat().sort((a, b) => {
      if (freq[b] - freq[a] === 0) {
        return a.charCodeAt(0) - b.charCodeAt(0)
      } else {
        return freq[b] - freq[a]
      }
    })), ...x.slice(1)]
  }).reduce((acc, x, i) => {
    if (Array.from(x[0]).slice(0, 5).join('') === x[2]) {
      return [...acc, i]
    } else {
      return acc
    }
  }, [])
  const correctRooms = correctIndexes.map(i => {
    const decrypted = decrypt(roomNamesAndSectorIDs[i][0], parseInt(roomNamesAndSectorIDs[i][1])).join('')
    console.log(`${roomNamesAndSectorIDs[i][0].join('')} with mod ${roomNamesAndSectorIDs[i][1]} was decrypted to: ${decrypted}`)
  })
  return correctRooms
}

const decrypt = (sArray, mod) => {
  return sArray.map(x => {
    return ((x.charCodeAt(0) - 97 + mod) % 26) + 97
  }
  ).map(x => String.fromCharCode(x))
}

const calcFrequency = (array) => {
  return array.reduce((acc, x) => {
    acc[x] = (acc[x] || 0) + 1
    return acc
  }, {})
}

module.exports = { sectorIdSum, part2, decrypt }
