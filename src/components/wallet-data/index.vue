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

const chains = [
  {
    label: "tezos",
    id: 0,
  },
  {
    label: "polygon",
    id: 1,
  },
  {
    label: "ethereum",
    id: 2,
  },
];

export default {
  data() {
    return {
      address: "tz1ZyCN2givAPjaPwN1HkRQMpoCW6JPkmJuv",
      chains,
      currentChain: 0,
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
  },
  inject: ["frontendSDK"],

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
      <QrButton>QR</QrButton>
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
        <Button>Send Transaction</Button>
        <Button>Create a Recovery Kit</Button>
        <Button>My transactions</Button>
      </MenuItemsLine>
      <MenuItemsLine>
        <LogoutButton>Logout</LogoutButton>
      </MenuItemsLine>
    </Menu>
    <Powered>Powered by Tweed</Powered>
  </Wrapper>
</template>
