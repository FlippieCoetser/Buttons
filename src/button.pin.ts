/**
* @module Pin
*/

import { Component, Gesture } from "../node_modules/@browser-modules/web.component/lib/component.js";

/**
 * HTML Attributes available to set
 * @category Configuration
 */
export enum Attribute {
    TEMPLATE = 'templateId',
    VISIBLE = 'visible',
    STATE = 'state'
}

/**
 * Attribute only visible when set to NO
 * @category Configuration
 */
export enum Visible {
    NO = 'no',
    YES = 'yes'
}

/**
* @category Configuration
*/
export enum State {
    ON = 'on',
    OFF = 'off'
}

/**
* @category Configuration
*/
export enum Event {
    ONON = 'onon',
    ONOFF = 'onoff'
}

/**
* @category Configuration
*/
export enum Operation {
    ON = 'on',
    OFF = 'off',
    TOGGLE = 'toggle'
}

/**  
* @category Component
*/
export class Pin extends Component {
    static get attribute() { return Attribute}

    /**
    * Contains the bindings of UI Gestures to web component operations
    */
    public configuration = configuration
    
    private _visible: Visible = Visible.YES
    protected _state: State = State.OFF

    /**
    * @hidden
    */
    constructor() {
        super()
    }

    /**
    * Template attribute represents the HTML Template Id which defaults to `.tag` when no value defined
    * @readonly
    * @category Attributes
    */
    public get [Attribute.TEMPLATE]() {
        return this.getAttribute(Attribute.TEMPLATE) ?? Pin.tag;
    }
    
    /**
    * No API Operation available to set visibility.  
    * @category Attributes
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
    * @category Attributes
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
    public set [Event.ONON](handler) {
        this.addEventListener(Event.ONON,handler);
    }
    
    /**
    * Triggered via `.off()`
    * @event
    * @category Events
    */
    public set [Event.ONOFF](handler) {
        this.addEventListener(Event.ONOFF,handler);
    }

    /**
    * @category Operations
    */
    public [Operation.ON] = (): void => { 
        this[Attribute.STATE] = State.ON
        this.dispatchEvent(new CustomEvent(Event.ONON));
    }

    /**
    * @category Operations
    */
    public [Operation.OFF] = (): void => { 
        this[Attribute.STATE] = State.OFF
        this.dispatchEvent(new CustomEvent(Event.ONOFF));
    }
    
    /**
    * @category Operations
    */
    public [Operation.TOGGLE] = (): void => 
        this[Attribute.STATE] == State.ON ? this[Operation.OFF]() : this[Operation.ON]();
}

let configuration = {
    gestures:[
        {
            event: Gesture.CLICK,
            operation: Operation.TOGGLE
        }
    ]
}
