/**
 * @description Load data stored in Figma client storage.
 */
export async function loadStoredData(dataStorageKey: string) {
  // @ts-ignore
  parent.postMessage(
    {
      pluginMessage: {
        type: 'load',
        key: dataStorageKey
      }
    },
    '*'
  );
}
