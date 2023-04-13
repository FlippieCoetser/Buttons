import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/web.component/lib/enums/enum.tag.js"

import { Attribute, Visible, State, Operation } from "../src/Button.metadata.js"
import { Right } from "../src/Button.Right.js";

import { template } from "../src/templates/Button.Right.template.js"

describe('Given Right imported', () => {
    it('Then Right should be defined', () => {
        expect(Right).toBeDefined()
    })
    it('Then Right.tag should be Tag.Right', () => {
        expect(Right.tag).toBe(Tag.Right)
    })
    it('Then Right.attributes should be Attribute', () => {
        expect(Right.attributes).toBe(Attribute)
    })
    describe('Given Right defined', () => {
        beforeEach(() => {
            Utils.defineComponent(Right.tag, Right)
        })
        it('Then custom element registry should contain Right', () => {
            expect(customElements.get(Right.tag)).toBe(Right)
        })
        describe('Given HTML Template added to DOM', () => {
            let HTMLTemplate: HTMLTemplateElement
            beforeEach(() => {
                HTMLTemplate = Utils.appendTemplate(Right.tag, template)
            })
            afterEach(() =>{
                Utils.removeTemplate(Right.tag)
            })
            it('Then a HTML Template should be available in DOM', () => {
                expect(document.getElementsByTagName('template')).toHaveSize(1)
            })
            describe('When Right component added to DOM', () => {
                let right : Right;
                beforeEach(() => {
                    right = Utils.appendComponent<Right>(Right.tag)
                })
                afterEach(() => {
                    right.remove()
                })
                it('Then right.templateId should be Right.tag', () => {
                    expect(right.templateId).toBe(Right.tag)
                })
                describe('Given state defaults have been applied', () => {
                    it('Then right.visible should be Visible.YES', () => {
                        expect(right.visible).toEqual(Visible.YES)
                    })
                    it('Then right.state should be State.UP', () => {
                        expect(right.state).toEqual(State.UP)
                    })
                    describe('Given Imperative API used',() => {
                        describe('When right.hide()', () => {
                            let onhide: jasmine.Spy
                            beforeEach(() => {
                                onhide = jasmine.createSpy('onhide')
                                right.onhide = onhide
                                right.hide()
                            })
                            it('Then right.visible should be Visible.NO', () => {
                                expect(right.visible).toEqual(Visible.NO)
                            })
                            it('Then html attribute visible should be Visible.NO', () => {
                                let visible = right.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(Visible.NO)
                            })
                            it('Then onhide should have been called', () => {
                                expect(onhide).toHaveBeenCalled()
                            })
                            describe('When right.show()',() =>{
                                let onshow: jasmine.Spy
                                beforeEach(() =>{
                                    onshow = jasmine.createSpy('onshow')
                                    right.onshow = onshow
                                    right.show()
                                })
                                it('Then right.visible should be Visible.YES', () => {
                                    expect(right.visible).toEqual(Visible.YES)
                                })
                                it('Then html attribute visible should be null', () => {
                                    let visible = right.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(null)
                                })
                                it('Then onshow should have been called once', () => {
                                    expect(onshow).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When right.show()', () => {
                            let onshow: jasmine.Spy
                            beforeEach(() => {
                                onshow = jasmine.createSpy('onshow')
                                right.onshow = onshow
                                right.show()
                            })
                            it('Then right.visible should be Visible.YES', () => {
                                expect(right.visible).toEqual(Visible.YES)
                            })
                            it('Then html attribute visible should be null', () => {
                                let visible = right.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(null)
                            })
                            it('Then onshow should not have been called', () => {
                                expect(onshow).not.toHaveBeenCalled()
                            })
                            describe('When right.hide()', () => {
                                let onhide: jasmine.Spy
                                beforeEach(() => {
                                    onhide = jasmine.createSpy('onhide')
                                    right.onhide = onhide
                                    right.hide()
                                })
                                it('Then right.visible should be Visible.NO', () => {
                                    expect(right.visible).toEqual(Visible.NO)
                                })
                                it('Then html attribute visible should be Visible.NO', () => {
                                    let visible = right.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(Visible.NO)
                                })
                                it('Then onhide should have been called once', () => {
                                    expect(onhide).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When right.press()', () => {
                            let ondown: jasmine.Spy
                            beforeEach(() => {
                                ondown = jasmine.createSpy('onon')
                                right.ondown = ondown
                                right.press()
                            })
                            it('Then right.state should be State.DOWN', () => {
                                expect(right.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = right.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called', () => {
                                expect(ondown).toHaveBeenCalled()
                            })
                            describe('When right.release()', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    right.onup = onup
                                    right.release()
                                })
                                it('Then right.state should be State.UP', () => {
                                    expect(right.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = right.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.UP)
                                })
                                it('Then onup should have been called once', () => {
                                    expect(onup).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When right.release()', () => {
                            let onup: jasmine.Spy
                            beforeEach(() => {
                                onup = jasmine.createSpy('onup')
                                right.onup = onup
                                right.release()
                            })
                            it('Then right.state should be State.UP', () => {
                                expect(right.state).toEqual(State.UP)
                            })
                            it('Then html attribute state should be null', () => {
                                let state = right.getAttribute(Attribute.STATE)
                                expect(state).toEqual(null)
                            })
                            it('Then onup should not have been called', () => {
                                expect(onup).not.toHaveBeenCalled()
                            })
                            describe('When right.press()', () => {
                                let ondown: jasmine.Spy
                                beforeEach(() => {
                                    ondown = jasmine.createSpy('ondown')
                                    right.ondown = ondown
                                    right.press()
                                })
                                it('Then right.state should be State.DOWN', () => {
                                    expect(right.state).toEqual(State.DOWN)
                                })
                                it('Then html attribute state should be State.DOWN', () => {
                                    let state = right.getAttribute(Attribute.STATE)
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
                                right.ondown = ondown
                                right.dispatchEvent(new MouseEvent('mousedown'))
                            })
                            it('Then right.state should be State.DOWN)', () => {
                                expect(right.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = right.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called once', () => {
                                expect(ondown).toHaveBeenCalledTimes(1)
                            })
                            describe('When mouse up', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    right.onup = onup
                                    right.dispatchEvent(new MouseEvent('mouseup'))
                                })
                                it('Then right.state should be State.UP', () => {
                                    expect(right.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = right.getAttribute(Attribute.STATE)
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
                                right.ondown = ondown
                                right.dispatchEvent(new TouchEvent('touchstart'))
                            })
                            it('Then right.state should be State.DOWN)', () => {
                                expect(right.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = right.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called once', () => {
                                expect(ondown).toHaveBeenCalledTimes(1)
                            })
                            describe('When mouse up', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    right.onup = onup
                                    right.dispatchEvent(new TouchEvent('touchend'))
                                })
                                it('Then right.state should be State.UP', () => {
                                    expect(right.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = right.getAttribute(Attribute.STATE)
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