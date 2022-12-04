import merge from "lodash/merge";
import get from "lodash/get";
import type { PropertyPath } from "lodash";

const { NAMESPACE } = process.env;

const parseConfig = () => {
  const defaultConfig = require(process.cwd() + '/config/default.json');
  const env = NAMESPACE || 'development';
  const mergedConfig = merge(
    defaultConfig,
    require(process.cwd() + `/config/${env}.json`),
  );

  return mergedConfig;
}

let __config: Record<string, any> | null = null;

export const getEnvConfig = (path: PropertyPath) => {
  if (!__config) {
    __config = parseConfig();
  }
  return get(__config, path, null);
}
