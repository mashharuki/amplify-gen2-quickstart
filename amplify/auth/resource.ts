import { defineAuth } from "@aws-amplify/backend";

/**
 * Auth resource configuration for Amplify backend.
 * Cognitoを使う
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
