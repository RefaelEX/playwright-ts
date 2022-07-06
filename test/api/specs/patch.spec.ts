import { expect, test } from '@playwright/test';

test('should execute patch request to base url', async ({ request }) => {
  const patchResponse = await request.patch('/patch');
  expect(patchResponse.ok()).toBeTruthy();
});
