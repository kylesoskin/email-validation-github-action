const core = require('@actions/core');
const github = require('@actions/github');
const validator = require('validator');

try {
  // `email` input defined in action metadata file
  const emails = core.getInput('email').split(",").map(item => item.trim());

  // init results obj
  let results = {}
  // init the return status (default is true)
  let successful = true
  
  for (const email in emails) {
    console.log(`Validating: ${email}`);
    let res = validator.isEmail(email)
    results[email] = res
    if (!res) {
      console.log(`${email} is NOT valid.`)
      successful = false
    } else {
      console.log(`${email} is valid.`)
    }
  }
  
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
  core.setOutput('results', JSON.stringify(results))
  
  if (!successful) {
    core.setFailed('A provided email is not valid. Please check the results returned.');
  }

} catch (error) {
  core.setFailed(error.message);
}