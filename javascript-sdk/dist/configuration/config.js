let configOptions = {
  baseUrl: 'https://backbone.screevo.ai'
};

export function setConfig(options) {
  configOptions = { ...configOptions, ...options };
}

export function getConfig() {
  return configOptions;
}
