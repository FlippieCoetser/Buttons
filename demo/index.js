import { Pin } from '../lib/button.pin.js'
customElements.define(Pin.tag, Pin)

window.pin = document.querySelector('button-pin')

console.log('button-pin: Loaded')