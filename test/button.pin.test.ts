import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/web.component/lib/enums/enum.tag.js"

import { Attribute, Visible, State, Operation } from "../src/Button.metadata.js"
import { Pin } from "../src/Button.Pin.js";

import { template } from "../src/templates/Button.Pin.template.js"

describe('Given Pin imported', () => {
    it('Then Pin should be defined', () => {
        expect(Pin).toBeDefined()
    })
    it('Then Pin.tag should be Tag.Pin', () => {
        expect(Pin.tag).toBe(Tag.Pin)
    })
    it('Then Pin.attribute should be Attribute', () => {
        expect(Pin.attributes).toBe(Attribute)
    })
    describe('Given Pin defined', () => {
        beforeEach(() => {
            Utils.defineComponent(Pin.tag, Pin)
        })
        it('Then custom element registry should contain Pin', () => {
            expect(customElements.get(Pin.tag)).toBe(Pin)
        })
        describe('Given HTML Template added to DOM', () => {
            let HTMLTemplate: HTMLTemplateElement
            beforeEach(() => {
                HTMLTemplate = Utils.appendTemplate(Pin.tag, template)
            })
            afterEach(() =>{
                Utils.removeTemplate(Pin.tag)
            })
            it('Then a HTML Template should be available in DOM', () => {
                expect(document.getElementsByTagName('template')).toHaveSize(1)
            })
            describe('When Pin component added to DOM', () => {
                let pin : Pin;
                beforeEach(() => {
                    pin = Utils.appendComponent<Pin>(Pin.tag)
                })
                afterEach(() => {
                    pin.remove()
                })
                it('Then pin.templateId should be Pin.tag', () => {
                    expect(pin.templateId).toBe(Pin.tag)
                })
                describe('Given state defaults have been applied', () => {
                    it('Then pin.visible should be Visible.YES', () => {
                        expect(pin.visible).toEqual(Visible.YES)
                    })
                    it('Then pin.state should be State.OFF', () => {
                        expect(pin.state).toEqual(State.OFF)
                    })
                    describe('Given Imperative API used',() => {
                        describe('When pin.hide()', () => {
                            let onhide: jasmine.Spy
                            beforeEach(() => {
                                onhide = jasmine.createSpy('onhide')
                                pin.onhide = onhide
                                pin.hide()
                            })
                            it('Then pin.visible should be Visible.NO', () => {
                                expect(pin.visible).toEqual(Visible.NO)
                            })
                            it('Then html attribute visible should be Visible.NO', () => {
                                let visible = pin.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(Visible.NO)
                            })
                            it('Then onhide should have been called', () => {
                                expect(onhide).toHaveBeenCalled()
                            })
                            describe('When pin.show()',() =>{
                                let onshow: jasmine.Spy
                                beforeEach(() =>{
                                    onshow = jasmine.createSpy('onshow')
                                    pin.onshow = onshow
                                    pin.show()
                                })
                                it('Then pin.visible should be Visible.YES', () => {
                                    expect(pin.visible).toEqual(Visible.YES)
                                })
                                it('Then html attribute visible should be null', () => {
                                    let visible = pin.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(null)
                                })
                                it('Then onshow should have been called once', () => {
                                    expect(onshow).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When pin.show()', () => {
                            let onshow: jasmine.Spy
                            beforeEach(() => {
                                onshow = jasmine.createSpy('onshow')
                                pin.onshow = onshow
                                pin.show()
                            })
                            it('Then pin.visible should be Visible.YES', () => {
                                expect(pin.visible).toEqual(Visible.YES)
                            })
                            it('Then html attribute visible should be null', () => {
                                let visible = pin.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(null)
                            })
                            it('Then onshow should not have been called', () => {
                                expect(onshow).not.toHaveBeenCalled()
                            })
                            describe('When pin.hide()', () => {
                                let onhide: jasmine.Spy
                                beforeEach(() => {
                                    onhide = jasmine.createSpy('onhide')
                                    pin.onhide = onhide
                                    pin.hide()
                                })
                                it('Then pin.visible should be Visible.NO', () => {
                                    expect(pin.visible).toEqual(Visible.NO)
                                })
                                it('Then html attribute visible should be Visible.NO', () => {
                                    let visible = pin.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(Visible.NO)
                                })
                                it('Then onhide should have been called once', () => {
                                    expect(onhide).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When pin.on()', () => {
                            let onon: jasmine.Spy
                            beforeEach(() => {
                                onon = jasmine.createSpy('onon')
                                pin.onon = onon
                                pin.on()
                            })
                            it('Then pin.state should be State.ON', () => {
                                expect(pin.state).toEqual(State.ON)
                            })
                            it('Then html attribute state should be State.ON', () => {
                                let state = pin.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.ON)
                            })
                            it('Then onon should have been called', () => {
                                expect(onon).toHaveBeenCalled()
                            })
                            describe('When pin.off()', () => {
                                let onoff: jasmine.Spy
                                beforeEach(() => {
                                    onoff = jasmine.createSpy('onoff')
                                    pin.onoff = onoff
                                    pin.off()
                                })
                                it('Then pin.state should be State.OFF', () => {
                                    expect(pin.state).toEqual(State.OFF)
                                })
                                it('Then html attribute state should be State.OFF', () => {
                                    let state = pin.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.OFF)
                                })
                                it('Then onoff should have been called once', () => {
                                    expect(onoff).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When pin.off()', () => {
                            let onoff: jasmine.Spy
                            beforeEach(() => {
                                onoff = jasmine.createSpy('onoff')
                                pin.onoff = onoff
                                pin.off()
                            })
                            it('Then pin.state should be State.OFF', () => {
                                expect(pin.state).toEqual(State.OFF)
                            })
                            it('Then html attribute state should be null', () => {
                                let state = pin.getAttribute(Attribute.STATE)
                                expect(state).toEqual(null)
                            })
                            it('Then onoff should not have been called', () => {
                                expect(onoff).not.toHaveBeenCalled()
                            })
                            describe('When pin.on()', () => {
                                let onon: jasmine.Spy
                                beforeEach(() => {
                                    onon = jasmine.createSpy('onon')
                                    pin.onon = onon
                                    pin.on()
                                })
                                it('Then pin.state should be State.NO', () => {
                                    expect(pin.state).toEqual(State.ON)
                                })
                                it('Then html attribute state should be State.ON', () => {
                                    let state = pin.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.ON)
                                })
                                it('Then onoff should not have been called', () => {
                                    expect(onoff).toHaveBeenCalledTimes(0)
                                })
                            })
                        })
                    })
                    describe('Given User Gestures used', () => {
                        describe('When click with mouse', () => {
                            let onon: jasmine.Spy
                            beforeEach(() => {
                                onon = jasmine.createSpy('onon')
                                pin.onon = onon
                                pin.dispatchEvent(new MouseEvent('click'))
                            })
                            it('Then pin.state should be State.ON', () => {
                                expect(pin.state).toEqual(State.ON)
                            })
                            it('Then html attribute state should be State.ON', () => {
                                let state = pin.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.ON)
                            })
                            it('Then onon should have been called once', () => {
                                expect(onon).toHaveBeenCalledTimes(1)
                            })
                            describe('When click with mouse', () => {
                                let onoff: jasmine.Spy
                                beforeEach(() => {
                                    onoff = jasmine.createSpy('onoff')
                                    pin.onoff = onoff
                                    pin.dispatchEvent(new MouseEvent('click'))
                                })
                                it('Then pin.state should be State.OFF', () => {
                                    expect(pin.state).toEqual(State.OFF)
                                })
                                it('Then html attribute state should be State.OFF', () => {
                                    let state = pin.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.OFF)
                                })
                                it('Then onoff should have been called once', () => {
                                    expect(onoff).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})