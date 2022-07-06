import { expect, test } from '@playwright/test';

test('should execute delete request to base url', async ({ request }) => {
  const deleteResponse = await request.delete('/delete');
  expect(deleteResponse.ok()).toBeTruthy();
});
