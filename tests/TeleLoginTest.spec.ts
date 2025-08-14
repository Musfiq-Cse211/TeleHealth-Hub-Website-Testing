import { test, expect } from '@playwright/test';
test('login', async ({ page }) => {
  test.setTimeout(60000); 
  const performWithDelay = async (action, delay = 3000) => {
    await action();
    await page.waitForTimeout(delay);
  };
  await performWithDelay(async () => {
    await page.goto('http://localhost/telehealth/index.php');
  });
  await performWithDelay(async () => {
    await page.getByRole('link', { name: 'Registration' }).click();
  });

  const page1Promise = page.waitForEvent('popup');
  await performWithDelay(async () => {
    await page.getByRole('link', { name: 'Patient Login' }).click();
  });
  const page1 = await page1Promise;
  await performWithDelay(async () => {
    await page1.getByLabel('E-Mail Address').click();
    await page1.getByLabel('E-Mail Address').fill('riyad@gmail.com');
  });
  await performWithDelay(async () => {
    await page1.getByLabel('Password').click();
    await page1.getByLabel('Password').fill('12fhj1#4hY-#bwGw!@$%');
  });
  await performWithDelay(async () => {
    await page1.locator('#togglePassword').click();
  });
  await performWithDelay(async () => {
    await page1.getByLabel('Remember Me').check();
  });
  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await performWithDelay(async () => {
    await page1.getByRole('button', { name: 'Login' }).click();
  });
  await performWithDelay(async () => {
    await page1.goto('http://localhost/telehealth/index.php');
  });
});
