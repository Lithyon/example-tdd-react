import IsCloneable from "../../../../react-mvc/contracts/IsCloneable";

export default interface HomeModelView {
    readonly name:string;
}

export interface HomeModelViewExtended extends HomeModelView, IsCloneable<HomeModelViewExtended> {
    
}

