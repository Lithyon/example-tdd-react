import React from 'react';

import HomeView from "./HomeView";
import HomeController from "./HomeController";
import HomeModelViewExtendedBuilder from "./modelView/HomeModelViewExtendedBuilder";

export default function Home() {
    return (<HomeView controller={new HomeController({homeModelViewExtendedBuilder: new HomeModelViewExtendedBuilder()})} />);
}