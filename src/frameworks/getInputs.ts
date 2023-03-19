import { Inputs } from '../interfaces/Inputs';

/**
 * @description Get required inputs from DOM.
 */
export function getInputs(): Inputs {
  const providerInput: HTMLInputElement | null = document.querySelector('#InputProvider');
  const tokenInput: HTMLInputElement | null = document.querySelector('#InputToken');
  const userInput: HTMLInputElement | null = document.querySelector('#InputUser');
  const repoInput: HTMLInputElement | null = document.querySelector('#InputRepo');
  const orgNameInput: HTMLInputElement | null = document.querySelector('#InputOrgName');
  const projectIdInput: HTMLInputElement | null = document.querySelector('#InputProjectId');
  const refInput: HTMLInputElement | null = document.querySelector('#InputRef');
  const definitionIdInput: HTMLInputElement | null = document.querySelector('#InputDefinitionId');
  const workflowInput: HTMLInputElement | null = document.querySelector('#InputWorkflow');
  const messageInput: HTMLInputElement | null = document.querySelector('#InputMessage');
  const branchInput: HTMLInputElement | null = document.querySelector('#InputBranch');
  const versionInput: HTMLInputElement | null = document.querySelector('#InputVersion');

  if (
    !providerInput ||
    !tokenInput ||
    !userInput ||
    !repoInput ||
    !orgNameInput ||
    !projectIdInput ||
    !refInput ||
    !definitionIdInput ||
    !workflowInput ||
    !messageInput ||
    !branchInput ||
    !versionInput
  )
    throw new Error('Missing required inputs in getInputs()!');

  return {
    providerInput,
    tokenInput,
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
  };
}
