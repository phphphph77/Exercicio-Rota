import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav>
      <span className="nav-brand">TechSolutions</span>

      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/produtos" className="nav-link">Produtos</Link>
        <Link to="/empresa" className="nav-link">Empresa</Link>
        <Link to="/contato" className="nav-link">Contato</Link>
      </div>
    </nav>
  )
}

export default Menu