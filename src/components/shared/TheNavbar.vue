<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="'/'" class="navbar-item" href="https://vue-meetups-app.herokuapp.com">
        <img src="../../assets/img/vue-logo.png">
      </router-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu is-active">
      <div class="navbar-start">
        <router-link :to="'/'" class="navbar-item">Home</router-link>
        <router-link :to="'/find'" class="navbar-item">Find</router-link>          
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div v-if="user">Welcome {{user.username}}</div>
        </div>
        <div v-if="user" class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Account</a>
          <div class="navbar-dropdown">
            <router-link :to="{name: 'PageProfile'}" class="navbar-item">Profile</router-link>
            <hr class="navbar-divider" />
            <a @click.prevent="logout" class="navbar-item">Logout</a>
          </div>
        </div>
        <div v-else class="navbar-item has-dropdown">
          <div class="buttons">
            <router-link :to="{name: 'PageRegister'}" class="button is-primary">
              <strong>Sign up</strong>
            </router-link>
            <router-link :to="{name: 'PageLogin'}" class="button is-light">Log in</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "auth/authUser"
    })
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
        .then(() => {          
          this.$router.push('/login')
          this.$toasted.success('Logout Successful!', {duration: 3000, position: "top-center"})
        })
        
    }
  }
};
</script>

<style scoped>
.navbar-item img {
    max-height: 3rem;
    margin-bottom: 1rem;
}
</style>