import { Page } from '@playwright/test';

/**
 * Based on:
 * https://playwright.dev/docs/api/class-request
 * https://playwright.dev/docs/api/class-response
 */

export default class NetworkLogsService {
  private reqLogs: Array<object>;
  private resLogs: Array<object>;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.reqLogs = new Array<object>();
    this.resLogs = new Array<object>();
  }

  public startRecordLogs(): void {
    this.page.on('request', async (request) => {
      this.reqLogs.push({
        url: request.url(),
        method: request.method(),
        headers: await request.allHeaders(),
        failure: request.failure() ? request.failure() : ''
      });
    });

    this.page.on('response', async (response) => {
      this.resLogs.push({
        url: response.url(),
        status: response.status(),
        statusText: response.statusText(),
        headers: await response.allHeaders()
      });
    });
  }

  public getRequestLogs(): Array<object> {
    return this.reqLogs;
  }

  public getResponseLogs(): Array<object> {
    return this.resLogs;
  }
}
