(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[4451],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5199:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"Overview",slug:"/api/start"},l={unversionedId:"api/start/intro",id:"api/start/intro",isDocsHomePage:!1,title:"Overview",description:'These sections should provide you with all the information needed to install the @polkadot/api package, understand the structure of the interfaces and allow you to start using it. For existing users this really should be titled "Things I wish I knew before I started using the api" - it really aims to close the gap to allow anybody to get to grips with using the packages.',source:"@site/docs/api/start/intro.md",sourceDirName:"api/start",slug:"/api/start",permalink:"/docs/api/start",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/intro.md",version:"current",frontMatter:{title:"Overview",slug:"/api/start"},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/api"},next:{title:"Installation",permalink:"/docs/api/start/install"}},p=[{value:"ES2015 Usage and examples",id:"es2015-usage-and-examples",children:[]},{value:"What this is not",id:"what-this-is-not",children:[]},{value:"Help us help others",id:"help-us-help-others",children:[]},{value:"Ready? Steady? Go!",id:"ready-steady-go",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These sections should provide you with all the information needed to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/api"),' package, understand the structure of the interfaces and allow you to start using it. For existing users this really should be titled "Things I wish I knew before I started using the api" - it really aims to close the gap to allow anybody to get to grips with using the packages.'),(0,o.kt)("p",null,"We are basing all our examples on the ",(0,o.kt)("a",{parentName:"p",href:"/api/examples/promise"},"ApiPromise")," version of the API, however there is also an RxJS version available. Since Promises are a part of the ES2015 specification, it covers the greater amount of use and is the one that will be used in 95% of the cases and should be familiar to 100% of all developers."),(0,o.kt)("p",null,"For now... just ignore the various flavors and focus on understanding the concepts."),(0,o.kt)("h2",{id:"es2015-usage-and-examples"},"ES2015 Usage and examples"),(0,o.kt)("p",null,"Before we jump into the guide, be aware that in all cases we are using ES2015, including using things like ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"await"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," and others. Depending on your environment, this may require some adjustments."),(0,o.kt)("p",null,"While we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," naked in all examples (this removes boilerplate and allows us to focus on the actual libraries), and unless your environment supports top-level await, it will need to be wrapped in an ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," block. So basically to make it run-able we should wrap all samples inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"async function main () { ... }")," and then just call ",(0,o.kt)("inlineCode",{parentName:"p"},"main().then(() => console.log('completed'))"),"."),(0,o.kt)("p",null,"In the case of Node.js you would change the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"require"),", i.e."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Import\nconst { ApiPromise, WsProvider } = require('@polkadot/api');\n...\n")),(0,o.kt)("p",null,"While Node.js versions ",(0,o.kt)("inlineCode",{parentName:"p"},">=12")," support the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," syntax, we are only exporting CommonJS modules, hence the need for require."),(0,o.kt)("h2",{id:"what-this-is-not"},"What this is not"),(0,o.kt)("p",null,"This is not line-by-line documentation of all the existing function calls available, nor it is tied to a specific chain. (Although the examples do refer to the base Polkadot & Substrate chains). There will be some things in the API that are probably not covered, which brings us to the next point..."),(0,o.kt)("h2",{id:"help-us-help-others"},"Help us help others"),(0,o.kt)("p",null,"If you spot gaps in the information provided, or are uncertain about any specific area, please do ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/docs/issues"},"log an issue")," or if you are that way inclined, make a pull-request. We really want to have good documentation in these areas and allow people to be productive right from the start."),(0,o.kt)("h2",{id:"ready-steady-go"},"Ready? Steady? Go!"),(0,o.kt)("p",null,"If you already have a good grasp on the API and are just looking for a specific answer, you may want to take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/FAQ"},"Frequently Asked Questions"),". With all that said, let's get started... ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/start/install"},"What should be installed, and how should we do it?")))}d.isMDXComponent=!0}}]);