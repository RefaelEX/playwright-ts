import { expect, test } from '@playwright/test';
import { testPage } from '../pageObject/testPage';
import { myDescribe } from '../testHelper';

myDescribe('input text spec', () => {
  test('validate input attribute', async () => {
    expect(await testPage.inputTextElement.getAttribute('name')).toEqual(
      'itname'
    );
  });
  test('validate input value', async () => {
    expect(await testPage.inputTextElement.getValue()).toEqual(
      'Input type Text'
    );
  });
});
