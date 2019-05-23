<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit="register()">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <input type="password" v-model="passwordConfirm" placeholder="Password Confirm" required>
      <input type="submit" value="Register">
    </form>
  </div>
</template>

<script>

export default {
  name: 'register',

  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },

  mounted() {
    
  },

  methods: {
    register: function () {
      let data = {
        username: this.username,
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('register', data)
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
