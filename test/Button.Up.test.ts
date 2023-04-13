import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/web.component/lib/enums/enum.tag.js"

import { Attribute, Visible, State, Operation } from "../src/Button.metadata.js"
import { Up } from "../src/Button.Up.js";

import { template } from "../src/templates/Button.Up.template.js"

describe('Given Up imported', () => {
    it('Then Up should be defined', () => {
        expect(Up).toBeDefined()
    })
    it('Then Up.tag should be Tag.Up', () => {
        expect(Up.tag).toBe(Tag.Up)
    })
    it('Then Up.attributes should be Attribute', () => {
        expect(Up.attributes).toBe(Attribute)
    })
    describe('Given Up defined', () => {
        beforeEach(() => {
            Utils.defineComponent(Up.tag, Up)
        })
        it('Then custom element registry should contain Up', () => {
            expect(customElements.get(Up.tag)).toBe(Up)
        })
        describe('Given HTML Template added to DOM', () => {
            let HTMLTemplate: HTMLTemplateElement
            beforeEach(() => {
                HTMLTemplate = Utils.appendTemplate(Up.tag, template)
            })
            afterEach(() =>{
                Utils.removeTemplate(Up.tag)
            })
            it('Then a HTML Template should be available in DOM', () => {
                expect(document.getElementsByTagName('template')).toHaveSize(1)
            })
            describe('When Up component added to DOM', () => {
                let up : Up;
                beforeEach(() => {
                    up = Utils.appendComponent<Up>(Up.tag)
                })
                afterEach(() => {
                    up.remove()
                })
                it('Then up.templateId should be Up.tag', () => {
                    expect(up.templateId).toBe(Up.tag)
                })
                describe('Given state defaults have been applied', () => {
                    it('Then up.visible should be Visible.YES', () => {
                        expect(up.visible).toEqual(Visible.YES)
                    })
                    it('Then up.state should be State.UP', () => {
                        expect(up.state).toEqual(State.UP)
                    })
                    describe('Given Imperative API used',() => {
                        describe('When up.hide()', () => {
                            let onhide: jasmine.Spy
                            beforeEach(() => {
                                onhide = jasmine.createSpy('onhide')
                                up.onhide = onhide
                                up.hide()
                            })
                            it('Then up.visible should be Visible.NO', () => {
                                expect(up.visible).toEqual(Visible.NO)
                            })
                            it('Then html attribute visible should be Visible.NO', () => {
                                let visible = up.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(Visible.NO)
                            })
                            it('Then onhide should have been called', () => {
                                expect(onhide).toHaveBeenCalled()
                            })
                            describe('When up.show()',() =>{
                                let onshow: jasmine.Spy
                                beforeEach(() =>{
                                    onshow = jasmine.createSpy('onshow')
                                    up.onshow = onshow
                                    up.show()
                                })
                                it('Then up.visible should be Visible.YES', () => {
                                    expect(up.visible).toEqual(Visible.YES)
                                })
                                it('Then html attribute visible should be null', () => {
                                    let visible = up.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(null)
                                })
                                it('Then onshow should have been called once', () => {
                                    expect(onshow).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When up.show()', () => {
                            let onshow: jasmine.Spy
                            beforeEach(() => {
                                onshow = jasmine.createSpy('onshow')
                                up.onshow = onshow
                                up.show()
                            })
                            it('Then up.visible should be Visible.YES', () => {
                                expect(up.visible).toEqual(Visible.YES)
                            })
                            it('Then html attribute visible should be null', () => {
                                let visible = up.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(null)
                            })
                            it('Then onshow should not have been called', () => {
                                expect(onshow).not.toHaveBeenCalled()
                            })
                            describe('When up.hide()', () => {
                                let onhide: jasmine.Spy
                                beforeEach(() => {
                                    onhide = jasmine.createSpy('onhide')
                                    up.onhide = onhide
                                    up.hide()
                                })
                                it('Then up.visible should be Visible.NO', () => {
                                    expect(up.visible).toEqual(Visible.NO)
                                })
                                it('Then html attribute visible should be Visible.NO', () => {
                                    let visible = up.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(Visible.NO)
                                })
                                it('Then onhide should have been called once', () => {
                                    expect(onhide).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When up.press()', () => {
                            let ondown: jasmine.Spy
                            beforeEach(() => {
                                ondown = jasmine.createSpy('onon')
                                up.ondown = ondown
                                up.press()
                            })
                            it('Then up.state should be State.DOWN', () => {
                                expect(up.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = up.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called', () => {
                                expect(ondown).toHaveBeenCalled()
                            })
                            describe('When up.release()', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    up.onup = onup
                                    up.release()
                                })
                                it('Then up.state should be State.UP', () => {
                                    expect(up.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = up.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.UP)
                                })
                                it('Then onup should have been called once', () => {
                                    expect(onup).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When up.release()', () => {
                            let onup: jasmine.Spy
                            beforeEach(() => {
                                onup = jasmine.createSpy('onup')
                                up.onup = onup
                                up.release()
                            })
                            it('Then up.state should be State.UP', () => {
                                expect(up.state).toEqual(State.UP)
                            })
                            it('Then html attribute state should be null', () => {
                                let state = up.getAttribute(Attribute.STATE)
                                expect(state).toEqual(null)
                            })
                            it('Then onup should not have been called', () => {
                                expect(onup).not.toHaveBeenCalled()
                            })
                            describe('When up.press()', () => {
                                let ondown: jasmine.Spy
                                beforeEach(() => {
                                    ondown = jasmine.createSpy('ondown')
                                    up.ondown = ondown
                                    up.press()
                                })
                                it('Then up.state should be State.DOWN', () => {
                                    expect(up.state).toEqual(State.DOWN)
                                })
                                it('Then html attribute state should be State.DOWN', () => {
                                    let state = up.getAttribute(Attribute.STATE)
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
                                up.ondown = ondown
                                up.dispatchEvent(new MouseEvent('mousedown'))
                            })
                            it('Then up.state should be State.DOWN)', () => {
                                expect(up.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = up.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called once', () => {
                                expect(ondown).toHaveBeenCalledTimes(1)
                            })
                            describe('When mouse up', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    up.onup = onup
                                    up.dispatchEvent(new MouseEvent('mouseup'))
                                })
                                it('Then up.state should be State.UP', () => {
                                    expect(up.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = up.getAttribute(Attribute.STATE)
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
                                up.ondown = ondown
                                up.dispatchEvent(new TouchEvent('touchstart'))
                            })
                            it('Then up.state should be State.DOWN)', () => {
                                expect(up.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = up.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called once', () => {
                                expect(ondown).toHaveBeenCalledTimes(1)
                            })
                            describe('When mouse up', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    up.onup = onup
                                    up.dispatchEvent(new TouchEvent('touchend'))
                                })
                                it('Then up.state should be State.UP', () => {
                                    expect(up.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = up.getAttribute(Attribute.STATE)
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