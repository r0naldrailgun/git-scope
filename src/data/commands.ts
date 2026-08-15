import type { GitCommand } from '../types/git'

export const gitCommands: GitCommand[] = [
  {
    name: 'git init',
    category: 'Basics',
    syntax: 'git init',
    description:
      'Creates a new local Git repository in the current directory.',
    example: 'git init',
  },
  {
    name: 'git status',
    category: 'Basics',
    syntax: 'git status',
    description:
      'Shows the current state of the working directory and staging area.',
    example: 'git status',
  },
  {
    name: 'git add',
    category: 'Basics',
    syntax: 'git add <file>',
    description:
      'Adds changes from the working directory to the staging area.',
    example: 'git add src/App.tsx',
  },
  {
    name: 'git commit',
    category: 'Basics',
    syntax: 'git commit -m "<message>"',
    description:
      'Creates a commit containing the currently staged changes.',
    example: 'git commit -m "feat: add command explorer"',
  },
  {
    name: 'git branch',
    category: 'Branching',
    syntax: 'git branch',
    description:
      'Lists local branches or creates a new branch when a name is provided.',
    example: 'git branch feature/search',
  },
  {
    name: 'git switch',
    category: 'Branching',
    syntax: 'git switch <branch>',
    description:
      'Switches the working directory to another Git branch.',
    example: 'git switch dev',
  },
  {
    name: 'git merge',
    category: 'Branching',
    syntax: 'git merge <branch>',
    description:
      'Combines the history of another branch with the current branch.',
    example: 'git merge feature/search',
  },
  {
    name: 'git rebase',
    category: 'Branching',
    syntax: 'git rebase <branch>',
    description:
      'Replays commits from the current branch on top of another branch.',
    example: 'git rebase dev',
  },
  {
    name: 'git fetch',
    category: 'Remote',
    syntax: 'git fetch <remote>',
    description:
      'Downloads commits and references from a remote repository without merging them.',
    example: 'git fetch origin',
  },
  {
    name: 'git pull',
    category: 'Remote',
    syntax: 'git pull <remote> <branch>',
    description:
      'Downloads remote changes and integrates them into the current branch.',
    example: 'git pull origin dev',
  },
  {
    name: 'git push',
    category: 'Remote',
    syntax: 'git push <remote> <branch>',
    description:
      'Uploads local commits from a branch to a remote repository.',
    example: 'git push origin feature/command-explorer',
  },
  {
    name: 'git log',
    category: 'History',
    syntax: 'git log',
    description:
      'Displays the commit history of the current repository.',
    example: 'git log --oneline --graph --all',
  },
  {
    name: 'git diff',
    category: 'History',
    syntax: 'git diff',
    description:
      'Displays differences between different states of tracked files.',
    example: 'git diff',
  },
  {
    name: 'git restore',
    category: 'Undo',
    syntax: 'git restore <file>',
    description:
      'Restores a file in the working directory to a previous known state.',
    example: 'git restore src/App.tsx',
  },
  {
    name: 'git revert',
    category: 'Undo',
    syntax: 'git revert <commit>',
    description:
      'Creates a new commit that reverses the changes introduced by another commit.',
    example: 'git revert a1b2c3d',
  },
  {
    name: 'git reset',
    category: 'Undo',
    syntax: 'git reset <commit>',
    description:
      'Moves the current branch reference and can also modify the staging area or working tree.',
    example: 'git reset --soft HEAD~1',
  },
  {
    name: 'git stash',
    category: 'Undo',
    syntax: 'git stash',
    description:
      'Temporarily stores unfinished working directory changes for later use.',
    example: 'git stash',
  },
  {
    name: 'git cherry-pick',
    category: 'Branching',
    syntax: 'git cherry-pick <commit>',
    description:
      'Applies the changes from one specific commit onto the current branch.',
    example: 'git cherry-pick a1b2c3d',
  },
]