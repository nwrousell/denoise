/// <reference types="vite/client" />

declare module 'react-force-graph' {
  import { ComponentType } from 'react'

  interface NodeObject {
    id: string
    name?: string
    color?: string
    category?: string
    highlighted?: boolean
    x?: number
    y?: number
    [key: string]: any
  }

  interface LinkObject {
    source: string | NodeObject
    target: string | NodeObject
    [key: string]: any
  }

  interface GraphData {
    nodes: NodeObject[]
    links: LinkObject[]
  }

  interface ForceGraphProps {
    graphData: GraphData
    width?: number
    height?: number
    backgroundColor?: string
    nodeRelSize?: number
    nodeId?: string
    nodeLabel?: string | ((node: NodeObject) => string)
    nodeColor?: string | ((node: NodeObject) => string)
    nodeVal?: number | ((node: NodeObject) => number)
    linkSource?: string
    linkTarget?: string
    linkLabel?: string | ((link: LinkObject) => string)
    linkColor?: string | ((link: LinkObject) => string)
    linkWidth?: number | ((link: LinkObject) => number)
    linkDirectionalParticles?: number | ((link: LinkObject) => number)
    linkDirectionalParticleWidth?: number | ((link: LinkObject) => number)
    onNodeHover?: (node: NodeObject | null, previousNode: NodeObject | null) => void
    onNodeClick?: (node: NodeObject) => void
    onLinkHover?: (link: LinkObject | null, previousLink: LinkObject | null) => void
    onLinkClick?: (link: LinkObject) => void
    nodeCanvasObject?: (node: NodeObject, ctx: CanvasRenderingContext2D, globalScale: number) => void
    nodeCanvasObjectMode?: string | ((node: NodeObject) => string)
    linkCanvasObject?: (link: LinkObject, ctx: CanvasRenderingContext2D, globalScale: number) => void
    linkCanvasObjectMode?: string | ((link: LinkObject) => string)
    [key: string]: any
  }

  const ForceGraph2D: ComponentType<ForceGraphProps>
  export default ForceGraph2D
}