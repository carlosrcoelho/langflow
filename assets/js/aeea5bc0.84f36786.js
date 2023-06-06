"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(r),f=o,h=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return r?n.createElement(h,p(p({ref:t},u),{},{components:r})):n.createElement(h,p({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5759:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={},p="Serp API Tool",l={unversionedId:"serp-api-tool",id:"serp-api-tool",title:"Serp API Tool",description:"The Serp API (Search Engine Results Page API) is an API that allows developers to scrape search engine results from various search engines such as Google, Bing, Yahoo, and more.",source:"@site/docs/serp-api-tool.md",sourceDirName:".",slug:"/serp-api-tool",permalink:"/serp-api-tool",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"CSV Loader",permalink:"/csv-loader"},next:{title:"Multiple Vectorstores",permalink:"/multiple-vectorstores"}},s={},i=[{value:"\u26d3\ufe0fLangFlow example",id:"\ufe0flangflow-example",level:3},{value:'<a target="_blank" href="json_files/SerpAPI_Tool.json" download>Download Flow</a>',id:"download-flow",level:4}],u={toc:i},c="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"serp-api-tool"},"Serp API Tool"),(0,o.kt)("p",null,"The Serp API (Search Engine Results Page API) is an API that allows developers to scrape search engine results from various search engines such as Google, Bing, Yahoo, and more."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Search")," is a useful engine to answer questions about current events. To use the Serp API, you first need to sign up ",(0,o.kt)("a",{parentName:"p",href:"https://serpapi.com/"},"Serp API")," for an API key on the provider's website."),(0,o.kt)("p",null,"Learn more about the Serp API ",(0,o.kt)("a",{parentName:"p",href:"https://python.langchain.com/en/latest/modules/agents/tools/examples/google_serper.html"},"here"),"."),(0,o.kt)("h3",{id:"\ufe0flangflow-example"},"\u26d3\ufe0fLangFlow example"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Serp API Tool",src:r(1099).Z,width:"1844",height:"946"})),(0,o.kt)("h4",{id:"download-flow"},(0,o.kt)("a",{target:"\\_blank",href:"json_files/SerpAPI_Tool.json",download:!0},"Download Flow")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZeroShotPrompt")," creates a prompt template for Zero-Shot Agent. You can set the ",(0,o.kt)("em",{parentName:"p"},"Prefix")," and ",(0,o.kt)("em",{parentName:"p"},"Suffix"),". The ",(0,o.kt)("em",{parentName:"p"},"Prefix")," is the text before the input text. The ",(0,o.kt)("em",{parentName:"p"},"Suffix")," is the text after the input text. In the example, we used the ",(0,o.kt)("em",{parentName:"p"},"default"),". You can find the ",(0,o.kt)("em",{parentName:"p"},"Format Instructions")," in the component for guidance."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LLMChain")," is a simple chain that takes in a prompt template, formats it with the user input, and returns the response from an LLM."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZeroShotAgent")," is an agent Agent for the MRKL chain. It uses a Zero Shot LLM to generate a response."),(0,o.kt)("p",null,"For this example, we used ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/"},(0,o.kt)("inlineCode",{parentName:"a"},"OpenAI"))," as the LLM."))}m.isMDXComponent=!0},1099:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/serp-api-tool-b38d0e5176369cf0760a022e345d43f2.png"}}]);