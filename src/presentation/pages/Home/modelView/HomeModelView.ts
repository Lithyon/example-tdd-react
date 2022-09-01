import IsCloneable from "@maciffr/react-mvc/lib/contracts/IsCloneable";

export default interface HomeModelView {}

export interface HomeModelViewExtended extends HomeModelView, IsCloneable<HomeModelViewExtended> {
}

