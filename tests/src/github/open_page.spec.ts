// @ts-check
import { test } from '@playwright/test';

test('open a github page', async ({ page, isMobile }) => {
  await page.goto("https://github.com/explore");
  await page.pause();
  if (isMobile) {
    // mobile only tests stuff
  }
  // test stuff
});