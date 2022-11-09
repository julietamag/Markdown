import React, { useState } from 'react'
import './App.css';
import { Previewer } from './Previewer/Previewer';
import { Editor } from './Editor/Editor'
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const initialValue = `# Heading level 1 
## Heading level 2
I just love **bold text**.
> Dorothy followed her through many of the beautiful rooms in her castle.
1. First item
1. Second item
1. Third item
1. Fourth item
* First item
* Second item
* Third item
* Fourth item
This is inline code \`<div></div>\`
This is a block of code
\`\`\`
    let x = 1;
    let y = 2;
 \`\`\`  
 ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).`
 
marked.setOptions({
  breaks: true
})

function App() {
  const [val, setVal] = useState(initialValue);

  const handleChange = (e) =>{
    setVal(e.target.value)
  }

  const toParse = marked.parse(val);
  const toParseSafe = DOMPurify.sanitize(toParse)


  return (
    <div className="App">
      <Editor onChange={handleChange} value={val} />
      <Previewer value={toParseSafe} />
    </div>
  );
}

export default App;
