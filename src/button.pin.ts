/**
* @module Pin
*/

import { Component } from "@browser-modules/web.component";

/**
 * HTML Attributes available to set
 * @category Metadata: Attributes
 */
export enum Attribute {
    TEMPLATE = 'templateId',
    VISIBLE = 'visible',
    STATE = 'state'
}

/**
 * Attribute only visible when set to NO
 * @category Metadata: State
 */
export enum Visible {
    NO = 'no',
    YES = 'yes'
}

/**
* @category Metadata: State
*/
export enum State {
    ON = 'on',
    OFF = 'off'
}

/**
* @category Metadata: Behavior
*/
export enum Event {
    ONON = 'onon', 
    ONOFF = 'onoff'
}

/**
* @category Metadata: Behavior
*/
export enum Operation {
    ON = 'on', 
    OFF = 'off', 
    TOGGLE = 'toggle'
}

/**
* @category Metadata: Behavior
*/
export enum Gesture {
    CLICK = 'click'
}

/**
* Event handler signature
* @category Interfaces
*/
export type Handler = (...args: any[]) => void


/**  
* @category Component
*/
export class Pin extends Component {
    /**
    * @category Attributes
    */
    static get attributes() { return Attribute}

    /**
    * Contains the bindings of UI Gestures to web component operations
    * @hidden
    */
    public configuration = configuration
    
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
    }

    /**
    * Id of HTML Template which defaults to `.tag` when no value defined in 
    * @readonly
    * @category State
    */
    public get [Attribute.TEMPLATE]() {
        return this.getAttribute('templateId') ?? Pin.tag;
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
    public [Operation.ON] = (): void => { 
        this.state = State.ON
        this.dispatchEvent(new CustomEvent(Event.ONON));
    }

    /**
    * @category Operations
    */
    public [Operation.OFF] = (): void => { 
        this.state = State.OFF
        this.dispatchEvent(new CustomEvent(Event.ONOFF));
    }
    
    /**
    * @category Operations
    */
    public [Operation.TOGGLE] = (): void => 
        this.state === State.ON ? this[Operation.OFF]() : this[Operation.ON]();
}

/**
* @hidden
*/
let configuration = {
    gestures:[
        {
            event: Gesture.CLICK,
            operation: Operation.TOGGLE
        }
    ]
}
