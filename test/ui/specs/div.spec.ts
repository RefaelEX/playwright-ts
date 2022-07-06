import { expect, test } from '@playwright/test';
import { testPage } from '../pageObject/testPage';
import { myDescribe } from '../testHelper';

myDescribe('div spec', () => {
  test('validate div text', async () => {
    const expectedText = 'I was not clicked';
    expect(await testPage.divClickText.innerText()).toEqual(expectedText);
  });
});
