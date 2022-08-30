const desktopConfig = `{
  workers: 3,
  retries: 1,
  //globalSetup: require.resolve('./global-setup'),
  use: {
    baseURL: 'http://localhost:8080/',
    headless: true,
    viewport: { width: 1280, height: 720 },
    //storageState: 'storage.state.json'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
};`

module.exports = { desktopConfig };