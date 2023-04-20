import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/web.component/lib/enums/enum.tag.js"

import { Attribute, Visible, State, Operation } from "../src/Button.metadata.js"
import { Minimize } from "../src/Button.Minimize.js";

import { template } from "../src/templates/Button.Minimize.template.js"

describe('Given Minimize imported', () => {
    it('Then Minimize should be defined', () => {
        expect(Minimize).toBeDefined()
    })
    it('Then Minimize.tag should be Tag.Minimize', () => {
        expect(Minimize.tag).toBe(Tag.Minimize)
    })
    it('Then Minimize.attributes should be Attribute', () => {
        expect(Minimize.attributes).toBe(Attribute)
    })
    describe('Given Minimize defined', () => {
        beforeEach(() => {
            Utils.defineComponent(Minimize.tag, Minimize)
        })
        it('Then custom element registry should contain Minimize', () => {
            expect(customElements.get(Minimize.tag)).toBe(Minimize)
        })
        describe('Given HTML Template added to DOM', () => {
            let HTMLTemplate: HTMLTemplateElement
            beforeEach(() => {
                HTMLTemplate = Utils.appendTemplate(Minimize.tag, template)
            })
            afterEach(() =>{
                Utils.removeTemplate(Minimize.tag)
            })
            it('Then a HTML Template should be available in DOM', () => {
                expect(document.getElementsByTagName('template')).toHaveSize(1)
            })
            describe('When Minimize component added to DOM', () => {
                let minimize : Minimize;
                beforeEach(() => {
                    minimize = Utils.appendComponent<Minimize>(Minimize.tag)
                })
                afterEach(() => {
                    minimize.remove()
                })
                it('Then minimize.templateId should be Minimize.tag', () => {
                    expect(minimize.templateId).toBe(Minimize.tag)
                })
                describe('Given state defaults have been applied', () => {
                    it('Then minimize.visible should be Visible.YES', () => {
                        expect(minimize.visible).toEqual(Visible.YES)
                    })
                    it('Then minimize.state should be State.UP', () => {
                        expect(minimize.state).toEqual(State.UP)
                    })
                    describe('Given Imperative API used',() => {
                        describe('When minimize.hide()', () => {
                            let onhide: jasmine.Spy
                            beforeEach(() => {
                                onhide = jasmine.createSpy('onhide')
                                minimize.onhide = onhide
                                minimize.hide()
                            })
                            it('Then minimize.visible should be Visible.NO', () => {
                                expect(minimize.visible).toEqual(Visible.NO)
                            })
                            it('Then html attribute visible should be Visible.NO', () => {
                                let visible = minimize.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(Visible.NO)
                            })
                            it('Then onhide should have been called', () => {
                                expect(onhide).toHaveBeenCalled()
                            })
                            describe('When minimize.hide()',() =>{
                                let onhide: jasmine.Spy
                                beforeEach(() =>{
                                    onhide = jasmine.createSpy('onhide')
                                    minimize.onhide = onhide
                                    minimize.hide()
                                })
                                it('Then minimize.visible should be Visible.NO', () => {
                                    expect(minimize.visible).toEqual(Visible.NO)
                                })
                                it('Then html attribute visible should be null', () => {
                                    let visible = minimize.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(Visible.NO)
                                })
                                it('Then onhide should have been called once', () => {
                                    expect(onhide).toHaveBeenCalledTimes(0)
                                })
                            })
                            describe('When minimize.show()',() =>{
                                let onshow: jasmine.Spy
                                beforeEach(() =>{
                                    onshow = jasmine.createSpy('onshow')
                                    minimize.onshow = onshow
                                    minimize.show()
                                })
                                it('Then minimize.visible should be Visible.YES', () => {
                                    expect(minimize.visible).toEqual(Visible.YES)
                                })
                                it('Then html attribute visible should be null', () => {
                                    let visible = minimize.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(null)
                                })
                                it('Then onshow should have been called once', () => {
                                    expect(onshow).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When minimize.show()', () => {
                            let onshow: jasmine.Spy
                            beforeEach(() => {
                                onshow = jasmine.createSpy('onshow')
                                minimize.onshow = onshow
                                minimize.show()
                            })
                            it('Then minimize.visible should be Visible.YES', () => {
                                expect(minimize.visible).toEqual(Visible.YES)
                            })
                            it('Then html attribute visible should be null', () => {
                                let visible = minimize.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(null)
                            })
                            it('Then onshow should not have been called', () => {
                                expect(onshow).not.toHaveBeenCalled()
                            })
                            describe('When minimize.hide()', () => {
                                let onhide: jasmine.Spy
                                beforeEach(() => {
                                    onhide = jasmine.createSpy('onhide')
                                    minimize.onhide = onhide
                                    minimize.hide()
                                })
                                it('Then minimize.visible should be Visible.NO', () => {
                                    expect(minimize.visible).toEqual(Visible.NO)
                                })
                                it('Then html attribute visible should be Visible.NO', () => {
                                    let visible = minimize.getAttribute(Attribute.VISIBLE)
                                    expect(visible).toEqual(Visible.NO)
                                })
                                it('Then onhide should have been called once', () => {
                                    expect(onhide).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When minimize.press()', () => {
                            let ondown: jasmine.Spy
                            beforeEach(() => {
                                ondown = jasmine.createSpy('onon')
                                minimize.ondown = ondown
                                minimize.press()
                            })
                            it('Then minimize.state should be State.DOWN', () => {
                                expect(minimize.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = minimize.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called', () => {
                                expect(ondown).toHaveBeenCalled()
                            })
                            describe('When minimize.press()', () => {
                                let ondown: jasmine.Spy
                            
                                beforeEach(() => {
                                    ondown = jasmine.createSpy('onon')
                                    minimize.ondown = ondown
                                    minimize.press()
                                })
                                it('Then minimize.state should be State.DOWN', () => {
                                    expect(minimize.state).toEqual(State.DOWN)
                                })
                                it('Then html attribute state should be State.DOWN', () => {
                                    let state = minimize.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.DOWN)
                                })
                                it('Then ondown should have been called', () => {
                                    expect(ondown).toHaveBeenCalledTimes(0)
                                })
                            })
                            describe('When minimize.release()', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    minimize.onup = onup
                                    minimize.release()
                                })
                                it('Then minimize.state should be State.UP', () => {
                                    expect(minimize.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = minimize.getAttribute(Attribute.STATE)
                                    expect(state).toEqual(State.UP)
                                })
                                it('Then onup should have been called once', () => {
                                    expect(onup).toHaveBeenCalledTimes(1)
                                })
                            })
                        })
                        describe('When minimize.release()', () => {
                            let onup: jasmine.Spy
                            beforeEach(() => {
                                onup = jasmine.createSpy('onup')
                                minimize.onup = onup
                                minimize.release()
                            })
                            it('Then minimize.state should be State.UP', () => {
                                expect(minimize.state).toEqual(State.UP)
                            })
                            it('Then html attribute state should be null', () => {
                                let state = minimize.getAttribute(Attribute.STATE)
                                expect(state).toEqual(null)
                            })
                            it('Then onup should not have been called', () => {
                                expect(onup).not.toHaveBeenCalled()
                            })
                            describe('When minimize.press()', () => {
                                let ondown: jasmine.Spy
                                beforeEach(() => {
                                    ondown = jasmine.createSpy('ondown')
                                    minimize.ondown = ondown
                                    minimize.press()
                                })
                                it('Then minimize.state should be State.DOWN', () => {
                                    expect(minimize.state).toEqual(State.DOWN)
                                })
                                it('Then html attribute state should be State.DOWN', () => {
                                    let state = minimize.getAttribute(Attribute.STATE)
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
                                minimize.ondown = ondown
                                minimize.dispatchEvent(new MouseEvent('mousedown'))
                            })
                            it('Then minimize.state should be State.DOWN)', () => {
                                expect(minimize.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = minimize.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called once', () => {
                                expect(ondown).toHaveBeenCalledTimes(1)
                            })
                            describe('When mouse up', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    minimize.onup = onup
                                    minimize.dispatchEvent(new MouseEvent('mouseup'))
                                })
                                it('Then minimize.state should be State.UP', () => {
                                    expect(minimize.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = minimize.getAttribute(Attribute.STATE)
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
                                minimize.ondown = ondown
                                minimize.dispatchEvent(new TouchEvent('touchstart'))
                            })
                            it('Then minimize.state should be State.DOWN)', () => {
                                expect(minimize.state).toEqual(State.DOWN)
                            })
                            it('Then html attribute state should be State.DOWN', () => {
                                let state = minimize.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.DOWN)
                            })
                            it('Then ondown should have been called once', () => {
                                expect(ondown).toHaveBeenCalledTimes(1)
                            })
                            describe('When mouse up', () => {
                                let onup: jasmine.Spy
                                beforeEach(() => {
                                    onup = jasmine.createSpy('onup')
                                    minimize.onup = onup
                                    minimize.dispatchEvent(new TouchEvent('touchend'))
                                })
                                it('Then minimize.state should be State.UP', () => {
                                    expect(minimize.state).toEqual(State.UP)
                                })
                                it('Then html attribute state should be State.UP', () => {
                                    let state = minimize.getAttribute(Attribute.STATE)
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