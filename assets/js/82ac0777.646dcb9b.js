(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[8269],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||s;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4074:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var a=n(2122),i=n(9756),s=(n(7294),n(3905)),o=["components"],r={title:"Extending types"},p={unversionedId:"api/start/types.extend",id:"api/start/types.extend",isDocsHomePage:!1,title:"Extending types",description:"Circling back to metadata, by default the metadata information (at this point in time), only returns the type names as they apply to any section, be it a call, event or query. As an example, this means that transfers are defined as balances.transfer(AccountId, Balance) with no details as to the mapping of the Balance type to a u128. (The underlying Polkadot/Substrate default)",source:"@site/docs/api/start/types.extend.md",sourceDirName:"api/start",slug:"/api/start/types.extend",permalink:"/docs/api/start/types.extend",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/types.extend.md",version:"current",frontMatter:{title:"Extending types"},sidebar:"reference",previous:{title:"Type basics",permalink:"/docs/api/start/types.basics"},next:{title:"rpc.custom",permalink:"/docs/api/start/rpc.custom"}},l=[{value:"Extension",id:"extension",children:[]},{value:"Field ordering",id:"field-ordering",children:[]},{value:"User-defined structs",id:"user-defined-structs",children:[]},{value:"Definition clashes",id:"definition-clashes",children:[]},{value:"Type clashes",id:"type-clashes",children:[]},{value:"User-defined enum",id:"user-defined-enum",children:[]},{value:"Node and chain-specific types",id:"node-and-chain-specific-types",children:[]},{value:"Impact on extrinsics",id:"impact-on-extrinsics",children:[]},{value:"Custom RPC",id:"custom-rpc",children:[]}],d={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Circling back to metadata, by default the metadata information (at this point in time), only returns the type names as they apply to any section, be it a call, event or query. As an example, this means that transfers are defined as ",(0,s.kt)("inlineCode",{parentName:"p"},"balances.transfer(AccountId, Balance)")," with no details as to the mapping of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Balance")," type to a ",(0,s.kt)("inlineCode",{parentName:"p"},"u128"),". (The underlying Polkadot/Substrate default)"),(0,s.kt)("p",null,"Therefore to cater for all types, a mapping is done in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api/tree/master/packages/types/src/interfaces"},"@polkadot/types library")," to define each of the types and align with their underlying structures as it maps to a default Polkadot or Substrate chain."),(0,s.kt)("p",null,"Additionally, the API contains some logic for chain type detection, for instance in the case of Substrate 1.x based chains, it will define ",(0,s.kt)("inlineCode",{parentName:"p"},"BlockNumber")," & ",(0,s.kt)("inlineCode",{parentName:"p"},"Index")," (nonce) as a ",(0,s.kt)("inlineCode",{parentName:"p"},"u64"),", while for current-generation chains, these will be defined as ",(0,s.kt)("inlineCode",{parentName:"p"},"u32"),". Some of the work in maintaining the API for Polkadot/Substrate is the addition of types as they appear and gets used in the Rust codebase."),(0,s.kt)("h2",{id:"extension"},"Extension"),(0,s.kt)("p",null,"As a blockchain toolkit, Substrate makes it easy to add your own modules and types. In most non-trivial implementations, this would mean that developers are adding specific types for their implementation as well. The API will get to know the names of these types via the metadata, however it won't understand what they are, which means it cannot encode or decode them. Additionally, when a type is mismatched between the node and the API, the decoding can fail, yielding issues such as ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/FAQ#the-node-returns-a-could-not-convert-error-on-send"},"Could not convert errors")," when submitting transactions."),(0,s.kt)("p",null,"To close this gap, the API allows for the injection of types, i.e. you can explicitly define (or override) types for the node/chain you are connecting to. In the simplest example, assuming you have a chain where your ",(0,s.kt)("inlineCode",{parentName:"p"},"Balance")," type is a ",(0,s.kt)("inlineCode",{parentName:"p"},"u64")," (as opposed to the default ",(0,s.kt)("inlineCode",{parentName:"p"},"u128"),"), you need to let the API know."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst api = await ApiPromise.create({\n  provider: wsProvider,\n  types: {\n    Balance: 'u64'\n  }\n});\n")),(0,s.kt)("p",null,"The above introduces the ",(0,s.kt)("inlineCode",{parentName:"p"},"types")," registry, effectively allowing overrides and the definition of new types. The override above would mean that immediately the API will treat all occurrences of ",(0,s.kt)("inlineCode",{parentName:"p"},"Balance")," not as the default, but rather as the defined size."),(0,s.kt)("h2",{id:"field-ordering"},"Field ordering"),(0,s.kt)("p",null,"When defining any custom structures or types, it is critical that the following rules are applied -"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Map exactly to what is defined in the Rust code, i.e. defining a ",(0,s.kt)("inlineCode",{parentName:"li"},"SaleType")," cannot be ",(0,s.kt)("inlineCode",{parentName:"li"},"u16")," on the one end and ",(0,s.kt)("inlineCode",{parentName:"li"},"u32")," on the other end. If mismatches occur, the serialization will fail."),(0,s.kt)("li",{parentName:"ul"},"Ensure that the field order is maintained in all definitions. The SCALE serialization is binary and contains no field names in the serialization, only the encoded values. Any decoding is therefore done based on the size of the type and the order thereof in the definitions.")),(0,s.kt)("p",null,"These rules apply everywhere. Always ensure that the types match exactly between the environments and that the ordering is maintained, be it for structs, tuples or enums."),(0,s.kt)("h2",{id:"user-defined-structs"},"User-defined structs"),(0,s.kt)("p",null,"Registration also applies to any type that can be found on a specific chain, i.e. we can add any types that is available on a specific node -"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst api = await ApiPromise.create({\n  ...,\n  types: {\n    TransactionInput: {\n      parentOutput: 'Hash',\n      signature: 'Signature'\n    },\n    TransactionOutput: {\n      value: 'u128',\n      pubkey: 'Hash',\n      sale: 'u32'\n    },\n    Transaction: {\n      inputs: 'Vec<TransactionInput>',\n      outputs: 'Vec<TransactionOutput>'\n    }\n  }\n})\n")),(0,s.kt)("p",null,"The example above defines non-primitive types (as found in the specific implementation) as structures. Additionally it also shows the user-defined types can depend on other user-defined types with ",(0,s.kt)("inlineCode",{parentName:"p"},"Transaction")," referencing both ",(0,s.kt)("inlineCode",{parentName:"p"},"TransactionInput")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"TransactionOutput"),". Here you can reference any known types, i.e. in the above we have referenced primitives such as ",(0,s.kt)("inlineCode",{parentName:"p"},"u32")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Signature")," (itself an alias for ",(0,s.kt)("inlineCode",{parentName:"p"},"H512"),")."),(0,s.kt)("h2",{id:"definition-clashes"},"Definition clashes"),(0,s.kt)("p",null,"As explained in a previous section, the underlying API Codec types have a ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/start/types.basics"},"number of built-in properties")," and in some cases it could be that your struct has a field that conflicts. These should be minimal, however it can happen. Take the following example where a defined ",(0,s.kt)("inlineCode",{parentName:"p"},"hash")," property clashes with the same-name Codec property -"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"Document: {\n  name: 'Text',\n  uri: 'Text',\n  hash: 'Text'\n}\n")),(0,s.kt)("p",null,"For this struct the ",(0,s.kt)("inlineCode",{parentName:"p"},"hash")," will not be exposed, but rather be kept as the built-in ",(0,s.kt)("inlineCode",{parentName:"p"},"hash"),'. At this point it is important to know that the values "over-the-wire" for calls, queries, events and consts is in binary form, i.e. it is an encoding of the values only. So on the JS side you can apply a rename with no ill-effects. Here we rename the ',(0,s.kt)("inlineCode",{parentName:"p"},"hash")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"docHash"),", which mean the value will be available on ",(0,s.kt)("inlineCode",{parentName:"p"},"<instance>.docHash"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"Document: {\n  name: 'Text',\n  uri: 'Text',\n  docHash: 'Text'\n}\n")),(0,s.kt)("h2",{id:"type-clashes"},"Type clashes"),(0,s.kt)("p",null,"Another kind of clash is a clash of types. For example a chain can have a ",(0,s.kt)("inlineCode",{parentName:"p"},"Balance")," type defined in two pallets. In one, let's say the balances pallet, it is defined as ",(0,s.kt)("inlineCode",{parentName:"p"},"u128")," and in the other, e.g. the assets pallet, it is defined as ",(0,s.kt)("inlineCode",{parentName:"p"},"u64"),". "),(0,s.kt)("p",null,"This will create an issue as polkadot JS will try to use the global balance defined (the ",(0,s.kt)("inlineCode",{parentName:"p"},"u128")," in this case). In this scenario we would need a typeAlias. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n    typesAlias: {\n        "assets": {\n          "Balance": "u64"\n         }\n        },\n    types: {\n        "AssetDetails": {\n            "supply": "Balance"\n        }\n      }\n}\n')),(0,s.kt)("p",null,"We define in our ",(0,s.kt)("inlineCode",{parentName:"p"},"typesAlias")," that we want the type ",(0,s.kt)("inlineCode",{parentName:"p"},"Balance")," to be a ",(0,s.kt)("inlineCode",{parentName:"p"},"u64")," for the assets pallet, then we can define our types. "),(0,s.kt)("h2",{id:"user-defined-enum"},"User-defined enum"),(0,s.kt)("p",null,"One form of types that appear regularly is enums, these can be defined as follows -"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst api = await ApiPromise.create({\n  ...,\n  types: {\n    CLikeEnum: {\n      _enum: ['One', 'Two', 'Three']\n    },\n    TypedEnum: {\n      _enum: {\n        One: 'Compact<u32>',\n        Two: 'u64',\n        Three: 'Option<Balance>',\n        Four: null\n      }\n    }\n  }\n});\n")),(0,s.kt)("p",null,"As seen in these examples, types are built up in terms of primitives and aligns with the Rust-type definition model with ",(0,s.kt)("inlineCode",{parentName:"p"},"Compact"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Vec"),"."),(0,s.kt)("h2",{id:"node-and-chain-specific-types"},"Node and chain-specific types"),(0,s.kt)("p",null,"There are cases where a single API object can be used to connect to different types of nodes or chains, each including their own specific types. For these cases the ",(0,s.kt)("inlineCode",{parentName:"p"},"typesChain")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"typesSpec")," injectors are made available."),(0,s.kt)("p",null,"As a real-world example, the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps"},"polkadot-js/apps UI")," can connect to a variety of chains. To support ",(0,s.kt)("a",{parentName:"p",href:"https://edgewa.re/"},"Edgeware")," by default, the following node-type (",(0,s.kt)("inlineCode",{parentName:"p"},"specName")," as per the runtime version) overrides are made -"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { IdentityTypes } from 'edgeware-node-types/dist/identity';\nimport { SignalingTypes } from 'edgeware-node-types/dist/signaling';\nimport { VotingTypes } from 'edgeware-node-types/dist/voting';\n\n...\nconst api = await ApiPromise.create({\n  ...,\n  typesSpec: {\n    edgeware: {\n      ...IdentityTypes,\n      ...SignalingTypes,\n      ...VotingTypes\n    }\n  }\n});\n")),(0,s.kt)("p",null,"In the same way ",(0,s.kt)("inlineCode",{parentName:"p"},"typesChain")," can be used to match on the actual chain name, i.e. for a chain such as Kusama, the following overrides can be made (as per example only - Kusama uses the Polkadot defaults, so no overrides are needed) -"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst api = await ApiPromise.create({\n  ...,\n  typesChain: {\n    Kusama: {\n      BlockNumber: 'u32',\n      Index: 'u32'\n    }\n  }\n});\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"types"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"typesChain")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"typesSpec")," overrides are all optional and all are applied, as applicable to a specific connection. From the options ",(0,s.kt)("inlineCode",{parentName:"p"},"types")," are registered first, followed by ",(0,s.kt)("inlineCode",{parentName:"p"},"typesSpec")," for node-specific overrides and finally ",(0,s.kt)("inlineCode",{parentName:"p"},"typesChain")," for chain-specific overrides. The would mean is you have the following (contrived) example,"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst api = await ApiPromise.create({\n  ...,\n  types: {\n    Balance: 'u32',\n  }\n  typesChain: {\n    Balance: 'u128'\n  },\n  typesSpec: {\n    Balance: 'u64',\n  }\n});\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Balance")," would be defined as an ",(0,s.kt)("inlineCode",{parentName:"p"},"u128")," at the end. Effectively based on the flow it is first registered as a ",(0,s.kt)("inlineCode",{parentName:"p"},"u32"),", then overridden as a ",(0,s.kt)("inlineCode",{parentName:"p"},"u64")," and finally overridden once more as a ",(0,s.kt)("inlineCode",{parentName:"p"},"u128")," by the chain types."),(0,s.kt)("h2",{id:"impact-on-extrinsics"},"Impact on extrinsics"),(0,s.kt)("p",null,"When configuring your chain, be cognizant of the types you are using, and always ensure that any changes are replicated back to the API. In an earlier example we configured ",(0,s.kt)("inlineCode",{parentName:"p"},"Balance")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"u64"),", in this case the same changes needs to be applied on the API, especially when there are mismatches compared to Substrate master. Not doing so means that failures will occur. The same would happen when your own types have mismatched fields or types are lacking fields on structs or enums."),(0,s.kt)("p",null,"Mismatches also applies to any other chain-specific configured types and can have impacts on transactions. For instance you can customize ",(0,s.kt)("inlineCode",{parentName:"p"},"Lookup")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Address")," on your chain, changing the default lookup behavior. A real example of this is the Substrate master node vs the Substrate master node-template -"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"/// The lookup mechanism to get account ID from whatever is passed in dispatchers.\ntype Lookup = Indices;\n...\n/// The address format for describing accounts.\npub type Address = <Indices as StaticLookup>::Source;\n")),(0,s.kt)("p",null,"And this is what is defined on the node-template -"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"/// The lookup mechanism to get account ID from whatever is passed in dispatchers.\ntype Lookup = IdentityLookup<AccountId>;\n...\n/// The address format for describing accounts.\npub type Address = AccountId;\n")),(0,s.kt)("p",null,"Here the template was customized from the Substrate node defaults and the API needs to know how to map these types. Failure to make adjustments means transactions will fail. With this in mind the correct types that needs to be added here would be -"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const api = await ApiPromise.create({\n  ...,\n  types: {\n    // mapping the actual specified address format\n    Address: 'AccountId',\n    // mapping the lookup\n    LookupSource: 'AccountId'\n  }\n});\n")),(0,s.kt)("p",null,"Always look at customization and understand the impacts, replicating these changes between the node and the API. For the above the ",(0,s.kt)("inlineCode",{parentName:"p"},"Address")," type is used in the construction of the ",(0,s.kt)("inlineCode",{parentName:"p"},"UncheckedExtrinsic")," type, while the lookup type is applicable on transactions such as ",(0,s.kt)("inlineCode",{parentName:"p"},"balances.transfer(to: LookupSource, value: Balance)")),(0,s.kt)("h2",{id:"custom-rpc"},"Custom RPC"),(0,s.kt)("p",null,"In addition to customizing your node's modules and types, you can also add custom RPC definitions. Like the type definitions in this section, ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/start/rpc.custom"},"these can be defined and passed to the API")," for decoration."))}c.isMDXComponent=!0}}]);