(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[6179],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6158:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),c=["components"],i={title:"Listen to balance changes"},s={unversionedId:"api/examples/promise/listen-to-balance-change",id:"api/examples/promise/listen-to-balance-change",isDocsHomePage:!1,title:"Listen to balance changes",description:"This example shows how to instantiate a Polkadot API object and use it to connect to a node and retrieve balance updates.",source:"@site/docs/api/examples/promise/listen-to-balance-change.md",sourceDirName:"api/examples/promise",slug:"/api/examples/promise/listen-to-balance-change",permalink:"/docs/api/examples/promise/listen-to-balance-change",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/listen-to-balance-change.md",version:"current",frontMatter:{title:"Listen to balance changes"},sidebar:"reference",previous:{title:"Listen to new blocks",permalink:"/docs/api/examples/promise/listen-to-blocks"},next:{title:"Unsubscribe from listening to updates",permalink:"/docs/api/examples/promise/unsubscribe"}},l=[],p={toc:l};function u(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how to instantiate a Polkadot API object and use it to connect to a node and retrieve balance updates."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\n\n// Known account we want to use (available on dev chain, with funds)\nconst Alice = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';\n\nasync function main () {\n  // Create an await for the API\n  const api = await ApiPromise.create();\n\n  // Retrieve the initial balance. Since the call has no callback, it is simply a promise\n  // that resolves to the current on-chain value\n  let { data: { free: previousFree }, nonce: previousNonce } = await api.query.system.account(Alice);\n\n  console.log(`${Alice} has a balance of ${previousFree}, nonce ${previousNonce}`);\n  console.log(`You may leave this example running and start example 06 or transfer any value to ${Alice}`);\n\n  // Here we subscribe to any balance changes and update the on-screen value\n  api.query.system.account(Alice, ({ data: { free: currentFree }, nonce: currentNonce }) => {\n    // Calculate the delta\n    const change = currentFree.sub(previousFree);\n\n    // Only display positive value changes (Since we are pulling `previous` above already,\n    // the initial balance change will also be zero)\n    if (!change.isZero()) {\n      console.log(`New balance change of ${change}, nonce ${currentNonce}`);\n\n      previousFree = currentFree;\n      previousNonce = currentNonce;\n    }\n  });\n}\n\nmain().catch(console.error);\n")))}u.isMDXComponent=!0}}]);