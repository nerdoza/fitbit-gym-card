import * as fs from 'fs'
const settingsFileName = 'settings.json'

export default {
  save: (settings) => {
    fs.writeFileSync(settingsFileName, settings, 'json')
  },
  fetch: () => {
    let data = {}
    try {
      data = fs.readFileSync(settingsFileName, 'json')
    } catch (e) { }
    return data
  }
}
