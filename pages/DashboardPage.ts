import { DashboardElements } from "../page-elements/DashboardElements";
import { LoginElements } from "../page-elements/LoginElements";
import { AssignLeavePage } from "./AssignLeavePage";
import { BasePage } from "./BasePage";
import { LeaveListPage } from "./LeaveListPage";

export class DashboardPage  extends BasePage{

    readonly elements = new DashboardElements(this.page);

    async clickOnAssignLeave(){
        await this.elements.assignLeaveButton.click();
        return new AssignLeavePage(this.page);
    }

    
    async clickOnLeaveList(){
        await this.elements.leaveListButton.click();
        return new LeaveListPage(this.page);
    }


}