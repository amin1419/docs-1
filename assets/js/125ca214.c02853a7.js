(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[4957],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6553:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),s=["components"],o={title:"RPC queries"},l={unversionedId:"api/start/api.rpc",id:"api/start/api.rpc",isDocsHomePage:!1,title:"RPC queries",description:"The RPC calls provide the backbone for the transmission of data to and from the node. This means that all API endpoints such as api.query, api.tx or api.derive just wrap RPC calls, providing information in the encoded format as expected by the node.",source:"@site/docs/api/start/api.rpc.md",sourceDirName:"api/start",slug:"/api/start/api.rpc",permalink:"/docs/api/start/api.rpc",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/api.rpc.md",version:"current",frontMatter:{title:"RPC queries"},sidebar:"reference",previous:{title:"State queries",permalink:"/docs/api/start/api.query"},next:{title:"Query subscriptions",permalink:"/docs/api/start/api.query.subs"}},c=[{value:"Subscriptions",id:"subscriptions",children:[]},{value:"Detour into derives",id:"detour-into-derives",children:[]},{value:"Extended Queries",id:"extended-queries",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The RPC calls provide the backbone for the transmission of data to and from the node. This means that all API endpoints such as ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"api.tx")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"api.derive")," just wrap RPC calls, providing information in the encoded format as expected by the node."),(0,i.kt)("p",null,"Since you are already familiar with the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query")," interface, the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.rpc")," interface follows the same format, for instance -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n// Retrieve the chain name\nconst chain = await api.rpc.system.chain();\n\n// Retrieve the latest header\nconst lastHeader = await api.rpc.chain.getHeader();\n\n// Log the information\nconsole.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);\n")),(0,i.kt)("p",null,"In this example, you will see the same pattern as with queries: each result is a promise and a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," makes the query and resolves with the result."),(0,i.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,i.kt)("p",null,"The RPCs lend themselves to using subscriptions, for instance in the above case you would assume that once connected, the chain won't change, however new blocks will come in at intervals and we probably want to keep track of those. We can adapt the previous example to start using subscriptions -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n// Subscribe to the new headers\nawait api.rpc.chain.subscribeNewHeads((lastHeader) => {\n  console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);\n});\n")),(0,i.kt)("p",null,"Since we are dealing with a subscription, we now pass a callback into the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribeNewHeads")," function, and this will be triggered on each header, as they are imported. The same pattern would apply to each of the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.rpc.subscribe*")," functions - as a last parameter a callback is to be provided that streams the latest data, as it becomes available."),(0,i.kt)("p",null,"In general, whenever we create a subscription, we would like to cleanup after ourselves and unsubscribe, so assuming we only want to log the first 10 headers, the above example can be adjusted in the following manner -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nlet count = 0;\n\n// Subscribe to the new headers\nconst unsubHeads = await api.rpc.chain.subscribeNewHeads((lastHeader) => {\n  console.log(`${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`);\n\n  if (++count === 10) {\n    unsubHeads();\n  }\n});\n")),(0,i.kt)("p",null,"Unlike single-shot queries, for subscriptions we are ",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"-ing a function, taking no parameters (that also returns nothing) that can be used to unsubscribe for the subscription and clear the underlying RPC connection. So in the above example we set ",(0,i.kt)("inlineCode",{parentName:"p"},"unsubHeads")," and then call it when we wish to cancel the subscription."),(0,i.kt)("h2",{id:"detour-into-derives"},"Detour into derives"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"api.derive")," interfaces will be covered in a follow-up section, but since the above example deals with new head subscriptions, a quick detour is warranted. The derives are just helpers that define certain functions and combine results from multiple sources. For new headers, the following information is useful in certain scenarios -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst unsub = await api.derive.chain.subscribeNewHeads((lastHeader) => {\n  console.log(`#${lastHeader.number} was authored by ${lastHeader.author}`);\n});\n")),(0,i.kt)("p",null,"In the above case the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribeNewHeads")," derive augments the header retrieved with an ",(0,i.kt)("inlineCode",{parentName:"p"},".author")," getter. This is done by parsing the actual header and logs received and filling in the author from the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query.session.validators")," call."),(0,i.kt)("h2",{id:"extended-queries"},"Extended Queries"),(0,i.kt)("p",null,"As a next step, now that we have understood subscription and RPC basics, we will circle back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query")," interface, ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/start/api.query.subs"},"extending our queries with subscriptions"),"."))}u.isMDXComponent=!0}}]);