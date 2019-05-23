<template>
  <div>
    <div class="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <span v-if="isLoggedIn">
        | <a @click="logout">Logout</a>
      </span>
      <span v-else> 
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    }
  },
};
</script>

<style lang="scss" scoped>
template {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navigation {
  background-color: #71ffb1;
  padding: 20px;
}

a {
  font-weight: bold;
  color: #000D4A;
  text-decoration: underline;
  &.router-link-exact-active {
    color: #344CB7;
  }
}
</style>
