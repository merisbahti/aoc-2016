const frequencyAnalysis = (input) => {
  const rows = input.split('\n').map(row => row.split(''))
  const rowFreq = rows.reduce((acc, row) => {
    row.forEach((c, i) => {
      var newObj = {}
      newObj[c] = (acc[i][c] || 0) + 1
      acc[i] = Object.assign(acc[i], newObj)
    })
    return acc
  }, {0: {}, 1:{}, 2:{}, 3:{}, 4:{}, 5:{}, 6:{}, 7:{}})

  const ans = Object.keys(rowFreq).reduce((acc, rowIndex) => {
    const ansI = Object.keys(rowFreq[rowIndex]).reduce(({max, currMaxChar}, char) => {
      if (rowFreq[rowIndex][char] < max) {
        return {max: rowFreq[rowIndex][char], currMaxChar: char}
      } else {
        return {max, currMaxChar}
      }
    },
      {
        max: 100000000000,
        currMaxChar: undefined
      })
    acc[rowIndex] = ansI
    return acc
  }, {})
  console.log(ans)
  return ans
}
module.exports = { frequencyAnalysis }
