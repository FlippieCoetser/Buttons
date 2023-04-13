/**
* @module Buttons
*/

/**
 * HTML Attributes available to set
 * @category Metadata: Attributes
 */
export enum Attribute {
    TEMPLATE = 'templateId',
    VISIBLE  = 'visible',
    STATE    = 'state'
}

/**
 * Attribute only visible when set to NO
 * @category Metadata: State
 */
export enum Visible {
    NO  = 'no',
    YES = 'yes'
}

/**
* @category Metadata: State
*/
export enum State {
    ON  = 'on',
    OFF = 'off',
    DOWN = 'down',
    UP = 'up'
}

/**
* @category Metadata: State
*/
export type States = State | Visible

/**
* @category Metadata: Behavior
*/
export enum Event {
    ONHIDE   = 'onhide',
    ONSHOW   = 'onshow', 
    ONON     = 'onon', 
    ONOFF    = 'onoff',
    ONTOGGLE = 'ontoggle',
    ONDOWN = 'ondown',
    ONUP = 'onup'
}

/**
* @category Metadata: Behavior
*/
export const enum Operation {
    SHOW   = 'show',
    HIDE   = 'hide',
    ON     = 'on', 
    OFF    = 'off', 
    TOGGLE = 'toggle',
    PRESS = 'press',
    RELEASE = 'release',
}

/**
* @category Metadata: Behavior
*/
export const enum Gesture {
    CLICK = 'click',
    MOUSEDOWN = 'mousedown',
    MOUSEUP = 'mouseup',
    TOUCHSTART = 'touchstart',
    TOUCHEND = 'touchend',
}
/**
* Event handler signature
* @category Interfaces
*/
export type Handler = (...args: any[]) => void
