import { test, expect } from '@playwright/test';

test('register', async ({ page }) => {
  test.setTimeout(60000); 
  const performWithDelay = async (action, delay = 3000) => {
    await action();
    await page.waitForTimeout(delay);
  };

  await page.goto('http://localhost/telehealth/index.php');
  await performWithDelay(async () => {
    await page.getByRole('link', { name: 'Registration' }).click();
  });

  const page1Promise = page.waitForEvent('popup');
  await performWithDelay(async () => {
    await page.getByRole('link', { name: 'Patient Login' }).click();
  });

  const page1 = await page1Promise;
  await performWithDelay(async () => {
    await page1.getByRole('link', { name: 'Register' }).click();
  });

  await performWithDelay(async () => {
    await page1.getByPlaceholder('First Name').click();
    await page1.getByPlaceholder('First Name').fill('Musfiq');
  });
  await performWithDelay(async () => {
    await page1.getByPlaceholder('Last Name').click();
    await page1.getByPlaceholder('Last Name').fill('Riyad');
  });
  await performWithDelay(async () => {
    await page1.getByPlaceholder('Contact Number').click();
    await page1.getByPlaceholder('Contact Number').fill('01335689745');
  });
  await performWithDelay(async () => {
    await page1.getByLabel('E-Mail Address').click();
    await page1.getByLabel('E-Mail Address').fill('riyad@gmail.com');
  });
  await performWithDelay(async () => {
    await page1.getByLabel('Password').click();
    await page1.getByLabel('Password').fill('j1#4hY-#bwGw!@$%');
  });

  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await performWithDelay(async () => {
    await page1.getByRole('button', { name: 'Register' }).click();
  });

  await performWithDelay(async () => {
    await page1.goto('http://localhost/telehealth/patient/verification.php');
  });

  await performWithDelay(async () => {
    await page1.locator('#otp').click();
    await page1.locator('#otp').fill('659303');
  });

  page1.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await performWithDelay(async () => {
    await page1.getByRole('button', { name: 'Verify' }).click();
    await page1.goto('http://localhost/telehealth/patient/index.php');
  });
});
