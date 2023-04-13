import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/web.component/lib/enums/enum.tag.js"

import { Attribute, Visible, State, Operation } from "../src/Button.metadata.js"
import { Left } from "../src/Button.Left.js";

import { template } from "../src/templates/Button.Left.template.js"

describe('Given Left imported', () => {
    it('Then Left should be defined', () => {
        expect(Left).toBeDefined()
    })
    it('Then Left.tag should be Tag.Left', () => {
        expect(Left.tag).toBe(Tag.Left)
    })
    it('Then Left.attributes should be Attribute', () => {
        expect(Left.attributes).toBe(Attribute)
    })
    describe('Given Left defined', () => {
        beforeEach(() => {
            Utils.defineComponent(Left.tag, Left)
        })
        it('Then custom element registry should contain Left', () => {
            expect(customElements.get(Left.tag)).toBe(Left)
        })
        describe('Given HTML Template added to DOM', () => {
            let HTMLTemplate: HTMLTemplateElement
            beforeEach(() => {
                HTMLTemplate = Utils.appendTemplate(Left.tag, template)
            })
            afterEach(() =>{
                Utils.removeTemplate(Left.tag)
            })
            it('Then a HTML Template should be available in DOM', () => {
                expect(document.getElementsByTagName('template')).toHaveSize(1)
            })
            describe('When Left component added to DOM', () => {
                let close : Left;
                beforeEach(() => {
                    close = Utils.appendComponent<Left>(Left.tag)
                })
                afterEach(() => {
                    close.remove()
                })
                it('Then close.templateId should be Left.tag', () => {
                    expect(close.templateId).toBe(Left.tag)
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