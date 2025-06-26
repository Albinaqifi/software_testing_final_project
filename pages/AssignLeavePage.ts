import { LeaveModal } from "../components/LeaveModal/LeaveModal";
import { AssignLeaveElements } from "../page-elements/AssignLeaveElements";
import { BasePage } from "./BasePage";

export class AssignLeavePage  extends BasePage{

    readonly elements = new AssignLeaveElements(this.page);


    async clickOnAssign(){
        await this.elements.assignButton.click();
        return new LeaveModal(this.page);
    }
}