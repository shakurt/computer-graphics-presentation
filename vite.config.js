import { defineConfig } from 'vite';

const repository = process.env.GITHUB_REPOSITORY;
const repositoryName =
  repository && repository.includes('/') ? repository.split('/')[1] : '';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  base: isGitHubActions && repositoryName ? `/${repositoryName}/` : '/'
});
