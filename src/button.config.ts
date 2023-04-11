/**
* @module Button
*/

import { Machine, IConfiguration } from "@browser-modules/machine";

import {
    Attribute,
    States,
    Visible,
    State,
    Event,
    Operation,
    Gesture
} from "./Button.metadata.js"

export {
    Attribute,
    States,
    Visible,
    State,
    Event,
    Operation,
    Gesture
} from "./Button.metadata.js"

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
        [Operation.HIDE]: (machine: Machine<Attribute, States, Event>, state) => 
            machine.emit(Event.ONHIDE, state),
        [Operation.SHOW]: (machine: Machine<Attribute, States, Event>, state) => 
            machine.emit(Event.ONSHOW,state),
        [Operation.ON]: (machine: Machine<Attribute, States, Event>, state) => 
            machine.emit(Event.ONON, state),
        [Operation.OFF]: (machine: Machine<Attribute, States, Event>, state) => 
            machine.emit(Event.ONOFF, state)
    },
    gestures:[
        {
            event: Gesture.CLICK,
            operation: Operation.TOGGLE
        }
    ]
}
