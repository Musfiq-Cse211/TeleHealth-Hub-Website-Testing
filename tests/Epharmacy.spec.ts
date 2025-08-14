import { test, expect } from '@playwright/test';

test('e-pharmacy store', async ({ page }) => {
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
    await page.getByRole('link', { name: 'E-Pharmacy' }).click();
  });
  const page1 = await page1Promise;

  await performWithDelay(async () => {
    await page1.locator('.form-control').first().click();
    await page1.locator('.form-control').first().fill('5');
    await page1.locator('.btn').first().click();
  });
  await performWithDelay(async () => {
    await page1
      .locator('div:nth-child(4) > .card-deck > .card > .card-footer > .form-submit > .btn')
      .click();
  });
  await performWithDelay(async () => {
    await page1
      .locator('div:nth-child(6) > .card-deck > .card > .card-footer > .form-submit > .btn')
      .click();
  });

  await performWithDelay(async () => {
    await page1.getByRole('link', { name: '' }).click();
  });
  await performWithDelay(async () => {
    await page1.getByRole('link', { name: '   Checkout' }).click();
  });
  await performWithDelay(async () => {
    await page1.getByPlaceholder('Enter Name').click();
    await page1.getByPlaceholder('Enter Name').fill('Rafi');
  });
  await performWithDelay(async () => {
    await page1.getByPlaceholder('Enter E-Mail').click();
    await page1.getByPlaceholder('Enter E-Mail').fill('rafi56@gmail.com');
  });
  await performWithDelay(async () => {
    await page1.getByPlaceholder('Enter Phone').click();
    await page1.getByPlaceholder('Enter Phone').fill('01723432367');
  });
  await performWithDelay(async () => {
    await page1.getByPlaceholder('Enter Delivery Address Here...').click();
    await page1.getByPlaceholder('Enter Delivery Address Here...').fill('Tongi, Gazipur');
  });
  await performWithDelay(async () => {
    await page1.getByRole('combobox').selectOption('Debit/Credit Card');
  });
  await performWithDelay(async () => {
    await page1.getByRole('button', { name: 'Place Order' }).click();
  });
  await performWithDelay(async () => {
    await page1.getByRole('link', { name: ' Products' }).click();
  });
});
