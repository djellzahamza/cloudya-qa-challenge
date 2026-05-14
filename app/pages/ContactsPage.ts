import { Page } from '@playwright/test';

export class ContactsPage {
  constructor(private page: Page) {}

  async search(query: string) {
    await this.page.getByRole('textbox', { name: 'Search by name, email, or' }).fill(query);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async getContactResult(name: string) {
    return this.page.getByRole('heading', { name });
  }

  async getNoResultsMessage() {
    return this.page.getByText('No contacts found.');
  }

  async logout() {
    await this.page.getByRole('button', { name: 'Logout' }).click();
  }

  async getLoggedInUser() {
    return this.page.getByText('Logged in as');
  }
}