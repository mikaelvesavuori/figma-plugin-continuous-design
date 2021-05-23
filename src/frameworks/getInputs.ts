import { Inputs } from '../contracts/Inputs';

/**
 * @description Get required inputs from DOM.
 */
export function getInputs(): Inputs {
  const tokenInput: HTMLInputElement | null = document.querySelector('#InputToken');
  const userInput: HTMLInputElement | null = document.querySelector('#InputUser');
  const repoInput: HTMLInputElement | null = document.querySelector('#InputRepo');
  const workflowInput: HTMLInputElement | null = document.querySelector('#InputWorkflow');
  const messageInput: HTMLInputElement | null = document.querySelector('#InputMessage');
  const branchInput: HTMLInputElement | null = document.querySelector('#InputBranch');
  const versionInput: HTMLInputElement | null = document.querySelector('#InputVersion');

  if (
    !tokenInput ||
    !userInput ||
    !repoInput ||
    !workflowInput ||
    !messageInput ||
    !branchInput ||
    !versionInput
  )
    throw new Error('Missing required inputs in getInputs()!');

  return {
    tokenInput,
    userInput,
    repoInput,
    workflowInput,
    messageInput,
    branchInput,
    versionInput
  };
}
