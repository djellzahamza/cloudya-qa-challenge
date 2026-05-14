import { test, expect, devices } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ContactsPage } from '../../pages/ContactsPage';

const iPhone13 = devices['iPhone 13'];

test.use({ ...iPhone13 });

test.describe('mobile and search', () => {

  test('successful login on iPhone 13', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin@cloudya.com', 'Test1234!');
    await expect(page.getByRole('heading', { name: 'Contacts' })).toBeVisible();
  });

  test('search works on mobile viewport', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin@cloudya.com', 'Test1234!');
    const contactsPage = new ContactsPage(page);
    await contactsPage.search('Anna');
    const result = await contactsPage.getContactResult('Anna Schmidt');
    await expect(result).toBeVisible();
  });

});