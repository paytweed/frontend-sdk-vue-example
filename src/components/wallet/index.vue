<script>
import WalletData from "../wallet-data/index.vue";
import { Loading } from "./style";

export default {
  data() {
    return {
      isWalletExists: false,
    };
  },
  components: {
    Loading,
    WalletData,
  },
  inject: ["frontendSDK"],
  methods: {
    async getIsWalletExists() {
      this.isWalletExists = await this.frontendSDK.wallet.exists();
      if (!this.isWalletExists) await this.frontendSDK.wallet.create();
    },
  },
  mounted() {
    this.getIsWalletExists();
  },
};
</script>

<template>
  <div v-if="isWalletExists">
    <WalletData />
  </div>
  <Loading v-else>Loading...</Loading>
</template>
