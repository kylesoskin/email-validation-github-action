const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `email` input defined in action metadata file
  const emails = core.getInput('email').split(",").map(item => item.trim());
  console.log(`Emails: ${emails}`);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}