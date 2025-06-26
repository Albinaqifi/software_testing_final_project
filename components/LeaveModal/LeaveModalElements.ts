import { Locator, Page } from "@playwright/test";

export class LeaveModalElements {
  readonly page: Page;
  readonly okButton: Locator;
  readonly message: Locator;
  constructor(page: Page) {
    this.okButton = page.getByRole('button', { name: 'Ok' })
    this.message = page.getByText('Employee does not have sufficient leave balance for leave request. Click OK to confirm leave assignment.')
  }
}
