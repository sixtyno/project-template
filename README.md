# project-template

## description

repository is made to be used as template for other projects, it contains [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), [semantic release](https://github.com/semantic-release/semantic-release) (along with pushing to GitHub packages), [CircleCI](https://circleci.com/docs/) base configuration.

## Useage

1. Clone repository.
2. Connect newly added project to CircleCI (inside CircleCI dashboard -> projects -> setup project).
3. Add access for sixty-bot in your repository settings (in GitHub -> your cloned repo settings -> collaborators and settings -> add ppl).
4. Inside cloned repository run `yarn dev` command in order to run vite dev server.
5. Modify readme file.
6. Enjoy the setup.

## Semantic release

CircleCI workflow for semantic releases will be triggered every time changes would be merged into master branch. Commit analyser package will search for [specific commit format](https://github.com/semantic-release/semantic-release#commit-message-format), and based on that upgrade version number and create release notes, please follow [this format](https://github.com/semantic-release/semantic-release#commit-message-format).
Semantic release package is also responsible for publishing package into GitHub packages, so every time changes would be merged into master branch, semantic release will push package into GitHub packages. Semantic release is made by NPM package - [read more](https://github.com/semantic-release/semantic-release).

## Available scripts

- `"dev": "vite"` Runs development server. Use it when you want to develop an app and preview it.
- `"build": "tsc && vite build"` Builds application for production.
- `"preview": "vite preview"` Runs preview.
- `"semantic-release": "semantic-release"` Runs semantic release process, should be used only by CircleCI
