import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/web.component/lib/enums/enum.tag.js"

import { Attribute, Visible, State, Operation } from "../src/Button.metadata.js"
import { Close } from "../src/Button.Close.js";

import { template } from "../src/templates/Button.Close.template.js"

describe('Given Close imported', () => {
    it('Then Close should be defined', () => {
        expect(Close).toBeDefined()
    })
    it('Then Close.tag should be Tag.Close', () => {
        expect(Close.tag).toBe(Tag.Close)
    })
    it('Then Close.attributes should be Attribute', () => {
        expect(Close.attributes).toBe(Attribute)
    })
    describe('Given Close defined', () => {
        beforeEach(() => {
            Utils.defineComponent(Close.tag, Close)
        })
        it('Then custom element registry should contain Close', () => {
            expect(customElements.get(Close.tag)).toBe(Close)
        })
        describe('Given HTML Template added to DOM', () => {
            let HTMLTemplate: HTMLTemplateElement
            beforeEach(() => {
                HTMLTemplate = Utils.appendTemplate(Close.tag, template)
            })
            afterEach(() =>{
                Utils.removeTemplate(Close.tag)
            })
            it('Then a HTML Template should be available in DOM', () => {
                expect(document.getElementsByTagName('template')).toHaveSize(1)
            })
            describe('When Close component added to DOM', () => {
                let close : Close;
                beforeEach(() => {
                    close = Utils.appendComponent<Close>(Close.tag)
                })
                afterEach(() => {
                    close.remove()
                })
                it('Then close.templateId should be Close.tag', () => {
                    expect(close.templateId).toBe(Close.tag)
                })
                describe('Given state defaults have been applied', () => {
                    it('Then close.visible should be Visible.YES', () => {
                        expect(close.visible).toEqual(Visible.YES)
                    })
                    it('Then close.state should be State.UP', () => {
                        expect(close.state).toEqual(State.UP)
                    })
                    describe('Given Imperative API used',() => {
                        describe('When close.hide()', () => {
                            let onhide: jasmine.Spy
                            beforeEach(() => {
                                onhide = jasmine.createSpy('onhide')
                                close.onhide = onhide
                                close.hide()
                            })
                            it('Then close.visible should be Visible.NO', () => {
                                expect(close.visible).toEqual(Visible.NO)
                            })
                            it('Then html attribute visible should be Visible.NO', () => {
                                let visible = close.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(Visible.NO)
                            })
                            it('Then onhide should have been called', () => {
                                expect(onhide).toHaveBeenCalled()
                            })
                            describe('When close.show()',() =>{
                                let onshow: jasmine.Spy
                                beforeEach(() =>{
                                    onshow = jasmine.createSpy('onshow')
                                    close.onshow = onshow
                                    close.show()
                                })
                                it('Then close.visible should be Visible.YES', () => {
                                    expect(close.visible).toEqual(Visible.YES)
                                })
                                it('Then html attribute visible should be null', () => {
                                    let visible = close.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(null)
                                })
                                it('Then onshow should have been called once', () => {
                                    expect(onshow).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When close.show()', () => {
                            let onshow: jasmine.Spy
                            beforeEach(() => {
                                onshow = jasmine.createSpy('onshow')
                                close.onshow = onshow
                                close.show()
                            })
                            it('Then close.visible should be Visible.YES', () => {
                                expect(close.visible).toEqual(Visible.YES)
                            })
                            it('Then html attribute visible should be null', () => {
                                let visible = close.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(null)
                            })
                            it('Then onshow should not have been called', () => {
                                expect(onshow).not.toHaveBeenCalled()
                            })
                            describe('When close.hide()', () => {
                                let onhide: jasmine.Spy
                                beforeEach(() => {
                                    onhide = jasmine.createSpy('onhide')
                                    close.onhide = onhide
                                    close.hide()
                                })
                                it('Then close.visible should be Visible.NO', () => {
                                    expect(close.visible).toEqual(Visible.NO)
                                })
                                it('Then html attribute visible should be Visible.NO', () => {
                                    let visible = close.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(Visible.NO)
                                })
                                it('Then onhide should have been called once', () => {
                                    expect(onhide).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When close.press()', () => {
                            let ondown: jasmine.Spy
                            beforeEach(() => {
                                ondown = jasmine.createSpy('onon')
                                close.ondown = ondown
                                close.press()
                            })
                            it('Then close.state should be State.DOWN', () => {
                                expect(close.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = close.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called', () => {
                                expect(ondown).toHaveBeenCalled()
                            })
                            describe('When close.release()', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    close.onup = onup
                                    close.release()
                                })
                                it('Then close.state should be State.UP', () => {
                                    expect(close.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = close.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.UP)
                                })
                                it('Then onup should have been called once', () => {
                                    expect(onup).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When close.release()', () => {
                            let onup: jasmine.Spy
                            beforeEach(() => {
                                onup = jasmine.createSpy('onup')
                                close.onup = onup
                                close.release()
                            })
                            it('Then close.state should be State.UP', () => {
                                expect(close.state).toEqual(State.UP)
                            })
                            it('Then html attribute state should be null', () => {
                                let state = close.getAttribute(Attribute.STATE)
                                expect(state).toEqual(null)
                            })
                            it('Then onup should not have been called', () => {
                                expect(onup).not.toHaveBeenCalled()
                            })
                            describe('When close.press()', () => {
                                let ondown: jasmine.Spy
                                beforeEach(() => {
                                    ondown = jasmine.createSpy('ondown')
                                    close.ondown = ondown
                                    close.press()
                                })
                                it('Then close.state should be State.DOWN', () => {
                                    expect(close.state).toEqual(State.DOWN)
                                })
                                it('Then html attribute state should be State.DOWN', () => {
                                    let state = close.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.DOWN)
                                })
                                it('Then ondown should not have been called', () => {
                                    expect(ondown).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                    })
                    describe('Given User Gestures used', () => {
                        describe('When mouse down', () => {
                            let ondown: jasmine.Spy
                            beforeEach(() => {
                                ondown = jasmine.createSpy('ondown')
                                close.ondown = ondown
                                close.dispatchEvent(new MouseEvent('mousedown'))
                            })
                            it('Then close.state should be State.DOWN)', () => {
                                expect(close.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = close.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called once', () => {
                                expect(ondown).toHaveBeenCalledTimes(1)
                            })
                            describe('When mouse up', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    close.onup = onup
                                    close.dispatchEvent(new MouseEvent('mouseup'))
                                })
                                it('Then close.state should be State.UP', () => {
                                    expect(close.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = close.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.UP)
                                })
                                it('Then onup should have been called once', () => {
                                    expect(onup).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When touch start', () => {
                            let ondown: jasmine.Spy
                            beforeEach(() => {
                                ondown = jasmine.createSpy('ondown')
                                close.ondown = ondown
                                close.dispatchEvent(new TouchEvent('touchstart'))
                            })
                            it('Then close.state should be State.DOWN)', () => {
                                expect(close.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = close.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called once', () => {
                                expect(ondown).toHaveBeenCalledTimes(1)
                            })
                            describe('When mouse up', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    close.onup = onup
                                    close.dispatchEvent(new TouchEvent('touchend'))
                                })
                                it('Then close.state should be State.UP', () => {
                                    expect(close.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = close.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.UP)
                                })
                                it('Then onup should have been called once', () => {
                                    expect(onup).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})