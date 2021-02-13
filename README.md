# README.md

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
        - Subclassing in Typescript seems to have its own problems, code duplication in sublasses of
          Generic steps as a result (creation of a singleton for every subclass' instance)