import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/web.component/lib/enums/enum.tag.js"

import { Attribute, Visible, State, Operation } from "../src/Button.Metadata.js"
import { Restore } from "../src/Button.Restore.js";

import { template } from "../src/templates/Button.Restore.template.js"

describe('Given Restore imported', () => {
    it('Then Restore should be defined', () => {
        expect(Restore).toBeDefined()
    })
    it('Then Restore.tag should be Tag.Restore', () => {
        expect(Restore.tag).toBe(Tag.Restore)
    })
    it('Then Restore.attribute should be Attribute', () => {
        expect(Restore.attributes).toBe(Attribute)
    })
    describe('Given Restore defined', () => {
        beforeEach(() => {
            Utils.defineComponent(Restore.tag, Restore)
        })
        it('Then custom element registry should contain Restore', () => {
            expect(customElements.get(Restore.tag)).toBe(Restore)
        })
        describe('Given HTML Template added to DOM', () => {
            let HTMLTemplate: HTMLTemplateElement
            beforeEach(() => {
                HTMLTemplate = Utils.appendTemplate(Restore.tag, template)
            })
            afterEach(() =>{
                Utils.removeTemplate(Restore.tag)
            })
            it('Then a HTML Template should be available in DOM', () => {
                expect(document.getElementsByTagName('template')).toHaveSize(1)
            })
            describe('When Restore component added to DOM', () => {
                let restore : Restore;
                beforeEach(() => {
                    restore = Utils.appendComponent<Restore>(Restore.tag)
                })
                afterEach(() => {
                    restore.remove()
                })
                it('Then restore.templateId should be Restore.tag', () => {
                    expect(restore.templateId).toBe(Restore.tag)
                })
                describe('Given state defaults have been applied', () => {
                    it('Then restore.visible should be Visible.YES', () => {
                        expect(restore.visible).toEqual(Visible.YES)
                    })
                    it('Then restore.state should be State.OFF', () => {
                        expect(restore.state).toEqual(State.OFF)
                    })
                    describe('Given Imperative API used',() => {
                        describe('When restore.hide()', () => {
                            let onhide: jasmine.Spy
                            beforeEach(() => {
                                onhide = jasmine.createSpy('onhide')
                                restore.onhide = onhide
                                restore.hide()
                            })
                            it('Then restore.visible should be Visible.NO', () => {
                                expect(restore.visible).toEqual(Visible.NO)
                            })
                            it('Then html attribute visible should be Visible.NO', () => {
                                let visible = restore.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(Visible.NO)
                            })
                            it('Then onhide should have been called', () => {
                                expect(onhide).toHaveBeenCalled()
                            })
                            describe('When restore.show()',() =>{
                                let onshow: jasmine.Spy
                                beforeEach(() =>{
                                    onshow = jasmine.createSpy('onshow')
                                    restore.onshow = onshow
                                    restore.show()
                                })
                                it('Then restore.visible should be Visible.YES', () => {
                                    expect(restore.visible).toEqual(Visible.YES)
                                })
                                it('Then html attribute visible should be null', () => {
                                    let visible = restore.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(null)
                                })
                                it('Then onshow should have been called once', () => {
                                    expect(onshow).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When restore.show()', () => {
                            let onshow: jasmine.Spy
                            beforeEach(() => {
                                onshow = jasmine.createSpy('onshow')
                                restore.onshow = onshow
                                restore.show()
                            })
                            it('Then restore.visible should be Visible.YES', () => {
                                expect(restore.visible).toEqual(Visible.YES)
                            })
                            it('Then html attribute visible should be null', () => {
                                let visible = restore.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(null)
                            })
                            it('Then onshow should not have been called', () => {
                                expect(onshow).not.toHaveBeenCalled()
                            })
                            describe('When restore.hide()', () => {
                                let onhide: jasmine.Spy
                                beforeEach(() => {
                                    onhide = jasmine.createSpy('onhide')
                                    restore.onhide = onhide
                                    restore.hide()
                                })
                                it('Then restore.visible should be Visible.NO', () => {
                                    expect(restore.visible).toEqual(Visible.NO)
                                })
                                it('Then html attribute visible should be Visible.NO', () => {
                                    let visible = restore.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(Visible.NO)
                                })
                                it('Then onhide should have been called once', () => {
                                    expect(onhide).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When restore.on()', () => {
                            let onon: jasmine.Spy
                            beforeEach(() => {
                                onon = jasmine.createSpy('onon')
                                restore.onon = onon
                                restore.on()
                            })
                            it('Then restore.state should be State.ON', () => {
                                expect(restore.state).toEqual(State.ON)
                            })
                            it('Then html attribute state should be State.ON', () => {
                                let state = restore.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.ON)
                            })
                            it('Then onon should have been called', () => {
                                expect(onon).toHaveBeenCalled()
                            })
                            describe('When restore.off()', () => {
                                let onoff: jasmine.Spy
                                beforeEach(() => {
                                    onoff = jasmine.createSpy('onoff')
                                    restore.onoff = onoff
                                    restore.off()
                                })
                                it('Then restore.state should be State.OFF', () => {
                                    expect(restore.state).toEqual(State.OFF)
                                })
                                it('Then html attribute state should be State.OFF', () => {
                                    let state = restore.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.OFF)
                                })
                                it('Then onoff should have been called once', () => {
                                    expect(onoff).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When restore.off()', () => {
                            let onoff: jasmine.Spy
                            beforeEach(() => {
                                onoff = jasmine.createSpy('onoff')
                                restore.onoff = onoff
                                restore.off()
                            })
                            it('Then restore.state should be State.OFF', () => {
                                expect(restore.state).toEqual(State.OFF)
                            })
                            it('Then html attribute state should be null', () => {
                                let state = restore.getAttribute(Attribute.STATE)
                                expect(state).toEqual(null)
                            })
                            it('Then onoff should not have been called', () => {
                                expect(onoff).not.toHaveBeenCalled()
                            })
                            describe('When restore.on()', () => {
                                let onon: jasmine.Spy
                                beforeEach(() => {
                                    onon = jasmine.createSpy('onon')
                                    restore.onon = onon
                                    restore.on()
                                })
                                it('Then restore.state should be State.NO', () => {
                                    expect(restore.state).toEqual(State.ON)
                                })
                                it('Then html attribute state should be State.ON', () => {
                                    let state = restore.getAttribute(Attribute.STATE)
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
                                restore.onon = onon
                                restore.dispatchEvent(new MouseEvent('click'))
                            })
                            it('Then restore.state should be State.ON', () => {
                                expect(restore.state).toEqual(State.ON)
                            })
                            it('Then html attribute state should be State.ON', () => {
                                let state = restore.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.ON)
                            })
                            it('Then onon should have been called once', () => {
                                expect(onon).toHaveBeenCalledTimes(1)
                            })
                            describe('When click with mouse', () => {
                                let onoff: jasmine.Spy
                                beforeEach(() => {
                                    onoff = jasmine.createSpy('onoff')
                                    restore.onoff = onoff
                                    restore.dispatchEvent(new MouseEvent('click'))
                                })
                                it('Then restore.state should be State.OFF', () => {
                                    expect(restore.state).toEqual(State.OFF)
                                })
                                it('Then html attribute state should be State.OFF', () => {
                                    let state = restore.getAttribute(Attribute.STATE)
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