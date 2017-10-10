import document from 'document'
import encode from './encode.js'
const fullWidth = 348
const barWidthPercentage = 90

console.log('App Started')

const encodedBits = encode('60193')
const barWidth = fullWidth * (barWidthPercentage / 100.0)
const barCount = encodedBits.length
const barSize = Math.floor(barWidth / barCount)

const pad = (n, width) => {
  n = n + ''
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n
}

const drawBars = () => {
  for (let i = 0; i < barCount; i++) {
    if (encodedBits[i] === 1) {
      let target = document.getElementById('bc' + pad(i, 3))
      if (target) {
        target.width = barSize
        target.x = barSize * i
        target.style.fill = 'black'
      }
    }
  }
}

if (barSize <= 0) {
  console.log('Barcode resolution not possible')
} else {
  drawBars()
}
