# Playwright test runner

[![npm package](https://img.shields.io/npm/v/runplaywright)](https://www.npmjs.com/package/runplaywright)

A tests runner for Playwright

## Install

```bash
npm install -g runplaywright
# or
yarn global add runplaywright
# install the playwright stuff
npx playwright install
```

## Usage

The tests are grouped by playbooks in `tests/src`. See the [example](tests)

## Commands

### Show all the playbooks and tests available

List all the tests and playbooks in a project:

```bash
showtests
```

### Run tests headless

The `runtest` command run the tests headless. Arguments:

`playbook`: to run a whole playbook. Example:

```bash
runtest playbook=blog
```

`test`: to run a single test. Example:

```bash
runtest test=blog/add_post
```

`browser`: to run in a specific browser. Example:

```bash
runtest browser=firefox
```

`conf`: to run in a specific configuration: desktop or mobile. Example:

```bash
runtest conf=desktop
```

### Run tests in browser

The `playtest` command run the tests in a browser

All the arguments are the same as above except `conf` that is not
available in play mode

It is possible to cumulate the params above. To play a single test in Firefox:

```bash
playtest test=blog/list_posts browser=firefox
```
