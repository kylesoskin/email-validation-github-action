# email-validation-github-action
A GitHub action to check whether provided variable(s) are valid emails or not.

## Inputs

## `email`

**Required** The email(s) to validate.

## Outputs

## `results`

The results in the form `[{${email}: [true|false]}]`

For example

```
input: 'test@example.com, test2@example.com, not_an_email'
```
Would produce a result/GitHub output of
```
output: '[{"test@example.com":true},{"test2@example.com":true},{"not_an_email":false}]'
```
Which can be used in upstream Github actions by doing something like 
```
JSON.parse(github.email_validate_step.outputs.results)
```

Although most of the time if you just need to know if a single email is valid or not you can just rely on the job failing when it is not OR by checking the success value of the validation step.

## Example usage

```
uses: kylesoskin/email-validation-github-action@v2
with:
  email: 'test@email.com'
```

```
uses: kylesoskin/email-validation-github-action@v2
with:
  email: 'test@email.com, otheremailtocheck'
```

```
uses: kylesoskin/email-validation-github-action@v2
with:
  email: ${{ env.EMAIL }}
```


Full working workflow example 

```
# This is a basic workflow to help you get started with this action

name: Test email validation action

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  workflow_dispatch:
    inputs:
      email:
        description: 'Email'
        required: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: kylesoskin/email-validation-github-action@v2
        with: 
          email: ${{ github.event.inputs.email }}
```