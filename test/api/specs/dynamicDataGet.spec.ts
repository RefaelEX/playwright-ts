import { expect, test } from '@playwright/test';

test('should get dynamic data', async ({ request }) => {
  const getResponse = await request.get('/base64/SFRUUEJJTiBpcyBhd2Vzb21l');
  expect(getResponse.ok()).toBeTruthy();
  expect((await getResponse.body()).toString().trim()).toEqual(
    'HTTPBIN is awesome'
  );
});
