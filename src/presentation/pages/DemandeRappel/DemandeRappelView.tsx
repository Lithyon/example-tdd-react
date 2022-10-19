import React, {ChangeEvent, FormEvent} from 'react';
import DemandeRappelController from "./DemandeRappelController";
import Input from "../../components/Input";

export interface DemandeRappelViewProperties {
    readonly controller: DemandeRappelController;
}

function onSubmit(controller: DemandeRappelController) {
    return (e: FormEvent) => {
        e.preventDefault();
        controller.onSubmit();
    }
}

export default function DemandeRappelView({controller}: DemandeRappelViewProperties) {
    return (
        <div className="card mx-auto col-8">
            <div className="card-body">
                <h1>Demande de rappel</h1>
                <form onSubmit={onSubmit(controller)} className="was-validated">
                    <Input id="prenom" required
                           onChange={(e: ChangeEvent<HTMLInputElement>) => controller.onPrenomChange(e.target.value)}>Prénom</Input>
                    <button type="submit" className="btn btn-primary mt-3">Envoyer</button>
                </form>
            </div>
        </div>
    );
}