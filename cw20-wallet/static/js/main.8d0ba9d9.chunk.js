(this["webpackJsonpcw20-wallet"]=this["webpackJsonpcw20-wallet"]||[]).push([[0],{327:function(e,t){},473:function(e,t,n){e.exports=n.p+"static/media/edit.fdc29000.svg"},474:function(e,t,n){e.exports=n.p+"static/media/cosmWasmLogo.15dccd19.svg"},475:function(e,t,n){e.exports=n.p+"static/media/failIcon.71513020.svg"},476:function(e,t,n){e.exports=n.p+"static/media/successIcon.2e305b66.svg"},482:function(e,t,n){e.exports=n(994)},519:function(e,t){},521:function(e,t){},531:function(e,t){},533:function(e,t){},575:function(e,t){},576:function(e,t){},581:function(e,t){},583:function(e,t){},607:function(e,t){},68:function(e,t,n){e.exports=n.p+"static/media/backArrow.9849fc2e.svg"},993:function(e,t,n){},994:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),c=n.n(o),i=(n(226),n(137)),s=n.n(i),l=(n(74),n(29)),u=n.n(l),m=(n(81),n(30)),d=n.n(m),f=(n(492),n(467)),h=n.n(f),v=n(6),p=n(40),b=n(1005),g=n(458),E=n(51),y=n(38),w=n(459),j=n(460),x=n(463),S=n(17);var O={contracts:[],addContract:function(){}},P=r.a.createContext(O),k=function(){return r.a.useContext(P)};function A(e){var t=e.children,n=Object(a.useState)(O.contracts),o=n[0],c=n[1];var i={contracts:o,addContract:function(e){c((function(t){return!t.find((function(t){return t.contractAddress===e.contractAddress}))?[].concat(t,[e]):t}))}};return r.a.createElement(P.Provider,{value:i},t)}var C=function(e){return{use:function(t){return{contractAddress:t,balance:function(n){try{return Promise.resolve(e.queryContractSmart(t,{balance:{address:n}})).then((function(e){return e.balance}))}catch(a){return Promise.reject(a)}},allowance:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{allowance:{owner:n,spender:a}}))}catch(r){return Promise.reject(r)}},allAllowances:function(n,a,r){try{return Promise.resolve(e.queryContractSmart(t,{all_allowances:{owner:n,start_after:a,limit:r}}))}catch(o){return Promise.reject(o)}},allAccounts:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{all_accounts:{start_after:n,limit:a}})).then((function(e){return e.accounts}))}catch(r){return Promise.reject(r)}},tokenInfo:function(){try{return Promise.resolve(e.queryContractSmart(t,{token_info:{}}))}catch(n){return Promise.reject(n)}},investment:function(){try{return Promise.resolve(e.queryContractSmart(t,{investment:{}}))}catch(n){return Promise.reject(n)}},claims:function(n){try{return Promise.resolve(e.queryContractSmart(t,{claims:{address:n}}))}catch(a){return Promise.reject(a)}},minter:function(){try{return Promise.resolve(e.queryContractSmart(t,{minter:{}}))}catch(n){return Promise.reject(n)}},mint:function(n,a,r){try{return Promise.resolve(e.execute(n,t,{mint:{recipient:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},transfer:function(n,a,r){try{return Promise.resolve(e.execute(n,t,{transfer:{recipient:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},burn:function(n,a){try{return Promise.resolve(e.execute(n,t,{burn:{amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},increaseAllowance:function(n,a,r){try{return Promise.resolve(e.execute(n,t,{increase_allowance:{spender:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},decreaseAllowance:function(n,a,r){try{return Promise.resolve(e.execute(n,t,{decrease_allowance:{spender:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},transferFrom:function(n,a,r,o){try{return Promise.resolve(e.execute(n,t,{transfer_from:{owner:a,recipient:r,amount:o}})).then((function(e){return e.transactionHash}))}catch(c){return Promise.reject(c)}},bond:function(n,a){try{return Promise.resolve(e.execute(n,t,{bond:{}},void 0,[a])).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},unbond:function(n,a){try{return Promise.resolve(e.execute(n,t,{unbond:{amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},claim:function(n){try{return Promise.resolve(e.execute(n,t,{claim:{}})).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}}}}}},T={setError:function(){},clearError:function(){}},I=Object(a.createContext)(T),B=function(){return Object(a.useContext)(I)};function D(e){var t=e.children,n=Object(a.useState)(),r=n[0],o=n[1],c={error:r,setError:o,clearError:function(){o(void 0)}};return Object(a.createElement)(I.Provider,{value:c},t)}var z=function(e){try{var t,n=window;if(!n.getOfflineSigner)throw new Error("Keplr extension is not available");var a=n.getOfflineSigner(e);return a.signAmino=null!==(t=a.signAmino)&&void 0!==t?t:a.sign,Promise.resolve(a)}catch(r){return Promise.reject(r)}},$=function(e,t){try{return Promise.resolve(j.a.create(12e4,12e4)).then((function(e){return new w.LedgerSigner(e,{hdPaths:[Object(y.makeCosmoshubPath)(0)],prefix:t})}))}catch(n){return Promise.reject(n)}},M=function(e,t){try{var n=function(){var e="burner-wallet",t=localStorage.getItem(e);if(t)return t;var n=E.Bip39.encode(E.Random.getBytes(16)).toString();return localStorage.setItem(e,n),n}(),a=Object(y.makeCosmoshubPath)(0);return Promise.resolve(y.Secp256k1HdWallet.fromMnemonic(n,a,t))}catch(r){return Promise.reject(r)}};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var U=function(){function e(){}return e.prototype.then=function(t,n){var a=new e,r=this.s;if(r){var o=1&r?t:n;if(o){try{q(a,1,o(this.v))}catch(c){q(a,2,c)}return a}return this}return this.o=function(e){try{var r=e.v;1&e.s?q(a,1,t?t(r):r):n?q(a,1,n(r)):q(a,2,r)}catch(c){q(a,2,c)}},a},e}();function q(e,t,n){if(!e.s){if(n instanceof U){if(!n.s)return void(n.o=q.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(q.bind(null,e,t),q.bind(null,e,2));e.s=t,e.v=n;var a=e.o;a&&a(e)}}function F(e,t,n){var a=[];for(var r in e)a.push(r);return function(e,t,n){var a,r,o=-1;return function c(i){try{for(;++o<e.length&&(!n||!n());)if((i=t(o))&&i.then){if(!((s=i)instanceof U&&1&s.s))return void i.then(c,r||(r=q.bind(null,a=new U,2)));i=i.v}a?q(a,1,i):a=i}catch(l){q(a||(a=new U),2,l)}var s}(),a}(a,(function(e){return t(a[e])}),n)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function L(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function V(){throw new Error("Not yet initialized")}var H={initialized:!1,init:V,clear:V,config:{},changeConfig:V,address:"",balance:[],refreshBalance:V,hitFaucet:V,getSigner:V,changeSigner:V,getClient:V,getStakingClient:V},W=Object(a.createContext)(H),R=function(){return Object(a.useContext)(W)};function _(e){var t=function(e){try{if(!s.faucetUrl||!s.feeToken)return Promise.resolve();var t=L((function(){var t=new x.FaucetClient(s.faucetUrl);return Promise.resolve(t.credit(e,s.feeToken)).then((function(){}))}),(function(e){c(e.message),console.error(e)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(n){return Promise.reject(n)}},n=function(e,t){try{if(!h)return Promise.resolve();t.length=0;var n=F(s.coinMap,(function(n){return Promise.resolve(h.getBalance(e,n)).then((function(e){e&&t.push(e)}))}));return Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},r=e.config,o=e.children,c=B().setError,i=Object(a.useState)(r),s=i[0],l=i[1],u=Object(a.useState)(),m=u[0],d=u[1],f=Object(a.useState)(),h=f[0],v=f[1],p=N({},H,{init:d}),b=Object(a.useState)(p),E=b[0],w=b[1];function j(){w(N({},p)),v(void 0),d(void 0),l(r)}function S(e){l((function(t){return N({},t,e)}))}return Object(a.useEffect)((function(){m&&function(){try{var e=L((function(){return Promise.resolve(function(e,t){try{return Promise.resolve(g.SigningCosmWasmClient.connectWithSigner(e.rpcUrl,t,{prefix:e.addressPrefix,gasPrice:y.GasPrice.fromString(""+e.gasPrice+e.feeToken),gasLimits:{upload:15e5,init:6e5,exec:4e5,migrate:6e5,send:8e4,changeAdmin:8e4}}))}catch(n){return Promise.reject(n)}}(s,m)).then((function(e){v(e)}))}),(function(e){c(e.message)}));e&&e.then&&e.then((function(){}))}catch(t){Promise.reject(t)}}()}),[m,s]),Object(a.useEffect)((function(){if(m&&h){var e,a=[],r=(e=s.httpUrl,y.LcdClient.withExtensions({apiUrl:e},y.setupStakingExtension));!function(){try{Promise.resolve(m.getAccounts()).then((function(e){var o=e[0].address;return Promise.resolve(n(o,a)).then((function(){function e(){return Promise.resolve(n(o,a)).then((function(){w({initialized:!0,init:function(){},clear:j,config:s,changeConfig:S,address:o,balance:a,refreshBalance:n.bind(null,o,a),hitFaucet:t.bind(null,o),getSigner:function(){return m},changeSigner:d,getClient:function(){return h},getStakingClient:function(){return r}})}))}var c=function(){if(!a.find((function(e){return e.denom===s.feeToken})))return Promise.resolve(t(o)).then((function(){}))}();return c&&c.then?c.then(e):e()}))}))}catch(e){Promise.reject(e)}}()}}),[h]),Object(a.createElement)(W.Provider,{value:E},o)}function Y(e){var t=e.authPath,n=e.children,a=e.location;return R().initialized?r.a.createElement(p.d,{location:a},n):r.a.createElement(p.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function G(e){if(!e)return"0";if(e.denom.startsWith("u")){var t=e.denom.slice(1).toUpperCase();return S.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+t}return e.amount+"\u202f"+e.denom}function J(e){var t=(e||"").toString(),n=t.match(/.*\s*$/g)[0];return n.substring(0,n.lastIndexOf(";"))||t}var K=n(464),Q=n.n(K);function X(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function Z(e,t){return t||(t=e.slice(0)),e.raw=t,e}function ee(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=X(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function te(){var e=Z(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return te=function(){return e},e}var ne=Object(v.b)(ee)(te());function ae(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=X(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function re(){var e=Z(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return re=function(){return e},e}var oe=Object(v.b)(ae)(re());function ce(e){var t=e.children,n=X(e,["children"]);return Object(a.createElement)(ne,Object.assign({tag:"main"},n),t)}function ie(){var e=Z(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return ie=function(){return e},e}var se=Object(v.b)(ce)(ie());function le(e){var t=e.icon,n=e.path,a=e.state,o=X(e,["icon","path","state"]),c=Object(p.g)(),i=n?function(){return c.push(n,a)}:c.goBack;return r.a.createElement("img",Object.assign({src:t,alt:"Back arrow",onClick:i},o))}function ue(){var e=Z(["\n  cursor: pointer;\n"]);return ue=function(){return e},e}var me=Object(v.b)(le)(ue());function de(){var e=Z(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return de=function(){return e},e}var fe=Object(v.b)(h.a)(de()),he=Object(a.createElement)(b.a,{style:{fontSize:"6.25rem"},spin:!0});function ve(e){var t=e.loadingText||"Loading...";return Object(a.createElement)(se,null,Object(a.createElement)(fe,{indicator:he,tip:t}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function pe(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function be(){var e=Z(["\n  color: var(--color-red);\n"]);return be=function(){return e},e}function ge(){var e=Z(["\n  display: block;\n  font-weight: lighter;\n"]);return ge=function(){return e},e}function Ee(){var e=Z(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Ee=function(){return e},e}function ye(){var e=Z(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return ye=function(){return e},e}var we=d.a.Text,je=Object(v.b)(oe)(ye()),xe=Object(v.b)(oe)(Ee()),Se=Object(v.b)(we)(ge()),Oe=Object(v.b)(we)(be()),Pe=d.a.Title;function ke(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function Ae(e){var t=function(e){try{w(!0),b();var t=pe((function(){return Promise.resolve(e(n.chainId,n.addressPrefix)).then((function(e){g.init(e)}))}),(function(e){console.error(e),v(Error(e).message),w(!1)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},n=e.config,o=e.pathAfterLogin,c=e.appName,i=e.appLogo,s=X(e,["config","pathAfterLogin","appName","appLogo"]),l=Object(p.g)(),m=l.location.state,f=B(),h=f.error,v=f.setError,b=f.clearError,g=R(),E=Object(a.useState)(!1),y=E[0],w=E[1];return Object(a.useEffect)((function(){g.initialized&&(m?l.push(m.redirectPathname,m.redirectState):l.push(o))}),[g.initialized,m,l]),y?r.a.createElement(ve,{loadingText:"Initializing app..."}):r.a.createElement(se,Object.assign({},s),r.a.createElement(je,null,r.a.createElement("img",{src:i,alt:"CosmWasm logo"}),r.a.createElement(xe,null,r.a.createElement(d.a,null,r.a.createElement(Pe,{level:2},"Hello!"),r.a.createElement(Se,null,"Welcome to your ",c),r.a.createElement(Se,null,"Select one of the following options to start:")),h&&r.a.createElement(Oe,null,h),r.a.createElement(u.a,{type:"primary",onClick:function(){try{return Promise.resolve(t(M)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Browser (Demo)"),r.a.createElement(u.a,{type:"primary",disabled:ke(),onClick:function(){try{return Promise.resolve(t($)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Ledger (Secure, Chrome)"),r.a.createElement(u.a,{type:"primary",disabled:!1,onClick:function(){try{var e=window,a=pe((function(){return Promise.resolve(e.keplr.experimentalSuggestChain(function(e){return{chainId:e.chainId,chainName:e.chainName,rpc:e.rpcUrl,rest:e.httpUrl,bech32Config:{bech32PrefixAccAddr:""+e.addressPrefix,bech32PrefixAccPub:e.addressPrefix+"pub",bech32PrefixValAddr:e.addressPrefix+"valoper",bech32PrefixValPub:e.addressPrefix+"valoperpub",bech32PrefixConsAddr:e.addressPrefix+"valcons",bech32PrefixConsPub:e.addressPrefix+"valconspub"},currencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits},{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits}],feeCurrencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits}],stakeCurrency:{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits},gasPriceStep:{low:e.gasPrice/2,average:e.gasPrice,high:2*e.gasPrice},bip44:{coinType:118},coinType:118}}(n))).then((function(){return Promise.resolve(e.keplr.enable(n.chainId)).then((function(){return Promise.resolve(t(z)).then((function(){}))}))}))}),(function(e){console.error(e),v(Error(e).message)}));return Promise.resolve(a&&a.then?a.then((function(){})):void 0)}catch(r){return Promise.reject(r)}}},"Keplr (Secure)"))))}function Ce(){var e=Z(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return Ce=function(){return e},e}function Te(){var e=Z(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Te=function(){return e},e}var Ie=d.a.Text,Be=Object(v.b)(oe)(Te()),De=Object(v.b)(Ie)(Ce());function ze(e){var t=e.defaultButtonAction,n=e.successIcon,a=e.failIcon,o=Object(p.g)(),c=o.location.state,i=c.success,s=c.message,l=c.error,m=c.customButtonText,d=c.customButtonActionPath,f=c.customButtonActionState;var h=function(e){return e?{result:"success",icon:n,buttonText:"Home",buttonAction:function(){return t(o)}}:{result:"failure",icon:a,buttonText:"Retry",buttonAction:o.goBack}}(i),v=h.icon,b=h.result,g=h.buttonText,E=h.buttonAction,y=m||g,w=d?function(){return o.push(d,f)}:E;return r.a.createElement(se,null,r.a.createElement(Be,null,r.a.createElement("img",{src:v,alt:"Result icon"}),r.a.createElement(De,{"data-result":b},s),l&&r.a.createElement(De,{"data-result":b},l),r.a.createElement(u.a,{type:"primary",onClick:w},y)))}function $e(){var e=Z(['\n  & > * {\n    --gap: var(--s-2);\n  }\n\n  h3,\n  div[role="separator"] {\n    margin: 0;\n  }\n\n  span,\n  button {\n    overflow-wrap: anywhere;\n  }\n\n  span {\n    display: block;\n    font-size: var(--s-1);\n  }\n\n  span + span {\n    font-weight: bold;\n  }\n\n  button,\n  button span {\n    font-size: var(--s0);\n  }\n\n  button {\n    height: 100%;\n    white-space: normal;\n  }\n']);return $e=function(){return e},e}var Me=Object(v.b)(oe)($e()),Ne=d.a.Title,Ue=d.a.Text;function qe(e){var t=e.tag,n=e.hideTitle,a=e.hideBalance,o=R(),c=o.address,i=o.balance;return r.a.createElement(Me,{tag:t},!n&&r.a.createElement("header",null,r.a.createElement(Ne,{level:3},"Your Account"),!a&&r.a.createElement(s.a,null)),r.a.createElement(Ue,null,c),!a&&r.a.createElement(Ue,null,"(",function(e){return e&&0!==e.length?e.map(G).join(", "):"\u2013"}(i),")"),r.a.createElement(u.a,{type:"primary",onClick:function(){return Q()(c)}},"Copy Account Address"))}function Fe(){var e=Z(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return Fe=function(){return e},e}var Le=Object(v.a)(Fe());function Ve(){var e=Z(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return Ve=function(){return e},e}var He=Object(v.a)(Ve());function We(){var e=Z(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return We=function(){return e},e}var Re=Object(v.a)(We());function _e(){var e=Z(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return _e=function(){return e},e}var Ye=Object(v.a)(_e());function Ge(){var e=Z(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return Ge=function(){return e},e}var Je=Object(v.a)(Ge());function Ke(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ye,null),r.a.createElement(Je,null),r.a.createElement(He,null),r.a.createElement(Re,null),r.a.createElement(Le,null))}var Qe=n(61);const Xe=function(e){var t=e.musselnet;if(!t)throw new Error("No configuration found for network musselnet");return t}({local:{chainId:"testing",chainName:"Testing",addressPrefix:"wasm",rpcUrl:"http://localhost:26659",httpUrl:"http://localhost:1317",faucetUrl:"http://localhost:8000",feeToken:"ucosm",stakingToken:"uatom",coinMap:{ucosm:{denom:"COSM",fractionalDigits:6},uatom:{denom:"ATOM",fractionalDigits:6}},gasPrice:.025,codeId:2},musselnet:{chainId:"musselnet-2",chainName:"Musselnet",addressPrefix:"wasm",rpcUrl:"https://rpc.musselnet.cosmwasm.com",httpUrl:"https://lcd.musselnet.cosmwasm.com",faucetUrl:"https://faucet.musselnet.cosmwasm.com",feeToken:"umayo",stakingToken:"ufrites",coinMap:{umayo:{denom:"MAYO",fractionalDigits:6},ufrites:{denom:"FRITES",fractionalDigits:6}},gasPrice:.025,codeId:4}});var Ze=n(41),et=n(1002),tt=n(472),nt=n(1003),at=n(68),rt=n.n(at),ot=n(72);const ct=new RegExp("^"+Xe.addressPrefix),it=ot.d().matches(ct,`"${Xe.addressPrefix}" prefix required`).length(39+Xe.addressPrefix.length,"Address invalid"),st=it.required("An address is required"),lt=ot.b().required("An amount is required").positive("Amount should be positive"),ut=ot.c().shape({contract:ot.a(e=>Number.isNaN(Number(e))?st:ot.b().positive())}),mt=ot.c().shape({address:it}),dt=ot.c().shape({address:st}),ft=ot.c().shape({newAmount:lt}),ht=ot.c().shape({address:st,amount:lt}),vt=Object(v.b)(oe)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,pt=Object(v.b)(oe)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`,bt=Object(v.b)(oe)`
  & > * {
    --gap: var(--s2);
  }
`,gt=v.b.div`
  display: flex;
  align-items: baseline;

  span {
    margin-left: var(--s1);
    font-family: var(--ff-iceland);
    font-size: var(--s1);
  }
`,{Title:Et,Text:yt}=d.a;var wt=function(){const[e,t]=Object(a.useState)(!1),n=Object(p.g)(),{getClient:o,address:c}=R(),{contractAddress:i}=Object(p.h)(),[s,l]=Object(a.useState)(""),[m,d]=Object(a.useState)(0);return Object(a.useEffect)(()=>{C(o()).use(i).tokenInfo().then(e=>{l(e.symbol),d(e.decimals)})},[o,i]),e&&r.a.createElement(ve,{loadingText:"Adding allowance..."})||!e&&r.a.createElement(se,null,r.a.createElement(vt,null,r.a.createElement(me,{icon:rt.a,path:"/tokens"}),r.a.createElement(Et,null,"Add Allowance"),r.a.createElement(Ze.c,{initialValues:{address:"",amount:""},onSubmit:e=>{t(!0);const{address:a,amount:r}=e,l=C(o()).use(i);l.allowance(c,a).then(({allowance:e})=>{const t=S.Decimal.fromUserInput(r,m),o=S.Decimal.fromAtomics(e,m);try{let e=Promise.reject("");e=t.isGreaterThan(o)?l.increaseAllowance(c,a,t.minus(o).atomics):l.decreaseAllowance(c,a,o.minus(t).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${r} ${s} allowance for ${a} successfully added `,customButtonText:"Tokens"}})})}catch(u){console.error(u),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:J(u),customButtonActionPath:"/allowances/"+i}})}})},validationSchema:ht},e=>r.a.createElement(et.a,null,r.a.createElement(pt,null,r.a.createElement(bt,null,r.a.createElement(tt.a,{name:"address"},r.a.createElement(nt.a,{name:"address",placeholder:"Enter address"})),r.a.createElement(gt,null,r.a.createElement(tt.a,{name:"amount"},r.a.createElement(nt.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(yt,null,s))),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))))};const jt=Object(v.b)(oe)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`;function xt({submitChangeAmount:e}){return r.a.createElement(Ze.c,{initialValues:{newAmount:""},onSubmit:e,validationSchema:ft},e=>r.a.createElement(et.a,null,r.a.createElement(jt,null,r.a.createElement(tt.a,{name:"newAmount"},r.a.createElement(nt.a,{name:"newAmount",placeholder:"Enter new amount"})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))}const St=Object(v.b)(oe)`
  & > * {
    --gap: var(--s3);
  }

  h1 {
    margin: 0;
  }

  & > span {
    font-size: var(--s-1);
  }
`,Ot=v.b.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  & > * + * {
    margin-left: var(--s-1);
  }

  span {
    font-size: var(--s-1);
  }

  span + span {
    font-size: var(--s1);
    font-weight: bolder;
  }
`,{Title:Pt,Text:kt}=d.a;var At=function(){const[e,t]=Object(a.useState)(!1),n=Object(p.g)(),{getClient:o,address:c}=R(),{contractAddress:i,spenderAddress:s}=Object(p.h)(),[l,u]=Object(a.useState)(""),[m,d]=Object(a.useState)(0),[f,h]=Object(a.useState)("0");Object(a.useEffect)(()=>{const e=C(o()).use(i);e.tokenInfo().then(e=>{u(e.symbol),d(e.decimals)}),e.allowance(c,s).then(({allowance:e})=>h(e))},[o,i,c,s]);const v=S.Decimal.fromAtomics(f,m).toString();return e&&r.a.createElement(ve,{loadingText:"Changing allowance..."})||!e&&r.a.createElement(se,null,r.a.createElement(St,null,r.a.createElement(me,{icon:rt.a,path:"/tokens"}),r.a.createElement(Pt,null,"Allowance"),r.a.createElement(kt,null,s),r.a.createElement(Ot,null,r.a.createElement(kt,null,"Current"),r.a.createElement(kt,null,v),r.a.createElement(kt,null,l)),r.a.createElement(xt,{submitChangeAmount:e=>{t(!0);const{newAmount:a}=e,r=S.Decimal.fromUserInput(a,m),u=S.Decimal.fromAtomics(f,m),d=C(o()).use(i);try{let e=Promise.reject("");e=r.isGreaterThan(u)?d.increaseAllowance(c,s,r.minus(u).atomics):d.decreaseAllowance(c,s,u.minus(r).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${l} allowance successfully set to ${a} for ${s}`,customButtonText:"Tokens"}})})}catch(h){console.error(h),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:J(h),customButtonActionPath:"/allowances/"+i}})}}})))},Ct=n(473),Tt=n.n(Ct);const It=Object(v.b)(oe)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,Bt=Object(v.b)(oe)`
  & > * {
    --gap: var(--s2);
  }
`,Dt=v.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,zt=Object(v.b)(oe)`
  & > * {
    --gap: var(--s0);
  }
`,$t=v.b.div`
  max-width: var(--max-width);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * + * {
    margin-left: var(--s1);
  }

  & > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: var(--s-1);
  }
`,Mt=v.b.div`
  display: flex;
  align-items: center;

  span + img {
    margin-left: var(--s-2);
  }

  span {
    font-size: var(--s1);
    font-weight: bolder;
  }

  img {
    cursor: pointer;
    height: var(--s-1);
  }
`,{Title:Nt,Text:Ut}=d.a;var qt=function(){const e=Object(p.g)(),{getClient:t,address:n}=R(),{contractAddress:o}=Object(p.h)(),[c,i]=Object(a.useState)([]),[l,m]=Object(a.useState)(""),[d,f]=Object(a.useState)("0"),[h,v]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=C(t()).use(o);e.tokenInfo().then(({symbol:e,decimals:t})=>{m(e),v(t)}),e.balance(n).then(e=>f(e)),e.allAllowances(n).then(({allowances:e})=>i(e))},[t,o,n]);const b=S.Decimal.fromAtomics(d,h).toString(),[g,E]=b.split("."),y=null!==E&&void 0!==E?E:"";return r.a.createElement(se,null,r.a.createElement(It,null,r.a.createElement(me,{icon:rt.a,path:"/tokens"}),r.a.createElement(Bt,null,r.a.createElement(Nt,null,"Allowances"),r.a.createElement(Dt,null,r.a.createElement(Ut,null,`${g}${y?".":""}`),r.a.createElement(Ut,null,y," ",l),r.a.createElement(Ut,null," tokens"))),r.a.createElement(zt,null,c.map((t,n)=>{const a=S.Decimal.fromAtomics(t.allowance,h).toString();return r.a.createElement(r.a.Fragment,null,n>0&&r.a.createElement(s.a,null),r.a.createElement($t,null,r.a.createElement(Ut,null,t.spender),r.a.createElement(Mt,null,r.a.createElement(Ut,null,a),r.a.createElement("img",{alt:"Edit allowance",src:Tt.a,onClick:()=>{return n=t.spender,void e.push(`/allowances/${o}/edit/${n}`);var n}}))))})),r.a.createElement(u.a,{type:"primary",onClick:function(){e.push(`/allowances/${o}/add`)}},"Add New")))},Ft=n(474),Lt=n.n(Ft);var Vt=function(){return r.a.createElement(Ae,{pathAfterLogin:"/tokens",appName:"CW20 Wallet",appLogo:Lt.a,config:Xe})},Ht=n(475),Wt=n.n(Ht),Rt=n(476),_t=n.n(Rt);function Yt(e){e.push("/tokens")}var Gt=function(){return r.a.createElement(ze,{defaultButtonAction:Yt,successIcon:_t.a,failIcon:Wt.a})},Jt=(n(173),n(106)),Kt=n.n(Jt),Qt=n(153);const Xt=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:o,...c},i)=>a.createElement(Qt.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(Kt.a,Object.assign({ref:i,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),o&&o(e)}},c))));Xt.Search=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:o,...c},i)=>a.createElement(Qt.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(Kt.a.Search,Object.assign({ref:i,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),o&&o(e)}},c))));var Zt=Xt.Search;var en=function({initialAddress:e,setSearchedAddress:t}){return r.a.createElement(Ze.c,{initialValues:{address:e},validationSchema:mt,onSubmit:e=>{t(e.address)}},e=>r.a.createElement(et.a,null,r.a.createElement(tt.a,{name:"address"},r.a.createElement(Zt,{name:"address",placeholder:"Search",enterButton:!0,onSearch:n=>{e.isValid&&t(n)}}))))};const tn=Object(v.b)(oe)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,nn=Object(v.b)(oe)`
  & > * {
    --gap: var(--s2);
  }
`,an=v.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,rn=Object(v.b)(oe)`
  & > * {
    --gap: var(--s0);
  }
`,on=v.b.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
  }

  span + span {
    font-family: var(--ff-montserrat);
    font-size: var(--s1);
    font-weight: bolder;
  }
`,{Title:cn,Text:sn}=d.a;var ln=function(){const e=Object(p.g)(),{getClient:t,address:n}=R(),{contractAddress:o,allowingAddress:c}=Object(p.h)(),[i,l]=Object(a.useState)(c),[m,d]=Object(a.useState)(),[f,h]=Object(a.useState)(""),[v,b]=Object(a.useState)("0"),[g,E]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=C(t()).use(o),a=null!==i&&void 0!==i?i:n;e.tokenInfo().then(({symbol:e,decimals:t})=>{h(e),E(t)}),e.balance(a).then(e=>b(e))},[t,o,i,n]);const y=S.Decimal.fromAtomics(v,g).toString(),[w,j]=y.split("."),x=S.Decimal.fromAtomics(m,g).toString(),O=!!m&&"0"!==m,P=!m||"0"!==m,k="0"===v,A=!i;return r.a.createElement(se,null,r.a.createElement(tn,null,r.a.createElement(me,{icon:rt.a,path:"/tokens"}),r.a.createElement(nn,null,r.a.createElement(cn,null,f),r.a.createElement(qe,{hideTitle:!0,hideBalance:!0})),r.a.createElement(an,null,r.a.createElement(sn,null,`${w}${j?".":""}`),j&&r.a.createElement(sn,null,j),r.a.createElement(sn,null," tokens")),r.a.createElement(en,{initialAddress:i,setSearchedAddress:function(e){if(!e)return l(void 0),void d(void 0);l(e),C(t()).use(o).allowance(e,n).then(e=>d(e.allowance))}}),O&&r.a.createElement(rn,null,r.a.createElement(s.a,null),r.a.createElement(on,null,r.a.createElement(sn,null,"Your allowance"),r.a.createElement(sn,null,x))),P&&r.a.createElement(u.a,{type:"primary",onClick:function(){const t=i||"";e.push(`/token/send/${o}/${t}`)},disabled:k},"Send"),A&&r.a.createElement(u.a,{type:"primary",onClick:function(){e.push("/allowances/"+o)}},"My allowances")))};const un=Object(v.b)(oe)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,mn=Object(v.b)(oe)`
  & > * {
    --gap: 0;
  }
`,dn=v.b.div`
  --v-padding: var(--s-2);
  --border-size: 1px;

  padding-top: var(--v-padding);
  padding-bottom: var(--v-padding);

  padding-left: var(--s4);
  margin-left: calc(-1 * var(--s4));
  padding-right: var(--s4);
  margin-right: calc(-1 * var(--s4));

  margin-bottom: calc(-1 * var(--border-size));

  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-primary);

    & * {
      color: white;
    }
  }

  &:first-child > * {
    --border-size: 0;
  }

  & > * {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    span:first-child {
      font-family: var(--ff-iceland);
      font-size: var(--s2);
    }

    span:not(:first-child) {
      font-weight: bolder;
      font-size: var(--s-1);
    }
  }
`,fn=v.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Text:hn}=d.a;function vn(e,t){return e.coin.denom<t.coin.denom?-1:e.coin.denom>t.coin.denom?1:0}var pn=function(){const e=Object(p.g)(),{getClient:t,address:n}=R(),{contracts:o,addContract:c}=k(),[i,s]=Object(a.useState)([]),l=Object(a.useCallback)((async function(e){const{symbol:t,decimals:a}=await e.tokenInfo();return{coin:{denom:t,amount:await e.balance(n)},fractionalDigits:a,address:e.contractAddress}}),[n]);return Object(a.useEffect)(()=>{if(!Xe.codeId)return;const e=t();e.getContracts(Xe.codeId).then(t=>{t.forEach(t=>{const n=C(e).use(t.address);c(n)})})},[t,c]),Object(a.useEffect)(()=>{const e=o.map(l);Promise.all(e).then(e=>s(e.sort(vn)))},[o,l]),r.a.createElement(mn,null,i.map(t=>{const n=S.Decimal.fromAtomics(t.coin.amount,t.fractionalDigits).toString();return r.a.createElement(dn,{key:t.address,onClick:()=>{return n=t.address,void e.push("/token/detail/"+n);var n}},r.a.createElement(fn,null,r.a.createElement(hn,null,t.coin.denom),r.a.createElement(hn,null,"0"!==n?n:"No tokens")))}))};const{Title:bn}=d.a;var gn=function(){return r.a.createElement(se,null,r.a.createElement(un,null,r.a.createElement(bn,null,"Tokens"),r.a.createElement(pn,null),r.a.createElement(Qe.b,{to:"/tokens/add"},r.a.createElement(u.a,{type:"primary"},"Add another")),r.a.createElement(qe,{hideBalance:!0})))},En=n(1004);const yn=Object(v.b)(oe)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-transfer {
    width: 100%;

    & > *:first-child {
      width: 100%;
    }

    & > *:not(:first-child) {
      display: none;
    }

    .ant-transfer-list {
      height: auto;
      max-height: 300px;
    }

    .ant-transfer-list-content-item-text {
      text-align: left;
    }
  }
`,wn=Object(v.b)(oe)`
  & > * {
    --gap: var(--s4);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,{Title:jn}=d.a;var xn=function(){const{getClient:e}=R(),{setError:t}=B(),{addContract:n}=k(),o=Object(p.g)(),[c,i]=Object(a.useState)(),[s,l]=Object(a.useState)([]),[m,d]=Object(a.useState)([]);function f(e){d(e)}function h(e,t){return t.title.toLowerCase().indexOf(e.toLowerCase())>=0}const v=!c,b=!v;return r.a.createElement(se,null,r.a.createElement(me,{icon:rt.a,path:"/tokens"}),r.a.createElement(yn,null,r.a.createElement(jn,null,"Add Other"),v&&r.a.createElement(Ze.c,{initialValues:{contract:""},onSubmit:function({contract:a}){const r=!Number.isNaN(Number(a))&&Number(a);if(r)e().getContracts(r).then(e=>{l(e),i(r)}).catch(t);else{const t=String(a),r=C(e()).use(t);r.tokenInfo().then(()=>n(r)).then(()=>o.push({pathname:"/result",state:{success:!0,message:`"${t}" was successfully added :)`,customButtonText:"Tokens"}})).catch(e=>o.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:J(e),customButtonActionPath:"/tokens/add"}}))}},validationSchema:ut},e=>r.a.createElement(et.a,null,r.a.createElement(wn,null,r.a.createElement(tt.a,{name:"contract"},r.a.createElement(nt.a,{name:"contract",placeholder:"Enter a contract address or codeID"})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Continue")))),b&&r.a.createElement(Ze.c,{initialValues:{},onSubmit:function(){m.forEach(t=>{const a=C(e()).use(t);a.tokenInfo().then(()=>n(a)).catch(e=>o.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:J(e),customButtonActionPath:"/tokens/add"}}))}),o.push({pathname:"/result",state:{success:!0,message:`"Your CodeID: ${c}" were successfully added :)`,customButtonText:"Tokens"}})}},e=>r.a.createElement(et.a,null,r.a.createElement(wn,null,r.a.createElement(tt.a,{name:"contracts"},r.a.createElement(En.a,{name:"contracts",showSearch:!0,filterOption:h,dataSource:s.map(e=>({key:e.address,title:e.label})),onSelectChange:f,listStyle:{listStyle:"none"},render:e=>e.title})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!m.length},"Continue"))))))};const Sn=Object(v.b)(oe)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,On=v.b.div`
  display: flex;
  align-items: baseline;

  & > * + * {
    margin-left: var(--s0);
  }

  .ant-form-item {
    flex-grow: 1;
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
  }
`,{Text:Pn}=d.a;function kn({tokenName:e,maxAmount:t,sendTokensAction:n}){const a=ot.c().shape({amount:lt.max(t.toFloatApproximation(),"Amount cannot be greater than "+t.toString())}).concat(dt);return r.a.createElement(Ze.c,{initialValues:{amount:"",address:""},onSubmit:n,validationSchema:a},t=>r.a.createElement(et.a,null,r.a.createElement(Sn,null,r.a.createElement(On,null,r.a.createElement(Pn,null,"Send"),r.a.createElement(tt.a,{name:"amount"},r.a.createElement(nt.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(Pn,null,e)),r.a.createElement(On,null,r.a.createElement(Pn,null,"to"),r.a.createElement(tt.a,{name:"address"},r.a.createElement(nt.a,{name:"address",placeholder:"Enter address"}))),r.a.createElement(u.a,{type:"primary",onClick:t.submitForm,disabled:!(t.isValid&&t.dirty)},"Send"))))}const An=Object(v.b)(oe)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,Cn=Object(v.b)(oe)`
  & > * {
    --gap: var(--s2);
  }
`,Tn=v.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,{Title:In,Text:Bn}=d.a;var Dn=function(){const[e,t]=Object(a.useState)(!1),n=Object(p.g)(),{getClient:o,address:c,refreshBalance:i}=R(),{contractAddress:s,allowingAddress:l}=Object(p.h)(),u=`/token/detail/${s}/${null!==l&&void 0!==l?l:""}`,[m,d]=Object(a.useState)(""),[f,h]=Object(a.useState)("0"),[v,b]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=C(o()).use(s),t=null!==l&&void 0!==l?l:c;e.tokenInfo().then(({symbol:e,decimals:t})=>{d(e),b(t)}),l?e.allowance(l,c).then(e=>h(e.allowance)):e.balance(t).then(e=>h(e))},[o,s,l,c]);const g=S.Decimal.fromAtomics(f,v).toString(),[E,y]=g.split("."),w=S.Decimal.fromAtomics(f,v);return e&&r.a.createElement(ve,{loadingText:`Sending ${m}...`})||!e&&r.a.createElement(se,null,r.a.createElement(An,null,r.a.createElement(me,{icon:rt.a,path:"/tokens"}),r.a.createElement(Cn,null,r.a.createElement(In,null,m),r.a.createElement(qe,{hideTitle:!0,hideBalance:!0})),r.a.createElement(Tn,null,r.a.createElement(Bn,null,`${E}${y?".":""}`),y&&r.a.createElement(Bn,null,y),r.a.createElement(Bn,null," tokens")),r.a.createElement(kn,{tokenName:m,maxAmount:w,sendTokensAction:e=>{t(!0);const{address:a,amount:r}=e,d=S.Decimal.fromUserInput(r,v).atomics,f=C(o()).use(s);try{l?f.transferFrom(c,l,a,d).then(e=>{if(!e)return Promise.reject("Transfer from failed");i(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${m} successfully sent to ${a} with allowance from ${l}`,customButtonText:"Token detail",customButtonActionPath:u}})}):f.transfer(c,a,d).then(e=>{if(!e)return Promise.reject("Transfer failed");i(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${m} successfully sent to ${a}`,customButtonText:"Token detail",customButtonActionPath:u}})})}catch(h){console.error(h),n.push({pathname:"/result",state:{success:!1,message:"Send transaction failed:",error:J(h),customButtonActionPath:u}})}}})))};var zn=function(){return r.a.createElement(D,null,r.a.createElement(_,{config:Xe},r.a.createElement(A,null,r.a.createElement(Ke,null),r.a.createElement(Qe.a,{basename:"/cw20-wallet"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:Vt}),r.a.createElement(p.b,{exact:!0,path:"/login",component:Vt}),r.a.createElement(Y,{authPath:"/login"},r.a.createElement(p.b,{exact:!0,path:"/tokens",component:gn}),r.a.createElement(p.b,{exact:!0,path:"/tokens/add/:codeId?",component:xn}),r.a.createElement(p.b,{exact:!0,path:"/token/detail/:contractAddress/:allowingAddress?",component:ln}),r.a.createElement(p.b,{exact:!0,path:"/token/send/:contractAddress/:allowingAddress?",component:Dn}),r.a.createElement(p.b,{exact:!0,path:"/allowances/:contractAddress",component:qt}),r.a.createElement(p.b,{exact:!0,path:"/allowances/:contractAddress/add",component:wt}),r.a.createElement(p.b,{exact:!0,path:"/allowances/:contractAddress/edit/:spenderAddress",component:At}),r.a.createElement(p.b,{exact:!0,path:"/result",component:Gt})))))))};n(993);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(zn,null)),document.getElementById("root"))}},[[482,1,2]]]);
//# sourceMappingURL=main.8d0ba9d9.chunk.js.map