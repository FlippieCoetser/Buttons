
import { Pin } from '../lib/button.pin.js'
import { Restore } from '../lib/button.restore.js'
import { TemplateLoader } from '../lib/utilities/templateLoader.js'

await TemplateLoader.load("../lib/templates/button.pin.template.html")
console.log('button-pin template: Loaded')
await TemplateLoader.load("../lib/templates/button.restore.template.html")
console.log('button-restore template: Loaded')

customElements.define(Pin.tag, Pin)
customElements.define(Restore.tag, Restore)

// Load Imperative Interface
window.pin = document.querySelector('button-pin')
console.log('button-pin component: Loaded')

window.restore = document.querySelector('button-restore')
console.log('button-restore component: Loaded')

