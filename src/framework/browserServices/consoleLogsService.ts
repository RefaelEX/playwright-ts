import { Page } from '@playwright/test';

export default class ConsoleLogsService {
  private logs: Array<string>;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.logs = new Array<string>();
  }

  public startRecordLogs(): void {
    this.page.on('console', (msg) => {
      this.logs.push(msg.text());
    });
  }

  public getLogs(): Array<string> {
    return this.logs;
  }
}
