
import { Pin } from '../lib/Button.Pin.js'
import { Restore } from '../lib/Button.Restore.js'
import { TemplateLoader } from '../lib/utilities/templateLoader.js'

await TemplateLoader.load("../lib/templates/Button.Pin.template.html")
console.log('button-pin template: Loaded')
await TemplateLoader.load("../lib/templates/Button.Restore.template.html")
console.log('button-restore template: Loaded')

customElements.define(Pin.tag, Pin)
customElements.define(Restore.tag, Restore)

// Load Imperative Interface
window.pin = document.querySelector('button-pin')
console.log('button-pin component: Loaded')

window.restore = document.querySelector('button-restore')
console.log('button-restore component: Loaded')

