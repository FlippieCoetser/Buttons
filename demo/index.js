
import { Pin      } from '../lib/Button.Pin.js'
import { Restore  } from '../lib/Button.Restore.js'
import { Close    } from '../lib/Button.Close.js'
import { Minimize } from '../lib/Button.Minimize.js'
import { Maximize } from '../lib/Button.Maximize.js'
import { Left     } from '../lib/Button.Left.js'
import { Right    } from '../lib/Button.Right.js'
import { Up       } from '../lib/Button.Up.js'
import { Down     } from '../lib/Button.Down.js'
import { Dots     } from '../lib/Button.Dots.js'

import { TemplateLoader } from '../lib/utilities/templateLoader.js'

await TemplateLoader.load("../lib/templates/Button.Pin.template.html")
await TemplateLoader.load("../lib/templates/Button.Restore.template.html")
await TemplateLoader.load("../lib/templates/Button.Close.template.html")
await TemplateLoader.load("../lib/templates/Button.Minimize.template.html")
await TemplateLoader.load("../lib/templates/Button.Maximize.template.html")
await TemplateLoader.load("../lib/templates/Button.Left.template.html")
await TemplateLoader.load("../lib/templates/Button.Right.template.html")
await TemplateLoader.load("../lib/templates/Button.Up.template.html")
await TemplateLoader.load("../lib/templates/Button.Down.template.html")
await TemplateLoader.load("../lib/templates/Button.Dots.template.html")
console.log('templates: Loaded')

customElements.define(Pin.tag, Pin)
customElements.define(Restore.tag, Restore)
customElements.define(Close.tag, Close)
customElements.define(Minimize.tag, Minimize)
customElements.define(Maximize.tag, Maximize)
customElements.define(Left.tag, Left)
customElements.define(Right.tag, Right)
customElements.define(Up.tag, Up)
customElements.define(Down.tag, Down)
customElements.define(Dots.tag, Dots)

// Load Imperative Interface
window.pin = document.querySelector('button-pin')
window.restore = document.querySelector('button-restore')
window.close = document.querySelector('button-close')
window.minimize = document.querySelector('button-minimize')
window.maximize = document.querySelector('button-maximize')
window.left = document.querySelector('button-left')
window.right = document.querySelector('button-right')
window.up = document.querySelector('button-up')
window.down = document.querySelector('button-down')
window.dots = document.querySelector('button-dots')
console.log('Buttons: Loaded')