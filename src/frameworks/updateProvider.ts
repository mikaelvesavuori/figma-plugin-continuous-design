import { getInputs } from '../frameworks/getInputs';

/**
 * @description Update UI because of user having updated their CI provider.
 */
export function updateProvider(provider: string) {
  const { workflowInput, orgNameInput, definitionIdInput } = getInputs();

  const workflowLabel = document.querySelector('#LabelWorkflow');
  const definitionIdLabel = document.querySelector('#LabelDefinitionId');
  const orgNameLabel = document.querySelector('#LabelOrgName');

  const tokenLabel = document.querySelector('#LabelToken');

  // GitHub Actions
  if (provider === 'github') {
    // @ts-ignore
    tokenLabel.innerText = 'Personal access token';

    workflowLabel?.classList.remove('Hide');
    workflowInput.classList.remove('Hide');

    definitionIdLabel?.classList.add('Hide');
    definitionIdInput.classList.add('Hide');

    orgNameLabel?.classList.add('Hide');
    orgNameInput.classList.add('Hide');
  }
  // Azure DevOps Pipelines
  else if (provider === 'azure') {
    // @ts-ignore
    tokenLabel.innerText = 'Personal access token';

    workflowLabel?.classList.add('Hide');
    workflowInput.classList.add('Hide');

    definitionIdLabel?.classList.remove('Hide');
    definitionIdInput.classList.remove('Hide');

    orgNameLabel?.classList.add('Hide');
    orgNameInput.classList.add('Hide');
  }
  // Bitbucket Pipelines
  else if (provider === 'bitbucket') {
    // @ts-ignore
    tokenLabel.innerText = 'Application password';

    workflowLabel?.classList.add('Hide');
    workflowInput.classList.add('Hide');

    definitionIdLabel?.classList.add('Hide');
    definitionIdInput.classList.add('Hide');

    orgNameLabel?.classList.remove('Hide');
    orgNameInput.classList.remove('Hide');
  }
}
