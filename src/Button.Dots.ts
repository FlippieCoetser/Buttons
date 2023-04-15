/**
* @module Buttons
*/

import { Component } from "@browser-modules/web.component";

import { Attribute, Event, State, Visible, Handler } from "./Button.metadata.js"

import { Configuration as Push} from "./Button.push.config.js"

/**  
* @category Components
*/
export class Dots extends Component {
    /**
    * @category Attributes
    */
    static get attributes() { return Attribute}

    /**
    * Contains the bindings of UI Gestures and Configuration of the finite state machine.
    * @hidden
    */
    public configuration = Push
    public machine
    
    /**
    * Default visibility is `yes`
    */
    private _visible: Visible = Visible.YES
    /**
    * Default state is `off`
    */
    private _state: State = State.UP

    /**
    * @hidden
    */
    constructor() {
        super()
    }

    private _emitCustomEvent   = (event, data) => 
        this.dispatchEvent(new CustomEvent(event,{detail:data}))

    /**
    * Id of HTML Template which defaults to `.tag` when no value defined inside component html tag. 
    * @readonly
    * @category State
    */
    public get templateId() {
        return this.getAttribute(Attribute.TEMPLATE) ?? Dots.tag;
    }
    
    /**  
    * @category State
    */
    public get visible(): Visible {
        return <Visible>this.getAttribute(Attribute.VISIBLE) ?? this._visible;
    }
    public set visible(visible: Visible) {
        this._visible = visible;
        visible == Visible.YES && this.removeAttribute(Attribute.VISIBLE);
        visible == Visible.NO && this.setAttribute(Attribute.VISIBLE, visible);
    }

    /**
    * Takes any value of the State enumeration related to the specific button type
    * @category State
    */
    public get state(): State { 
        return <State><unknown>this.getAttribute(Attribute.STATE) ?? this._state;
    }
    public set state(state: State) {
        this._state = state;
        this.setAttribute(Attribute.STATE, <string><unknown>state);
    }

    /**
    * Triggered via `.hide()`
    * @event
    * @category Events 
    */
    public set onhide(handler: Handler) {
        this.addEventListener(Event.ONHIDE,handler);
    }
        
    /**
    * Triggered via `.show()`
    * @event
    * @category Events
    */
    public set onshow(handler: Handler) {
        this.addEventListener(Event.ONSHOW,handler);
    }

    /**
    * Triggered via `.press()`
    * @event
    * @category Events 
    */
    public set ondown(handler: Handler) {
        this.addEventListener(Event.ONDOWN,handler);
    }
    
    /**
    * Triggered via `.release()`
    * @event
    * @category Events
    */
    public set onup(handler: Handler) {
        this.addEventListener(Event.ONUP,handler);
    }

    /**
    * @category Operations
    */
    public hide = (): void => {
        if (this.visible !== Visible.NO) {
            this.visible = Visible.NO
            this._emitCustomEvent(Event.ONHIDE, { visible: this.visible })
        }
    }

    /**
    * @category Operations
    */
    public show = (): boolean => {
        if (this.visible !== Visible.YES) {
            this.visible = Visible.YES
            this._emitCustomEvent(Event.ONSHOW, { visible: this.visible })
            return true
        }
        return false
    }

    /**
    * @category Operations
    */
    public press = (): boolean => {
        if (this.state !== State.DOWN) {
            this.state = State.DOWN
            this._emitCustomEvent(Event.ONDOWN, { state: this.state })
            return true
        }
        return false
    }

    /**
    * @category Operations
    */
    public release = (): boolean => {
        if (this.state !== State.UP) {
            this.state = State.UP
            this._emitCustomEvent(Event.ONUP, { state: this.state })
            return true
        }
        return false
    }
}
