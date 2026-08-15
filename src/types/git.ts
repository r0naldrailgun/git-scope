export type GitCommandCategory =
  | 'Basics'
  | 'Branching'
  | 'Remote'
  | 'History'
  | 'Undo'

export interface GitCommand {
  name: string
  category: GitCommandCategory
  syntax: string
  description: string
  example: string
}