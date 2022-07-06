import { expect, test } from '@playwright/test';
import PwService from '../../../src/framework/pwService';
import { myDescribe } from '../testHelper';

myDescribe('network logs spec', () => {
  test('should read request network logs', async () => {
    const logs =
      PwService.Instance.BrowserUtils.NetworkLogsService.getRequestLogs();
    expect(logs.length).toBeGreaterThan(1);
  });

  test('should read response network logs', async () => {
    const logs =
      PwService.Instance.BrowserUtils.NetworkLogsService.getResponseLogs();
    expect(logs.length).toBeGreaterThan(1);
  });
});
