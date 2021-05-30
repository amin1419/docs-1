(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[9610],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,m=h["".concat(d,".").concat(u)]||h[u]||p[u]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9724:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o=["components"],s={title:"Keyring"},d={unversionedId:"api/start/keyring",id:"api/start/keyring",isDocsHomePage:!1,title:"Keyring",description:"This section will give a quick introduction into the Keyring, including the addition of accounts, retrieving pairs and the signing of any data. Unlike the rest of the API, only the core concepts will be covered with the most-used-functions. However, what is covered is enough for 99.9 of the use-cases ... or rather, that is the aim.",source:"@site/docs/api/start/keyring.md",sourceDirName:"api/start",slug:"/api/start/keyring",permalink:"/docs/api/start/keyring",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/keyring.md",version:"current",frontMatter:{title:"Keyring"},sidebar:"reference",previous:{title:"Transactions",permalink:"/docs/api/start/api.tx"},next:{title:"Transaction subscriptions",permalink:"/docs/api/start/api.tx.subs"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Creating a keyring instance",id:"creating-a-keyring-instance",children:[]},{value:"Adding accounts",id:"adding-accounts",children:[]},{value:"Adding accounts with raw seeds",id:"adding-accounts-with-raw-seeds",children:[]},{value:"Working with pairs",id:"working-with-pairs",children:[]},{value:"Back to transactions",id:"back-to-transactions",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section will give a quick introduction into the Keyring, including the addition of accounts, retrieving pairs and the signing of any data. Unlike the rest of the API, only the core concepts will be covered with the most-used-functions. However, what is covered is enough for 99.9 of the use-cases ... or rather, that is the aim."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/common/tree/master/packages/keyring"},"@polkadot/keyring")," keyring is included directly with the API as a dependency, so it is directly importable (since the 0.92 version) alongside the API."),(0,r.kt)("p",null,"If you do opt to install it separately, ensure that the version of ",(0,r.kt)("inlineCode",{parentName:"p"},"@polkadot/util-crypto")," that is included with the API matches with the version of ",(0,r.kt)("inlineCode",{parentName:"p"},"@polkadot/keyring")," installed. So if the API depends on ",(0,r.kt)("inlineCode",{parentName:"p"},"util-crypto 1.4.1"),", it would make sense to include ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring 1.4.1")," as the installed version. (This helps in making sure extra versions of the libraries are not included as duplicates, especially in the case where bundles are created. Additionally, this makes sure that weird side-effects in the WASM initialization is avoided.)"),(0,r.kt)("h2",{id:"creating-a-keyring-instance"},"Creating a keyring instance"),(0,r.kt)("p",null,"Once installed, you can create an instance by just creating an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyring")," class -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Import the keyring as required\nimport { Keyring } from '@polkadot/api';\n\n// Initialize the API as we would normally do\n...\n\n// Create a keyring instance\nconst keyring = new Keyring({ type: 'sr25519' });\n")),(0,r.kt)("p",null,"In the above example, the import is self-explanatory. Upon creation we pass through a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," which can have a value of either ",(0,r.kt)("inlineCode",{parentName:"p"},"ed25519")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sr25519"),", when not specified this would default to ",(0,r.kt)("inlineCode",{parentName:"p"},"ed25519"),". This type parameter only applies to the default type of account created when no type is specified, it does not mean that the keyring can only store that type of account."),(0,r.kt)("p",null,"So effectively, when creating an account and not specifying a type, it will be ",(0,r.kt)("inlineCode",{parentName:"p"},"sr25519")," by default based on the above construction params, however we can also add an ",(0,r.kt)("inlineCode",{parentName:"p"},"ed25519")," account and use it transparently in the same keyring."),(0,r.kt)("p",null,'One "trick" that is done implicitly in the above sample is that that keyring is only initialized after the API. In the case of ',(0,r.kt)("inlineCode",{parentName:"p"},"sr25519")," the keyring relies on a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/wasm"},"WASM build")," of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/schnorrkel"},"schnorrkel libraries"),". Since the API inlitialization is already async, it initializes the ",(0,r.kt)("a",{parentName:"p",href:"/docs/util-crypto/FAQ#i-am-having-trouble-initializing-the-wasm-interface"},"WASM libraries")," as part of the setup."),(0,r.kt)("h2",{id:"adding-accounts"},"Adding accounts"),(0,r.kt)("p",null,"The recommended catch-all approach to adding accounts is via ",(0,r.kt)("inlineCode",{parentName:"p"},".addFromUri(<suri>, [meta], [type])")," function, where only the ",(0,r.kt)("inlineCode",{parentName:"p"},"suri")," param is required. For instance to add an account via mnemonic, you would do the following -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n// Some mnemonic phrase\nconst PHRASE = 'entire material egg meadow latin bargain dutch coral blood melt acoustic thought';\n\n// Add an account, straight mnemonic\nconst newPair = keyring.addFromUri(PHRASE);\n\n// (Advanced) add an account with a derivation path (hard & soft)\nconst newDeri = keyring.addFromUri(`${PHRASE}//hard-derived/soft-derived`);\n\n// (Advanced, development-only) add with an implied dev seed and hard derivation\nconst alice = keyring.addFromUri('//Alice', { name: 'Alice default' });\n")),(0,r.kt)("p",null,"The above additions cater for most of the use cases and aligns with the you would find in the Substrate ",(0,r.kt)("inlineCode",{parentName:"p"},"subkey"),'. Be very wary of the last "dev-seed" option, it is explicitly added for ',(0,r.kt)("inlineCode",{parentName:"p"},"subkey"),' compatibility and implies using the "known-everywhere" dev seed. It is however useful when running Polkadot/Substrate with a ',(0,r.kt)("inlineCode",{parentName:"p"},"--dev")," flag."),(0,r.kt)("h2",{id:"adding-accounts-with-raw-seeds"},"Adding accounts with raw seeds"),(0,r.kt)("p",null,"Since mnemonics are recommended and the defacto standard for current Polkadot/Substrate generations, the only mentioned way of adding keys thus far has been via mnemonic. However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"addFromUri")," method on the keyring is intelligent enough to detect and add from inputs specified as mnemonics, hex seeds and string seeds (appropriately padded)."),(0,r.kt)("p",null,"With the above in mind, we could extend our examples above for custom raw seed. For instance to add both a hex and string seed, we can follow the following approach -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\n// add a hex seed, 32-characters in length\nconst hexPair = keyring.addFromUri('0x1234567890123456789012345678901234567890123456789012345678901234');\n\n// add a string seed, internally this is padded with ' ' to 32-bytes in length\nconst strPair = keyring.addFromUri('Janice');\n")),(0,r.kt)("p",null,"You could extend derivation from these specified seeds with derivation paths if applicable, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"Janice//hard")," will perform a hard derivation with the path ",(0,r.kt)("inlineCode",{parentName:"p"},"hard")," on the pair that is generated from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Janice")," seed. As far as possible, try to stick with mnemonics in your applications, unless you have a good reason to not do so. Humans are generally bad at generating their own entropy and mnemonics has additional properties such as built-in checksums."),(0,r.kt)("h2",{id:"working-with-pairs"},"Working with pairs"),(0,r.kt)("p",null,"In the previous examples we added a pair to the keyring (and we actually immediately got access to the pair). From this pair there is some information we can retrieve -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n// Add our Alice dev account\nconst alice = keyring.addFromUri('//Alice', { name: 'Alice default' });\n\n// Log some info\nconsole.log(`${alice.meta.name}: has address ${alice.address} with publicKey [${alice.publicKey}]`);\n")),(0,r.kt)("p",null,"Additionally you can sign and verify using the pairs. This is the same internally to the API when constructing transactions -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Some helper functions used here\nimport { stringToU8a, u8aToHex } from '@polkadot/util';\n\n...\n\n// Convert message, sign and then verify\nconst message = stringToU8a('this is our message');\nconst signature = alice.sign(message);\nconst isValid = alice.verify(message, signature);\n\n// Log info\nconsole.log(`The signature ${u8aToHex(signature)}, is ${isValid ? '' : 'in'}valid`);\n")),(0,r.kt)("p",null,"This covers the keyring basics, however there are two additional functions here of interest, ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring.getPairs()")," to retrieve a list of all pairs in the keyring and ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring.getPair(<address or publicKey>)")," to retrieve a pair where we have an identifier."),(0,r.kt)("h2",{id:"back-to-transactions"},"Back to transactions"),(0,r.kt)("p",null,"Now that we have short introduction to the keyring, we can move back to API transactions and find out ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/start/api.tx.subs"},"how to subscribe and track events"),", taking our management of transactions to the next level."))}p.isMDXComponent=!0}}]);