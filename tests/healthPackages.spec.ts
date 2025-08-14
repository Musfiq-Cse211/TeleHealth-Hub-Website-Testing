import { test, expect } from '@playwright/test';

test('health packages', async ({ page }) => {
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
    await page.getByRole('link', { name: 'Consultation', exact: true }).click();
  });
  const page1 = await page1Promise;
  await performWithDelay(async () => {
    await page1.getByRole('button', { name: '   Add to cart' }).first().click();
    await page1.getByRole('button', { name: '   Add to cart' }).nth(1).click();
  });
  await performWithDelay(async () => {
    await page1.getByRole('link', { name: '' }).click();
  });
  await performWithDelay(async () => {
    await page1.getByRole('link', { name: '   Checkout' }).click();
  });


  await performWithDelay(async () => {
    await page1.getByPlaceholder('Enter Name').click();
    await page1.getByPlaceholder('Enter Name').fill('hello');
  });
  await performWithDelay(async () => {
    await page1.getByPlaceholder('Enter E-Mail').click();
    await page1.getByPlaceholder('Enter E-Mail').fill('hello32@gmail.com');
  });
  await performWithDelay(async () => {
    await page1.getByPlaceholder('Enter Phone').click();
    await page1.getByPlaceholder('Enter Phone').fill('01612345678');
  });
  await performWithDelay(async () => {
    await page1.getByPlaceholder('Enter Delivery Address Here...').fill('Dhaka');
  });
  await performWithDelay(async () => {
    await page1.getByRole('combobox').selectOption('Bkash');
  });
  await performWithDelay(async () => {
    await page1.getByRole('button', { name: 'Place Order' }).click();
  });
});
