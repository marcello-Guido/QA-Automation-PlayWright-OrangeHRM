// @ts-check
import { test, expect } from '@playwright/test';


test.describe('Cenários de Login', () => {
  test('Login com sucesso', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByPlaceholder("password").fill('admin123');
    await page.locator("[type='submit']").click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.locator('h6.oxd-text.oxd-text--h6').waitFor();

  });

  test('Login com falha - Senha incorreta', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByPlaceholder("password").fill('admin');
    await page.locator("[type='submit']").click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('p.oxd-alert-content-text.oxd-text').waitFor()

  });
})
