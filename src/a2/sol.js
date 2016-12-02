/* @flow */

type State = {
  number: number,
  foundNumbers: Array<number>
}

type Instruction = string

const getCode = (input: string, keymap: Object) => {
  const startingState: State = {
    number: 5,
    foundNumbers: []
  }
  const inputs: Array<Array<Instruction>> = parseInput(input)
  const codes: State = inputs.reduce((state, instructions) => {
    const newState = reduceCode(instructions, state, keymap)
    return Object.assign({}, {
      foundNumbers: [...state.foundNumbers, newState.number],
      number: newState.number
    })
  }, startingState)
  return codes
}

const reduceCode = (instructions: Array<Instruction>, startingState: State, keymap) => {
  return instructions.reduce(calculateState(keymap), startingState)
}
const keyMaps = {
  simple: {
    'U': { '7': '4', '8': '5', '9': '6', '4': '1', '5': '2', '6': '3' },
    'L': { '3': '2', '6': '5', '9': '8', '8': '7', '5': '4', '2': '1' },
    'R': { '1': '2', '4': '5', '7': '8', '2': '3', '5': '6', '8': '9' },
    'D': { '1': '4', '2': '5', '3': '6', '4': '7', '5': '8', '6': '9' }
  },
  complex:
  {
    'U': { '3': '1', '6': '2', '7': '3', '8': '4', 'A': '6', 'B': '7', 'C': '8', 'D': 'B' },
    'D': { '1': '3', '2': '6', '3': '7', '4': '8', '6': 'A', '7': 'B', '8': 'C', 'B': 'D' },
    'L': { '3': '2', '4': '3', '6': '5', '7': '6', '8': '7', '9': '8', 'B': 'A', 'C': 'B' },
    'R': { '2': '3', '3': '4', '5': '6', '6': '7', '7': '8', '8': '9', 'A': 'B', 'B': 'C' }
  }
}

const calculateState = (map) => {
  return (state: State, instruction) => {
    const newState = Object.assign({}, state, { number: (map[instruction][state.number] || state.number) })
    return newState
  }
}

const parseInput = (input: string): Array<Array<Instruction>> => {
  return input.split('\n').map(x => {
    return x.split('').reduce((acc, n) => {
      switch (n) {
        case 'U': return [...acc, 'U']
        case 'L': return [...acc, 'L']
        case 'R': return [...acc, 'R']
        case 'D': return [...acc, 'D']
        default: return acc
      }
    }, [])
  })
}

module.exports = { getCode, keyMaps }
