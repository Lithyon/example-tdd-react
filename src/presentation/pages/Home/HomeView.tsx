import React, {EventHandler, FormEvent, FormEventHandler} from 'react';
import HomeController from "./HomeController";

interface HomeViewProperties {
    readonly controller:HomeController;
}

function onSubmit(controller:HomeController) {
    return (e:FormEvent) => {
        e.preventDefault();
        controller.onSubmit();
    }
}

export default function HomeView({controller}:HomeViewProperties) {


    return (
        <form onSubmit={onSubmit(controller)}>
            <h1>Home app 3</h1>
            <input placeholder="nom" onChange={(x) => controller.onNameChange(x.target.value)} required/>
            <input type="submit" />
        </form>
    );
}