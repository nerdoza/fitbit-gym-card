import * as messaging from 'messaging'
import { settingsStorage } from 'settings'

const restoreSettings = () => {
  for (let index = 0; index < settingsStorage.length; index++) {
    let key = settingsStorage.key(index)
    if (key) {
      let data = {
        key: key,
        newValue: JSON.parse(settingsStorage.getItem(key)).name
      }
      sendVal(data)
    }
  }
}

const sendVal = (data) => {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data)
  }
}

messaging.peerSocket.onopen = () => {
  restoreSettings()
}

settingsStorage.onchange = evt => {
  let data = {
    key: evt.key,
    newValue: JSON.parse(evt.newValue).name
  }
  sendVal(data)
}

