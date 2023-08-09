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
  Powered
} from "./style";
import Transactions from "../transactions/index.vue";
import SettingsSection from "../settings-section/index.vue";

export default {
  data() {
    return {
      address: "",
      chains: [],
      currentChain: 'ethereumGoerli',
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
    SettingsSection
  },
  inject: ["frontendSDK"],
  methods: {
    async sendTransaction() {
      await this.frontendSDK.coin.sendToUser({
        blockchainId: this.currentChain,
        value: "0.000001",
        userId: "1",
      });
    },
    async logout() {
      await this.frontendSDK.wallet.logout();
    },
    async showMyTransactions() {
      this.showTransactions = !this.showTransactions;
      const transactions = await this.frontendSDK.coin.getTransactions();
    },
    async createRecoveryKit() {
      await this.frontendSDK.wallet.createRecovery();
    },
    async showQrCode() {
      await this.frontendSDK.wallet.showAddress({
        blockchainId: this.currentChain,
      });
    },
    async buyNft() {
      await this.frontendSDK.nft.buyWithFiat({
        nftId: '1',
      });
    },
  },
  async mounted() {
    const blockchains = await this.frontendSDK.blockchain.list()
    this.chains = blockchains

    this.address = await this.frontendSDK.wallet.getAddress({
      blockchainId: this.currentChain,
    });
  },
  watch: {
    currentChain: {
      async handler() {
        this.address = await this.frontendSDK.wallet.getAddress({
          blockchainId: this.currentChain,
        });
      },
    },
  },
};
</script>

<template>
  <SettingsSection/>
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
          'background-color': currentChain === chain ? 'dodgerblue' : '#fff',
          color: currentChain === chain ? '#fff' : 'dodgerblue',
        }"
        @click="currentChain = chain"
        >{{ chain }}
      </ChainButton>
    </MenuItemsLine>
    <Menu>
      <MenuItemsLine>
        <Button @click="sendTransaction">Send Transaction</Button>
        <Button @click="createRecoveryKit">Create a Recovery Kit</Button>
        <Button @click="buyNft">Buy NFT</Button>
      </MenuItemsLine>
    </Menu>
    <Transactions :chains="[currentChain]" />
     <MenuItemsLine>
        <LogoutButton @click="logout">Logout</LogoutButton>
      </MenuItemsLine>
  </Wrapper>
</template>
