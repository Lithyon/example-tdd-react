import DemandeRappelService from "./DemandeRappelService";
import demandeRappelRepository from "../repository";

const demandeRappelService = new DemandeRappelService({
  demandeRappelRepository: demandeRappelRepository
})

export default demandeRappelService;