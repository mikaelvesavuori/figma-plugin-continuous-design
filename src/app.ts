import './styles.css';

import { PluginState } from './contracts/PluginState';

import { addEventListeners } from './frameworks/addEventListeners';
import { setStoredData } from './frameworks/setStoredData';
import { loadStoredData } from './frameworks/loadStoredData';

function FigmaGithubActionsPluginController() {
  console.log('Thanks for using the Figma GitHub Actions plugin!');

  const DATA_STORAGE_KEY = 'FIGMA_GITHUB_ACTIONS_PLUGIN';

  addEventListeners(DATA_STORAGE_KEY);
  loadStoredData(DATA_STORAGE_KEY);

  onmessage = (event) => {
    if (event.data.pluginMessage === 'cleared') setStoredData(event.data.pluginMessage);
    else setStoredData(event.data.pluginMessage);
  };
}

FigmaGithubActionsPluginController();
