import React from 'react';
import HomeController from "./HomeController";

interface HomeViewProperties {
    readonly controller:HomeController;
}

export default function HomeView(properties:HomeViewProperties) {
    return (<h1>Home</h1>);
}