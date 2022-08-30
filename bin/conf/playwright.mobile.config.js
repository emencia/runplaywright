const mobileConfig = `{
  workers: 3,
  retries: 1,
  //globalSetup: require.resolve('./global-setup'),
  use: {
    baseURL: 'http://localhost:8080/',
    headless: true,
    //storageState: 'storage.state.json'
  },
  projects: [
    {
      name: 'safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
};`

module.exports = { mobileConfig };