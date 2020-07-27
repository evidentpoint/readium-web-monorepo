# Readium Web Packages

This location is the source file tree for building all packages.

## Creating a new package

1. Copy and rename `.template/` with an identifier that's concise and `kebab-cased`.
2. Replace instances of `TEMPLATE` in `package.json` with the same identifier.
3. Write code in `src/` and add tests in `test/`.
4. When iterating on the code is complete you should delete `test/template.spec.ts` if other (or no) tests are created.
