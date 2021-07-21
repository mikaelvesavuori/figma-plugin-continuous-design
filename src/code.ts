figma.showUI(__html__);
figma.ui.resize(350, 520);

/**
 * @description Handler for incoming messages from the UI's <iframe> window.
 * @see https://www.figma.com/plugin-docs/api/properties/figma-ui-onmessage/
 */
figma.ui.onmessage = async (message) => {
  const { type, key, data } = message;

  if (type === 'notify') figma.notify(message.message);

  /**
   * @description Store data.
   */
  if (type === 'store') await figma.clientStorage.setAsync(key, data);

  /**
   * @description Load data.
   */
  if (type === 'load') {
    const data = await figma.clientStorage.getAsync(key);
    figma.ui.postMessage(JSON.stringify({ type: 'load', data }));
  }

  /**
   * @description Clear data.
   */
  if (type === 'clear') {
    await figma.clientStorage.setAsync(key, JSON.stringify({ provider: 'github' })); // Default to GitHub
    figma.ui.postMessage(JSON.stringify({ type: 'clear' }));
  }
};
