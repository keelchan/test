import Medusa from "@medusajs/js-sdk"

export const sdk = new Medusa({
  baseUrl: "https://app.safiasemlali.com",
  debug: import.meta.env.DEV,
  auth: {
    type: "session",
  },
})
