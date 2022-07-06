import { expect, test } from '@playwright/test';

test('should execute get request to base url', async ({ request }) => {
  const getResponse = await request.get('/get');
  expect(getResponse.ok()).toBeTruthy();
});
