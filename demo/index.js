
import { Pin } from '../lib/button.pin.js'
import { TemplateLoader } from './templateLoader.js'

await TemplateLoader.load("../lib/templates/button.pin.template.html")
console.log('button-pin template: Loaded')

customElements.define(Pin.tag, Pin)
window.pin = document.querySelector('button-pin')

console.log('button-pin component: Loaded')
