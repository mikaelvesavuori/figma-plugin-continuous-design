import { callCi } from './callCi';
import { createData } from '../frameworks/createData';
import { updateProviderUi } from './updateProviderUi';

/**
 * @description Add event listeners to plugin.
 */
export function addEventListeners(dataStorageKey: string) {
  const BUTTON_STORE: HTMLInputElement | null = document.querySelector('#ButtonStore');
  const BUTTON_CLEAR: HTMLInputElement | null = document.querySelector('#ButtonClear');
  const BUTTON_START: HTMLInputElement | null = document.querySelector('#ButtonStart');
  const SELECT_PROVIDER: HTMLSelectElement | null = document.querySelector('#InputProvider');

  if (!BUTTON_START || !BUTTON_STORE || !BUTTON_CLEAR || !SELECT_PROVIDER)
    throw new Error('Missing required buttons and inputs in addEventListeners()!');

  BUTTON_STORE.onclick = async () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'store',
          key: dataStorageKey,
          data: JSON.stringify(createData())
        }
      },
      '*'
    );
  };

  BUTTON_CLEAR.onclick = async () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'clear',
          key: dataStorageKey,
          data: ''
        }
      },
      '*'
    );
  };

  BUTTON_START.onclick = async () => await callCi();

  SELECT_PROVIDER.onchange = async (event: any) => {
    const value = event.target.value;
    updateProviderUi(value);
  };
}
