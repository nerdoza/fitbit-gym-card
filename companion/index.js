import * as messaging from 'messaging'
import { settingsStorage } from 'settings'

const restoreSettings = () => {
  let code = parseCodeSettings(settingsStorage.getItem('code'))
  sendVal({ code })
}

const sendVal = (data) => {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data)
  }
}

const parseCodeSettings = (raw) => {
  if (typeof raw === 'undefined' || raw === 'undefined') {
    return null
  }
  return JSON.parse(raw).name.toUpperCase()
}

messaging.peerSocket.onopen = () => {
  restoreSettings()
}

settingsStorage.onchange = (event) => {
  if (event.key === 'code') {
    sendVal({ code: parseCodeSettings(event.newValue) })
  }
}

