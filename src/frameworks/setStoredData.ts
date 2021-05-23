import { PluginState } from '../contracts/PluginState';

import { getInputs } from './getInputs';

/**
 * @description Set stored data from Figma client storage in input/component states.
 */
export function setStoredData(state: PluginState | 'cleared') {
  const {
    tokenInput,
    userInput,
    repoInput,
    workflowInput,
    messageInput,
    branchInput,
    versionInput
  } = getInputs();

  if (state === 'cleared') {
    tokenInput.value = '';
    userInput.value = '';
    repoInput.value = '';
    workflowInput.value = '';
    messageInput.value = '';
    branchInput.value = '';
    versionInput.value = '';
  } else {
    const { token, user, repo, workflow, branch, version, message } = state;

    tokenInput.value = token;
    userInput.value = user;
    repoInput.value = repo;
    workflowInput.value = workflow;
    messageInput.value = message;
    branchInput.value = branch;
    versionInput.value = version;
  }
}
