"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[524],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return o?n.createElement(h,l(l({ref:t},c),{},{components:o})):n.createElement(h,l({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8115:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={},l="Guidelines",s={unversionedId:"guidelines",id:"guidelines",title:"Guidelines",description:"Component",source:"@site/docs/guidelines.md",sourceDirName:".",slug:"/guidelines",permalink:"/guidelines",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hugging Face Spaces",permalink:"/hugging-face-spaces"},next:{title:"How to Upload Examples?",permalink:"/how-upload-examples"}},i={},p=[{value:"Component",id:"component",level:2},{value:"Component&#39;s Features",id:"components-features",level:2},{value:"Features",id:"features",level:2},{value:"Code",id:"code",level:3},{value:"Import and Export",id:"import-and-export",level:3},{value:"Chat",id:"chat",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guidelines"},"Guidelines"),(0,r.kt)("h2",{id:"component"},"Component"),(0,r.kt)("p",null,"Components provide a convenient and straightforward way to work with language models."),(0,r.kt)("p",null,"For example, component agents can refer to an entity capable of performing actions or making decisions autonomously or on behalf of someone or something else. "),(0,r.kt)("p",null,"Learn more about the components and how they work in the LangChain ",(0,r.kt)("a",{parentName:"p",href:"https://docs.langchain.com/docs/category/components"},"documentation")," section."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"components-features"},"Component's Features"),(0,r.kt)("p",null,"During the flow creation process, you will notice a colored circle next to the component. For example, if you select ",(0,r.kt)("inlineCode",{parentName:"p"},"ConversationChain")," you will see an orange ",(0,r.kt)("span",{style:{color:"orange"}},"o")," and purple ",(0,r.kt)("span",{style:{color:"purple"}},"o")," circles. It means that this component accepts that type of connection."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Single Compenent",src:o(8662).Z,width:"540",height:"408"})),(0,r.kt)("p",null,"Components marked with a red asterisk ",(0,r.kt)("span",{style:{color:"red"}},"*")," means that you must connect another component to make it work. If you don't, the icon ball close to the trash can icon \ud83d\uddd1\ufe0f will keep red. Make the necessary connections to make your flow work, and the icon ball will become green. Hovering over the small circle will reveal the component that needs to be connected."),(0,r.kt)("p",null,"In some components, at the top of it, you will see a small gear icon \u2699\ufe0f, which you can click to edit the parameters. You also have the option to delete it by clicking the trash can icon \ud83d\uddd1\ufe0f."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"In the top right corner of the screen, there are some features that you can use, such as ",(0,r.kt)("strong",{parentName:"p"},"Code"),", ",(0,r.kt)("strong",{parentName:"p"},"Import"),", ",(0,r.kt)("strong",{parentName:"p"},"Export"),", ",(0,r.kt)("strong",{parentName:"p"},"Dark Mode"),", and ",(0,r.kt)("strong",{parentName:"p"},"Notification"),", as you can see in the image below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feature",src:o(2359).Z,width:"341",height:"36"})),(0,r.kt)("p",null,"Further down, we will explain each of these features."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("p",null,'The API Access feature allows you to export your flow from the platform and utilize it with your own code. You can use "Python API"  and "Python Code" as follow.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Python API Tab:")),(0,r.kt)("p",null,"The code snippet is a Python script that makes a POST request to a local API endpoint to get a prediction based on a message input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'import requests\nimport json\n\nAPI_URL = "http://localhost:3000/predict"\n\ndef predict(message):\n    with open("New Flow.json", "r") as f:\n        json_data = json.load(f)\n    payload = {\'exported_flow\': json_data, \'message\': message}\n    response = requests.post(API_URL, json=payload)\n    return response.json() # JSON {"result": "Response"}\n\nprint(predict("Your message"))\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Python Code Tab:")),(0,r.kt)("p",null,"You can load a flow from a JSON file and then applying the loaded flow to a given input text."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'from langflow import load_flow_from_json\n\nflow = load_flow_from_json("New Flow.json")\n# Now you can use it like any chain\nflow("Hey, have you heard of LangFlow?")\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"import-and-export"},"Import and Export"),(0,r.kt)("p",null,"Flows can be exported and imported as JSON files. We already have some examples on the ",(0,r.kt)("strong",{parentName:"p"},"Import")," option. Check them out."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Export")," option allows you to export your created flow. Then you can set a name and description to it. You can select to save the file with your API keys or not."),(0,r.kt)("p",null,"If you want to contribute, send us a pull request on our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/logspace-ai/langflow_examples"},"GitHub langflow_examples")," repo. Please make sure that your example follows the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/logspace-ai/langflow/blob/dev/CODE_OF_CONDUCT.md"},"LangFlow code of conduct"),". If your example uses any third-party libraries or packages, please include them in your PR. "),(0,r.kt)("p",null,"Additionally, you can opt for a dark \ud83c\udf19 or light \u2600\ufe0f background. The bell icon \ud83d\udd14 indicates that the component has a notification."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"chat"},"Chat"),(0,r.kt)("p",null,"A chat icon \ud83d\udcac located in the bottom right corner of the screen allows you to chat. When you click over \ud83d\udcac a new screen will pop up. You can start a conversation by typing in the text box and pressing enter. The chat will respond to your message. You will also see an eraser icon. Clicking on it will clear the chat history."))}m.isMDXComponent=!0},2359:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"},8662:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/single-compenent-d793c2bb5f8032ac07fc34307e7a1438.png"}}]);