<template>
  <Wrapper>
    <div>
      <Title>Only For Testing Purpose</Title>
      <Text>enter different email & user id to create new wallets</Text>
    </div>
    <Inputs>
      <input v-model="email" placeholder="email" />
      <input v-model="id" placeholder="user id" />
      <button @click="submit">login</button>
    </Inputs>
  </Wrapper>
</template>

<script>
import { Wrapper, Text, Title, Inputs } from './style';

export default {
  data() {
    return {
      email: '',
      id: '',
    };
  },
  components: {
    Wrapper,
    Text,
    Title,
    Inputs,
  },
  inject: ['frontendSDK'],
  methods: {
    async submit() {
    try {
      await fetch("http://localhost:3010/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: this.id,
          email: this.email,
        }),
      });
      location.reload();
    } catch (err) {
      console.log(err);
    }
    },
    async fetchAuthUser() {
      const resposne = await fetch("http://localhost:3010/user");
      const user = await resposne.json();
      return user
    },
  },
  async mounted() {
    const defaultUserData = await this.fetchAuthUser();
    this.email = defaultUserData.email;
    this.id = defaultUserData.id;
  },
};
</script>
