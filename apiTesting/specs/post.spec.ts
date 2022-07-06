import { expect, test } from '@playwright/test';

test('should execute post request to base url', async ({ request }) => {
  const postResponse = await request.post('/post');
  expect(postResponse.ok()).toBeTruthy();
});
