import { createData } from './createData';

/**
 * @description Run a GitHub Actions workflow.
 */
export async function startAction() {
  let { user, repo, workflow, token, branch, message, version } = createData();

  const url = `https://api.github.com/repos/${user}/${repo}/actions/workflows/${workflow}/dispatches`;

  if (version.toLowerCase() === 'latest') version = ''; // Empty will be latest in GitHub Actions script

  await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'Figma GitHub Actions plugin',
      Authorization: `token ${token}`
    },
    body: JSON.stringify({
      ref: `${branch}`,
      inputs: {
        message,
        version
      }
    })
  })
    .then(async (res) => {
      const text = await res.text();
      if (res.status === 204) alert('Successfully started GitHub Actions workflow!');
      else alert(text);
    })
    .catch((error) => alert(error));
}
