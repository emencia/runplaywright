# Example

To run the example tests clone the repository. The tests are located
in the `src/tests` folder and the playbooks that run the tests are in
the `src/playbook` folder

## Dev mode

Run a single test:

```
yarn playtest test=github/open_page browser=firefox
```

Run the same test in a mobile browser:

```
yarn playtest test=github/open_page browser=safari
```

## Headless mode

Run all the tests in all browsers:

```
yarn runtest
```

Run a single playbook:

```
yarn runtest playbook=github
```

Run a single playbook only in mobile:

```
yarn runtest playbook=github conf=mobile
```