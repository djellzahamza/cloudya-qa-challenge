import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async login(email: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Sign In' }).click();
  }

  async getErrorMessage() {
    return this.page.getByText('Invalid credentials');
  }

  async isPasswordFieldMasked() {
    const type = await this.page
      .getByRole('textbox', { name: 'Password' })
      .getAttribute('type');
    return type === 'password';
  }
}