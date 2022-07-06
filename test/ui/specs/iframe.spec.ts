import { expect, test } from '@playwright/test';
import PwService from '../../../src/framework/pwService';
import { iframe01Page } from '../pageObject/iframe01Page';
import { myDescribe } from '../testHelper';

myDescribe('iframe spec', () => {
  test('should get text of element inside the iframe', async () => {
    const expectedText = 'This page is displayed in an iframe';
    PwService.Instance.HtmlUtils.inFrame('#iframe01');

    const hText = await iframe01Page.hElement.innerText();
    PwService.Instance.HtmlUtils.backToMainFrame();
    expect(hText).toEqual(expectedText);
  });
});
