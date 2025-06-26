import { LoginElements } from "../page-elements/LoginElements";
import { BasePage } from "./BasePage";
import { DashboardPage } from "./DashboardPage";

export class LoginPage extends BasePage{

    readonly elements = new LoginElements(this.page);

    async login(username: string, password: string){
        await this.elements.usernameInput.fill(username);
        await this.elements.passwordInput.fill(password);
        await this.elements.loginButton.click();
        return new DashboardPage(this.page)
    }
}