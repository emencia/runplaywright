import { expect, Page } from '@playwright/test';

const openTab: ({ page }: {
  page: Page;
}) => Promise<void> = async ({ page }) => {
  await page.goto('https://github.com/explore');
  //await page.click('[aria-label="Explore navigation"] >> text=Topics')
  // await expect(page.locator('.js-selected-navigation-item.selected')).toHaveText('Topics')
  await page.pause();
}

export { openTab }