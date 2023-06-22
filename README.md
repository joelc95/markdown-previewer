# FCC Front End Libraries: Markdown Previewer

## Task:
Build a markdown previewer application to demonstrate use of frontend libraries.

## Stack Used:
- React
- Bootstrap
- marked.js
- prism.js

### Process:
1. Build simple outline for layout
  - Created two divs that would sit side by side, one containing the editor, the other containing the markdown preview.
2. Have the preview window reflect what is in the editor window
  - This is done fairly simply:
    - Create a hook (we are using functional components for the sake of simplicity) which can hold the state of our input 
      ```js
      const [markdown, setMarkdown] = React.useState(placeholder-text)
      ```
    - Create a function that will update the markdown state
      ```js
      const inputHandler = (e) => {
        setMarkdown(e.target.value);
      }
      ```
      This function can be triggered on any change of value inside our editor's `<textarea>`.
    - Now, set the innerHTML value of our preview div to whatever is currently in state.
    **Note**: here we use a DOM attribute specific to React called _dangerouslySetInnerHTML_. This is useful in markdown as we would like any code snippets to be interpreted as code, not plain text.
    In other instances, this attribute requires sanitisation of user inputs as it runs the risk of XSS attacks, but our use here is fine.
