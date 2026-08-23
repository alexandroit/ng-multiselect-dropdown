# Versioned documentation sources

The top-level `angular-16` through `angular-21` directories contain the source
projects used to rebuild the corresponding documentation sites in `docs/`.
Only the current maintained line is part of the default CI and release flow.

Directories named after an exact Angular version, such as
`angular-20/20.3.18/`, are historical compatibility fixtures. Their manifests
intentionally pin the original framework versions so a reported regression can
be reproduced against that exact release. They are not installed by the root
build, published to npm, served by GitHub Pages, or included in the Stackline
package tarball.

## Security handling

The current package and documentation source must be upgraded within their
supported Angular line when a compatible security fix exists. Alerts that only
affect an exact-version historical fixture may be marked as tolerable risk
because changing the pinned version would destroy the fixture's purpose.

Historical fixtures must never be used as application templates or deployed
artifacts. Test the supported package through the root CI matrix instead.
