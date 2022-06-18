import { Page } from '@playwright/test';

/**
 * Based on:
 * https://playwright.dev/docs/api/class-request
 */
interface IRequest {
  allHeaders: { [key: string]: string };
  failure: null | { errorText: string };
  method: string;
  postData: string;
  postDataJson: object;
  sizes: object;
  timing: object;
  url: string;
}

/**
 * Based on:
 * https://playwright.dev/docs/api/class-response
 */
interface IResponse {
  url: string;
  status: number;
  statusText: string;
  text: string;
  headers: { [key: string]: string };
  body: object;
  finished: null | Error;
  securityDetails: object;
  serverAddress: object;
}

export default class NetworkLogsService {
  private reqLogs: Array<IRequest>;
  private resLogs: Array<IResponse>;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.reqLogs = new Array<IRequest>();
    this.resLogs = new Array<IResponse>();
  }

  public startRecordLogs(): void {
    this.page.on('request', async (request) => {
      const req: IRequest = {
        url: await request.url(),
        method: await request.method(),
        allHeaders: await request.allHeaders(),
        failure: await request.failure(),
        postData: await request.postData(),
        postDataJson: await request.postDataJSON(),
        sizes: await request.sizes(),
        timing: await request.timing()
      };

      this.reqLogs.push(req);
    });
    this.page.on('response', async (response) => {
      const res: IResponse = {
        url: await response.url(),
        status: await response.status(),
        statusText: await response.statusText(),
        text: await response.text(),
        headers: await response.allHeaders(),
        body: await (await response.body()).toJSON(),
        finished: await response.finished(),
        securityDetails: await response.securityDetails(),
        serverAddress: await response.serverAddr()
      };
      this.resLogs.push(res);
    });
  }

  public getRequestLogs(): Array<IRequest> {
    return this.reqLogs;
  }

  public getResponseLogs(): Array<IResponse> {
    return this.resLogs;
  }
}
