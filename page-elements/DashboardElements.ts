import { Locator, Page } from "@playwright/test";

export class DashboardElements {
  readonly page: Page;
  readonly dashboardHeader: Locator;
  readonly assignLeaveButton: Locator;
  readonly leaveListButton: Locator;
  constructor(page: Page) {
    this.dashboardHeader = page.getByRole("heading", { name: "Dashboard" });
    this.assignLeaveButton = page.getByRole("button", { name: "Assign Leave" });
    this.leaveListButton = page.getByRole("button", { name: "Leave List" });
  }
}
