# Versioned documentation sources

The top-level `angular-16` through `angular-21` directories contain the source
projects used to rebuild the corresponding documentation sites in `docs/`.
Each project compiles the shared library source with its own Angular compiler,
so rebuilding an older demo never consumes an incompatible current-line bundle.
Only the current maintained line is part of the default CI and release flow.

Install and rebuild every top-level demo from the repository root:

```sh
npm run docs:install:all
npm run build:docs:all
```

Directories named after an exact Angular version, such as
`angular-20/20.3.18/`, are historical compatibility fixtures. Their dependency
records use `package.fixture.json` and intentionally pin the original framework
versions. The non-standard filename prevents dependency tooling from treating
archived metadata as a deployable application. Fixtures are not installed by
the root build, published to npm, served by GitHub Pages, or included in the
Stackline package tarball.

Validate the complete catalog without installing end-of-life toolchains:

```sh
npm run test:fixtures
```

## Security handling

The current package and documentation source must be upgraded within their
supported Angular line when a compatible security fix exists. Historical
fixture data is retained verbatim because changing a pinned version would
destroy the record's purpose.

Historical fixtures must never be used as application templates or deployed
artifacts. Test the supported package through the root CI matrix instead.

The Angular 16 through 19 top-level demos use each framework line's final
upstream patch and fixed local example data. They do not use `HttpClient`, SSR,
dynamic i18n resources, dynamic templates, or untrusted HTML. Advisories with
no upstream backport may therefore be classified as tolerable risk for these
static compatibility references, but not for downstream applications.
