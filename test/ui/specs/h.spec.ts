import { expect, test } from '@playwright/test';
import { testPage } from '../pageObject/testPage';
import { myDescribe } from '../testHelper';

myDescribe('h spec', () => {
  test('validate h text', async () => {
    const expectedText = 'Test Page';
    expect(await testPage.hElement.innerText()).toEqual(expectedText);
  });

  test('validate h css property', async () => {
    const expectedCssValue = 'center';
    expect(await testPage.hElement.getCssProperty('text-align')).toEqual(
      expectedCssValue
    );
  });
});
