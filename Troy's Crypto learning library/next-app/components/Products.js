import { products } from '@/app/data/products'
import ProductCard from './ProductCard'

export default function Products() {
  return (
    <section className="products-section">
      <div className="container">
        <h2 className="section-title">Products I like</h2>
        <div className="section-underline"></div>
        <p className="section-description">
          These are the AI products I use regularly and recommend to others.
        </p>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
