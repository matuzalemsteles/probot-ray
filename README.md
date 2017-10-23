# Ray bot

> A GitHub application created with [probot](https://github.com/probot/probot) that automatically labels issues with the label in-progress when an open PR uses the [GitHub issue keywords](https://help.github.com/articles/closing-issues-using-keywords/), the same happens when a PR is closed add label done when reference to the issues and adds a comment thanking.

## How it works

When you use [github keywords](https://help.github.com/articles/closing-issues-using-keywords/) like `fixes`,` resolves`, `closes` and other variants in a PR, the bot automatically adds `in-progress` label to issues referenced in the PR.

<img width="787" alt="screen shot 2017-10-22 at 21 58 54" src="https://user-images.githubusercontent.com/13750819/31868843-bd61ad0a-b779-11e7-8eea-83997e1abeee.png">

This probot still adds the label `done` when the PR is closed and a thank you message.

<img width="790" src="https://user-images.githubusercontent.com/13750819/31868817-84c1310a-b779-11e7-9e75-41a1407a499c.png">

## Setup

```
# Install dependencies
npm install

# Run the bot
npm start
```

See [docs/deploy.md](docs/deploy.md) if you would like to run your own instance of this app.

## References
[in-progress](https://github.com/clarkbw/probot-in-progress) by [clarkbw](https://github.com/clarkbw)

## Contribute

First of all, thank you for your contribution.

### Reporting Issues
Did you find a problem? Do you want a new feature? First check if your problem or idea [has been reported](../../issues).
If there is a [new question](../../issues/new), please be clear and descriptive.

> 🚨 Check issue open and closed.

### Submitting pull requests

Make sure your pull requests are within scope and that you follow the project assumptions.

> 🚨 Submit your pull solipsies with tests if necessary.

-   Fork it!
-   Clone your fork: `git clone https://github.com/<your-username>/probot-ray`
-   Navigate to the newly cloned directory: `cd probot-ray`
-   Create a new branch for the new feature: `git checkout -b new-feature`
-   Install the tools necessary for development: `yarn`
-   Make your changes.
-   Commit your changes: `git commit -am 'Add new feature'`
-   Push to the branch: `git push origin new-feature`
-   Submit a pull request with full remarks documenting your changes.

## License

[ISC License](LICENSE) © Matuzalém Teles
