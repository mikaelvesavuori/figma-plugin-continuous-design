import { getInputs } from './getInputs';
import { getLabels } from './getLabels';

/**
 * @description Update UI because of user having updated their CI provider.
 */
export function updateProviderUi(provider: string) {
  const {
    userInput,
    repoInput,
    orgNameInput,
    projectIdInput,
    refInput,
    definitionIdInput,
    workflowInput,
    messageInput,
    branchInput,
    versionInput
  } = getInputs();

  const {
    tokenLabel,
    userLabel,
    repoLabel,
    orgNameLabel,
    projectIdLabel,
    refLabel,
    definitionIdLabel,
    workflowLabel,
    messageLabel,
    branchLabel,
    versionLabel
  } = getLabels();

  // GitHub Actions
  if (provider === 'github') {
    // @ts-ignore
    tokenLabel.innerText = 'Personal access token';

    showUiElement(userLabel, userInput);
    showUiElement(repoLabel, repoInput);
    showUiElement(workflowLabel, workflowInput);
    showUiElement(messageLabel, messageInput);
    showUiElement(branchLabel, branchInput);
    showUiElement(versionLabel, versionInput);

    hideUiElement(definitionIdLabel, definitionIdInput);
    hideUiElement(projectIdLabel, projectIdInput);
    hideUiElement(refLabel, refInput);
    hideUiElement(orgNameLabel, orgNameInput);
  }
  // GitLab CI/CD pipelines
  else if (provider === 'gitlab') {
    // @ts-ignore
    tokenLabel.innerText = 'Pipeline trigger token';

    showUiElement(projectIdLabel, projectIdInput);
    showUiElement(refLabel, refInput);

    hideUiElement(userLabel, userInput);
    hideUiElement(repoLabel, repoInput);
    hideUiElement(workflowLabel, workflowInput);
    hideUiElement(definitionIdLabel, definitionIdInput);
    hideUiElement(orgNameLabel, orgNameInput);
    hideUiElement(messageLabel, messageInput);
    hideUiElement(versionLabel, versionInput);
    hideUiElement(branchLabel, branchInput);
  }
  // Azure DevOps Pipelines
  else if (provider === 'azure') {
    // @ts-ignore
    tokenLabel.innerText = 'Personal access token';

    showUiElement(userLabel, userInput);
    showUiElement(repoLabel, repoInput);
    showUiElement(definitionIdLabel, definitionIdInput);
    showUiElement(messageLabel, messageInput);
    showUiElement(branchLabel, branchInput);
    showUiElement(versionLabel, versionInput);

    hideUiElement(workflowLabel, workflowInput);
    hideUiElement(projectIdLabel, projectIdInput);
    hideUiElement(refLabel, refInput);
    hideUiElement(orgNameLabel, orgNameInput);
  }
  // Bitbucket Pipelines
  else if (provider === 'bitbucket') {
    // @ts-ignore
    tokenLabel.innerText = 'Application password';

    showUiElement(userLabel, userInput);
    showUiElement(repoLabel, repoInput);
    showUiElement(orgNameLabel, orgNameInput);
    showUiElement(messageLabel, messageInput);
    showUiElement(branchLabel, branchInput);
    showUiElement(versionLabel, versionInput);

    hideUiElement(workflowLabel, workflowInput);
    hideUiElement(definitionIdLabel, definitionIdInput);
    hideUiElement(projectIdLabel, projectIdInput);
    hideUiElement(refLabel, refInput);
  }
}

/**
 * @description Utility to show the pair of label and input.
 */
function showUiElement(label: Element | null, input: Element | null) {
  if (label) label.classList.remove('Hide');
  if (input) input.classList.remove('Hide');
}

/**
 * @description Utility to hide the pair of label and input.
 */
function hideUiElement(label: Element | null, input: Element | null) {
  if (label) label.classList.add('Hide');
  if (input) input.classList.add('Hide');
}
