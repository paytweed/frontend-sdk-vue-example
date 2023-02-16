<script>
import { Environment, TweedFrontendSDK } from "@paytweed/frontend-sdk";
import Wallet from "./components/wallet/index.vue";

export default {
  components: { Wallet },
  provide() {
    return {
      frontendSDK: TweedFrontendSDK.setup({
        environment: Environment.demo,
        sendMessageToBackend: async (message) => {
          const response = await fetch("http://localhost:3010/message", {
            body: JSON.stringify({ message }),
            headers: { "Content-Type": "application/json" },
            method: "POST",
          });
          const { answer } = await response.json();
          return answer;
        },
      }),
    };
  },
};
</script>

<template>
  <Wallet />
</template>
