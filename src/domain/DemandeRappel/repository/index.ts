import DemandeRappelRepository from "./DemandeRappelRepository";
import demandeRappelDao from "../data";

const demandeRappelRepository = new DemandeRappelRepository({
  demandeRappelDao: demandeRappelDao
})

export default demandeRappelRepository;