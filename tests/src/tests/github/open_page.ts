import { expect, Page } from '@playwright/test';

const openPage: ({ page, isMobile }: {
  page: Page;
  isMobile?: boolean
}) => Promise<void> = async ({ page, isMobile }) => {
  await page.goto("https://github.com/explore");
  await page.pause();
  if (isMobile) {
    // mobile only tests stuff
  }
  // test stuff
}

export { openPage }