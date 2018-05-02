const Total = 12
const Colors = []
for (let i = 1; i <= Total; i++) {
  Colors.push(i + '');
}
const ColorClassPrefix = {
  text: 'k-color-text--',
  background: 'k-color--'
}
module.exports = {
  Total: Total,
  Colors: Colors,
  ColorClassPrefix: ColorClassPrefix
}