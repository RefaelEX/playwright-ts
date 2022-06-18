import { myDescribe } from '../testHelper';
import { expect, test } from '@playwright/test';
import { testPage } from '../pageObject/testPage';

myDescribe('text area spec', () => {
  test('should get textarea value', async () => {
    const expectedDeafultValue = 'Text Area';
    const currValue = (await testPage.textArea.getValue()).trim();
    expect(currValue).toEqual(expectedDeafultValue);
  });
  test('should clear textArea', async () => {
    const expectedValue = '';
    await testPage.textArea.clear();
    const currValue = await testPage.textArea.getValue();
    expect(currValue).toEqual(expectedValue);
  });
  test('should fill textArea', async () => {
    const expectedNewValue = 'New Text In Text Area';
    await testPage.textArea.setText(expectedNewValue);
    const currValue = await testPage.textArea.getValue();
    expect(currValue).toEqual(expectedNewValue);
  });
});
