import { expect, test } from '@playwright/test';
import { testPage } from '../pageObject/testPage';
import { myDescribe } from '../testHelper';

myDescribe('button spec', () => {
  test('click button', async () => {
    const expectedClickedText = 'I was clicked';
    await testPage.button1.click();
    expect(await testPage.divClickText.innerText()).toEqual(expectedClickedText);
  });
  test('should validate button text', async () => {
    expect(await testPage.button1.innerText()).toEqual('Click me');
  });
  test('should click button after 3 second delay', async () => {
    const expectedClickedText = 'I was clicked after delay';
    await testPage.delayButton.click();
    expect(await testPage.delayButtonTextDiv.innerText()).toEqual(expectedClickedText);
  });
  test('should be disabled on page load', async () => {
    expect(await testPage.delayButton.isDisabled()).toBeTruthy();
    /**
     * Using Assertions library
     * https://playwright.dev/docs/test-assertions
     */
    await expect(testPage.delayButton.getLocator()).toBeDisabled();
  });
});
