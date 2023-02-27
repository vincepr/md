import React, {Fragment} from 'react';
import Editor from 'react-simple-code-editor';
//themes:
import Highlight, {defaultProps} from "prism-react-renderer"
import lightCodeTheme from 'prism-react-renderer/themes/github'
import darkCodeTheme  from 'prism-react-renderer/themes/dracula'
import {useColorMode} from '@docusaurus/theme-common'; // to detect if were in darkmode or lightmode


/** Text Editor for interactive JsPlayground element */
export default function TextArea({text, setText}) {
  const {colorMode, setColorMode} = useColorMode();   // "dark" | "light"
  let theme = (colorMode ==="dark")? darkCodeTheme : lightCodeTheme

  const styles = {
    boxSizing: 'border-box',
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    fontSize: 15,
    ...theme.plain,
  }

  const highlight = code => (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  )

  return (
    <Editor
      value={text}
      onValueChange={text => setText(text)}
      highlight={ highlight }
      padding={20}
      style={styles}
      tabSize={1}
      insertSpaces={false}
      placeholder={`console.log("write your js here")`}
    />
  );
}
