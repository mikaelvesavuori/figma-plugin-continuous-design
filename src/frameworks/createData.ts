import { PluginState } from '../contracts/PluginState';

import { getInputs } from './getInputs';
import { getInputValue } from './getInputValue';

/**
 * @description Utility to create an object from current UI state.
 */
export function createData(): PluginState {
  const {
    tokenInput,
    userInput,
    repoInput,
    workflowInput,
    messageInput,
    branchInput,
    versionInput
  } = getInputs();

  const TOKEN_VALUE = getInputValue(tokenInput);
  const USER_VALUE = getInputValue(userInput);
  const REPO_VALUE = getInputValue(repoInput);
  const WORKFLOW_VALUE = getInputValue(workflowInput, true);
  const MESSAGE_VALUE = getInputValue(messageInput, true);
  const BRANCH_VALUE = getInputValue(branchInput, true);
  const VERSION_VALUE = getInputValue(versionInput, true);

  const data: PluginState = {
    token: TOKEN_VALUE,
    user: USER_VALUE,
    repo: REPO_VALUE,
    workflow: WORKFLOW_VALUE,
    message: MESSAGE_VALUE,
    branch: BRANCH_VALUE,
    version: VERSION_VALUE
  };

  return data;
}
