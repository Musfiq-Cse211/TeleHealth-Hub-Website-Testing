import { test, expect } from '@playwright/test';

test('lab test', async ({ page }) => {
  test.setTimeout(60000); 
  const performWithDelay = async (action, delay = 3000) => {
    await action();
    await page.waitForTimeout(delay);
  };
  await performWithDelay(async () => {
    await page.goto('http://localhost/telehealth/index.php');
  });
  await performWithDelay(async () => {
    await page.getByRole('link', { name: 'Services', exact: true }).click();
  });
  const page1Promise = page.waitForEvent('popup');
  await performWithDelay(async () => {
    await page.getByRole('link', { name: 'Diagnostics', exact: true }).click();
  });
  const page1 = await page1Promise;
  await performWithDelay(async () => {
    await page1.locator('div:nth-child(12) > .card-deck > .card > .card-footer > .form-submit > .btn').click();
  });

  await performWithDelay(async () => {
    await page1.getByRole('link', { name: '' }).click();
  });
  await performWithDelay(async () => {
    await page1.getByRole('link', { name: '   Checkout' }).click();
  });

  await performWithDelay(async () => {
    await page1.getByPlaceholder('Enter Name').click();
    await page1.getByPlaceholder('Enter Name').fill('riyad');
  });
  await performWithDelay(async () => {
    await page1.getByPlaceholder('Enter E-Mail').click();
    await page1.getByPlaceholder('Enter E-Mail').fill('riyad@gmail.com');
  });
  await performWithDelay(async () => {
    await page1.getByPlaceholder('Enter Phone').click();
    await page1.getByPlaceholder('Enter Phone').fill('01345678765');
  });
  await performWithDelay(async () => {
    await page1.getByPlaceholder('Enter Delivery Address Here...').click();
    await page1.getByPlaceholder('Enter Delivery Address Here...').fill('dhaka');
  });

  await performWithDelay(async () => {
    await page1.getByRole('combobox').selectOption('Rocket');
  });
  await performWithDelay(async () => {
    await page1.getByRole('button', { name: 'Place Order' }).click();
  });
});
