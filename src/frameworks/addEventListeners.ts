import { startAction } from '../frameworks/startAction';
import { createData } from '../frameworks/createData';

/**
 * @description Add event listeners to plugin.
 */
export function addEventListeners(dataStorageKey: string) {
  const BUTTON_STORE: HTMLInputElement | null = document.querySelector('#ButtonStore');
  const BUTTON_CLEAR: HTMLInputElement | null = document.querySelector('#ButtonClear');
  const BUTTON_START: HTMLInputElement | null = document.querySelector('#ButtonStart');

  if (!BUTTON_START || !BUTTON_STORE || !BUTTON_CLEAR)
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

  BUTTON_START.onclick = async () => await startAction();
}
