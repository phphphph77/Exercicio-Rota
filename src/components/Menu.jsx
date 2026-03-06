import { Link } from 'react-router-dom'

function Menu() {
  const linkStyle = {
    marginRight: '16px',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
  }

  const navStyle = {
    backgroundColor: '#1e293b',
    padding: '12px 24px',
    display: 'flex',
    alignItems: 'center',
  }

  const brandStyle = {
    color: '#38bdf8',
    fontWeight: 'bold',
    marginRight: '32px',
  }

  return (
    <nav style={navStyle}>
      <span style={brandStyle}>TechSolutions</span>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/produtos" style={linkStyle}>Produtos</Link>
      <Link to="/empresa" style={linkStyle}>Empresa</Link>
      <Link to="/contato" style={linkStyle}>Contato</Link>
    </nav>
  )
}

export default Menu
