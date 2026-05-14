import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ContactsPage } from '../../pages/ContactsPage';

test.describe('Contact and search, basic scenarios', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin@cloudya.com', 'Test1234!');
  });

  test('search by name returns correct result', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    await contactsPage.search('Anna');
    const result = await contactsPage.getContactResult('Anna Schmidt');
    await expect(result).toBeVisible();
  });

  //this is case-sensitive
  test('search by department returns correct results', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    await contactsPage.search('Engineering');
    const result = await contactsPage.getContactResult('Anna Schmidt');
    await expect(result).toBeVisible();
  });

  test('search with no results shows empty state', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    await contactsPage.search('bbbbb');
    const noResults = await contactsPage.getNoResultsMessage();
    await expect(noResults).toBeVisible();
  });

  test('logout redirects to login page', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    await contactsPage.logout();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  });

});