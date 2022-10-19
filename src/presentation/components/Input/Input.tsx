import React, {FormEvent, FormEventHandler, InputHTMLAttributes, useMemo, useState} from "react";

type OmittedProps =
    "accept"
    | "alt"
    | "capture"
    | "checked"
    | "crossOrigin"
    | "formAction"
    | "formEncType"
    | "formMethod"
    | "formNoValidate"
    | "formTarget"
    | "height"
    | "max"
    | "min"
    | "multiple"
    | "size"
    | "src"
    | "step"
    | "type"
    | "width";

export interface InputProperties extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly id: string;
    readonly onChange?: FormEventHandler<HTMLInputElement>
    readonly "data-testid": string;
}

export default function Input({id, onChange, children, ...props}: InputProperties) {
    const errorId = useMemo(() => `error-${id}`, [id]);
    const [componentState, changeComponentState] = useState({
        errorMessage: "",
        isInvalid: false
    });
    const {errorMessage, isInvalid} = componentState;

    function onInvalidHandler(event: FormEvent<HTMLInputElement>) {
        event.preventDefault();
        changeComponentState({
            errorMessage: event.currentTarget.validationMessage,
            isInvalid: true
        });
    }

    function onChangeHandler(event: FormEvent<HTMLInputElement>) {
        const {currentTarget} = event;

        changeComponentState({
            errorMessage: currentTarget.validationMessage,
            isInvalid: !currentTarget.validity.valid
        });

        onChange && onChange(event)
    }

    return <>
        <label className="form-label" htmlFor={id}>{children}</label>
        <input id={id} {...props} type="text" className="form-control"
               onInvalid={onInvalidHandler}
               onChange={onChangeHandler} aria-invalid={isInvalid}/>
        <span id={errorId} role="alert" aria-label="message d'erreur" className="invalid-feedback" aria-labelledby={id}>
            {errorMessage}
        </span>
    </>
}