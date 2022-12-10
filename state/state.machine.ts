export class Machine {
    private _config;

    public value = {}

    constructor(config) {
        this._config = config;
    }

    get attributes() {
        return Object.keys(this._config.states);
    }

    get initialStates() {
        return Object
        .keys(this._config.states)
        .map(attribute => ({
            attribute,
            state: this._config.states[attribute].initial
        }))
    }

    public loadInitialStates = () => {
        this.initialStates.forEach(({ attribute, state }) => {
            this.value[attribute] = state;
        })
    }

    public send = ({attribute, event}) => {
        let currentState = this.value[attribute];
        console.log(currentState)
        const states = this._config.states[attribute].states[currentState]
        const newState = states.on[event];

        this.value[attribute] = newState.target;
        console.log(this.value[attribute])

        newState.actions.forEach(action => {
            console.log(action)
        })
    }
}