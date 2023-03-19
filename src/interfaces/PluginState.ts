import { Provider } from './Provider';

export type PluginState = {
  provider: Provider;
  token: string;
  user: string;
  repo: string;
  workflow: string;
  branch: string;
  version: string;
  message: string;
  definitionId: string;
  orgName: string;
  projectId: string;
  ref: string;
};
