# email-validation-github-action
A GitHub action to check whether provided variable(s) are valid emails or not.

## Inputs

## `email`

**Required** The email(s) to validate.

## Outputs

## `results`

The results in the form `[{email: valid: [true|false]}]`'

## Example usage

```
uses: kylesoskin/email-validation-github-action
with:
  email: 'test@email.com'
```

```
uses: kylesoskin/email-validation-github-action
with:
  email: ['test@email.com', 'otheremailtocheck']
```

```
uses: kylesoskin/email-validation-github-action
with:
  email: ${{ env.EMAIL }}
```
