module.exports = function sumN () {
  const factors = [].slice.call(arguments)

  return factors.reduce((memo, factor) => memo + factor)
}
