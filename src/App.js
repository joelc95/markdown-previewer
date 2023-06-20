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
#This is my React Markdown Previewer

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
\`\`\`

`

const App = () => {
  const [markdown, setMarkdown] = React.useState(placeholder);

  const inputStyling = {
    width: '80%',
    height: '50vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px'
  };

  const inputHandler = (e) => {
    setMarkdown(e.target.value);
  }

  const outputStyling = {
    width: '90%',
    height: 'fit-content',
    backgroundColor: '#dcdcdc',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px',
    overflow: 'scroll'
  }

  return (
    <div className="container">
    <h1 className="d-flex justify-content-center">Markdown Previewer</h1>
    <div className='row'>
      <div className="border border-primary col-md-6 text-center">
        <h2>Editor here</h2>
        <div className="editor-input">
          <textarea style={inputStyling} 
                    className="input" 
                    value={markdown}
                    onChange={inputHandler}>
                      {console.log(markdown)}
          </textarea>
        </div>
      </div>

      <div className="border border-danger col-md-6">
        <h2 className='text-center'>Preview here</h2>
        <div style={outputStyling} 
            className="output-area"
            dangerouslySetInnerHTML={{__html: marked(markdown)}}
        >
        </div>
      </div>
    </div>
    </div>
  )
}

export default App;