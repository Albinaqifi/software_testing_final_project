import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

test.describe('Login tests', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(process.env.BASE_URL as string);
  });

  test('[223123] Login test', async () => {
    const dashboardPage = await loginPage.login(process.env.E2E_USERNAME as string, process.env.E2E_PASSWORD as string);
    // console.log(process.env.USERNAME as string)
  });
});
