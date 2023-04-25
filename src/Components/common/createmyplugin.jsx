import { createPlugins } from "@udecode/plate";

export const createMyPlugins = (
  plugins,
  options = {
    components: undefined,
    overrideByKey: undefined,
  }
) => createPlugins(plugins, options);
