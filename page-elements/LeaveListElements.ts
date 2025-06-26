import { Locator, Page } from "@playwright/test";

export class LeaveListElements {
  readonly page: Page;
  readonly leaveListButton: Locator;
  readonly leaveStatusDropdownIcon: Locator;
  readonly leaveStatusCancelledOption: Locator;
  readonly leaveTypeDropdownIcon: Locator;
  readonly leaveTypeOption: Locator;
  readonly employeeTextbox: Locator;
  readonly employeeSuggestion: Locator;
  readonly subUnitDropdownIcon: Locator;
  readonly subUnitOption: Locator;
  readonly includePastEmployeesCheckbox: Locator;
  readonly searchButton: Locator;
  readonly noRecordsFoundText: Locator;
  constructor(page: Page) {

    this.leaveListButton = page.getByRole('button', { name: 'Leave List' });
    this.leaveStatusDropdownIcon = page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first();
    this.leaveStatusCancelledOption = page.getByRole('option', { name: 'Cancelled' });
    this.leaveTypeDropdownIcon = page.locator('.oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').first();
    this.leaveTypeOption = page.getByText('CAN - Bereavement');
    this.employeeTextbox = page.getByRole('textbox', { name: 'Type for hints...' });
    this.employeeSuggestion = page.getByRole('option').nth(0);
    this.subUnitDropdownIcon = page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
    this.subUnitOption = page.getByText('Administration');
    this.includePastEmployeesCheckbox = page.locator('div').filter({ hasText: /^Include Past Employees$/ }).locator('span');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.noRecordsFoundText = page.getByText('No Records Found');
  
  }
}
