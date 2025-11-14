<template>
  <div class="sidebar text-white p-3">
    <div class="text-center mb-4">
      <h5 class="fw-bold">FashionStore</h5>
      <small class="text-light">Panel de Control</small>
    </div>
    
    <ul class="nav nav-pills flex-column">
      <li class="nav-item">
        <router-link 
          to="/dashboard/productos" 
          class="nav-link text-white"
          active-class="active bg-primary-custom"
        >
          <i class="fas fa-tshirt me-2"></i>
          Productos
        </router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white">
          <i class="fas fa-users me-2"></i>
          Clientes
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-white">
          <i class="fas fa-chart-bar me-2"></i>
          Reportes
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent'
}
</script>

<style scoped>
.sidebar {
  min-height: 100vh;
  width: 250px;
}

.nav-link {
  border-radius: 0.375rem;
  margin-bottom: 0.25rem;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>