import { expect, test } from '@playwright/test';
import PwService from '../../src/framework/pwService';
import { myDescribe } from '../testHelper';

myDescribe('console logs spec', () => {
  test('should read console logs', async () => {
    const expectedLog = 'Page is Ready';

    expect(
      PwService.Instance.BrowserUtils.ConsoleLogsService.getLogs().includes(
        expectedLog
      )
    ).toBe(true);
  });
});
