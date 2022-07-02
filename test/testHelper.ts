import { test } from '@playwright/test';
import PwService from '../src/framework/pwService';
import { testPage } from './pageObject/testPage';
import { inspect } from 'util';

type TestFunction = () => void;

export function myDescribe(
  name: string,
  testBody: TestFunction,
  navigateTo?: string
): void {
  test.describe(name, async () => {
    test.beforeEach(async ({ page }) => {
      console.log('before each in myDescribe');

      PwService.init(page);
      if (navigateTo) {
        await PwService.Instance.BrowserUtils.goTo(navigateTo);
      } else {
        await testPage.goTo();
      }
    });

    testBody();

    test.afterEach(async ({ page }, testInfo) => {
      console.log('After test in myDescribe');
      if (testInfo.status === 'failed') {
        const screenshot = await page.screenshot();
        await testInfo.attach('', {
          contentType: 'image/png',
          body: screenshot
        });
      }

      await testInfo.attach('browsers console logs', {
        contentType: 'text/plain',
        body: PwService.Instance.BrowserUtils.ConsoleLogsService.getLogs().toString()
      });

      await testInfo.attach('browsers response network logs', {
        contentType: 'application/json',
        body: inspect(
          PwService.Instance.BrowserUtils.NetworkLogsService.getResponseLogs()
        )
      });

      await testInfo.attach('browsers Request network logs', {
        contentType: 'application/json',
        body: inspect(
          PwService.Instance.BrowserUtils.NetworkLogsService.getRequestLogs()
        )
      });
    });

    test.afterAll(async () => {
      console.log('After All in myDescribe');
    });
  });
}
