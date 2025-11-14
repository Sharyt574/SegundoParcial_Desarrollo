<template>
  <div class="col-md-6 col-lg-4 mb-4">
    <div class="card h-100 shadow-sm">
      <img 
        :src="product.image" 
        :alt="product.title"
        class="card-img-top product-image"
      >
      <div class="card-body d-flex flex-column">
        <h6 class="card-title">{{ product.title }}</h6>
        <div class="mb-2">
          <span class="badge bg-primary me-1">{{ product.size }}</span>
          <span class="badge bg-secondary">{{ product.color }}</span>
        </div>
        <p class="card-text text-muted small flex-grow-1">
          {{ truncateDescription(product.description) }}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="h5 text-primary-custom mb-0">${{ product.price }}</span>
          <div>
            <button 
              class="btn btn-outline-primary btn-sm me-1"
              @click="$emit('view-details', product)"
              title="Ver detalles"
            >
              <i class="fas fa-eye"></i>
            </button>
            <button 
              class="btn btn-outline-success btn-sm me-1"
              @click="$emit('edit-product', product)"
              title="Editar"
            >
              <i class="fas fa-edit"></i>
            </button>
            <button 
              class="btn btn-outline-danger btn-sm"
              @click="$emit('delete-product', product.id)"
              title="Eliminar"
            >
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardComponent',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    truncateDescription(description) {
      return description.length > 100 
        ? description.substring(0, 100) + '...' 
        : description
    }
  }
}
</script>

<style scoped>
.product-image {
  height: 200px;
  object-fit: contain;
  padding: 10px;
}

.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}
</style>