# Getting Started

The `slate-android-plugin` is used to add android support to your Slate editor.

First install the plugin. On the command line in the directory of your project, type the following command:

```
# if you use npm
npm install slate-android-plugin

# if you use yarn
yarn add slate-android-plugin
```

To integrate android support in your slate editor, paste the code below into an app.

```
import React, { useMemo } from "react";
import { createEditor, Node, Editor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { useAndroidPlugin } from "slate-android-plugin";

export function MyEditor() {
  const [value, setValue] = useState([{children: [{text: "Hello, world!"}]}]);
  const editor = useAndroidPlugin(useMemo(() => withReact(createEditor()), []));
  return (
    <div>
      <Slate
        value={value}
        editor={editor}
        onChange={setValue}
      >
        <Editable />
      </Slate>
    </div>
  )
}
```

Congratulations! You have successfully integrated the slate android plugin with your slate editor.
