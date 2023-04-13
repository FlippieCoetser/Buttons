/**
* @module Buttons
*/

import { Component } from "@browser-modules/web.component";
import { Machine } from "@browser-modules/machine"

import { Configuration } from "./Button.Config.js"
import { Attribute, States, Event, State, Visible, Handler } from "./Button.Metadata.js"

/**  
* @category Components
*/
export class Restore extends Component {
    /**
    * @category Attributes
    */
    static get attributes() { return Attribute}

    /**
    * Contains the bindings of UI Gestures and Configuration of the finite state machine.
    * @hidden
    */
    public configuration = Configuration
    public machine
    
    /**
    * Default visibility is `yes`
    */
    private _visible: Visible = Visible.YES
    /**
    * Default state is `off`
    */
    private _state: State = State.OFF

    /**
    * @hidden
    */
    constructor() {
        super()
        this.machine = new Machine<Attribute, States, Event>(Configuration)
        this._registerEvents()
    }

    private _trigger = (event) => 
        this.dispatchEvent(new CustomEvent(event))

    private _registerEvents = () => { 
        this.machine.on(Event.ONHIDE,(state) => {
            this.visible = state
            this._trigger(Event.ONHIDE)
        })
        this.machine.on(Event.ONSHOW,(state) => {
            this.visible = state
            this._trigger(Event.ONSHOW)
        })
        this.machine.on(Event.ONON, (state) => {
            this.state = state
            this._trigger(Event.ONON)
        })
        this.machine.on(Event.ONOFF, (state) => {
            this.state = state
            this._trigger(Event.ONOFF)	
        })
    }

    /**
    * Id of HTML Template which defaults to `.tag` when no value defined inside component html tag. 
    * @readonly
    * @category State
    */
    public get templateId() {
        return this.getAttribute(Attribute.TEMPLATE) ?? Restore.tag;
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
    * Triggered via `.on()`
    * @event
    * @category Events 
    */
    public set onon(handler: Handler) {
        this.addEventListener(Event.ONON,handler);
    }
    
    /**
    * Triggered via `.off()`
    * @event
    * @category Events
    */
    public set onoff(handler: Handler) {
        this.addEventListener(Event.ONOFF,handler);
    }

    /**
    * @category Operations
    */
    public hide = (): void => 
        this.machine.trigger(Event.ONHIDE)

    /**
    * @category Operations
    */
    public show = (): void => 
        this.machine.trigger(Event.ONSHOW)

    /**
    * @category Operations
    */
    public on = (): void => 
        this.machine.trigger(Event.ONON)

    /**
    * @category Operations
    */
    public off = (): void => 
        this.machine.trigger(Event.ONOFF)
    
    /**
    * @category Operations
    */
    public toggle = (): void =>
        this.machine.trigger(Event.ONTOGGLE)
}
