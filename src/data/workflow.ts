import type {
    WorkflowEdge,
    WorkflowStep,
  } from '../types/workflow'
  
  export const workflowSteps: WorkflowStep[] = [
    {
      id: 'initial',
      branch: 'main',
      title: 'Initial project state',
      shortLabel: 'Initial',
      x: 120,
      y: 70,
      command: 'git init',
      description:
        'The project begins on the main branch. This branch represents the stable production history of the project.',
    },
    {
      id: 'create-dev',
      branch: 'dev',
      title: 'Create development branch',
      shortLabel: 'Create dev',
      x: 285,
      y: 165,
      command: 'git switch -c dev',
      description:
        'A development branch is created so ongoing work can be integrated without changing the stable main branch directly.',
    },
    {
      id: 'create-feature',
      branch: 'feature',
      title: 'Create feature branch',
      shortLabel: 'Feature branch',
      x: 455,
      y: 260,
      command: 'git switch -c feature/workflow-visualizer',
      description:
        'A dedicated feature branch is created from dev. The workflow visualizer can now be developed independently.',
    },
    {
      id: 'feature-work',
      branch: 'feature',
      title: 'Implement the feature',
      shortLabel: 'Feature work',
      x: 620,
      y: 260,
      command:
        'git commit -m "feat: render branch workflow visualization"',
      description:
        'Meaningful commits are created while the feature is developed and tested on its own branch.',
    },
    {
      id: 'merge-dev',
      branch: 'dev',
      title: 'Integrate feature into dev',
      shortLabel: 'Merge',
      x: 775,
      y: 165,
      command: 'Pull Request: feature/workflow-visualizer → dev',
      description:
        'After the feature is tested and reviewed, it is merged back into the development branch through a Pull Request.',
    },
    {
      id: 'release-main',
      branch: 'main',
      title: 'Release stable version',
      shortLabel: 'Release',
      x: 905,
      y: 70,
      command: 'Pull Request: dev → main',
      description:
        'Once development is stable, dev can be merged into the protected main branch through a release Pull Request.',
    },
  ]
  
  export const workflowEdges: WorkflowEdge[] = [
    {
      id: 'main-line',
      path: 'M 120 70 L 905 70',
    },
    {
      id: 'main-to-dev',
      path: 'M 120 70 C 175 70, 220 165, 285 165',
    },
    {
      id: 'dev-line',
      path: 'M 285 165 L 775 165',
    },
    {
      id: 'dev-to-feature',
      path: 'M 285 165 C 340 165, 390 260, 455 260',
    },
    {
      id: 'feature-line',
      path: 'M 455 260 L 620 260',
    },
    {
      id: 'feature-to-dev',
      path: 'M 620 260 C 675 260, 715 165, 775 165',
    },
    {
      id: 'dev-to-main',
      path: 'M 775 165 C 825 165, 850 70, 905 70',
    },
  ]