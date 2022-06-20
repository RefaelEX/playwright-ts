import { Response } from '@playwright/test';

export abstract class BasePage {
  abstract goTo(): Promise<null | Response>;
  abstract getUrl(): string;
}
