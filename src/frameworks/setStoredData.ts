import { PluginState } from '../contracts/PluginState';

import { getInputs } from './getInputs';

/**
 * @description Set stored data from Figma client storage in input/component states.
 */
export function setStoredData(state?: PluginState) {
  const {
    providerInput,
    tokenInput,
    userInput,
    repoInput,
    workflowInput,
    messageInput,
    branchInput,
    versionInput,
    definitionIdInput,
    orgNameInput
  } = getInputs();

  if (!state) {
    providerInput.value = 'github';
    tokenInput.value = '';
    userInput.value = '';
    repoInput.value = '';
    workflowInput.value = '';
    messageInput.value = '';
    branchInput.value = '';
    versionInput.value = '';
    definitionIdInput.value = '';
    orgNameInput.value = '';
  } else {
    const {
      provider,
      token,
      user,
      repo,
      workflow,
      message,
      branch,
      version,
      definitionId,
      orgName
    } = state;

    providerInput.value = provider || 'github';
    tokenInput.value = token || '';
    userInput.value = user || '';
    repoInput.value = repo || '';
    workflowInput.value = workflow || '';
    messageInput.value = message || '';
    branchInput.value = branch || '';
    versionInput.value = version || '';
    definitionIdInput.value = definitionId || '';
    orgNameInput.value = orgName || '';
  }
}
