import document from 'document'
import { display } from 'display'
import * as messaging from 'messaging'
import settings from './settings.js'
import encode from './encode.js'
const barWidthPercentage = 96
const barMax = 150

const run = () => {
  display.on = true
  display.autoOff = false

  let initialSettings = settings.fetch()

  if (initialSettings.code && initialSettings.code !== '') {
    updateDisplay(initialSettings.code)
  }

  messaging.peerSocket.onmessage = ({ data }) => {
    if (data.code) {
      settings.save({ code: data.code })
      updateDisplay(data.code)
    }
  }
}

const updateDisplay = (code) => {
  if (code === '') {
    showPlaceholder()
  } else {
    hidePlaceholder()
    drawBars(code)
    drawLabel(code)
  }
}

const pad = (n, width) => {
  n = n + ''
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n
}

const clearBars = () => {
  for (let i = 0; i <= barMax; i++) {
    document.getElementById('bc' + pad(i, 3)).width = 0
  }
}

const drawBars = (code) => {
  const encodedBits = encode(code)
  const fullWidth = document.getElementById('root').width
  const barWidth = fullWidth * (barWidthPercentage / 100.0)
  const barCount = encodedBits.length
  const barSize = Math.floor(barWidth / barCount)
  const offset = Math.floor((barWidth - (barCount * barSize)) / 2.0)

  clearBars()
  document.getElementById('barcode').style.display = 'inline'
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

const drawLabel = (code) => {
  document.getElementById('label').style.display = 'inline'
  document.getElementById('label').innerText = code
}

const hidePlaceholder = () => {
  document.getElementById('placeholder').style.display = 'none'
}

const showPlaceholder = () => {
  document.getElementById('placeholder').style.display = 'inline'
  document.getElementById('barcode').style.display = 'none'
  document.getElementById('label').style.display = 'none'
}

run()
