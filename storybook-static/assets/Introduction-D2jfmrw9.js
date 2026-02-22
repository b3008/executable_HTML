import{j as e}from"./jsx-runtime-xrKziPlz.js";import{r as l,M as d}from"./index-DuX6iVfj.js";import{u as a}from"./index-7wJ7cBts.js";import"./iframe-DEer1LHX.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";const o=({html:s})=>{const n=Object.assign({div:"div"},a()),t=l.useRef(null);return l.useEffect(()=>{if(!t.current)return;t.current.innerHTML=s;const i=t.current;i.addEventListener("sessionEndEvent",()=>{const r=i.querySelector("aa-sequence");if(r){for(;r.firstChild;)r.firstChild.remove();r.sIndex=0,r.start()}})},[s]),e.jsx(n.div,{ref:t})};function c(s){const n=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",code:"code",pre:"pre",h3:"h3"},a(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"executable-html",children:"Executable HTML"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Build interactive surveys, questionnaires, and experiments using just HTML."})}),`
`,e.jsxs(n.p,{children:[`Executable HTML is a library of custom web components that turn static HTML into interactive, sequential experiences. Instead of writing JavaScript to manage state, control flow, and data collection, you describe your entire application declaratively with HTML tags.
For a more detailed explanation of the rationale, please visit `,e.jsx(n.a,{href:"https://executablehtmldocs.roboticbit.nl/",target:"_blank",rel:"nofollow noopener noreferrer",children:"its documentation"}),", read ",e.jsx(n.a,{href:"https://link.springer.com/article/10.3758/s13428-018-1148-y",target:"_blank",rel:"nofollow noopener noreferrer",children:"the paper describing its motivation"}),` or read
`,e.jsx(n.a,{href:"https://www.sciencedirect.com/science/article/pii/S2352711021000364",target:"_blank",rel:"nofollow noopener noreferrer",children:"the paper describing its implementation"})]}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsxs(n.p,{children:["Wrap your content in an ",e.jsx(n.code,{children:"aa-session"}),", define a sequence of screens, and the framework handles the rest — progression, data collection, branching logic, and storage."]}),`
`,e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsx("div",{style:{flex:1},children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<aa-session name="my-survey">
  <aa-sequence>
    <aa-screen submit-button-text="Next">
      <aa-label>How are you feeling?</aa-label>
      <aa-slider name="mood" min="0" max="100"
        min-label="Bad" max-label="Great">
      </aa-slider>
    </aa-screen>
    <aa-screen submit-button-text="Next">
      <aa-label>How much do you agree?</aa-label>
      <aa-likert-scale name="agreement" items="5"
        start-label="Strongly Disagree"
        middle-label="Neutral"
        end-label="Strongly Agree"
        show-radio-numbers 
        number-position="right"></aa-likert-scale>
    </aa-screen>
    <aa-screen submit-button-text="Done">
      <aa-label>Thank you!</aa-label>
    </aa-screen>
  </aa-sequence>
</aa-session>
`})})}),e.jsx("div",{style:{marginTop:"1.51rem",flex:1,border:"1px solid #e0e0e0",borderRadius:"8px",padding:"1rem"},children:e.jsx(o,{html:`<aa-session name="intro-demo">
      <aa-sequence>
        <aa-screen submit-button-text="Next">
          <aa-label>How are you feeling?</aa-label>
          <aa-slider name="mood" min="0" max="100" min-label="Bad" max-label="Great"></aa-slider>
        </aa-screen>
        <aa-screen submit-button-text="Next">
          <aa-label>How much do you agree?</aa-label>
          <aa-likert-scale name="agreement" items="5" start-label="Strongly Disagree" middle-label="Neutral" end-label="Strongly Agree" show-radio-numbers number-position="right"></aa-likert-scale>
        </aa-screen>
        <aa-screen submit-button-text="Done">
          <aa-label>Thank you!</aa-label>
        </aa-screen>
      </aa-sequence>
    </aa-session>`})})]}),`
`,e.jsx(n.h2,{id:"components",children:"Components"}),`
`,e.jsx(n.h3,{id:"session--data",children:"Session & Data"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Component"}),e.jsx("th",{children:"Purpose"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-session"})}),e.jsx("td",{children:"Top-level container that manages memory and data collection"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-variable"})}),e.jsx("td",{children:"Declares a named variable with a value"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-memory"})}),e.jsx("td",{children:"Underlying storage layer (localStorage)"})]})]})]}),`
`,e.jsx(n.h3,{id:"control-flow",children:"Control Flow"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Component"}),e.jsx("th",{children:"Purpose"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-sequence"})}),e.jsx("td",{children:"Executes child elements one after another"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"aa-choose"})," / ",e.jsx("code",{children:"aa-when"})," / ",e.jsx("code",{children:"aa-otherwise"})]}),e.jsx("td",{children:"Conditional branching based on expressions"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-jump"})}),e.jsx("td",{children:"Jump to a named step within a sequence"})]})]})]}),`
`,e.jsx(n.h3,{id:"user-interface",children:"User Interface"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Component"}),e.jsx("th",{children:"Purpose"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-screen"})}),e.jsx("td",{children:"A page/step with a submit button that collects values"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-label"})}),e.jsx("td",{children:"Display text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-slider"})}),e.jsx("td",{children:"Numeric slider input"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"aa-multiple-choice"})," / ",e.jsx("code",{children:"aa-choice-item"})]}),e.jsx("td",{children:"Single-select choice"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-checkboxes"})}),e.jsx("td",{children:"Multi-select checkboxes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-text-answer"})}),e.jsx("td",{children:"Free text input"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-likert-scale"})}),e.jsx("td",{children:"Likert scale rating"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-affect-grid"})}),e.jsx("td",{children:"2D affect/emotion grid"})]})]})]}),`
`,e.jsx(n.h3,{id:"utilities",children:"Utilities"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Component"}),e.jsx("th",{children:"Purpose"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-function-random"})}),e.jsx("td",{children:"Generate random values"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aa-geolocation"})}),e.jsx("td",{children:"Capture device location"})]})]})]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install executable_html
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import "executable_html";
`})}),`
`,e.jsx(n.p,{children:"All custom elements are automatically registered. Just write HTML."}),`
`,e.jsx(n.h2,{id:"explore",children:"Explore"}),`
`,e.jsx(n.p,{children:"Browse the components in the sidebar to see live examples and source code."})]})}function y(s={}){const{wrapper:n}=Object.assign({},a(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(c,s)})):c(s)}export{o as LiveDemo,y as default};
