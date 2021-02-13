# README.md

Prerequisites
=============
- Node.js
- yarn
- Linux/Unix or macOS<sup>*1</sup>
- Chrome & Firefox installed<sup>*2</sup>

<sup>*1</sup>: No available windows machine, only tested on macOS

*2: Firefox and chrome need to be installed for tests to be executed against them

How To Run
=============
## Run with Cypress dev tools:
These will probably run on Microsoft Windows (untested)
````
yarn run test:dev:ui
````
or
````
yarn run test:dev:ui:mocked
````
These commands won't run on anything other than Unix-like systems unless the "clean:reports" script is modified or removed.
## Default Browser (electron)
```
yarn run test:electron
```
### Run headless in default browser:
```
yarn run test:electron:headless
```
### Run against mocks in default browser:
```
yarn run test:electron:mocked
```
### Run against mocks in headless default browser:
```
yarn run test:electron:headless:mocked
```
## Other browsers
Replace "electron" with "firefox" or "chrome" to run against these browsers respectively.

Notes on selectors
==================

The elements needed for testing on the pages all have a 'data-testid', however, they are not unique! 
Since the elements are always in the same order, we select them by their index.
Ideally, the elements should all have received unique identifiers to ensure stable, reliant tests that are easily maintainable.

Notes on Steps Library
======================

## Why?
- Improve reusability of test steps
- Improve readability of tests

## Why not use Cucumber instead?
- Prevent overhead from adding yet another library
- Prevent complexity that Cucumber brings to the project
- Increase the flexibility that Cucumber is lacking when working with steps files

## Sins against good coding practices:
- Using pronouns in method names (Could have used a different BDD way of describing steps)
- Export the same instance multiple times under different names (GIVEN, AND, WHEN, THEN) in different files
- long method names (Tried to keep them as short as possible)

## Other issues:
- Subclassing in Typescript seems to have its own problems, code duplication in sublasses of Generic steps as a result (creation of a singleton for every subclass' instance)

Notes on failing tests
======================

In total 3 tests should fail here's why:

- According to Google, Germany currently does not have any postal codes under __01067__ and over __99998__, two tests have been specifically desinged to check if these invalid postal codes would pass.

- Entering street and number in the address text field: The placeholder tells the user to enter street and house number, when entering only the street, the submit button activates