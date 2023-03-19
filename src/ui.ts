import './styles.css';

import { addEventListeners } from './frameworks/addEventListeners';
import { setStoredData } from './frameworks/setStoredData';
import { loadStoredData } from './frameworks/loadStoredData';
import { updateProviderUi } from './frameworks/updateProviderUi';

const DATA_STORAGE_KEY = 'FIGMA_CONTINUOUS_DESIGN_PLUGIN';

/**
 * @description This sets up some basics in the plugin and takes in a few messages.
 */
async function UiController() {
  console.log('Thanks for using the Continuous Design plugin!');

  // Let the plugin wait for the UI to be ready
  setTimeout(() => addEventListeners(DATA_STORAGE_KEY), 100);

  // Load and use stored state
  await loadStoredData(DATA_STORAGE_KEY);

  // Handle messages from other code
  onmessage = (event: any) => {
    const message = event.data.pluginMessage ? JSON.parse(event.data.pluginMessage) : undefined;
    const data = message.data ? JSON.parse(message.data) : undefined;

    if (message && message.type === 'load') {
      console.log('load', data.provider);
      updateProviderUi(data.provider);
      setStoredData(data);
    }

    if (message && message.type === 'clear') setStoredData();
  };
}

UiController();
