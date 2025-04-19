export interface Content {
    id: string
    title: string
    date: string
    readingLength: string
    excerpt: string
    fullText?: string
}

export interface GraphNode {
    id: string
    name: string
    category?: string
    color?: string
}

export interface GraphLink {
    source: string
    target: string
}

export interface GraphData {
    nodes: GraphNode[]
    links: GraphLink[]
}

export const searchResults: Content[] = [
    {
        id: '1',
        title: 'The Future of Web Development',
        date: '2025-01-15',
        readingLength: '5 min read',
        excerpt: 'Web development continues to evolve at a rapid pace. Modern frameworks and tools are making it easier than ever to build complex applications with less code and better performance.',
        fullText: 'Web development continues to evolve at a rapid pace. Modern frameworks and tools are making it easier than ever to build complex applications with less code and better performance. From serverless architectures to edge computing, the landscape is shifting toward more distributed systems that can scale automatically and provide better user experiences no matter where users are located. Additionally, AI-powered development tools are changing how developers work, offering suggestions and automating repetitive tasks.'
    },
    {
        id: '2',
        title: 'Understanding Graph Databases',
        date: '2025-02-23',
        readingLength: '8 min read',
        excerpt: 'Graph databases represent a powerful approach to data storage and retrieval, especially for highly connected data. Unlike traditional relational databases, graph databases focus on relationships.',
        fullText: 'Graph databases represent a powerful approach to data storage and retrieval, especially for highly connected data. Unlike traditional relational databases, graph databases focus on relationships. This makes them particularly well-suited for applications like social networks, recommendation engines, fraud detection, and knowledge graphs. By storing data in nodes and edges rather than tables, graph databases can perform complex queries with multiple joins much more efficiently than their relational counterparts.'
    },
    {
        id: '3',
        title: 'AI-Assisted Content Creation',
        date: '2025-03-10',
        readingLength: '6 min read',
        excerpt: 'Artificial intelligence is transforming how we create and curate content. From writing assistance to image generation, AI tools are becoming an essential part of the creative process.',
        fullText: "Artificial intelligence is transforming how we create and curate content. From writing assistance to image generation, AI tools are becoming an essential part of the creative process. These tools can help with everything from grammar and style suggestions to generating whole articles based on simple prompts. While AI won't replace human creativity, it's becoming an invaluable collaborator that can handle routine tasks and provide inspiration when creators face blocks."
    },
    {
        id: '4',
        title: 'The Rise of Decentralized Networks',
        date: '2025-04-02',
        readingLength: '7 min read',
        excerpt: 'Decentralized networks are challenging traditional centralized systems by distributing control and enabling peer-to-peer interactions without intermediaries.',
        fullText: 'Decentralized networks are challenging traditional centralized systems by distributing control and enabling peer-to-peer interactions without intermediaries. From cryptocurrencies to decentralized social media platforms, these systems aim to give users more control over their data and interactions. By removing central points of failure and censorship, decentralized networks can potentially create more resilient and user-focused services that respect privacy and ownership.'
    },
    {
        id: '5',
        title: 'Minimalist Design Principles',
        date: '2025-04-15',
        readingLength: '4 min read',
        excerpt: 'Minimalism in design focuses on simplicity, clarity, and purpose. By eliminating unnecessary elements, minimalist designs can create powerful user experiences that communicate effectively.',
        fullText: "Minimalism in design focuses on simplicity, clarity, and purpose. By eliminating unnecessary elements, minimalist designs can create powerful user experiences that communicate effectively. The principle of 'less is more' encourages designers to focus on what truly matters, removing distractions and leading users through clean, intuitive interfaces. Minimalist design isn't just about aesthetics—it's about creating functional, accessible experiences that respect users' attention and cognitive load."
    }
]

export const graphData: GraphData = {
    nodes: [
        { id: '1', name: 'The Future of Web Development', category: 'technology' },
        { id: '2', name: 'Understanding Graph Databases', category: 'database' },
        { id: '3', name: 'AI-Assisted Content Creation', category: 'ai' },
        { id: '4', name: 'The Rise of Decentralized Networks', category: 'technology' },
        { id: '5', name: 'Minimalist Design Principles', category: 'design' },
        { id: '6', name: 'JavaScript Performance Optimization', category: 'technology' },
        { id: '7', name: 'Introduction to Machine Learning', category: 'ai' },
        { id: '8', name: 'Color Theory for Designers', category: 'design' }
    ],
    links: [
        { source: '1', target: '3' },
        { source: '1', target: '6' },
        { source: '2', target: '4' },
        { source: '3', target: '7' },
        { source: '4', target: '1' },
        { source: '5', target: '8' },
        { source: '6', target: '1' },
        { source: '7', target: '3' },
        { source: '8', target: '5' }
    ]
}

// Function to get color based on category
export const getCategoryColor = (category?: string): string => {
    switch (category) {
        case 'technology':
            return '#3b82f6' // blue
        case 'database':
            return '#10b981' // green
        case 'ai':
            return '#8b5cf6' // purple
        case 'design':
            return '#f59e0b' // amber
        default:
            return '#6b7280' // gray
    }
}