import { Response } from '@playwright/test';
import { createBaseElement } from '../../../src/elements/htmlElements/baseElement';
import { createButtonElement } from '../../../src/elements/htmlElements/buttonElement';
import { createInputElement } from '../../../src/elements/htmlElements/inputElement';
import { createSelectElement } from '../../../src/elements/htmlElements/selectElement';
import { createTextareaElement } from '../../../src/elements/htmlElements/textareaElement';
import { BasePage } from '../../../src/framework/basePage';
import PwService from '../../../src/framework/pwService';

const URL = 'http://127.0.0.1:8000/';

export const selectors = {
  button: '#testPageClick > button',
  clickDivText: '#testPageClick > div',
  textArea: '#testPageTextArea > textarea',
  inputText: '#testPageInputText > input[type=text]',
  h1: '#testPageHeading > h1',
  alertButton: '#alert-button',
  confirmAlertButton: '#confirm-alert-button',
  anotherAlertButton: '#another-alert-button',
  selectElement: '#testPageSelect > select',
  iframe01: '#iframe01',
  delayButton: '#delay-button',
  delayButtonText: '#delayButtonText'
};

class TestPage extends BasePage {
  public button1 = createButtonElement(selectors.button);
  public divClickText = createBaseElement(selectors.clickDivText);
  public selectElement = createSelectElement(selectors.selectElement);
  public inputTextElement = createInputElement(selectors.inputText);
  public hElement = createBaseElement(selectors.h1);

  public textArea = createTextareaElement(selectors.textArea);

  public delayButton = createButtonElement(selectors.delayButton);
  public delayButtonTextDiv = createBaseElement(selectors.delayButtonText);

  goTo(): Promise<Response> {
    return PwService.Instance.BrowserUtils.goTo(URL);
  }

  getUrl(): string {
    return URL;
  }
}

export const testPage = new TestPage();
