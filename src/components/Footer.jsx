function Footer() {
    const footerStyle = {
      backgroundColor: '#0f172a',
      color: '#e5e7eb',
      padding: '16px 24px',
      textAlign: 'center',
    }
  
    const socialStyle = {
      marginTop: '8px',
      fontSize: '14px',
    }
  
    return (
      <footer style={footerStyle}>
        <div>TechSolutions © 2026</div>
        <div style={socialStyle}>
          Facebook | Instagram | LinkedIn
        </div>
      </footer>
    )
  }
  
  export default Footer
  