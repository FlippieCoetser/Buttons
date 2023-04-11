
import { Pin } from '../lib/button.pin.js'
import { TemplateLoader } from '../lib/utilities/templateLoader.js'

await TemplateLoader.load("../lib/templates/button.pin.template.html")
console.log('button-pin template: Loaded')

customElements.define(Pin.tag, Pin)

// Load Imperative Interface
window.pin = document.querySelector('button-pin')

console.log('button-pin component: Loaded')
