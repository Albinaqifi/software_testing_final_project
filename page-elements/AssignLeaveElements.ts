import { Locator, Page } from "@playwright/test";

export class AssignLeaveElements {
  readonly page: Page;

  readonly employeeTextbox: Locator;
  readonly employeeSuggestion: Locator;
  readonly leaveTypeDropdownIcon: Locator;
  readonly leaveTypeOption: Locator;
  readonly datePickerIcon: Locator;
  readonly specificDate: Locator;
  readonly commentTextarea: Locator;
  readonly assignButton: Locator;
  readonly okButton: Locator;
  constructor(page: Page) {
    this.employeeTextbox = page.getByRole("textbox", {
      name: "Type for hints...",
    });
    this.employeeSuggestion = page.getByRole("option").nth(0);
    this.leaveTypeDropdownIcon = page.locator("form i").first();
    this.leaveTypeOption = page.getByRole("option", {
      name: "CAN - Bereavement",
    });
    this.datePickerIcon = page.locator("form i").nth(2);
    this.specificDate = page.getByText("18");
    this.commentTextarea = page.locator("textarea");
    this.assignButton = page.getByRole("button", { name: "Assign" });
    this.okButton = page.getByRole("button", { name: "Ok" });
  }
}
