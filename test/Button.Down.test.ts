import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/web.component/lib/enums/enum.tag.js"

import { Attribute, Visible, State, Operation } from "../src/Button.metadata.js"
import { Down } from "../src/Button.Down.js";

import { template } from "../src/templates/Button.Down.template.js"

describe('Given Down imported', () => {
    it('Then Down should be defined', () => {
        expect(Down).toBeDefined()
    })
    it('Then Down.tag should be Tag.Down', () => {
        expect(Down.tag).toBe(Tag.Down)
    })
    it('Then Down.attributes should be Attribute', () => {
        expect(Down.attributes).toBe(Attribute)
    })
    describe('Given Down defined', () => {
        beforeEach(() => {
            Utils.defineComponent(Down.tag, Down)
        })
        it('Then custom element registry should contain Down', () => {
            expect(customElements.get(Down.tag)).toBe(Down)
        })
        describe('Given HTML Template added to DOM', () => {
            let HTMLTemplate: HTMLTemplateElement
            beforeEach(() => {
                HTMLTemplate = Utils.appendTemplate(Down.tag, template)
            })
            afterEach(() =>{
                Utils.removeTemplate(Down.tag)
            })
            it('Then a HTML Template should be available in DOM', () => {
                expect(document.getElementsByTagName('template')).toHaveSize(1)
            })
            describe('When Down component added to DOM', () => {
                let down : Down;
                beforeEach(() => {
                    down = Utils.appendComponent<Down>(Down.tag)
                })
                afterEach(() => {
                    down.remove()
                })
                it('Then down.templateId should be Down.tag', () => {
                    expect(down.templateId).toBe(Down.tag)
                })
                describe('Given state defaults have been applied', () => {
                    it('Then down.visible should be Visible.YES', () => {
                        expect(down.visible).toEqual(Visible.YES)
                    })
                    it('Then down.state should be State.UP', () => {
                        expect(down.state).toEqual(State.UP)
                    })
                    describe('Given Imperative API used',() => {
                        describe('When down.hide()', () => {
                            let onhide: jasmine.Spy
                            beforeEach(() => {
                                onhide = jasmine.createSpy('onhide')
                                down.onhide = onhide
                                down.hide()
                            })
                            it('Then down.visible should be Visible.NO', () => {
                                expect(down.visible).toEqual(Visible.NO)
                            })
                            it('Then html attribute visible should be Visible.NO', () => {
                                let visible = down.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(Visible.NO)
                            })
                            it('Then onhide should have been called', () => {
                                expect(onhide).toHaveBeenCalled()
                            })
                            describe('When down.hide()',() =>{
                                let onhide: jasmine.Spy
                                beforeEach(() =>{
                                    onhide = jasmine.createSpy('onhide')
                                    down.onhide = onhide
                                    down.hide()
                                })
                                it('Then down.visible should be Visible.NO', () => {
                                    expect(down.visible).toEqual(Visible.NO)
                                })
                                it('Then html attribute visible should be Visible.NO', () => {
                                    let visible = down.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(Visible.NO)
                                })
                                it('Then onhide should have been called once', () => {
                                    expect(onhide).toHaveBeenCalledTimes(0)
                                })
                            })
                            describe('When down.show()',() =>{
                                let onshow: jasmine.Spy
                                beforeEach(() =>{
                                    onshow = jasmine.createSpy('onshow')
                                    down.onshow = onshow
                                    down.show()
                                })
                                it('Then down.visible should be Visible.YES', () => {
                                    expect(down.visible).toEqual(Visible.YES)
                                })
                                it('Then html attribute visible should be null', () => {
                                    let visible = down.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(null)
                                })
                                it('Then onshow should have been called once', () => {
                                    expect(onshow).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When down.show()', () => {
                            let onshow: jasmine.Spy
                            beforeEach(() => {
                                onshow = jasmine.createSpy('onshow')
                                down.onshow = onshow
                                down.show()
                            })
                            it('Then down.visible should be Visible.YES', () => {
                                expect(down.visible).toEqual(Visible.YES)
                            })
                            it('Then html attribute visible should be null', () => {
                                let visible = down.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(null)
                            })
                            it('Then onshow should not have been called', () => {
                                expect(onshow).not.toHaveBeenCalled()
                            })
                            describe('When down.hide()', () => {
                                let onhide: jasmine.Spy
                                beforeEach(() => {
                                    onhide = jasmine.createSpy('onhide')
                                    down.onhide = onhide
                                    down.hide()
                                })
                                it('Then down.visible should be Visible.NO', () => {
                                    expect(down.visible).toEqual(Visible.NO)
                                })
                                it('Then html attribute visible should be Visible.NO', () => {
                                    let visible = down.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(Visible.NO)
                                })
                                it('Then onhide should have been called once', () => {
                                    expect(onhide).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When down.press()', () => {
                            let ondown: jasmine.Spy
                            beforeEach(() => {
                                ondown = jasmine.createSpy('onon')
                                down.ondown = ondown
                                down.press()
                            })
                            it('Then down.state should be State.DOWN', () => {
                                expect(down.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = down.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called', () => {
                                expect(ondown).toHaveBeenCalled()
                            })
                            describe('When down.press()', () => {
                                let ondown: jasmine.Spy
                                beforeEach(() => {
                                    ondown = jasmine.createSpy('onon')
                                    down.ondown = ondown
                                    down.press()
                                })
                                it('Then down.state should be State.DOWN', () => {
                                    expect(down.state).toEqual(State.DOWN)
                                })
                                it('Then html attribute state should be State.DOWN', () => {
                                    let state = down.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.DOWN)
                                })
                                it('Then ondown should have been called', () => {
                                    expect(ondown).toHaveBeenCalledTimes(0)
                                })
                            })
                            describe('When down.release()', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    down.onup = onup
                                    down.release()
                                })
                                it('Then down.state should be State.UP', () => {
                                    expect(down.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = down.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.UP)
                                })
                                it('Then onup should have been called once', () => {
                                    expect(onup).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When down.release()', () => {
                            let onup: jasmine.Spy
                            beforeEach(() => {
                                onup = jasmine.createSpy('onup')
                                down.onup = onup
                                down.release()
                            })
                            it('Then down.state should be State.UP', () => {
                                expect(down.state).toEqual(State.UP)
                            })
                            it('Then html attribute state should be null', () => {
                                let state = down.getAttribute(Attribute.STATE)
                                expect(state).toEqual(null)
                            })
                            it('Then onup should not have been called', () => {
                                expect(onup).not.toHaveBeenCalled()
                            })
                            describe('When down.press()', () => {
                                let ondown: jasmine.Spy
                                beforeEach(() => {
                                    ondown = jasmine.createSpy('ondown')
                                    down.ondown = ondown
                                    down.press()
                                })
                                it('Then down.state should be State.DOWN', () => {
                                    expect(down.state).toEqual(State.DOWN)
                                })
                                it('Then html attribute state should be State.DOWN', () => {
                                    let state = down.getAttribute(Attribute.STATE)
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
                                down.ondown = ondown
                                down.dispatchEvent(new MouseEvent('mousedown'))
                            })
                            it('Then down.state should be State.DOWN)', () => {
                                expect(down.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = down.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called once', () => {
                                expect(ondown).toHaveBeenCalledTimes(1)
                            })
                            describe('When mouse up', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    down.onup = onup
                                    down.dispatchEvent(new MouseEvent('mouseup'))
                                })
                                it('Then down.state should be State.UP', () => {
                                    expect(down.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = down.getAttribute(Attribute.STATE)
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
                                down.ondown = ondown
                                down.dispatchEvent(new TouchEvent('touchstart'))
                            })
                            it('Then down.state should be State.DOWN)', () => {
                                expect(down.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = down.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called once', () => {
                                expect(ondown).toHaveBeenCalledTimes(1)
                            })
                            describe('When mouse up', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    down.onup = onup
                                    down.dispatchEvent(new TouchEvent('touchend'))
                                })
                                it('Then down.state should be State.UP', () => {
                                    expect(down.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = down.getAttribute(Attribute.STATE)
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