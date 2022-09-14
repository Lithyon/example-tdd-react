import React from "react";

import DemandeRappelView from "./DemandeRappelView";
import DemandeRappelControllerImpl from "./DemandeRappelControllerImpl";
import DemandeRappelModelViewExtendedBuilder from "./modelView/DemandeRappelModelViewExtendedBuilder";
import demandeRappelService from "../../../domain/DemandeRappel/service";

export default function DemandeRappel() {
  const controller = new DemandeRappelControllerImpl({
    demandeRappelService: demandeRappelService,
    demandeRappelModelViewExtendedBuilder: new DemandeRappelModelViewExtendedBuilder()
  });

  return <DemandeRappelView controller={controller} />;
};