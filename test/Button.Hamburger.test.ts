import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/web.component/lib/enums/enum.tag.js"

import { Attribute, Visible, State, Operation } from "../src/Button.metadata.js"
import { Hamburger } from "../src/Button.Hamburger.js";

import { template } from "../src/templates/Button.Hamburger.template.js"

describe('Given Hamburger imported', () => {
    it('Then Hamburger should be defined', () => {
        expect(Hamburger).toBeDefined()
    })
    it('Then Hamburger.tag should be Tag.Hamburger', () => {
        expect(Hamburger.tag).toBe(Tag.Hamburger)
    })
    it('Then Hamburger.attributes should be Attribute', () => {
        expect(Hamburger.attributes).toBe(Attribute)
    })
    describe('Given Hamburger defined', () => {
        beforeEach(() => {
            Utils.defineComponent(Hamburger.tag, Hamburger)
        })
        it('Then custom element registry should contain Hamburger', () => {
            expect(customElements.get(Hamburger.tag)).toBe(Hamburger)
        })
        describe('Given HTML Template added to DOM', () => {
            let HTMLTemplate: HTMLTemplateElement
            beforeEach(() => {
                HTMLTemplate = Utils.appendTemplate(Hamburger.tag, template)
            })
            afterEach(() =>{
                Utils.removeTemplate(Hamburger.tag)
            })
            it('Then a HTML Template should be available in DOM', () => {
                expect(document.getElementsByTagName('template')).toHaveSize(1)
            })
            describe('When Hamburger component added to DOM', () => {
                let hamburger : Hamburger;
                beforeEach(() => {
                    hamburger = Utils.appendComponent<Hamburger>(Hamburger.tag)
                })
                afterEach(() => {
                    hamburger.remove()
                })
                it('Then hamburger.templateId should be Hamburger.tag', () => {
                    expect(hamburger.templateId).toBe(Hamburger.tag)
                })
                describe('Given state defaults have been applied', () => {
                    it('Then hamburger.visible should be Visible.YES', () => {
                        expect(hamburger.visible).toEqual(Visible.YES)
                    })
                    it('Then hamburger.state should be State.OFF', () => {
                        expect(hamburger.state).toEqual(State.OFF)
                    })
                    describe('Given Imperative API used',() => {
                        describe('When hamburger.hide()', () => {
                            let onhide: jasmine.Spy
                            let event: CustomEvent
                            beforeEach(() => {
                                onhide = jasmine.createSpy('onhide')
                                hamburger.onhide = onhide
                                hamburger.hide()
                                event = onhide.calls.mostRecent().args[0]
                            })
                            it('Then hamburger.visible should be Visible.NO', () => {
                                expect(hamburger.visible).toEqual(Visible.NO)
                            })
                            it('Then html attribute visible should be Visible.NO', () => {
                                let visible = hamburger.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(Visible.NO)
                            })
                            it('Then onhide should have been called', () => {
                                expect(onhide).toHaveBeenCalled()
                            })
                            it('Then onhide custom event should have been called with ...args', () => {
                                expect(event.detail).toEqual({visible: Visible.NO})
                            })
                            describe('When hamburger.show()',() =>{
                                let onshow: jasmine.Spy
                                let event: CustomEvent
                                beforeEach(() =>{
                                    onshow = jasmine.createSpy('onshow')
                                    hamburger.onshow = onshow
                                    hamburger.show()
                                    event = onshow.calls.mostRecent().args[0]
                                })
                                it('Then hamburger.visible should be Visible.YES', () => {
                                    expect(hamburger.visible).toEqual(Visible.YES)
                                })
                                it('Then html attribute visible should be null', () => {
                                    let visible = hamburger.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(null)
                                })
                                it('Then onshow should have been called once', () => {
                                    expect(onshow).toHaveBeenCalledTimes(1)
                                })
                                it('Then onhide custom event should have been called with ...args', () => {
                                    expect(event.detail).toEqual({visible: Visible.YES})
                                })
                            })
                        })
                        describe('When hamburger.show()', () => {
                            let onshow: jasmine.Spy
                            beforeEach(() => {
                                onshow = jasmine.createSpy('onshow')
                                hamburger.onshow = onshow
                                hamburger.show()
                                
                            })
                            it('Then hamburger.visible should be Visible.YES', () => {
                                expect(hamburger.visible).toEqual(Visible.YES)
                            })
                            it('Then html attribute visible should be null', () => {
                                let visible = hamburger.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(null)
                            })
                            it('Then onshow should not have been called', () => {
                                expect(onshow).not.toHaveBeenCalled()
                            })
                            describe('When hamburger.hide()', () => {
                                let onhide: jasmine.Spy
                                let event: CustomEvent
                                beforeEach(() => {
                                    onhide = jasmine.createSpy('onhide')
                                    hamburger.onhide = onhide
                                    hamburger.hide()
                                    event = onhide.calls.mostRecent().args[0]
                                })
                                it('Then hamburger.visible should be Visible.NO', () => {
                                    expect(hamburger.visible).toEqual(Visible.NO)
                                })
                                it('Then html attribute visible should be Visible.NO', () => {
                                    let visible = hamburger.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(Visible.NO)
                                })
                                it('Then onhide should have been called once', () => {
                                    expect(onhide).toHaveBeenCalledTimes(1)
                                })
                                it('Then onhide custom event should have been called with ...args', () => {
                                    expect(event.detail).toEqual({visible: Visible.NO})
                                })
                            })
                        })
                        describe('When hamburger.on()', () => {
                            let onon: jasmine.Spy
                            let event: CustomEvent
                            beforeEach(() => {
                                onon = jasmine.createSpy('onon')
                                hamburger.onon = onon
                                hamburger.on()
                                event = onon.calls.mostRecent().args[0]
                            })
                            it('Then hamburger.state should be State.ON', () => {
                                expect(hamburger.state).toEqual(State.ON)
                            })
                            it('Then html attribute state should be State.ON', () => {
                                let state = hamburger.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.ON)
                            })
                            it('Then onon should have been called', () => {
                                expect(onon).toHaveBeenCalled()
                            })
                            it('Then onon custom event should have been called with ...args', () => {
                                expect(event.detail).toEqual({state: State.ON})
                            })
                            describe('When hamburger.off()', () => {
                                let onoff: jasmine.Spy
                                let event: CustomEvent
                                beforeEach(() => {
                                    onoff = jasmine.createSpy('onoff')
                                    hamburger.onoff = onoff
                                    hamburger.off()
                                    event = onoff.calls.mostRecent().args[0]
                                })
                                it('Then hamburger.state should be State.OFF', () => {
                                    expect(hamburger.state).toEqual(State.OFF)
                                })
                                it('Then html attribute state should be State.OFF', () => {
                                    let state = hamburger.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.OFF)
                                })
                                it('Then onoff should have been called once', () => {
                                    expect(onoff).toHaveBeenCalledTimes(1)
                                })
                                it('Then onoff custom event should have been called with ...args', () => {
                                    expect(event.detail).toEqual({state: State.OFF})
                                })
                            })
                        })
                        describe('When hamburger.off()', () => {
                            let onoff: jasmine.Spy
                            beforeEach(() => {
                                onoff = jasmine.createSpy('onoff')
                                hamburger.onoff = onoff
                                hamburger.off()
                            })
                            it('Then hamburger.state should be State.OFF', () => {
                                expect(hamburger.state).toEqual(State.OFF)
                            })
                            it('Then html attribute state should be null', () => {
                                let state = hamburger.getAttribute(Attribute.STATE)
                                expect(state).toEqual(null)
                            })
                            it('Then onoff should not have been called', () => {
                                expect(onoff).not.toHaveBeenCalled()
                            })
                            describe('When hamburger.on()', () => {
                                let onon: jasmine.Spy
                                let event: CustomEvent
                                beforeEach(() => {
                                    onon = jasmine.createSpy('onon')
                                    hamburger.onon = onon
                                    hamburger.on()
                                    event = onon.calls.mostRecent().args[0]
                                })
                                it('Then hamburger.state should be State.NO', () => {
                                    expect(hamburger.state).toEqual(State.ON)
                                })
                                it('Then html attribute state should be State.ON', () => {
                                    let state = hamburger.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.ON)
                                })
                                it('Then onoff should not have been called', () => {
                                    expect(onoff).toHaveBeenCalledTimes(0)
                                })
                                it('Then onon custom event should have been called with ...args', () => {
                                    expect(event.detail).toEqual({state: State.ON})
                                })
                            })
                        })
                    })
                    describe('Given User Gestures used', () => {
                        describe('When click with mouse', () => {
                            let onon: jasmine.Spy
                            beforeEach(() => {
                                onon = jasmine.createSpy('onon')
                                hamburger.onon = onon
                                hamburger.dispatchEvent(new MouseEvent('click'))
                            })
                            it('Then hamburger.state should be State.ON', () => {
                                expect(hamburger.state).toEqual(State.ON)
                            })
                            it('Then html attribute state should be State.ON', () => {
                                let state = hamburger.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.ON)
                            })
                            it('Then onon should have been called once', () => {
                                expect(onon).toHaveBeenCalledTimes(1)
                            })
                            describe('When click with mouse', () => {
                                let onoff: jasmine.Spy
                                beforeEach(() => {
                                    onoff = jasmine.createSpy('onoff')
                                    hamburger.onoff = onoff
                                    hamburger.dispatchEvent(new MouseEvent('click'))
                                })
                                it('Then hamburger.state should be State.OFF', () => {
                                    expect(hamburger.state).toEqual(State.OFF)
                                })
                                it('Then html attribute state should be State.OFF', () => {
                                    let state = hamburger.getAttribute(Attribute.STATE)
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