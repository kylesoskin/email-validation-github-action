# email-validation-github-action
A GitHub action to check whether a provided variable is a valid email or not.

## Inputs

## `email`

**Required** The email(s) to validate.

## Outputs

## `results`

The results

## Example usage

uses: kylesoskin/email-validation-github-action
with:
  email: 'test@email.com'

uses: kylesoskin/email-validation-github-action
with:
  email: ['test@email.com', 'otheremailtocheck']

uses: kylesoskin/email-validation-github-action
with:
  email: ${{ env.EMAIL }}

