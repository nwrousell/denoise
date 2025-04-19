import { Content } from '../data/mockData'

interface ContentCardProps {
  content: Content
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  return (
    <div className="border border-secondary/20 rounded-lg p-6 mb-4 hover:shadow-md transition-shadow bg-background">
      <h2 className="text-xl font-semibold mb-2 text-primary">{content.title}</h2>
      <div className="flex items-center text-sm text-secondary mb-3 space-x-4">
        <span>{content.date}</span>
        <span>•</span>
        <span>{content.readingLength}</span>
      </div>
      <p className="text-text">{content.excerpt}</p>
    </div>
  )
}

export default ContentCard