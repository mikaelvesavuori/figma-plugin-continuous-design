import { createData } from './createData';

/**
 * @description Call a CI provider's REST API to run a workflow on their service.
 */
export async function callCi() {
  let {
    provider,
    user,
    repo,
    workflow,
    token,
    branch,
    message,
    version,
    definitionId,
    orgName,
    projectId,
    ref
  } = createData();

  const urls = {
    github: `https://api.github.com/repos/${user}/${repo}/actions/workflows/${workflow}/dispatches`,
    gitlab: `https://gitlab.com/api/v4/projects/${projectId}/trigger/pipeline?token=${token}&ref=${ref}`, // TODO
    azure: `https://dev.azure.com/${user}/${repo}/_apis/pipelines/${definitionId}/runs?api-version=6.0-preview.1`,
    bitbucket: `https://api.bitbucket.org/2.0/repositories/${orgName}/${repo}/pipelines/#post`
  };

  const payloads = {
    github: {
      ref: branch,
      inputs: {
        version: version || '',
        message
      }
    },
    gitlab: {},
    azure: {
      resources: {
        repositories: {
          self: {
            refName: `refs/heads/${branch}`
          }
        }
      },
      templateParameters: {
        FIGMA_VERSION: version || 'latest',
        FIGMA_MESSAGE: message
      }
    },
    bitbucket: {
      target: {
        ref_type: 'branch',
        type: 'pipeline_ref_target',
        ref_name: branch
      },
      variables: [
        {
          key: 'FIGMA_VERSION',
          value: version,
          secured: false
        },
        {
          key: 'FIGMA_MESSAGE',
          value: message,
          secured: false
        }
      ]
    }
  };

  // @ts-ignore
  const url = urls[provider];
  // @ts-ignore
  const body = payloads[provider];

  /**
   * @description Retrieve a well-formed `Authorization` header.
   * Note that this is not needed for GitLab.
   */
  const getAuthHeader = (() => {
    if (provider === 'github') return `token ${token}`;
    if (provider === 'gitlab') return;
    else if (provider === 'bitbucket') {
      const _token = btoa(unescape(encodeURIComponent(user + ':' + token)));
      return `Basic ${_token}`;
    } else if (provider === 'azure') {
      const _token = btoa(unescape(encodeURIComponent('user' + ':' + token)));
      return `Basic ${_token}`;
    } else throw new Error(`No valid provider was given! Provider: ${provider}`);
  })();

  const headers: Record<string, any> = {
    'Content-Type': 'application/json',
    Authorization: getAuthHeader
  };

  if (provider === 'github') headers.Accept = 'application/vnd.github.v3+json';

  await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  })
    .then(async (res) => {
      const text = await res.text();
      if (res.status >= 200 && res.status < 300) alert('Successfully started CI workflow!');
      else alert(text);
    })
    .catch((error) => alert(error));
}
