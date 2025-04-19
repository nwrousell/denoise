import { useRef } from 'react'
import { GraphCanvas, useSelection } from 'reagraph'
import { graphData, getCategoryColor } from '../data/mockData'

const GraphScreen = () => {
  const { selections, onNodeClick } = useSelection({
    resetOnSelect: false,
  })

  // Convert to reagraph format
  const nodes = graphData.nodes.map(node => ({
    id: node.id,
    label: node.name,
    fill: getCategoryColor(node.category),
    data: { category: node.category }
  }))

  const edges = graphData.links.map((link, idx) => ({
    id: `edge-${idx}`,
    source: link.source,
    target: link.target,
    label: ''
  }))

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col">
      <h1 className="mb-6 text-2xl font-semibold">Content Graph</h1>
      
      <div className="flex gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: getCategoryColor('technology') }}></span>
          <span className="text-sm">Technology</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: getCategoryColor('database') }}></span>
          <span className="text-sm">Database</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: getCategoryColor('ai') }}></span>
          <span className="text-sm">AI</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: getCategoryColor('design') }}></span>
          <span className="text-sm">Design</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden border rounded-lg border-secondary/20 bg-background/50">
        <GraphCanvas
          nodes={nodes}
          edges={edges}
          layoutType="forceDirected"
          selections={selections}
          onNodeClick={onNodeClick}
          labelType="node"
          edgeInterpolation="curved"
          theme="light"
          draggable
          scalable
          labelColor="#333"
          showNavigator={false}
          nodeSize={15}
        />
      </div>
    </div>
  )
}

export default GraphScreen