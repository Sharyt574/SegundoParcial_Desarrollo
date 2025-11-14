<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
:root {
  --primary-color: #e83e8c;
  --secondary-color: #6f42c1;
  --accent-color: #20c997;
}

.bg-primary-custom {
  background-color: var(--primary-color) !important;
}

.text-primary-custom {
  color: var(--primary-color) !important;
}

.btn-primary-custom {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-primary-custom:hover {
  background-color: #d91a7a;
  border-color: #d91a7a;
}

.sidebar {
  background: linear-gradient(180deg, #2c3e50 0%, #3498db 100%);
  min-height: 100vh;
}
</style>