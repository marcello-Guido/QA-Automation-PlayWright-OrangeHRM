export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.getByRole('textbox', { name: 'username' });
        this.passwordField = page.getByRole('textbox', { name: 'password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}
