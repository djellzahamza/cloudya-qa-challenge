import { test, expect } from '@playwright/test';

test.describe('Baisc scenarios for authentication', () => {

  test('valid credentials return 200 ', async ({ request }) => {
    const response = await request.post('/api/auth/login', {
      data: {
        email: 'admin@cloudya.com',
        password: 'Test1234!'
      }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.token).toBeTruthy();
  });

  test('invalid credentials should return error message', async ({ request }) => {
    const response = await request.post('/api/auth/login', {
      data: {
        email: 'admin@cloudya.com',
        password: 'daisy1234!'
      }
    });
    const body = await response.json();
    expect(body.success).toBe(false);
    expect(body.message).toBe('Invalid credentials');
  });

  //this has been added in the QA report API returns 200 instead of 401 for failed auth
  //the test is expected to fail
  test.fail('invalid credentials should return 401', async ({ request }) => {
    const response = await request.post('/api/auth/login', {
      data: {
        email: 'admin@cloudya.com',
        password: 'wrongpassword'
      }
    });
    expect(response.status()).toBe(401);
  });

});