import {ReactEditor} from "slate-react";
import {useLayoutEffect, useMemo} from "react";
import {Editor} from "slate";
import {CompositionManager} from "./composition-manager";

/**
 * Android Plugin
 *
 * @param {Editor} editor
 */
export function useComposition(editor: ReactEditor): ReactEditor {
  let compositionManager = useMemo(() => new CompositionManager(editor), [editor]);
  useLayoutEffect(() => {
    compositionManager.connect();
    return compositionManager.disconnect;
  }, [compositionManager]);

  return editor
}
