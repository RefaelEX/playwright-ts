import { expect, test } from '@playwright/test';
import { testPage } from '../pageObject/testPage';
import { myDescribe } from '../testHelper';

myDescribe('select spec', () => {
  test('validate selected option', async () => {
    const expectedText = 'firstOption';
    expect(await testPage.selectElement.getSelectedValue()).toEqual(expectedText);
  });
  test('select option', async () => {
    await testPage.selectElement.selectOption(['secondOption']);
    expect(await testPage.selectElement.getSelectedValue()).toEqual('secondOption');
  });
});
