/**
 * @module Buttons
 */

/**
 * HTML Attributes available to set
 * @category Metadata: Attributes
 * @enum
 */
export const Attribute = {
  TEMPLATE: "templateId",
  VISIBLE: "visible",
  STATE: "state",
} as const;
/**
 * HTML Attributes available to set
 * @category Metadata: Attributes
 */
export type Attributes = (typeof Attribute)[keyof typeof Attribute];

/**
 * Attribute only visible when set to NO
 * @category Metadata: State
 * @enum
 */
export const Visible = {
  YES: "yes",
  NO: "no",
} as const;
/**
 * Attribute only visible when set to NO
 * @category Metadata: State
 */
export type Visibility = (typeof Visible)[keyof typeof Visible];

/**
 * @category Metadata: State
 * @enum
 */
export const State = {
  ON: "on",
  OFF: "off",
  DOWN: "down",
  UP: "up",
} as const;
/**
 * @category Metadata: State
 */
export type States = (typeof State)[keyof typeof State];

/**
 * @category Metadata: Behavior
 * @enum
 */
export const Event = {
  ONHIDE: "onhide",
  ONSHOW: "onshow",
  ONON: "onon",
  ONOFF: "onoff",
  ONTOGGLE: "ontoggle",
  ONDOWN: "ondown",
  ONUP: "onup",
} as const;
/**
 * @category Metadata: Behavior
 */
export type Events = (typeof Event)[keyof typeof Event];

/**
 * @category Metadata: Behavior
 * @enum
 */
export const Operation = {
  SHOW: "show",
  HIDE: "hide",
  ON: "on",
  OFF: "off",
  TOGGLE: "toggle",
  PRESS: "press",
  RELEASE: "release",
} as const;
/**
 * @category Metadata: Behavior
 */
export type Operations = (typeof Operation)[keyof typeof Operation];

/**
 * @category Metadata: Behavior
 * @enum
 */
export const Gesture = {
  CLICK: "click",
  MOUSEDOWN: "mousedown",
  MOUSEUP: "mouseup",
  TOUCHSTART: "touchstart",
  TOUCHEND: "touchend",
  MOUSELEAVE: "mouseleave",
} as const;
/**
 * @category Metadata: Behavior
 */
export type Gestures = (typeof Gesture)[keyof typeof Gesture];

/**
 * Event handler signature
 * @hidden
 */
export type Handler = (...args: any[]) => void;
