export type WorkflowBranch = 'main' | 'dev' | 'feature'

export interface WorkflowStep {
  id: string
  branch: WorkflowBranch
  title: string
  shortLabel: string
  x: number
  y: number
  command: string
  description: string
}

export interface WorkflowEdge {
  id: string
  path: string
}