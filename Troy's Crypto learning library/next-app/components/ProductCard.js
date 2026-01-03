export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-icon">{product.icon}</div>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-description">{product.description}</p>
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="product-link"
      >
        Try it →
      </a>
    </div>
  )
}
