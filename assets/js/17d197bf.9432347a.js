"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[682],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),f=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=f(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=f(t),c=o,d=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return t?n.createElement(d,l(l({ref:r},p),{},{components:t})):n.createElement(d,l({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=c;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var f=2;f<a;f++)l[f]=t[f];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5660:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>f});var n=t(7462),o=(t(7294),t(3905));const a={},l="Buffer Memory",i={unversionedId:"buffer-memory",id:"buffer-memory",title:"Buffer Memory",description:"The Conversation Buffer Memory stores messages and extracts them into variables.",source:"@site/docs/buffer-memory.md",sourceDirName:".",slug:"/buffer-memory",permalink:"/buffer-memory",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Conversation Chain",permalink:"/conversation-chain"},next:{title:"MidJourney Prompt Chain",permalink:"/midjourney-prompt-chain"}},s={},f=[{value:"\u26d3\ufe0fLangFlow example",id:"\ufe0flangflow-example",level:3},{value:'<a target="_blank" href="json_files/Buffer_Memory.json" download>Download Flow</a>',id:"download-flow",level:4}],p={toc:f},u="wrapper";function m(e){let{components:r,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"buffer-memory"},"Buffer Memory"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Conversation Buffer Memory")," stores messages and extracts them into variables."),(0,o.kt)("p",null,"Learn more about the Buffer Memory ",(0,o.kt)("a",{parentName:"p",href:"https://python.langchain.com/en/latest/modules/memory/types/buffer.html"},"here"),"."),(0,o.kt)("h3",{id:"\ufe0flangflow-example"},"\u26d3\ufe0fLangFlow example"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Buffer memory",src:t(1343).Z,width:"1844",height:"946"})),(0,o.kt)("h4",{id:"download-flow"},(0,o.kt)("a",{target:"\\_blank",href:"json_files/Buffer_Memory.json",download:!0},"Download Flow")),(0,o.kt)("p",null,"In this LangFlow example we used ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/"},(0,o.kt)("inlineCode",{parentName:"a"},"ChatOpenAI"))," as the LLM, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Conversation Chain")," as a chain. When you open the chat and start a conversation, it will take the message as input and return a response. LLM generates the response, and the conversation message will be store in the Buffer Memory."))}m.isMDXComponent=!0},1343:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/buffer-memory-be3fa7b9a04e6f6e915f6fe223079ee8.png"}}]);