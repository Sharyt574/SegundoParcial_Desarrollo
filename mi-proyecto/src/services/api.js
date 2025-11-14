// Sistema de gestión LOCAL corregido
class LocalProductService {
  constructor() {
    this.products = this.loadFromLocalStorage() || this.getInitialClothingData()
  }

  getInitialClothingData() {
    return [
      {
        id: 1,
        title: "Camiseta Básica Negra",
        price: 19.99,
        description: "Camiseta de algodón 100% básica en color negro.",
        category: "men's clothing",
        image: "/imagenes/CamisetaBasicaNegra.jpeg",
        size: "M",
        color: "Negro",
        stock: 25
      },
      {
        id: 2,
        title: "Jeans Slim Fit Azul",
        price: 49.99,
        description: "Jeans de corte slim fit en color azul oscuro.",
        category: "men's clothing",
        image: "/imagenes/JeansSlimFitAzul.jpeg",
        size: "32",
        color: "Azul",
        stock: 15
      },
      {
        id: 3,
        title: "Vestido Floral Verano",
        price: 39.99,
        description: "Vestido floral perfecto para el verano.",
        category: "women's clothing",
        image: "/imagenes/VestidoFloralVerano.jpeg",
        size: "S",
        color: "Rosa",
        stock: 20
      }
    ]
  }

  loadFromLocalStorage() {
    try {
      const saved = localStorage.getItem('clothingProducts')
      return saved ? JSON.parse(saved) : null
    } catch (error) {
      return null
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('clothingProducts', JSON.stringify(this.products))
  }

  async getProducts() {
    return [...this.products]
  }

  async createProduct(productData) {
    const newProduct = {
      id: Date.now(), // ID único
      title: productData.title,
      price: parseFloat(productData.price),
      description: productData.description,
      category: productData.category,
      image: productData.image || this.getDefaultImage(),
      size: productData.size,
      color: productData.color,
      stock: parseInt(productData.stock) || 25
    }

    this.products.unshift(newProduct)
    this.saveToLocalStorage()
    return newProduct
  }

  async updateProduct(id, productData) {
    const index = this.products.findIndex(p => p.id === parseInt(id))
    if (index === -1) throw new Error('Producto no encontrado')

    const updatedProduct = {
      ...this.products[index],
      ...productData,
      id: parseInt(id),
      price: parseFloat(productData.price),
      stock: parseInt(productData.stock) || 25
    }

    this.products[index] = updatedProduct
    this.saveToLocalStorage()
    return updatedProduct
  }

  async deleteProduct(id) {
    const index = this.products.findIndex(p => p.id === parseInt(id))
    if (index === -1) throw new Error('Producto no encontrado')

    this.products.splice(index, 1)
    this.saveToLocalStorage()
    return { message: 'Producto eliminado', id: parseInt(id) }
  }

  getDefaultImage() {
    return "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop"
  }
}

const localProductService = new LocalProductService()

export const productService = {
  getProducts: () => localProductService.getProducts(),
  createProduct: (product) => localProductService.createProduct(product),
  updateProduct: (id, product) => localProductService.updateProduct(id, product),
  deleteProduct: (id) => localProductService.deleteProduct(id)
}