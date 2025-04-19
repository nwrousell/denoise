import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Mode = 'search' | 'seed'

const SearchSeedScreen = () => {
    const [mode, setMode] = useState<Mode>('search')
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!input.trim()) return

        if (mode === 'search') {
            // In a real app, we would pass the search query via URL params or state
            navigate('/search-results')
        } else {
            // In a real app, we would handle seeding here
            console.log('Seeding:', input)
            setInput('')
        }
    }

    const toggleMode = () => {
        setMode(mode === 'search' ? 'seed' : 'search')
    }

    return (
        <div className="flex flex-col items-center justify-center h-[70vh]">
            <h1 className="mb-8 text-3xl font-semibold">
                {mode === 'search' ? 'Search for Content' : 'Add Seed Content'}
            </h1>

            <div className="w-full max-w-lg">
                <div className="flex justify-end mb-4">
                    <button
                        onClick={toggleMode}
                        className="px-4 py-2 text-sm border rounded-md bg-background border-secondary"
                    >
                        Switch to {mode === 'search' ? 'Seed' : 'Search'} Mode
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="w-full">
                    <div className={`flex items-center border-2 ${mode === 'search' ? 'border-search-border' : 'border-seed-border'} rounded-lg overflow-hidden transition-colors duration-300`}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={mode === 'search' ? 'Search for content...' : 'Add seed URL or content...'}
                            className="flex-1 p-4 outline-none bg-background text-text"
                        />
                        <button
                            type="submit"
                            className={`${mode === 'search' ? 'bg-search-border' : 'bg-seed-border'} text-white font-semibold px-6 py-4 transition-colors duration-300`}
                        >
                            {mode === 'search' ? 'Search' : 'Seed'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchSeedScreen