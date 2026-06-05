import { defineConfig } from 'vite';

const repository = process.env.GITHUB_REPOSITORY;
const repositoryName = repository?.match(/^[^/]+\/([^/]+)$/)?.[1] ?? '';
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  // GitHub Pages serves the site from /<repo>/, so the built asset URLs must be
  // rewritten to that subpath. Keeping '/' locally preserves the dev experience.
  base: isGitHubPagesBuild && repositoryName ? `/${repositoryName}/` : '/',
});
