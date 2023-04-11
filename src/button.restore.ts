import { Component } from "@browser-modules/web.component";
import { Machine } from "@browser-modules/machine"

import { 
    Configuration,
    Attribute,
    States,
    Visible,
    State,
    Event,
    Operation 
} from "./Button.config.js"

/**
* Event handler signature
* @category Interfaces
*/
export type Handler = (...args: any[]) => void

/**  
* @category Component
*/
export class Restore extends Component {
    /**
    * @category Attributes
    */
    static get attributes() { return Attribute}

    /**
    * Contains the bindings of UI Gestures to web component operations
    * @hidden
    */
    public configuration = Configuration
    public machine
    
    /**
    * default state component
    */
    private _visible: Visible = Visible.YES
    private _state: State = State.OFF

    /**
    * @hidden
    */
    constructor() {
        super()
        this.machine = new Machine<Attribute, States, Event>(Configuration)
        this._registerEvents()
    }

    private _trigger = (event: Event) => 
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
    * Id of HTML Template which defaults to `.tag` when no value defined in 
    * @readonly
    * @category State
    */
    public get [Attribute.TEMPLATE]() {
        return this.getAttribute('templateId') ?? Restore.tag;
    }
    
    /**
    * No Imperative API Operation to change visibility.  
    * @category State
    */
    public get [Attribute.VISIBLE](): Visible {
        return <Visible>this.getAttribute(Attribute.VISIBLE) ?? this._visible;
    }
    public set [Attribute.VISIBLE](visible: Visible) {
        this._visible = visible;
        visible == Visible.YES && this.removeAttribute(Attribute.VISIBLE);
        visible == Visible.NO && this.setAttribute(Attribute.VISIBLE, visible);
    }

    /**
    * Takes any value of the State enumeration related to the specific button type
    * @category State
    */
    public get [Attribute.STATE](): State { 
        return <State><unknown>this.getAttribute(Attribute.STATE) ?? this._state;
    }
    public set [Attribute.STATE](state: State) {
        this._state = state;
        this.setAttribute(Attribute.STATE, <string><unknown>state);
    }

    /**
    * Triggered via `.hide()`
    * @event
    * @category Events 
    */
    public set [Event.ONHIDE](handler: Handler) {
        this.addEventListener(Event.ONHIDE,handler);
    }
        
    /**
    * Triggered via `.show()`
    * @event
    * @category Events
    */
    public set [Event.ONSHOW](handler: Handler) {
        this.addEventListener(Event.ONSHOW,handler);
    }

    /**
    * Triggered via `.on()`
    * @event
    * @category Events 
    */
    public set [Event.ONON](handler: Handler) {
        this.addEventListener(Event.ONON,handler);
    }
    
    /**
    * Triggered via `.off()`
    * @event
    * @category Events
    */
    public set [Event.ONOFF](handler: Handler) {
        this.addEventListener(Event.ONOFF,handler);
    }

    /**
    * @category Operations
    */
    public [Operation.HIDE] = (): void => 
        this.machine.trigger(Event.ONHIDE)

    /**
    * @category Operations
    */
    public [Operation.SHOW] = (): void => 
        this.machine.trigger(Event.ONSHOW)

    /**
    * @category Operations
    */
    public [Operation.ON] = (): void => 
        this.machine.trigger(Event.ONON)

    /**
    * @category Operations
    */
    public [Operation.OFF] = (): void => 
        this.machine.trigger(Event.ONOFF)
    
    /**
    * @category Operations
    */
    public [Operation.TOGGLE] = (): void =>
        this.machine.trigger(Event.ONTOGGLE)
}
