import React from 'react';
import Prism from 'prismjs';
import { marked } from 'marked';
import '../src/prism.css'
import '../src/style.css'

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript')
  }
})

const placeholder = `
# This is my React Markdown Previewer

## This is a sub-heading...
### And here is some other stuff:

Here's some code, \`<div></div>\`, between backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.



- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

const App = () => {
  const [markdown, setMarkdown] = React.useState(placeholder);
  
  const inputHandler = (e) => {
    setMarkdown(e.target.value);
  }

  const inputStyling = {
    width: '100%',
    height: '60vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px'
  };


  const outputStyling = {
    width: '100%',
    height: 'fit-content',
    backgroundColor: '#e9c46a',
    color: '#d15f43',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px',
    overflow: 'scroll'
  }

  return (
    <div className="container">
    <h1 className="d-flex justify-content-center">Markdown Previewer</h1>
    <div className='row'>
      <div id="editor-container" className="m-2 col-md-4">
        <div id="editor-header" className='toolbar'><h2>Editor here</h2></div>
        <div className="editor-input">
          <textarea style={inputStyling} 
                    className="input" 
                    value={markdown}
                    onChange={inputHandler}
                    id="editor">
          </textarea>
        </div>
      </div>

      <div id="preview-container" className="col-md-7">
        <div id="preview-header"><h2 className='toolbar text-center mb-0'>Preview here</h2></div>
        <div style={outputStyling} 
            className="output-area"
            dangerouslySetInnerHTML={{__html: marked(markdown)}}
            id="preview">
        </div>
      </div>
    </div>
    </div>
  )
}

export default App;