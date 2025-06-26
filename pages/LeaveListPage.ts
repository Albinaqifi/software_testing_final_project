import { LeaveModal } from "../components/LeaveModal/LeaveModal";
import { AssignLeaveElements } from "../page-elements/AssignLeaveElements";
import { LeaveListElements } from "../page-elements/LeaveListElements";
import { BasePage } from "./BasePage";

export class LeaveListPage  extends BasePage{
    readonly elements = new LeaveListElements(this.page);
}