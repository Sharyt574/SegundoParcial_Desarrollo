<template>
  <div class="login-container min-vh-100 d-flex align-items-center justify-content-center bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="card shadow-lg border-0">
            <div class="card-header bg-primary-custom text-white text-center py-4">
              <h3 class="mb-0">
                <i class="fas fa-tshirt me-2"></i>
                FashionStore
              </h3>
              <p class="mb-0 mt-2">Iniciar Sesión</p>
            </div>
            <div class="card-body p-4">
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="username" class="form-label">Usuario</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="username"
                    v-model="credentials.username"
                    required
                  >
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Contraseña</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="password"
                    v-model="credentials.password"
                    required
                  >
                </div>
                <button 
                  type="submit" 
                  class="btn btn-primary-custom w-100 py-2"
                  :disabled="loading"
                >
                  <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                  {{ loading ? 'Ingresando...' : 'Ingresar' }}
                </button>
              </form>

              <div v-if="error" class="alert alert-danger mt-3 mb-0" role="alert">
                <i class="fas fa-exclamation-triangle me-2"></i>
                {{ error }}
              </div>
            </div>
          </div>
          
          <!-- Información de usuarios de prueba -->
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      loading: false,
      error: '',
      users: [
        { username: 'admin', password: 'password123' },
        { username: 'user', password: 'user123' }
      ]
    }
  },
  methods: {
    async login() {
      this.loading = true
      this.error = ''

      // Simular validación asíncrona
      setTimeout(() => {
        const user = this.users.find(u => 
          u.username === this.credentials.username && 
          u.password === this.credentials.password
        )

        if (user) {
          localStorage.setItem('isAuthenticated', 'true')
          this.$router.push('/dashboard/productos')
        } else {
          this.error = 'Usuario o contraseña incorrectos'
        }
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
.login-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>