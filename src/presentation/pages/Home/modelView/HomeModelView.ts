import IsCloneable from "@maciffr/react-mvc/lib/contracts/IsCloneable";

export default interface HomeModelView {
    readonly name:string;
}

export interface HomeModelViewExtended extends HomeModelView, IsCloneable<HomeModelViewExtended> {
    
}

