import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchSeedScreen from './screens/SearchSeedScreen'
import SearchResultsScreen from './screens/SearchResultsScreen'
// import GraphScreen from './screens/GraphScreen'
import { ThemeProvider } from './context/ThemeContext'

function App() {
    console.log("hi")
    return (
        <ThemeProvider>
            <div className="min-h-screen">
                <Navbar />
                <main className="container p-4 mx-auto">
                    <Routes>
                        <Route path="/" element={<SearchSeedScreen />} />
                        <Route path="/search-results" element={<SearchResultsScreen />} />
                        {/* <Route path="/graph" element={<GraphScreen />} /> */}
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
    )
}

export default App
