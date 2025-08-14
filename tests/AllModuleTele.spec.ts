import { test, chromium } from '@playwright/test';

test.describe.serial('Telehealth Modules Test Suite', () => {
test.setTimeout(60000); 
  
  test('Login Module', async () => {
    const browser = await chromium.launch({ headless: false }); 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost/telehealth/index.php');
    await page.getByRole('link', { name: 'Registration' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Patient Login' }).click();
    const page1 = await page1Promise;
    await page1.getByLabel('E-Mail Address').click();
    await page1.getByLabel('E-Mail Address').fill('riyad@gmail.com');
    await page1.getByLabel('Password').click();
    await page1.getByLabel('Password').fill('12fhj1#4hY-#bwGw!@$%');
    await page1.locator('#togglePassword').click();
    await page1.getByLabel('Remember Me').check();
    page1.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
      });
      await page1.getByRole('button', { name: 'Login' }).click();
      const page2Promise = page1.waitForEvent('popup');
    console.log('Login Module is passed successfully!');
    await browser.close();
  });

  test('Lab Test Module', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost/telehealth/index.php');
    await page.getByRole('link', { name: 'Services', exact: true }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Diagnostics', exact: true }).click();
    const page1 = await page1Promise;
    await page1.locator('div:nth-child(12) > .card-deck > .card > .card-footer > .form-submit > .btn').click();
    console.log('Lab Test Module is passed successfully!');
    await browser.close();
  });

  test('Health Packages Added Module', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost/telehealth/index.php');
    await page.getByRole('link', { name: 'Services', exact: true }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Consultation', exact: true }).click();
    const page1 = await page1Promise;
    await page1.getByRole('spinbutton').first().fill('2');
    await page1.getByRole('button', { name: '   Add to cart' }).first().click();
    console.log('Health Packages Added Module is passed successfully!');
    await browser.close();
  });

  test('E-Pharmacy Module', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost/telehealth/index.php');
    await page.getByRole('link', { name: 'Services', exact: true }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'E-Pharmacy' }).click();
    const page1 = await page1Promise;
    await page1.locator('.form-control').first().click();
    await page1.locator('.form-control').first().fill('5');
    await page1.locator('.btn').first().click();
    console.log('E-Pharmacy Module is passed successfully!');
    await browser.close();
  });

  test('Doctor Filter Module', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost/telehealth/doctors/doctors.html');
    await page.getByPlaceholder('Enter Doctor\'s Name').click();
    await page.getByPlaceholder('Enter Doctor\'s Name').fill('Jamal');
    await page.getByRole('button', { name: 'Find' }).click();
    console.log('Doctor Filter Module is passed successfully!');
    await browser.close();
  });

  test('Doctor Appointment Module', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost/telehealth/index.php');
    await page.getByRole('link', { name: 'Doctors', exact: true }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Get More Details' }).click();
    const page1 = await page1Promise;
    const page2Promise = page1.waitForEvent('popup');
    await page1.locator('button').filter({ hasText: /^Full Profile$/ }).click();
    const page2 = await page2Promise;
    await page2.locator('select[name="doctors-name"]').selectOption('Prof. Dr. Jamal Khan');
    console.log('Doctor Appointment Module is passed successfully!');
    await browser.close();
  });

});
