export type CommitCheckStatus =
  | 'pass'
  | 'warning'
  | 'fail'

export type CommitStrength =
  | 'Strong'
  | 'Good'
  | 'Needs work'

export interface CommitCheck {
  id: string
  label: string
  status: CommitCheckStatus
  message: string
}

export interface CommitAnalysis {
  score: number
  strength: CommitStrength
  detectedType: string | null
  suggestion: string
  checks: CommitCheck[]
}