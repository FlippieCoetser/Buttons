import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/web.component/lib/enums/enum.tag.js"
import { Pin } from "../src/Button.Pin.js";

import { Attribute, Visible, State } from "../src/button.metadata.js"
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
                HTMLTemplate = Utils.createTemplate(Pin.tag, template)
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
                    pin = Utils.createComponent<Pin>(Pin.tag)
                })
                afterEach(() => {
                    pin.remove()
                })
                it('Then pin.templateId should be Pin.tag', () => {
                    expect(pin.templateId).toBe(Pin.tag)
                })
                it('Then pin.visible should be Visible.YES', () => {
                    expect(pin.visible).toEqual(Visible.YES)
                })
                it('Then pin.state should be State.OFF', () => {
                    expect(pin.state).toEqual(State.OFF)
                })
                describe('Given imperative API is used', () => {
                    describe('When pin.visible set to Visible.NO', () => {
                        beforeEach(() => {
                            pin.visible = Visible.NO
                        })
                        it('Then pin.visible should be Visible.NO', () => {
                            expect(pin.visible).toEqual(Visible.NO)
                        })
                        it('Then html attribute visible should be Visible.NO', () => {
                            let visible = pin.getAttribute(Attribute.VISIBLE)
                            expect(visible).toEqual(Visible.NO)
                        })
                        describe('When pin.visible set to Visible.YES', () => {
                            beforeEach(() => {
                                pin.visible = Visible.YES
                            })
                            it('Then pin.visible should be Visible.YES', () => {
                                expect(pin.visible).toEqual(Visible.YES)
                            })
                            it('Then html attribute visible should be null', () => {
                                let visible = pin.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(null)
                            })
                        })
                    })
                    describe('Given all events has a handler registered', () => {
                        let onon: jasmine.Spy
                        let onoff: jasmine.Spy 
                        beforeEach(() => {
                            onon = jasmine.createSpy('onon') 
                            onoff = jasmine.createSpy('onoff')
                            pin.onon = onon
                            pin.onoff = onoff
                        })
                        describe('When pin.on() is called', () => {
                            beforeEach(() => {
                                pin.on()
                            })
                            it('Then pin.state should be State.ON', () => {
                                expect(pin.state).toEqual(State.ON)
                            })
                            it('Then the onon handler should be called once', () => {
                                expect(onon).toHaveBeenCalledTimes(1)
                            })
                            it('Then the onoff handler should not be called', () => {
                                expect(onoff).not.toHaveBeenCalled()
                            })
                            describe('When pin.off() is called', () => {
                                beforeEach(() =>{
                                    pin.off()
                                })
                                it('Then pin.state should be State.OFF', () => {
                                    expect(pin.state).toEqual(State.OFF)
                                })
                                it('Then the onon handler should be called once', () => {
                                    expect(onon).toHaveBeenCalledTimes(1)
                                })
                                it('Then the onoff handler should be called once', () => {
                                    expect(onoff).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When pin.off() is called', () => {
                            beforeEach(() => {
                                pin.off()
                            })
                            it('Then pin.state should be State.OFF', () => {
                                expect(pin.state).toEqual(State.OFF)
                            })
                            it('Then the onon handler should be called once', () => {
                                expect(onon).not.toHaveBeenCalled()
                            })
                            describe('When pin.on() is called', () => {
                                beforeEach(() => {
                                    pin.on()
                                })
                                it('Then pin.state should be State.ON', () => {
                                    expect(pin.state).toEqual(State.ON)
                                })
                                it('Then the onoff handler should be called once', () => {
                                    expect(onon).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When pin.toggle() is called', () => {
                            beforeEach(() => {
                                pin.toggle()
                            })
                            it('Then pin.state should be State.ON', () => {
                                expect(pin.state).toEqual(State.ON)
                            })
                            it('Then the onon handler should be called once', () => {
                                expect(onon).toHaveBeenCalledTimes(1)
                            })
                            it('Then the onoff handler should not be called', () => {
                                expect(onoff).not.toHaveBeenCalled()
                            })
                            describe('When pin.toggle() is called', () => {
                                beforeEach(() => {
                                    pin.toggle()
                                })
                                it('Then pin.state should be State.OFF', () => {
                                    expect(pin.state).toEqual(State.OFF)
                                })
                                it('Then the onon handler should be called once', () => {
                                    expect(onon).toHaveBeenCalledTimes(1)
                                })
                                it('Then the onoff handler should be called once', () => {
                                    expect(onoff).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                    })
                })
                describe('Given User Gestures is used', () => {
                    describe('Given all events has a handler registered', () => {
                        let onon: jasmine.Spy
                        let onoff: jasmine.Spy
                        beforeEach(() =>{
                            onon = jasmine.createSpy('onon')
                            onoff = jasmine.createSpy('onoff')
                            pin.onon = onon
                            pin.onoff = onoff
                        })
                        describe('When pin clicked', () => {
                            beforeEach(() =>{
                                pin.click()
                            })
                            it('Then pin.state should be State.ON', () => {
                                expect(pin.state).toEqual(State.ON)
                            })
                            it('Then the onon handler should be called once', () => {
                                expect(onon).toHaveBeenCalledTimes(1)
                            })
                            it('Then the onoff handler should not be called', () => {
                                expect(onoff).not.toHaveBeenCalled()
                            })
                            describe('When pin clicked', () => {
                                beforeEach(() =>{
                                    pin.click()
                                })
                                it('Then pin.state should be State.OFF', () => {
                                    expect(pin.state).toEqual(State.OFF)
                                })
                                it('Then the onon handler should be called once', () => {
                                    expect(onon).toHaveBeenCalledTimes(1)
                                })
                                it('Then the onoff handler should be called once', () => {
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