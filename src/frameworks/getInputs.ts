import { Inputs } from '../contracts/Inputs';

/**
 * @description Get required inputs from DOM.
 */
export function getInputs(): Inputs {
  const providerInput: HTMLInputElement | null = document.querySelector('#InputProvider');
  const tokenInput: HTMLInputElement | null = document.querySelector('#InputToken');
  const userInput: HTMLInputElement | null = document.querySelector('#InputUser');
  const repoInput: HTMLInputElement | null = document.querySelector('#InputRepo');
  const workflowInput: HTMLInputElement | null = document.querySelector('#InputWorkflow');
  const messageInput: HTMLInputElement | null = document.querySelector('#InputMessage');
  const branchInput: HTMLInputElement | null = document.querySelector('#InputBranch');
  const versionInput: HTMLInputElement | null = document.querySelector('#InputVersion');
  const definitionIdInput: HTMLInputElement | null = document.querySelector('#InputDefinitionId');
  const orgNameInput: HTMLInputElement | null = document.querySelector('#InputOrgName');

  if (
    !providerInput ||
    !tokenInput ||
    !userInput ||
    !repoInput ||
    !workflowInput ||
    !messageInput ||
    !branchInput ||
    !versionInput ||
    !definitionIdInput ||
    !orgNameInput
  )
    throw new Error('Missing required inputs in getInputs()!');

  return {
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
  };
}
