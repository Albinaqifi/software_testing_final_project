import { BaseComponent } from "../BaseComponent";
import { LeaveModalElements } from "./LeaveModalElements";

export class LeaveModal extends BaseComponent {

    readonly elements = new LeaveModalElements(this.page);

}