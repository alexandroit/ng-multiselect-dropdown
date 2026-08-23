# Security Policy

## Supported versions

Security fixes are released for the maintained
`@stackline/ng-multiselect-dropdown` version lines documented in the README.
Use the latest patch release available for the Angular line used by your
application. The 6.x / Angular 21 line receives proactive security maintenance.
Older framework demos and package families are compatibility references and do
not extend Angular's upstream support lifecycle.

Patched overrides are enforced for Angular's development server and UUID
dependency. Angular's Less compiler still reaches `image-size`, whose ICNS,
JXL, and HEIF parser advisories currently have no patched upstream release.
Builds do not process untrusted images, and this development-only path is absent
from the published package. `npm run audit:dependencies` accepts only those two
exact advisories and rejects every other finding or newly available compatible
fix.

The maintained Angular 21 documentation application follows the same policy
with its own checked-in lockfile. CI installs it with `npm ci`, builds it, and
runs the exact advisory gate independently from the published package.

## Reporting a vulnerability

Report suspected vulnerabilities privately through
[GitHub Security Advisories](https://github.com/alexandroit/ng-multiselect-dropdown/security/advisories/new).
Do not publish exploit details in a GitHub issue.

Include the affected package, Angular and Node.js versions, a minimal synthetic
reproduction, realistic impact, and any known mitigation. Remove credentials,
personal data, and proprietary application code.

We aim to acknowledge reports within three business days, provide an initial
assessment within seven business days, and send an update at least every
fourteen days while confirmed remediation is active. Coordinated disclosure is
preferred.
