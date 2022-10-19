import StateObservable, {StateChangedHandler} from "../contracts/StateObservable";

export default abstract class ControllerBase<STATE_TYPE> implements StateObservable<STATE_TYPE> {
    private onStateChangedHandlers?:StateChangedHandler<STATE_TYPE>;

    abstract get state():STATE_TYPE;

    subscribeOnStateChanged(onStateChangedHandler:StateChangedHandler<STATE_TYPE>) {
        this.onStateChangedHandlers = onStateChangedHandler;
    }

    unsubscribeOnStateChanged() {
        this.onStateChangedHandlers = undefined;
    }

    raiseStateChanged() {
        this.onStateChangedHandlers && this.onStateChangedHandlers(this.state);
    }
}