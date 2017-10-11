import document from 'document'
import { display } from 'display'
import * as messaging from 'messaging'
import settings from './settings.js'
import encode from './encode.js'
const barWidthPercentage = 96

display.on = true
display.autoOff = false

let initialSettings = settings.fetch()

if (initialSettings.code) {
  updateDisplay(initialSettings.code)
}

messaging.peerSocket.onmessage = ({ data }) => {
  if (data.key === 'code' && data.newValue) {
    let code = data.newValue
    settings.save({ code })
    updateDisplay(code)
  }
}

const updateDisplay = (code) => {
  const encodedBits = encode(code)
  const fullWidth = document.getElementById('root').width
  const barWidth = fullWidth * (barWidthPercentage / 100.0)
  const barCount = encodedBits.length
  const barSize = Math.floor(barWidth / barCount)
  const offset = Math.floor((barWidth - (barCount * barSize)) / 2.0)

  const pad = (n, width) => {
    n = n + ''
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n
  }

  const drawBars = () => {
    let x = 0
    for (let i = 0; i < barCount; i++) {
      if (encodedBits[i] === 1) {
        let target = document.getElementById('bc' + pad(x++, 3))
        if (target) {
          target.width = barSize
          target.x = offset + barSize * i
          target.style.fill = 'black'
        }
      }
    }
  }

  const drawLabel = () => {
    document.getElementById('label').innerText = code
  }

  if (barSize <= 0) {
    console.log('Barcode resolution not possible')
  } else {
    drawBars()
    drawLabel()
  }
}
