import { expect, test } from '@playwright/test';

test('should execute put request to base url', async ({ request }) => {
  const putResponse = await request.put('/put');
  expect(putResponse.ok()).toBeTruthy();
});
