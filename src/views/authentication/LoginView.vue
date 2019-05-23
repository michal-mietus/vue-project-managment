<template>
  <div class="login">
    <h2>Login</h2>
    <form>
      <input type="text" v-model="username" placeholder="username" required>
      <input type="password" v-model="password" placeholder="password" required>
      <input type="submit" value="Login" @click="login">
    </form>
  </div>
</template>

<script>

export default {
  name: 'login',

  data() {
    return {
      username: "",
      password: "",
    };
  },

  mounted() {
    
  },

  methods: {
    login: function () {
      let username = this.username;
      let password = this.password;
      this.$store.dispatch('login', { username, password })
        .then(() => this.$router.push('/'))
        .catch(error => console.error(error))
    },
  },
};
</script>

<style lang="scss" scoped>

.sign-button {
  width: 10%;
  margin: 10px;
  background-color: #00FA9A;
  font-weight: bold;
}

.sign-button:hover {
  background-color: #00FF7F;
}
</style>
