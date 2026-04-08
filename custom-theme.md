# Custom Theme

## Step 1

1. Copy `ng-multiselect-dropdown.theme.scss` from `node_modules/@stackline/ng-multiselect-dropdown/themes/ng-multiselect-dropdown.theme.scss`.

<img src="Screenshots/theme-step-1.png" width="700">

If you are using a version older than `0.2.11`, retrieve the legacy theme file from an earlier release of this repository.

## Step 2

1. Paste the file into your project wherever you want.
2. Include `ng-multiselect-dropdown.theme.scss` in `angular-cli.json` for Angular versions below 6, or in `angular.json` for Angular 6 and newer.

![](Screenshots/theme-step-2.png)

## Step 3

1. Update `$base-color` in `ng-multiselect-dropdown.theme.scss`.

![](Screenshots/theme-step-3.png)

Sample project: [CodeSandbox example](https://codesandbox.io/s/custom-theme-p1556)
