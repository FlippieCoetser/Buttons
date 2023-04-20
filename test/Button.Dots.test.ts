import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/web.component/lib/enums/enum.tag.js"

import { Attribute, Visible, State, Operation } from "../src/Button.metadata.js"
import { Dots } from "../src/Button.Dots.js";

import { template } from "../src/templates/Button.Dots.template.js"

describe('Given Dots imported', () => {
    it('Then Dots should be defined', () => {
        expect(Dots).toBeDefined()
    })
    it('Then Dots.tag should be Tag.Dots', () => {
        expect(Dots.tag).toBe(Tag.Dots)
    })
    it('Then Dots.attributes should be Attribute', () => {
        expect(Dots.attributes).toBe(Attribute)
    })
    describe('Given Dots defined', () => {
        beforeEach(() => {
            Utils.defineComponent(Dots.tag, Dots)
        })
        it('Then custom element registry should contain Dots', () => {
            expect(customElements.get(Dots.tag)).toBe(Dots)
        })
        describe('Given HTML Template added to DOM', () => {
            let HTMLTemplate: HTMLTemplateElement
            beforeEach(() => {
                HTMLTemplate = Utils.appendTemplate(Dots.tag, template)
            })
            afterEach(() =>{
                Utils.removeTemplate(Dots.tag)
            })
            it('Then a HTML Template should be available in DOM', () => {
                expect(document.getElementsByTagName('template')).toHaveSize(1)
            })
            describe('When Dots component added to DOM', () => {
                let dots : Dots;
                beforeEach(() => {
                    dots = Utils.appendComponent<Dots>(Dots.tag)
                })
                afterEach(() => {
                    dots.remove()
                })
                it('Then dots.templateId should be Dots.tag', () => {
                    expect(dots.templateId).toBe(Dots.tag)
                })
                describe('Given state defaults have been applied', () => {
                    it('Then dots.visible should be Visible.YES', () => {
                        expect(dots.visible).toEqual(Visible.YES)
                    })
                    it('Then dots.state should be State.UP', () => {
                        expect(dots.state).toEqual(State.UP)
                    })
                    describe('Given Imperative API used',() => {
                        describe('When dots.hide()', () => {
                            let onhide: jasmine.Spy
                            beforeEach(() => {
                                onhide = jasmine.createSpy('onhide')
                                dots.onhide = onhide
                                dots.hide()
                            })
                            it('Then dots.visible should be Visible.NO', () => {
                                expect(dots.visible).toEqual(Visible.NO)
                            })
                            it('Then html attribute visible should be Visible.NO', () => {
                                let visible = dots.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(Visible.NO)
                            })
                            it('Then onhide should have been called', () => {
                                expect(onhide).toHaveBeenCalled()
                            })
                            describe('When dots.hide()',() =>{
                                let onhide: jasmine.Spy
                                beforeEach(() =>{
                                    onhide = jasmine.createSpy('onhide')
                                    dots.onhide = onhide
                                    dots.hide()
                                })
                                it('Then dots.visible should be Visible.NO', () => {
                                    expect(dots.visible).toEqual(Visible.NO)
                                })
                                it('Then html attribute visible should be Visible.NO', () => {
                                    let visible = dots.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(Visible.NO)
                                })
                                it('Then onhide should have been called once', () => {
                                    expect(onhide).toHaveBeenCalledTimes(0)
                                })
                            })
                            describe('When dots.show()',() =>{
                                let onshow: jasmine.Spy
                                beforeEach(() =>{
                                    onshow = jasmine.createSpy('onshow')
                                    dots.onshow = onshow
                                    dots.show()
                                })
                                it('Then dots.visible should be Visible.YES', () => {
                                    expect(dots.visible).toEqual(Visible.YES)
                                })
                                it('Then html attribute visible should be null', () => {
                                    let visible = dots.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(null)
                                })
                                it('Then onshow should have been called once', () => {
                                    expect(onshow).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When dots.show()', () => {
                            let onshow: jasmine.Spy
                            beforeEach(() => {
                                onshow = jasmine.createSpy('onshow')
                                dots.onshow = onshow
                                dots.show()
                            })
                            it('Then dots.visible should be Visible.YES', () => {
                                expect(dots.visible).toEqual(Visible.YES)
                            })
                            it('Then html attribute visible should be null', () => {
                                let visible = dots.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(null)
                            })
                            it('Then onshow should not have been called', () => {
                                expect(onshow).not.toHaveBeenCalled()
                            })
                            describe('When dots.hide()', () => {
                                let onhide: jasmine.Spy
                                beforeEach(() => {
                                    onhide = jasmine.createSpy('onhide')
                                    dots.onhide = onhide
                                    dots.hide()
                                })
                                it('Then dots.visible should be Visible.NO', () => {
                                    expect(dots.visible).toEqual(Visible.NO)
                                })
                                it('Then html attribute visible should be Visible.NO', () => {
                                    let visible = dots.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(Visible.NO)
                                })
                                it('Then onhide should have been called once', () => {
                                    expect(onhide).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When dots.press()', () => {
                            let ondown: jasmine.Spy
                            beforeEach(() => {
                                ondown = jasmine.createSpy('onon')
                                dots.ondown = ondown
                                dots.press()
                            })
                            it('Then dots.state should be State.DOWN', () => {
                                expect(dots.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = dots.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called', () => {
                                expect(ondown).toHaveBeenCalled()
                            })
                            describe('When dots.press()', () => {
                                let ondown: jasmine.Spy
                            
                                beforeEach(() => {
                                    ondown = jasmine.createSpy('onon')
                                    dots.ondown = ondown
                                    dots.press()
                                })
                                it('Then dots.state should be State.DOWN', () => {
                                    expect(dots.state).toEqual(State.DOWN)
                                })
                                it('Then html attribute state should be State.DOWN', () => {
                                    let state = dots.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.DOWN)
                                })
                                it('Then ondown should have been called', () => {
                                    expect(ondown).toHaveBeenCalledTimes(0)
                                })
                            })
                            describe('When dots.release()', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    dots.onup = onup
                                    dots.release()
                                })
                                it('Then dots.state should be State.UP', () => {
                                    expect(dots.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = dots.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.UP)
                                })
                                it('Then onup should have been called once', () => {
                                    expect(onup).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When dots.release()', () => {
                            let onup: jasmine.Spy
                            beforeEach(() => {
                                onup = jasmine.createSpy('onup')
                                dots.onup = onup
                                dots.release()
                            })
                            it('Then dots.state should be State.UP', () => {
                                expect(dots.state).toEqual(State.UP)
                            })
                            it('Then html attribute state should be null', () => {
                                let state = dots.getAttribute(Attribute.STATE)
                                expect(state).toEqual(null)
                            })
                            it('Then onup should not have been called', () => {
                                expect(onup).not.toHaveBeenCalled()
                            })
                            describe('When dots.press()', () => {
                                let ondown: jasmine.Spy
                                beforeEach(() => {
                                    ondown = jasmine.createSpy('ondown')
                                    dots.ondown = ondown
                                    dots.press()
                                })
                                it('Then dots.state should be State.DOWN', () => {
                                    expect(dots.state).toEqual(State.DOWN)
                                })
                                it('Then html attribute state should be State.DOWN', () => {
                                    let state = dots.getAttribute(Attribute.STATE)
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
                                dots.ondown = ondown
                                dots.dispatchEvent(new MouseEvent('mousedown'))
                            })
                            it('Then dots.state should be State.DOWN)', () => {
                                expect(dots.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = dots.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called once', () => {
                                expect(ondown).toHaveBeenCalledTimes(1)
                            })
                            describe('When mouse up', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    dots.onup = onup
                                    dots.dispatchEvent(new MouseEvent('mouseup'))
                                })
                                it('Then dots.state should be State.UP', () => {
                                    expect(dots.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = dots.getAttribute(Attribute.STATE)
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
                                dots.ondown = ondown
                                dots.dispatchEvent(new TouchEvent('touchstart'))
                            })
                            it('Then dots.state should be State.DOWN)', () => {
                                expect(dots.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = dots.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called once', () => {
                                expect(ondown).toHaveBeenCalledTimes(1)
                            })
                            describe('When mouse up', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    dots.onup = onup
                                    dots.dispatchEvent(new TouchEvent('touchend'))
                                })
                                it('Then dots.state should be State.UP', () => {
                                    expect(dots.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = dots.getAttribute(Attribute.STATE)
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