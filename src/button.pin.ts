/**
* @module Pin
*/

import { Component, Gesture } from "@browser-modules/web.component";

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
    public get templateId() {
        return this.getAttribute('templateIt') ?? Pin.tag;
    }
    
    /**
    * No API Operation available to set visibility.  
    * @category Attributes
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
    * @category Attributes
    */
    public get state(): State { 
        return <State><unknown>this.getAttribute('state') ?? this._state;
    }
    public set state(state: State) {
        this._state = state;
        this.setAttribute('state', <string><unknown>state);
    }

    /**
    * Triggered via `.on()`
    * @event
    * @category Events 
    */
    public set onon(handler) {
        this.addEventListener('onon',handler);
    }
    
    /**
    * Triggered via `.off()`
    * @event
    * @category Events
    */
    public set onoff(handler) {
        this.addEventListener('onoff',handler);
    }

    /**
    * @category Operations
    */
    public on = (): void => { 
        this.state = State.ON
        this.dispatchEvent(new CustomEvent('onon'));
    }

    /**
    * @category Operations
    */
    public off = (): void => { 
        this.state = State.OFF
        this.dispatchEvent(new CustomEvent('onoff'));
    }
    
    /**
    * @category Operations
    */
    public toggle = (): void => 
        this.state == State.ON ? this.off() : this.on();
}

let configuration = {
    gestures:[
        {
            event: Gesture.CLICK,
            operation: 'toggle'
        }
    ]
}
