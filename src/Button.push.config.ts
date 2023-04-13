/**
* It is not possible to pass information into a web component constructor.
* This is a know limitation of web components.
* The configuration of the web component is therefore set via a public `configuration` property.
* @module Buttons
*/

import { Operation, Gesture } from "./Button.metadata.js"

export const Configuration = {
    gestures:[
        {
            event: Gesture.MOUSEDOWN,
            operation: Operation.PRESS
        },
        {
            event: Gesture.MOUSEUP,
            operation: Operation.RELEASE
        },
        {
            event: Gesture.TOUCHSTART,
            operation: Operation.PRESS
        },
        {
            event: Gesture.TOUCHEND,
            operation: Operation.RELEASE
        }
    ]
}
