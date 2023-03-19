import { PluginState } from '../interfaces/PluginState';
import { Provider } from '../interfaces/Provider';

import { getInputs } from './getInputs';
import { getInputValue } from './getInputValue';

/**
 * @description Utility to create an object from current UI state.
 */
export function createData(): PluginState {
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
    orgNameInput,
    projectIdInput,
    refInput
  } = getInputs();

  const PROVIDER_VALUE = getInputValue(providerInput) as Provider;
  const TOKEN_VALUE = getInputValue(tokenInput);
  const USER_VALUE = getInputValue(userInput);
  const REPO_VALUE = getInputValue(repoInput);
  const WORKFLOW_VALUE = getInputValue(workflowInput, true);
  const MESSAGE_VALUE = getInputValue(messageInput, true);
  const BRANCH_VALUE = getInputValue(branchInput, true);
  const VERSION_VALUE = getInputValue(versionInput, true);
  const DEFINITIONID_VALUE = getInputValue(definitionIdInput, true);
  const ORG_VALUE = getInputValue(orgNameInput, true);
  const PROJECT_ID = getInputValue(projectIdInput, true);
  const REF = getInputValue(refInput, true);

  const data: PluginState = {
    provider: PROVIDER_VALUE,
    token: TOKEN_VALUE,
    user: USER_VALUE,
    repo: REPO_VALUE,
    workflow: WORKFLOW_VALUE,
    message: MESSAGE_VALUE,
    branch: BRANCH_VALUE,
    version: VERSION_VALUE,
    definitionId: DEFINITIONID_VALUE,
    orgName: ORG_VALUE,
    projectId: PROJECT_ID,
    ref: REF
  };

  return data;
}
