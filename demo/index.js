import { Event } from '@browser-modules/events';
let event = new Event()

import { Pin } from '../lib/button.pin.js'
customElements.define(Pin.tag, Pin)

console.log('Index.js loaded')