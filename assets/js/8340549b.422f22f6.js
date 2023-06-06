"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[543],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(a),d=n,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(k,l(l({ref:t},c),{},{components:a})):r.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const o={},l="Multiple Vectorstores",p={unversionedId:"multiple-vectorstores",id:"multiple-vectorstores",title:"Multiple Vectorstores",description:"A vector store agent collect data from a source, map the text to a vector space, store it in a vector database and search the vector database in natural language.",source:"@site/docs/multiple-vectorstores.md",sourceDirName:".",slug:"/multiple-vectorstores",permalink:"/new-lg-docs/multiple-vectorstores",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Serp API Tool",permalink:"/new-lg-docs/serp-api-tool"},next:{title:"Python Function",permalink:"/new-lg-docs/python-function"}},s={},i=[{value:"\u26d3\ufe0fLangFlow example",id:"\ufe0flangflow-example",level:3},{value:'<a target="_blank" href="json_files/Multiple_Vector_Stores.json" download>Download Flow</a>',id:"download-flow",level:4}],c={toc:i},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"multiple-vectorstores"},"Multiple Vectorstores"),(0,n.kt)("p",null,"A vector store agent collect data from a source, map the text to a vector space, store it in a vector database and search the vector database in natural language."),(0,n.kt)("p",null,"We can utilize the vector store to initialize an agent with multiple vector stores and leverage the agent for routing between them effortlessly."),(0,n.kt)("p",null,"Learn more about Multiple Vectorstores ",(0,n.kt)("a",{parentName:"p",href:"https://python.langchain.com/en/latest/modules/agents/toolkits/examples/vectorstore.html?highlight=Multiple%20Vector%20Stores#multiple-vectorstores"},"here"),"."),(0,n.kt)("p",null,"The flow shown below a working flow of a multiple vector store which is loading data from a URL and TXT file."),(0,n.kt)("h3",{id:"\ufe0flangflow-example"},"\u26d3\ufe0fLangFlow example"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Multiple Vectorstores",src:a(1353).Z,width:"1844",height:"946"})),(0,n.kt)("h4",{id:"download-flow"},(0,n.kt)("a",{target:"\\_blank",href:"json_files/Multiple_Vector_Stores.json",download:!0},"Download Flow")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TextLoader")," loads text from a file. Get the file used ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/chat-your-data/blob/master/state_of_the_union.txt"},"here"),"."),(0,n.kt)("p",null,"By using ",(0,n.kt)("inlineCode",{parentName:"p"},"WebBaseLoader"),", you can load all text from webpages into a document format that we can use downstream. Web path used:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"https://pt.wikipedia.org/wiki/Harry_Potter\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CharacterTextSplitter")," implements splitting text based on characters."),(0,n.kt)("p",null,"Text splitters operate as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Split the text into small, meaningful chunks (usually sentences).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Combine these small chunks into larger ones until they reach a certain size (measured by a function).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Once a chunk reaches the desired size, make it its piece of text and create a new chunk with some overlap to maintain context."))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Separator"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},".\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Chunk size"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"4000\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Chunk overlap"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"200\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"OpenAIEmbeddings"),", wrapper around ",(0,n.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/embeddings/what-are-embeddings"},"OpenAI Embeddings")," models. Make sure to get the API key from the LLM provider, in this case ",(0,n.kt)("a",{parentName:"p",href:"https://platform.openai.com/"},"OpenAI"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Chroma")," vector databases can be used as vector stores to conduct a semantic search or to select examples, thanks to a wrapper around them."),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"VectorStoreInfo")," set information about the vector store, such as the name and description."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"First VectorStoreInfo")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Name"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"State of the union.\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Description"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"State of the union text.\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Second VectorStoreInfo")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Name"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"Harry Potter Wikipedia.\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Description"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"Wikipedia about Harry Potter.\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"VectorStoreRouterAgent")," construct an agent that routes between multiple vectorstores."))}m.isMDXComponent=!0},1353:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/multiple-vectorstores-59177f66a207d20aa0add5b4f9f189b1.png"}}]);