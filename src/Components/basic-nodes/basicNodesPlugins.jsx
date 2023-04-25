import { basicElementsPlugins } from "../basic-elements/basicElementsPlugins";
import { basicMarksPlugins } from "../basic-marks/basicNodesPlugins";
import { createMyPlugins } from "../common/createmyplugin";
import { plateUI } from "../common/plateUI";

export const basicNodesPlugins = createMyPlugins(
  [...basicElementsPlugins, ...basicMarksPlugins],
  {
    components: plateUI,
  }
);
