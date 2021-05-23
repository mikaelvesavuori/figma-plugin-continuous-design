figma.showUI(__html__);
figma.ui.resize(350, 460);

figma.ui.onmessage = async (message) => {
  if (message.type === 'resize') {
    figma.ui.resize(message.message.width, message.message.height);
  }

  if (message.type === 'notify') {
    figma.notify(message.message);
  }

  // Store data
  if (message.type === 'store') {
    const { key, data } = message;
    await figma.clientStorage.setAsync(key, data);
  }

  // Load data
  if (message.type === 'load') {
    const { key } = message;
    const data = await figma.clientStorage.getAsync(key);
    if (data) figma.ui.postMessage(JSON.parse(data));
  }

  // Clear data
  if (message.type === 'clear') {
    const { key } = message;
    await figma.clientStorage.setAsync(key, '');
    figma.ui.postMessage('cleared');
  }
};
