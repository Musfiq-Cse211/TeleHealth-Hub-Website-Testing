import { test, expect } from '@playwright/test';

test('forget password', async ({ page }) => {
  await page.goto('http://localhost/telehealth/index.php');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Patient Login' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Forgot Your Password?' }).click();
  await page1.getByLabel('E-Mail Address').click();
  await page1.getByLabel('E-Mail Address').fill('mdmusfiqriyad@gmail.com');
  await page1.getByRole('button', { name: 'Recover' }).click();
  await page.goto('http://localhost/telehealth/patient/reset_psw.php');
  await page.getByLabel('New Password').click();
  await page.getByLabel('New Password').fill('dg4#4hY-#bwGw!35+rtyW');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Reset' }).click();
  await page.getByLabel('E-Mail Address').click();
  await page.getByLabel('E-Mail Address').fill('mdmusfiqriyad@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('32dg4#4hY-#bwGw!35+rtyW');
  await page.getByLabel('Remember Me').check();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Login' }).click();

});