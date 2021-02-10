# README.md

Notes on selectors
==================

The elements needed for testing on the pages all have a 'data-testid', however, they are not unique! 
Since the elements are always in the same order, we select them by their index.
Ideally, the elements should all have received unique identifiers to ensure stable, reliant tests that are easily maintainable.