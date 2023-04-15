/**
* It is not possible to pass information into a web component constructor.
* This is a know limitation of web components.
* The configuration of the web component is therefore set via a public `configuration` property.
* @module Buttons
*/

import { Machine, IConfiguration } from "@browser-modules/machine";

import { Attribute, States, Visible, State, Event, Operation, Gesture } from "./Button.metadata.js"

export const Configuration: 
    IConfiguration<
        Attribute, 
        States, 
        Event> = {
    type:'parallel',
    states :{
        [Attribute.VISIBLE]:{
            initial: Visible.YES,
            states: {
                [Visible.YES]:{
                    on:{
                        [Event.ONHIDE]: {
                            target: Visible.NO,
                            actions: [Operation.HIDE]
                        }
                    }
                },
                [Visible.NO]:{
                    on:{
                        [Event.ONSHOW]: {
                            target: Visible.YES,
                            actions: [Operation.SHOW]
                        }
                    }
                }
            }
        },
        [Attribute.STATE]: {
            initial: State.OFF,
            states: {
                [State.OFF]:{
                    on: {
                        [Event.ONON]: {
                            target: State.ON,
                            actions:[Operation.ON]
                        },
                        [Event.ONTOGGLE]: {
                            target: State.ON,
                            actions:[Operation.ON]
                        }
                    }
                },
                [State.ON]:{
                    on: {
                        [Event.ONOFF]: {
                            target: State.OFF,
                            actions: [Operation.OFF]
                        },
                        [Event.ONTOGGLE]: {
                            target: State.OFF,
                            actions: [Operation.OFF]
                        }
                    }
                }
            }
        }
    },
    actions: {
        [Operation.HIDE]: (machine: Machine<Attribute, States, Event>, state, ...args) => 
            machine.emit(Event.ONHIDE, state, ...args),
        [Operation.SHOW]: (machine: Machine<Attribute, States, Event>, state, ...args) => 
            machine.emit(Event.ONSHOW,state, ...args),
        [Operation.ON]: (machine: Machine<Attribute, States, Event>, state, ...args) => 
            machine.emit(Event.ONON, state, ...args),
        [Operation.OFF]: (machine: Machine<Attribute, States, Event>, state, ...args) => 
            machine.emit(Event.ONOFF, state, ...args)
    },
    gestures:[
        {
            event: Gesture.CLICK,
            operation: Operation.TOGGLE
        }
    ]
}
