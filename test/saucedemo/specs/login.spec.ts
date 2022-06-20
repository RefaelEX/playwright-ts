import { expect, test } from '@playwright/test';
import { myDescribe } from '../../testHelper';
import { inventoryPage } from '../pageObject/inventoryPage';
import { loginPage } from '../pageObject/loginPage';

myDescribe(
  'login spec',
  () => {
    test('should login successfully', async () => {
      await loginPage.login('standard_user', 'secret_sauce');
      await expect(
        inventoryPage.inventoryContainerDiv.getLocator()
      ).toBeVisible();
    });
  },
  loginPage.getUrl()
);
