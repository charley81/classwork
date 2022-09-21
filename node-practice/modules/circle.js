const area = radius => {
  return radius ** 2 * Math.PI
}
// 2 * radius * PI

const circumference = radius => {
  return radius * 2 * Math.PI
}
// 2 X PI X r

module.exports = {
  area,
  circumference,
}
