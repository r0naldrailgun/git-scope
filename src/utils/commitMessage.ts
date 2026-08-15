import type {
    CommitAnalysis,
    CommitCheck,
    CommitCheckStatus,
  } from '../types/commit'
  
  const supportedTypes = new Set([
    'feat',
    'fix',
    'docs',
    'style',
    'refactor',
    'test',
    'chore',
    'ci',
    'build',
    'perf',
  ])
  
  const vagueSubjects = new Set([
    'update',
    'updates',
    'change',
    'changes',
    'fix',
    'fix stuff',
    'stuff',
    'work',
    'final',
    'final changes',
    'test',
    'testing',
    'misc',
  ])
  
  const conventionalCommitPattern =
    /^([a-z]+)(\([^)]+\))?(!)?:\s+(.+)$/
  
  function getCheckScore(
    status: CommitCheckStatus,
  ): number {
    if (status === 'pass') {
      return 20
    }
  
    if (status === 'warning') {
      return 10
    }
  
    return 0
  }
  
  function buildSuggestion(message: string): string {
    const trimmed = message.trim().replace(/\.$/, '')
  
    if (!trimmed) {
      return 'feat: describe the specific change'
    }
  
    if (conventionalCommitPattern.test(trimmed)) {
      return trimmed
    }
  
    const lowerCaseMessage = trimmed.toLowerCase()
  
    if (lowerCaseMessage.startsWith('fix ')) {
      return `fix: ${trimmed.slice(4).trim()}`
    }
  
    if (
      lowerCaseMessage.startsWith('add ') ||
      lowerCaseMessage.startsWith('create ') ||
      lowerCaseMessage.startsWith('implement ')
    ) {
      return `feat: ${trimmed.charAt(0).toLowerCase()}${trimmed.slice(1)}`
    }
  
    if (
      lowerCaseMessage.startsWith('document ') ||
      lowerCaseMessage.startsWith('update readme')
    ) {
      return `docs: ${trimmed.charAt(0).toLowerCase()}${trimmed.slice(1)}`
    }
  
    return `feat: ${trimmed.charAt(0).toLowerCase()}${trimmed.slice(1)}`
  }
  
  export function analyzeCommitMessage(
    message: string,
  ): CommitAnalysis {
    const trimmed = message.trim()
  
    if (!trimmed) {
      return {
        score: 0,
        strength: 'Needs work',
        detectedType: null,
        suggestion:
          'feat: describe the specific change',
        checks: [
          {
            id: 'structure',
            label: 'Conventional structure',
            status: 'fail',
            message: 'Enter a commit message first.',
          },
          {
            id: 'type',
            label: 'Supported commit type',
            status: 'fail',
            message:
              'A commit type cannot be detected yet.',
          },
          {
            id: 'specificity',
            label: 'Specific description',
            status: 'fail',
            message:
              'Describe one concrete change.',
          },
          {
            id: 'length',
            label: 'Reasonable length',
            status: 'fail',
            message:
              'The commit message is currently empty.',
          },
          {
            id: 'style',
            label: 'Subject style',
            status: 'fail',
            message:
              'Enter a message to check its style.',
          },
        ],
      }
    }
  
    const match =
      trimmed.match(conventionalCommitPattern)
  
    const detectedType = match?.[1] ?? null
    const subject = (match?.[4] ?? trimmed).trim()
  
    const hasConventionalStructure =
      match !== null
  
    const usesSupportedType =
      detectedType !== null &&
      supportedTypes.has(detectedType)
  
    const normalizedSubject =
      subject.toLowerCase()
  
    const isVague =
      vagueSubjects.has(normalizedSubject) ||
      subject.length < 8
  
    const hasRecommendedLength =
      trimmed.length >= 12 &&
      trimmed.length <= 72
  
    const startsLowercase =
      /^[a-z0-9]/.test(subject)
  
    const hasNoTrailingPeriod =
      !subject.endsWith('.')
  
    const checks: CommitCheck[] = [
      {
        id: 'structure',
        label: 'Conventional structure',
        status: hasConventionalStructure
          ? 'pass'
          : 'warning',
        message: hasConventionalStructure
          ? 'The message follows the type: description format.'
          : 'Consider using a format such as feat: add command search.',
      },
      {
        id: 'type',
        label: 'Supported commit type',
        status: usesSupportedType
          ? 'pass'
          : 'warning',
        message: usesSupportedType
          ? `Detected commit type: ${detectedType}.`
          : 'Use a clear type such as feat, fix, docs, refactor, test, chore, ci, build, style, or perf.',
      },
      {
        id: 'specificity',
        label: 'Specific description',
        status: isVague ? 'fail' : 'pass',
        message: isVague
          ? 'The description is too vague. Explain the concrete change.'
          : 'The description communicates a specific change.',
      },
      {
        id: 'length',
        label: 'Reasonable length',
        status: hasRecommendedLength
          ? 'pass'
          : 'warning',
        message: hasRecommendedLength
          ? 'The message has a readable subject length.'
          : 'GitScope recommends keeping this subject between 12 and 72 characters.',
      },
      {
        id: 'style',
        label: 'Subject style',
        status:
          startsLowercase &&
          hasNoTrailingPeriod
            ? 'pass'
            : 'warning',
        message:
          startsLowercase &&
          hasNoTrailingPeriod
            ? 'The subject uses a concise lowercase style.'
            : 'Consider starting the subject in lowercase and avoiding a trailing period.',
      },
    ]
  
    const score = checks.reduce(
      (total, check) =>
        total + getCheckScore(check.status),
      0,
    )
  
    const strength =
      score >= 80
        ? 'Strong'
        : score >= 60
          ? 'Good'
          : 'Needs work'
  
    return {
      score,
      strength,
      detectedType,
      suggestion: buildSuggestion(trimmed),
      checks,
    }
  }