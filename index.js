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
  
  for (const email of emails) {
    let res = validator.isEmail(email)
    results[email] = res
    console.log(`"${email}" valid?... ${res}`)
    if (!res) {
      successful = false
    }
  }
  core.setOutput('results', JSON.stringify(results))
  if (!successful) {
    core.setFailed('A provided email is not valid. Please check the results returned.');
  }
} catch (error) {
  core.setFailed(error.message);
}