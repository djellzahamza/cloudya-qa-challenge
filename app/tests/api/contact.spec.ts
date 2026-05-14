import { test, expect } from '@playwright/test';

test.describe('basic contact tests', () => {

  test('get contacts with valid token returns 200', async ({ request }) => {
    const loginResponse = await request.post('/api/auth/login', {
      data: {
        email: 'admin@cloudya.com',
        password: 'Test1234!'
      }
    });
    const { token } = await loginResponse.json();

    const response = await request.get('/api/contacts?q=Anna', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
  });

  //this has been reported as issue
  test.fail('get contacts without token returns 401', async ({ request }) => {
    const response = await request.get('/api/contacts?q=Anna');
    expect(response.status()).toBe(401);
  });

});