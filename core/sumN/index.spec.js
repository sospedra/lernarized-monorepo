const test = require('ava')

const sumN = require('./index')

const randomInt = () => Number.parseInt(Math.random() * 50)

test('given some numbers should return the sum', (t) => {
  const params = Array(randomInt()).join(0).split(0).map(randomInt)
  const expected = params.reduce((memo, param) => memo + param)
  const result = sumN(...params)

  t.plan(1)
  t.is(result, expected)
})
