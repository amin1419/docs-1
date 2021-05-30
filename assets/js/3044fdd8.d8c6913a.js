(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[31],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4571:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={title:"FAQ"},c={unversionedId:"api-contract/FAQ",id:"api-contract/FAQ",isDocsHomePage:!1,title:"FAQ",description:"The list will be updated/expanded as questions come up, dealing with some common issues that API users find.",source:"@site/docs/api-contract/FAQ.md",sourceDirName:"api-contract",slug:"/api-contract/FAQ",permalink:"/docs/api-contract/FAQ",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/FAQ.md",version:"current",frontMatter:{title:"FAQ"},sidebar:"reference",previous:{title:"Contract Tx",permalink:"/docs/api-contract/start/contract.tx"},next:{title:"Overview",permalink:"/docs/ui-identicon"}},l=[{value:"My ABI cannot be parsed",id:"my-abi-cannot-be-parsed",children:[]},{value:"After upgrading to 2.5+ I&#39;m missing isSuccess/isError",id:"after-upgrading-to-25-im-missing-issuccessiserror",children:[]},{value:"Why is there a snake_case vs camelCase difference",id:"why-is-there-a-snake_case-vs-camelcase-difference",children:[]},{value:"How do I subscribe to a contract query?",id:"how-do-i-subscribe-to-a-contract-query",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The list will be updated/expanded as questions come up, dealing with some common issues that API users find."),(0,i.kt)("h2",{id:"my-abi-cannot-be-parsed"},"My ABI cannot be parsed"),(0,i.kt)("p",null,'When passing an older pre ink! 3.0-rc1 version of the ABI, you will have an "Invalid JSON ABI structure supplied, expected a recent metadata version" error being returned. As explained in the ',(0,i.kt)("a",{parentName:"p",href:"/docs/api-contract/start/install"},"getting started guide")," as of ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api-contract")," 2.2+ the older ink! 2.1 versions are not supported."),(0,i.kt)("p",null,"If you are using an older version you would need to use an older version of the API or upgrade your contracts to ink! 3.0."),(0,i.kt)("h2",{id:"after-upgrading-to-25-im-missing-issuccessiserror"},"After upgrading to 2.5+ I'm missing isSuccess/isError"),(0,i.kt)("p",null,"In earlier versions of Substrate the call results via read had a slightly different interface to what it available now. Specifically on the ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," structure retrieved via read calls ",(0,i.kt)("inlineCode",{parentName:"p"},"isOk")," was named ",(0,i.kt)("inlineCode",{parentName:"p"},"isSuccess")," (and ",(0,i.kt)("inlineCode",{parentName:"p"},"isErr")," was named ",(0,i.kt)("inlineCode",{parentName:"p"},"isError"),"). Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"Contract")," interface follows the Substrate convention these changes to ",(0,i.kt)("inlineCode",{parentName:"p"},"is{Ok,Err}")," has been applied alongside the Substrate update to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractExecResult")," structure."),(0,i.kt)("p",null,"In addition ",(0,i.kt)("inlineCode",{parentName:"p"},"asErr")," (unlike the older ",(0,i.kt)("inlineCode",{parentName:"p"},"asError"),") now also has a full error enum (mapping to ",(0,i.kt)("inlineCode",{parentName:"p"},"DispatchError"),") containing failures, unlike the older interface where this was not available. On older chains due to lack of information this will always be ",(0,i.kt)("inlineCode",{parentName:"p"},"Other"),", while on newer chains the result will be fully populated."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Contract")," interface, despite these underlying naming changes, transparently maps older responses (on older, not yet upgraded chains) to the newer structure, so while there is an change to the JS code use required to cater for this new structure, it can be used against both old and new chains with a transparent mapping between."),(0,i.kt)("h2",{id:"why-is-there-a-snake_case-vs-camelcase-difference"},"Why is there a snake_case vs camelCase difference"),(0,i.kt)("p",null,"The API always tries to use ",(0,i.kt)("inlineCode",{parentName:"p"},"camelCase")," naming where available. This aligns with the de-facto standards that are generally (not always!) used in JS interfaces. This means that when decorating the ABIs into ",(0,i.kt)("inlineCode",{parentName:"p"},"contract.<query|tx>.methodName")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"methodName")," part would be in camelCase format."),(0,i.kt)("p",null,"An example of this would be in the erc20 ink! ABI - the method in the above would be ",(0,i.kt)("inlineCode",{parentName:"p"},"balance_of")," however the API (for consistency with the full suite of libraries), decorate this as ",(0,i.kt)("inlineCode",{parentName:"p"},"contract.query.balanceOf"),". When calling the ",(0,i.kt)("inlineCode",{parentName:"p"},".read")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".exec")," directly on the contract, you can still specify the original ABI identifier, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"contract.read('balance_of', ...)"),"."),(0,i.kt)("h2",{id:"how-do-i-subscribe-to-a-contract-query"},"How do I subscribe to a contract query?"),(0,i.kt)("p",null,"Subscriptions, and queries to the raw storage are on their way! Unfortunately until then there isn't a proper way to subscribe to a contract query. A temporary workaround is to subscribe to ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query.contracts.contractInfoOf"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const unsub = await api.query.contracts.contractInfoOf(contractAddress, async () => {\n    // Perform a read of the contract's `get` message\n    const callValue = await contract.query.get(alicePair.address, value, gasLimit);\n\n    // Do something with callValue\n  });\n")),(0,i.kt)("p",null,"But this workaround is not without drawbacks. Since the callback will be executed every time the contract's storage is affected you will ultimately end up calling your contract query more often than necessary."))}p.isMDXComponent=!0}}]);