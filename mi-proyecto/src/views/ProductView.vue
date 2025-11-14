<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>🛍️ Tienda de Ropa</h2>
      <button class="btn btn-success" @click="showAddModal = true">
        + Agregar Prenda
      </button>
    </div>

    <!-- Filtros -->
    <div class="row mb-3">
      <div class="col-md-6">
        <input 
          type="text" 
          class="form-control" 
          placeholder="Buscar..."
          v-model="searchTerm"
        >
      </div>
    </div>

    <!-- Productos -->
    <div class="row">
      <div v-for="product in filteredProducts" :key="product.id" class="col-md-4 mb-4">
        <div class="card">
          <img 
            :src="product.image" 
            :alt="product.title"
            class="card-img-top"
            style="height: 250px; object-fit: cover;"
          >
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p><strong>${{ product.price }}</strong></p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-warning btn-sm" @click="editProduct(product)">
                Editar
              </button>
              <button class="btn btn-danger btn-sm" @click="confirmDeleteProduct(product.id)">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showAddModal" class="modal" style="display: block; background: rgba(0,0,0,0.5)">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ editingProduct ? 'Editar' : 'Agregar' }} Producto</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label>Nombre:</label>
              <input type="text" class="form-control" v-model="productForm.title">
            </div>
            <div class="mb-3">
              <label>Precio:</label>
              <input type="number" class="form-control" v-model="productForm.price">
            </div>
            <div class="mb-3">
              <label>Descripción:</label>
              <textarea class="form-control" v-model="productForm.description"></textarea>
            </div>
            <div class="mb-3">
              <label>URL de Imagen (Unsplash):</label>
              <input type="text" class="form-control" v-model="productForm.image">
              <small class="text-muted">Pega una URL de Unsplash aquí</small>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeModal">Cancelar</button>
            <button class="btn btn-primary" @click="saveProduct">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productService } from '@/services/api'

export default {
  name: 'ProductView',
  data() {
    return {
      products: [],
      showAddModal: false,
      editingProduct: null,
      searchTerm: '',
      productForm: {
        title: '',
        price: 0,
        description: '',
        image: ''
      }
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => 
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    }
  },
  async mounted() {
    await this.loadProducts()
  },
  methods: {
    async loadProducts() {
      this.products = await productService.getProducts()
    },

    editProduct(product) {
      this.editingProduct = product
      this.productForm = { ...product }
      this.showAddModal = true
    },

    async saveProduct() {
      try {
        if (this.editingProduct) {
          await productService.updateProduct(this.editingProduct.id, this.productForm)
          const index = this.products.findIndex(p => p.id === this.editingProduct.id)
          this.products[index] = { ...this.productForm }
        } else {
          const newProduct = await productService.createProduct(this.productForm)
          this.products.unshift(newProduct)
        }
        this.closeModal()
        alert('Producto guardado!')
      } catch (error) {
        alert('Error: ' + error.message)
      }
    },

    async confirmDeleteProduct(productId) {
      if (confirm('¿Eliminar este producto?')) {
        await productService.deleteProduct(productId)
        this.products = this.products.filter(p => p.id !== productId)
        alert('Producto eliminado!')
      }
    },

    closeModal() {
      this.showAddModal = false
      this.editingProduct = null
      this.productForm = {
        title: '',
        price: 0,
        description: '',
        image: ''
      }
    }
  }
}
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>