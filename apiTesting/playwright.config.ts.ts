// playwright.config.ts
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './specs',

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,

  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000
  },

  /**
   * Using https://httpbin.org/ for api testing
   */
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://httpbin.org'
  },

  reporter: [['html', { open: 'never' }]]
};
export default config;
