/**
 * @description Get labels from DOM.
 */
export function getLabels() {
  const tokenLabel = document.querySelector('#LabelToken');
  const userLabel = document.querySelector('#LabelUser');
  const repoLabel = document.querySelector('#LabelRepository');
  const orgNameLabel = document.querySelector('#LabelOrgName');
  const projectIdLabel = document.querySelector('#LabelProjectId');
  const refLabel = document.querySelector('#LabelRef');
  const definitionIdLabel = document.querySelector('#LabelDefinitionId');
  const workflowLabel = document.querySelector('#LabelWorkflow');
  const messageLabel = document.querySelector('#LabelMessage');
  const branchLabel = document.querySelector('#LabelBranch');
  const versionLabel = document.querySelector('#LabelVersion');

  return {
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
  };
}
