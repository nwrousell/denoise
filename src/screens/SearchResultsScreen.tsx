import { searchResults } from '../data/mockData'
import ContentCard from '../components/ContentCard'

const SearchResultsScreen = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Search Results</h1>
      
      <div className="mb-8">
        {searchResults.length === 0 ? (
          <p className="text-secondary italic">No results found. Try a different search term.</p>
        ) : (
          <p className="text-secondary">{searchResults.length} results found</p>
        )}
      </div>
      
      <div className="space-y-6">
        {searchResults.map(content => (
          <ContentCard key={content.id} content={content} />
        ))}
      </div>
    </div>
  )
}

export default SearchResultsScreen