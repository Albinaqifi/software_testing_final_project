import { Locator, Page } from '@playwright/test';

export class LoginElements {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.usernameInput =page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }
}