import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-background shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-primary">
          Emergent
        </Link>
        
        <div className="flex space-x-6">
          <Link to="/" className="text-text hover:text-primary transition-colors">
            Search/Seed
          </Link>
          <Link to="/search-results" className="text-text hover:text-primary transition-colors">
            Results
          </Link>
          <Link to="/graph" className="text-text hover:text-primary transition-colors">
            Graph
          </Link>
          
          <button
            onClick={toggleTheme}
            className="text-text hover:text-primary transition-colors"
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar