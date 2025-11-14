<template>
  <div class="dashboard-container d-flex">
    <SidebarComponent />
    
    <div class="main-content flex-grow-1 d-flex flex-column">
      <NavbarComponent />
      
      <main class="flex-grow-1 p-4 bg-light">
        <router-view />
      </main>
      
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'DashboardView',
  components: {
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  }
}
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
}

.main-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>