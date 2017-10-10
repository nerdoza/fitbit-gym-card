import document from 'document'
import encode from './encode.js'

console.log('App Started')
let encoded = encode('60193')
console.log(encoded)

// let barcodeSVG = JSBarcode('60193', 'code39', {width: 200, toFile: false})

// let barcodeElem = document.getElementById('barcode')
// barcodeElem.innerHTML = `<g>
// <rect width="0.6" height="50" x="0.0" y="0"/>
// <rect width="0.6" height="50" x="1.7" y="0"/>
// <rect width="1.1" height="50" x="2.8" y="0"/>
// <rect width="1.1" height="50" x="4.4" y="0"/>
// <rect width="0.6" height="50" x="6.1" y="0"/>
// <rect width="0.6" height="50" x="7.2" y="0"/>
// <rect width="1.1" height="50" x="8.3" y="0"/>
// <rect width="1.1" height="50" x="10.6" y="0"/>
// <rect width="0.6" height="50" x="12.2" y="0"/>
// <rect width="0.6" height="50" x="13.3" y="0"/>
// <rect width="0.6" height="50" x="14.4" y="0"/>
// <rect width="0.6" height="50" x="15.6" y="0"/>
// <rect width="1.1" height="50" x="17.2" y="0"/>
// <rect width="1.1" height="50" x="18.9" y="0"/>
// <rect width="0.6" height="50" x="20.6" y="0"/>
// <rect width="1.1" height="50" x="21.7" y="0"/>
// <rect width="0.6" height="50" x="23.3" y="0"/>
// <rect width="0.6" height="50" x="25.0" y="0"/>
// <rect width="0.6" height="50" x="26.1" y="0"/>
// <rect width="1.1" height="50" x="27.2" y="0"/>
// <rect width="0.6" height="50" x="28.9" y="0"/>
// <rect width="1.1" height="50" x="30.0" y="0"/>
// <rect width="0.6" height="50" x="32.2" y="0"/>
// <rect width="1.1" height="50" x="33.3" y="0"/>
// <rect width="0.6" height="50" x="35.0" y="0"/>
// <rect width="1.1" height="50" x="36.1" y="0"/>
// <rect width="1.1" height="50" x="37.8" y="0"/>
// <rect width="0.6" height="50" x="40.0" y="0"/>
// <rect width="0.6" height="50" x="41.1" y="0"/>
// <rect width="0.6" height="50" x="42.2" y="0"/>
// <rect width="0.6" height="50" x="43.3" y="0"/>
// <rect width="0.6" height="50" x="45.0" y="0"/>
// <rect width="1.1" height="50" x="46.1" y="0"/>
// <rect width="1.1" height="50" x="47.8" y="0"/>
// <rect width="0.6" height="50" x="49.4" y="0.0"/>
// </g>`

// // Message is received
// messaging.peerSocket.onmessage = evt => {
//   console.log(`App received: ${JSON.stringify(evt)}`);
//   if (evt.data.key === "color" && evt.data.newValue) {
//     let color = util.stripQuotes(evt.data.newValue);
//     console.log(`Setting background color: ${color}`);
//     background.style.fill = color;
//   }
// };

// // Message socket opens
// messaging.peerSocket.onopen = () => {
//   console.log("App Socket Open");
// };

// // Message socket closes
// messaging.peerSocket.close = () => {
//   console.log("App Socket Closed");
// };
