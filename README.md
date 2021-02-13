# README.md

Prerequisites
=============
- Node.js
- yarn
- Linux/Unix or macOS<sup>*1</sup>
- Chrome & Firefox installed<sup>*2</sup>

*1: has only been tested on macOS

*2: Firefox and chrome need to be installed for tests to be executed against them

How To Run
=============
### Default Browser (electron):
```
yarn run test:electron
```
### Run headless in default browser 
```
yarn run test:electron:headless
```
### Run against mocks in default browser
```
yarn run test:electron:mocked
```
### Run against mocks in headless default browser
```
yarn run test:electron:headless:mocked
```

Replace "electron" with "firefox" or "chrome" to run against these browsers respectively

Notes on selectors
==================

The elements needed for testing on the pages all have a 'data-testid', however, they are not unique! 
Since the elements are always in the same order, we select them by their index.
Ideally, the elements should all have received unique identifiers to ensure stable, reliant tests that are easily maintainable.

Notes on Steps Library
======================

Why?
- To improve reusability of test steps
- To improve readability of tests

Why not use Cucumber instead?
- To prevent overhead from adding yet another library
- To prevent complexity that Cucumber brings to the project
- To increase the flexibility that Cucumber lacks

Sins against good coding practices:
- using pronouns in method names (Could have used a different BDD way of describing steps)
- export the same instance multiple times under different names (GIVEN, AND, WHEN, THEN) in different files
- long method names (Tried to keep them as short as possible)

Other issues:
- Subclassing in Typescript seems to have its own problems, code duplication in sublasses of Generic steps as a result (creation of a singleton for every subclass' instance)

Notes on failing tests
======================

In total 3 tests should fail here's why:

- According to Google, Germany currently does not have any postal codes under __01067__ and over __99998__, two tests have been specifically desinged to check if these invalid postal codes would pass.

- Entering street and number in the address text field: The placeholder tells the user to enter street and house number, when entering only the street, the submit button activates