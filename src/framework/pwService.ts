import { Page } from '@playwright/test';
import BrowserUtils from './browserUtils';
import HtmlUtils from './htmlUtils';

export default class PwService {
  private static instance: PwService;

  private htmlUtils: HtmlUtils;
  private browserUtils: BrowserUtils;

  private constructor(page: Page) {
    this.browserUtils = new BrowserUtils(page);
    this.htmlUtils = new HtmlUtils(page);
  }

  public static get Instance() {
    if (!this.instance) {
      throw new Error('PwService was not inisialized');
    }
    return this.instance;
  }

  public get HtmlUtils(): HtmlUtils {
    return this.htmlUtils;
  }

  public get BrowserUtils(): BrowserUtils {
    return this.browserUtils;
  }

  public static init(page: Page): void {
    this.instance = new PwService(page);
    this.instance.browserUtils.ConsoleLogsService.startRecordLogs();
    this.instance.browserUtils.NetworkLogsService.startRecordLogs();
  }
}
