import { expect, test } from '@playwright/test';

test('should get uuid object', async ({ request }) => {
  const getResponse = await request.get('/uuid');
  expect(getResponse.ok()).toBeTruthy();
  expect(JSON.parse((await getResponse.body()).toString())).toHaveProperty(
    'uuid'
  );
});
