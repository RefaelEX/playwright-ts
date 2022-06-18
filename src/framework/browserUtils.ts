import { Page, Response } from '@playwright/test';
import ConsoleLogsService from './browserServices/consoleLogsService';
import NetworkLogsService from './browserServices/networkLogsService';

export default class BrowserUtils {
  private page: Page;
  private consoleLogsUtils: ConsoleLogsService;
  private networkLogsUtils: NetworkLogsService;

  constructor(page: Page) {
    this.page = page;
    this.consoleLogsUtils = new ConsoleLogsService(page);
    this.networkLogsUtils = new NetworkLogsService(page);
  }

  public get ConsoleLogsService(): ConsoleLogsService {
    return this.consoleLogsUtils;
  }

  public get NetworkLogsService(): NetworkLogsService {
    return this.networkLogsUtils;
  }

  public goTo(url: string): Promise<null | Response> {
    return this.page.goto(url, { waitUntil: 'networkidle' });
  }
}
