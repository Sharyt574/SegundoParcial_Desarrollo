<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary-custom shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">
        <i class="fas fa-tshirt me-2"></i>
        FashionStore
      </a>
      <div class="navbar-nav ms-auto">
        <span class="navbar-text text-white me-3">
          Bienvenido, {{ username }}
        </span>
        <button class="btn btn-outline-light btn-sm" @click="logout">
          <i class="fas fa-sign-out-alt me-1"></i>
          Cerrar Sesión
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      username: 'Usuario'
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('isAuthenticated')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
}
</style>