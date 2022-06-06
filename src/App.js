
import './App.css';
import React from 'react';
import { marked } from 'marked';

// {marked.parse(previewContent)}

function App() {

  marked.setOptions({   //this one takes care of line breaks
    breaks:true
  })

  const initialText = `
  # H1 
  ## H2 
  > blockquote is a blockquote
  [title](https://www.example.com)
  ~~The world is flat.~~
  1. First item
2. Second item
3. Third item
- First item
- Second item
- Third item
\`code\`

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
[links](https://www.freecodecamp.org)
**bold text**

![freecodecamp logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `

  const [editorContent, setEditorContent] = React.useState(initialText);

  

  function handleEditorChange(event){
    setEditorContent(event.target.value);

    

  }

  return (
    <div className="App">
      <textarea id="editor" onChange={handleEditorChange} value={editorContent} >

      </textarea>

      <section id="preview" dangerouslySetInnerHTML={{__html: marked(editorContent)}}/>
       
      

      
    </div>
  );
}

export default App;
