<script>
import {
  Wrapper,
  Title,
  WalletAddress,
  Address,
  QrButton,
  MenuItemsLine,
  ChainButton,
  Menu,
  Button,
  LogoutButton,
  Powered,
} from "./style";
import Transactions from "../transactions/index.vue";

const chains = [
  {
    label: "tezosGhost",
    id: 0,
  },
  {
    label: "polygonMumbai",
    id: 1,
  },
  {
    label: "ethereumGoerli",
    id: 2,
  },
];

export default {
  data() {
    return {
      address: "tz1ZyCN2givAPjaPwN1HkRQMpoCW6JPkmJuv",
      chains,
      currentChain: 0,
      showTransactions: false,
    };
  },
  components: {
    Wrapper,
    Title,
    WalletAddress,
    Address,
    QrButton,
    MenuItemsLine,
    ChainButton,
    Menu,
    Button,
    LogoutButton,
    Powered,
    Transactions,
  },
  inject: ["frontendSDK"],
  methods: {
    async sendTransaction() {
      await this.frontendSDK.coin.sendToUser({
        blockchainId: this.chains[this.currentChain].label,
        cryptoCurrencyAmount: "0.000001",
        userId: "1",
      });
    },
    async logout() {
      await this.frontendSDK.wallet.logout();
    },
    async showMyTransactions() {
      this.showTransactions = !this.showTransactions;
      const transactions = await this.frontendSDK.coin.getTransactions();
      console.log(transactions);
    },
    async createRecoveryKit() {
      await this.frontendSDK.wallet.createRecovery();
    },
    async showQrCode() {
      await this.frontendSDK.wallet.showAddress({
        blockchainId: this.chains[this.currentChain].label,
      });
    },
  },
  watch: {
    currentChain: {
      async handler() {
        this.address = await this.frontendSDK.wallet.getAddress({
          blockchainId: this.chains[this.currentChain].label,
        });
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <Wrapper>
    <Title>Welcome to Tweed Example</Title>
    <WalletAddress>
      <Address>{{ address }}</Address>
      <QrButton @click="showQrCode">QR</QrButton>
    </WalletAddress>
    <MenuItemsLine>
      <ChainButton
        v-for="chain in chains"
        :key="chain.id"
        :style="{
          'background-color': currentChain === chain.id ? 'dodgerblue' : '#fff',
          color: currentChain === chain.id ? '#fff' : 'dodgerblue',
        }"
        @click="currentChain = chain.id"
        >{{ chain.label }}
      </ChainButton>
    </MenuItemsLine>
    <Menu>
      <MenuItemsLine>
        <Button @click="sendTransaction">Send Transaction</Button>
        <Button @click="createRecoveryKit">Create a Recovery Kit</Button>
        <Button @click="showMyTransactions">{{
          !showTransactions ? "My transactions" : "close"
        }}</Button>
      </MenuItemsLine>
      <MenuItemsLine>
        <LogoutButton @click="logout">Logout</LogoutButton>
      </MenuItemsLine>
    </Menu>
    <Transactions v-if="showTransactions" />
    <Powered>Powered by Tweed</Powered>
  </Wrapper>
</template>
