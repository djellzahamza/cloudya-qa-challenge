import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('basic login scenarios', () => {

  test('valid credentials redirects to contacts page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin@cloudya.com', 'Test1234!');
    await expect(page.getByRole('heading', { name: 'Contacts' })).toBeVisible();
  });

  test('invalid credentials shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin@cloudya.com', 'wrongpassword');
    const error = await loginPage.getErrorMessage();
    await expect(error).toBeVisible();
  });

  //this bug has been reported in the QA report$
  test.fail('password field should be masked', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const isMasked = await loginPage.isPasswordFieldMasked();
    expect(isMasked).toBe(true);
  });

});