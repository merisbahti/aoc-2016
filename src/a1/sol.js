const dist = (input) => {
  const directions = parseInput(input)
  const startingState = {
    previousCoordinates: [[0, 0]],
    firstVisitedTwice: undefined,
    direction: 0, // four directions, 0, 1, 2, 3, where 0 is north, 3 is west
    north: 0,
    east: 0
  }

  const reducer = (state, vector) => {
    const changedDirection = changeDirection(state, vector.d)
    return calculateSteps(changedDirection, vector.l)
  }

  const ans = directions.reduce(reducer, startingState)

  return {dist: Math.abs(ans.north) + Math.abs(ans.east), firstVisitedTwice: ans.firstVisitedTwice}
}
const parseInput = (input) => input.split(', ').map(s => { return {d: s[0], l: parseInt(s.slice(1))} })

const changeDirection = (state, newDirection) => {
  const jsModWhichIsNotWeird = (n, m) => {
    return ((n % m) + m) % m
  }
  return Object.assign({}, state,
    {
      direction:
      jsModWhichIsNotWeird(state.direction + (newDirection === 'R' ? 1 : (newDirection === 'L' ? -1 : 0)), 4)
    }
  )
}

const calculateSteps = (state, steps) => {
  return [...Array(steps)].reduce((state, _) => {
    const northD = (state.direction === 0 ? 1 : (state.direction === 2 ? -1 : 0))
    const eastD = (state.direction === 1 ? 1 : (state.direction === 3 ? -1 : 0))
    const newCoord = [state.north + northD, state.east + eastD]
    // check for all previous coordinates
    if (state.firstVisitedTwice === undefined &&
      state.previousCoordinates.find((x) => (x[0] === newCoord[0] && x[1] === newCoord[1]))) {
      return Object.assign({}, state, {
        firstVisitedTwice: newCoord,
        previousCoordinates: [...state.previousCoordinates, newCoord],
        north: newCoord[0],
        east: newCoord[1]
      })
    }
    return Object.assign({}, state, {
      previousCoordinates: [...state.previousCoordinates, newCoord],
      north: newCoord[0],
      east: newCoord[1]
    })
  }, state)
}

module.exports = {dist, calculateSteps, changeDirection}
