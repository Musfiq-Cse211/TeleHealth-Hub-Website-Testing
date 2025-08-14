import { test, expect } from '@playwright/test';

test('doctor filtering', async ({ page }) => {
  test.setTimeout(60000);
  const performWithDelay = async (action, delay = 3000) => {
    await action();
    await page.waitForTimeout(delay);
  };
  await performWithDelay(async () => {
    await page.goto('http://localhost/telehealth/doctors/doctors.html');
  });
  await performWithDelay(async () => {
    await page.getByPlaceholder('Enter Doctor\'s Name').click();
    await page.getByPlaceholder('Enter Doctor\'s Name').fill('Jamal');
  });
  await performWithDelay(async () => {
    await page.getByRole('button', { name: 'Find' }).click();
  });
  await performWithDelay(async () => {
    await page.getByLabel('Search Specialists:').selectOption('Child Specialist');
  });
  await performWithDelay(async () => {
    await page.getByLabel('Select City').selectOption('Rangpur');
  });
  const page1Promise = page.waitForEvent('popup');
  await performWithDelay(async () => {
    await page.getByRole('button', { name: 'Full Profile' }).click();
  });
  const page1 = await page1Promise;
});
