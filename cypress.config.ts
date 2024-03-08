const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: true,
    
    setupNodeEvents(on: any) {
    },
    specPattern: "cypress/e2e/**/*.{ts,tsx}",

    env: {
      webUiUrl: "https://the-internet.herokuapp.com/"
    },
    
  },

});
