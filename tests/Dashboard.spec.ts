import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

let loginPage: LoginPage;

test.describe("Dashboard tests", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(process.env.BASE_URL as string);
  });

  test("[232123213] Assign Leave", async ({ page }) => {
    const employeeName = "a";
    const comments = "some comment";
    const dashboardPage = await loginPage.login(
      process.env.E2E_USERNAME as string,
      process.env.E2E_PASSWORD as string
    );
    const assignLeavePage = await dashboardPage.clickOnAssignLeave();
    await assignLeavePage.elements.employeeTextbox.click();
    await assignLeavePage.elements.employeeTextbox.fill(employeeName);
    await page.waitForTimeout(3000);
    await assignLeavePage.elements.employeeSuggestion.click();
    await assignLeavePage.elements.leaveTypeDropdownIcon.click();
    await assignLeavePage.elements.leaveTypeOption.click();
    await assignLeavePage.elements.datePickerIcon.click();
    await assignLeavePage.elements.specificDate.click();
    await assignLeavePage.elements.commentTextarea.fill(comments);
    const leaveModal = await assignLeavePage.clickOnAssign();
    await expect(leaveModal.elements.okButton).toBeVisible();
    await expect(leaveModal.elements.message).toBeVisible();
    await leaveModal.elements.okButton.click();
  });

  test("[32321213] Validate No Record found", async ({ page }) => {
  const employeeName = "a";
  const dashboardPage = await loginPage.login(
    process.env.E2E_USERNAME as string,
    process.env.E2E_PASSWORD as string
  );

  const leaveList = await dashboardPage.clickOnLeaveList();
    await leaveList.elements.leaveStatusDropdownIcon.click();
    await leaveList.elements.leaveStatusCancelledOption.click();

    await leaveList.elements.leaveTypeDropdownIcon.click();
    await leaveList.elements.leaveTypeOption.click();

    await leaveList.elements.employeeTextbox.click();
    await leaveList.elements.employeeTextbox.fill(employeeName);
    await page.waitForTimeout(3000);
    await leaveList.elements.employeeSuggestion.click();

    await leaveList.elements.subUnitDropdownIcon.click();
    await leaveList.elements.subUnitOption.click();

    await leaveList.elements.includePastEmployeesCheckbox.click();
    await leaveList.elements.searchButton.click();

    await expect(leaveList.elements.noRecordsFoundText).toBeVisible();
});

});

