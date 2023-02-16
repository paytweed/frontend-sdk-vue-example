<script>
import { Table, SubTitle, Th, Td } from "./style";

const chains = ["tezos", "polygon", "ethereum"];

export default {
  data() {
    return {
      chains,
      transactions: [],
    };
  },
  components: {
    Table,
    SubTitle,
    Th,
    Td,
  },
  inject: ["frontendSDK"],
  methods: {
    async getTransactions() {
      this.transactions = await this.frontendSDK.coin.getTransactions({
        blockchainIds: chains,
      });
    },
  },
  mounted() {
    this.getTransactions();
  },
};
</script>

<template>
  <Table v-for="chain in chains" :key="chain">
    <thead>
      <SubTitle>{{ chain }}</SubTitle>
      <tr>
        <Th>Created At</Th>
        <Th>Crypto Currency Amount</Th>
        <Th>Token Name</Th>
        <Th>Token Symbol</Th>
        <Th>Direction</Th>
        <Th>From Address</Th>
        <Th>To Address</Th>
        <Th>Status</Th>
      </tr>
    </thead>
    <tbody v-for="entry in transactions[chain]" :key="entry">
      <tr>
        <Td>{entry.createdAt}</Td>
        <Td>{entry.cryptoCurrencyAmount}</Td>
        <Td>{entry.cryptoCurrencyToken.name}</Td>
        <Td>{entry.cryptoCurrencyToken.symbol}</Td>
        <Td>{entry.direction}</Td>
        <Td>{entry.fromAddress}</Td>
        <Td>{entry.toAddress}</Td>
        <Td>{entry.status}</Td>
      </tr>
    </tbody>
  </Table>
</template>
