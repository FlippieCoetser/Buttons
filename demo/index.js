
import { Pin } from '../lib/Button.Pin.js'
import { Restore } from '../lib/Button.Restore.js'
import { Close } from '../lib/Button.Close.js'
import { Minimize} from '../lib/Button.Minimize.js'
import { TemplateLoader } from '../lib/utilities/templateLoader.js'

await TemplateLoader.load("../lib/templates/Button.Pin.template.html")
console.log('button-pin template: Loaded')
await TemplateLoader.load("../lib/templates/Button.Restore.template.html")
console.log('button-restore template: Loaded')
await TemplateLoader.load("../lib/templates/Button.Close.template.html")
console.log('button-close template: Loaded')
await TemplateLoader.load("../lib/templates/Button.Minimize.template.html")
console.log('button-minimize template: Loaded')

customElements.define(Pin.tag, Pin)
customElements.define(Restore.tag, Restore)
customElements.define(Close.tag, Close)
customElements.define(Minimize.tag, Minimize)

// Load Imperative Interface
window.pin = document.querySelector('button-pin')
console.log('button-pin component: Loaded')

window.restore = document.querySelector('button-restore')
console.log('button-restore component: Loaded')

window.close = document.querySelector('button-close')
console.log('button-close component: Loaded')

window.minimize = document.querySelector('button-minimize')
console.log('button-minimize component: Loaded')