(this["webpackJsonpcw20-wallet"]=this["webpackJsonpcw20-wallet"]||[]).push([[0],{298:function(e,t){},411:function(e,t,n){e.exports=n.p+"static/media/edit.fdc29000.svg"},412:function(e,t,n){e.exports=n.p+"static/media/cosmWasmLogo.15dccd19.svg"},413:function(e,t,n){e.exports=n.p+"static/media/failIcon.71513020.svg"},414:function(e,t,n){e.exports=n.p+"static/media/successIcon.2e305b66.svg"},420:function(e,t,n){e.exports=n(873)},463:function(e,t){},465:function(e,t){},475:function(e,t){},477:function(e,t){},519:function(e,t){},520:function(e,t){},525:function(e,t){},527:function(e,t){},551:function(e,t){},65:function(e,t,n){e.exports=n.p+"static/media/backArrow.9849fc2e.svg"},872:function(e,t,n){},873:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=(n(209),n(127)),s=n.n(i),l=(n(71),n(28)),u=n.n(l),m=(n(79),n(29)),d=n.n(m),f=(n(430),n(405)),h=n.n(f),p=n(6),v=n(37),b=n(884),g=n(396),E=n(397),y=n(74),j=n(58),w=n(398),O=n(399),x=n(22);var S={setError:function(){},clearError:function(){}},P=Object(a.createContext)(S),k=function(){return Object(a.useContext)(P)};function A(e){var t=e.children,n=Object(a.useState)(),r=n[0],c=n[1],o={error:r,setError:c,clearError:function(){c(void 0)}};return Object(a.createElement)(P.Provider,{value:o},t)}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var T=function(e){try{var t=window;if(!t.getOfflineSigner)throw new Error("Keplr extension is not available");return Promise.resolve(t.getOfflineSigner(e))}catch(n){return Promise.reject(n)}},D=function(e,t){try{return Promise.resolve(O.a.create(12e4,12e4)).then((function(e){return new w.LedgerSigner(e,{hdPaths:[Object(j.makeCosmoshubPath)(0)],prefix:t})}))}catch(n){return Promise.reject(n)}},I=function(e,t){try{var n=function(){var e="burner-wallet",t=localStorage.getItem(e);if(t)return t;var n=y.Bip39.encode(y.Random.getBytes(16)).toString();return localStorage.setItem(e,n),n}(),a=Object(j.makeCosmoshubPath)(0);return Promise.resolve(j.Secp256k1HdWallet.fromMnemonic(n,a,t))}catch(r){return Promise.reject(r)}};function z(){throw new Error("Not yet initialized")}var B={initialized:!1,address:"",config:{},init:z,clear:z,getSigner:z,getClient:z,getStakingClient:z,changeConfig:z,changeSigner:z},$=Object(a.createContext)(B),N=function(){return Object(a.useContext)($)};function M(e){var t=e.config,n=e.children,r=Object(a.useState)(t),c=r[0],o=r[1],i=Object(a.useState)(),s=i[0],l=i[1],u=Object(a.useState)(),m=u[0],d=u[1],f=C({},B,{init:l}),h=Object(a.useState)(f),p=h[0],v=h[1];function b(){v(C({},f))}function y(e){o((function(t){return C({},t,e)}))}return Object(a.useEffect)((function(){s&&function(){try{Promise.resolve(function(e,t){try{return Promise.resolve(t.getAccounts()).then((function(n){var a=n[0].address,r=j.GasPrice.fromString(""+e.gasPrice+e.feeToken);return new E.SigningCosmWasmClient(e.httpUrl,a,t,r,{upload:15e5,init:6e5,exec:4e5,migrate:6e5,send:8e4,changeAdmin:8e4})}))}catch(n){return Promise.reject(n)}}(c,s)).then((function(e){d(e)}))}catch(e){Promise.reject(e)}}()}),[s,c]),Object(a.useEffect)((function(){if(s&&m){var e,t=m.senderAddress,n=(e=c.httpUrl,j.LcdClient.withExtensions({apiUrl:e},j.setupStakingExtension));!function(){try{var e=function(){v({initialized:!0,address:t,config:c,init:function(){},clear:b,getSigner:function(){return s},getClient:function(){return m},getStakingClient:function(){return n},changeConfig:y,changeSigner:l})},a=function(){if(c.faucetUrl)return Promise.resolve(m.getAccount()).then((function(e){var n=function(){var n;if(!(null===e||void 0===e||null===(n=e.balance)||void 0===n?void 0:n.length)){var a=new g.FaucetClient(c.faucetUrl);return Promise.resolve(a.credit(t,c.feeToken)).then((function(){}))}}();if(n&&n.then)return n.then((function(){}))}))}();a&&a.then?a.then(e):e()}catch(r){Promise.reject(r)}}()}}),[m]),Object(a.createElement)($.Provider,{value:p},n)}var U={refreshAccount:function(){}},q=Object(a.createContext)(U),H=function(){return Object(a.useContext)(q)};function L(e){var t=e.children,n=k().setError,r=N(),c=Object(a.useState)({}),o=c[0],i=c[1];function s(){r.initialized&&r.getClient().getAccount().then((function(e){return i({account:e})})).catch(n)}Object(a.useEffect)(s,[r,n]);var l={refreshAccount:s,account:o.account};return Object(a.createElement)(q.Provider,{value:l},t)}var V={contracts:[],addContract:function(){}},F=r.a.createContext(V),W=function(){return r.a.useContext(F)};function _(e){var t=e.children,n=Object(a.useState)(V.contracts),c=n[0],o=n[1];var i={contracts:c,addContract:function(e){o((function(t){return!t.find((function(t){return t.contractAddress===e.contractAddress}))?[].concat(t,[e]):t}))}};return r.a.createElement(F.Provider,{value:i},t)}var R=function(e){return{use:function(t){return{contractAddress:t,balance:function(n){try{var a=n||e.senderAddress;return Promise.resolve(e.queryContractSmart(t,{balance:{address:a}})).then((function(e){return e.balance}))}catch(r){return Promise.reject(r)}},allowance:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{allowance:{owner:n,spender:a}}))}catch(r){return Promise.reject(r)}},allAllowances:function(n,a,r){try{return Promise.resolve(e.queryContractSmart(t,{all_allowances:{owner:n,start_after:a,limit:r}}))}catch(c){return Promise.reject(c)}},allAccounts:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{all_accounts:{start_after:n,limit:a}})).then((function(e){return e.accounts}))}catch(r){return Promise.reject(r)}},tokenInfo:function(){try{return Promise.resolve(e.queryContractSmart(t,{token_info:{}}))}catch(n){return Promise.reject(n)}},investment:function(){try{return Promise.resolve(e.queryContractSmart(t,{investment:{}}))}catch(n){return Promise.reject(n)}},claims:function(n){try{return Promise.resolve(e.queryContractSmart(t,{claims:{address:n}}))}catch(a){return Promise.reject(a)}},minter:function(){try{return Promise.resolve(e.queryContractSmart(t,{minter:{}}))}catch(n){return Promise.reject(n)}},mint:function(n,a){try{return Promise.resolve(e.execute(t,{mint:{recipient:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},transfer:function(n,a){try{return Promise.resolve(e.execute(t,{transfer:{recipient:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},burn:function(n){try{return Promise.resolve(e.execute(t,{burn:{amount:n}})).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},increaseAllowance:function(n,a){try{return Promise.resolve(e.execute(t,{increase_allowance:{spender:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},decreaseAllowance:function(n,a){try{return Promise.resolve(e.execute(t,{decrease_allowance:{spender:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},transferFrom:function(n,a,r){try{return Promise.resolve(e.execute(t,{transfer_from:{owner:n,recipient:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(c){return Promise.reject(c)}},bond:function(n){try{return Promise.resolve(e.execute(t,{bond:{}},void 0,[n])).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},unbond:function(n){try{return Promise.resolve(e.execute(t,{unbond:{amount:n}})).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},claim:function(){try{return Promise.resolve(e.execute(t,{claim:{}})).then((function(e){return e.transactionHash}))}catch(n){return Promise.reject(n)}}}}}};function G(e){var t=e.authPath,n=e.children,a=e.location;return N().initialized?r.a.createElement(v.d,{location:a},n):r.a.createElement(v.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function K(e){if(!e)return"0";if(e.denom.startsWith("u")){var t=e.denom.slice(1).toUpperCase();return x.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+t}return e.amount+"\u202f"+e.denom}function Y(e){var t=(e||"").toString(),n=t.match(/.*\s*$/g)[0];return n.substring(0,n.lastIndexOf(";"))||t}var J=n(402),Q=n.n(J);function X(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function Z(e,t){return t||(t=e.slice(0)),e.raw=t,e}function ee(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,c=X(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},c),r)}function te(){var e=Z(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return te=function(){return e},e}var ne=Object(p.b)(ee)(te());function ae(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,c=X(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},c),r)}function re(){var e=Z(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return re=function(){return e},e}var ce=Object(p.b)(ae)(re());function oe(e){var t=e.children,n=X(e,["children"]);return Object(a.createElement)(ne,Object.assign({tag:"main"},n),t)}function ie(){var e=Z(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return ie=function(){return e},e}var se=Object(p.b)(oe)(ie());function le(e){var t=e.icon,n=e.path,a=e.state,c=X(e,["icon","path","state"]),o=Object(v.g)(),i=n?function(){return o.push(n,a)}:o.goBack;return r.a.createElement("img",Object.assign({src:t,alt:"Back arrow",onClick:i},c))}function ue(){var e=Z(["\n  cursor: pointer;\n"]);return ue=function(){return e},e}var me=Object(p.b)(le)(ue());function de(){var e=Z(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return de=function(){return e},e}var fe=Object(p.b)(h.a)(de()),he=Object(a.createElement)(b.a,{style:{fontSize:"6.25rem"},spin:!0});function pe(e){var t=e.loadingText||"Loading...";return Object(a.createElement)(se,null,Object(a.createElement)(fe,{indicator:he,tip:t}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function ve(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function be(){var e=Z(["\n  color: var(--color-red);\n"]);return be=function(){return e},e}function ge(){var e=Z(["\n  display: block;\n  font-weight: lighter;\n"]);return ge=function(){return e},e}function Ee(){var e=Z(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Ee=function(){return e},e}function ye(){var e=Z(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return ye=function(){return e},e}var je=d.a.Text,we=Object(p.b)(ce)(ye()),Oe=Object(p.b)(ce)(Ee()),xe=Object(p.b)(je)(ge()),Se=Object(p.b)(je)(be()),Pe=d.a.Title;function ke(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function Ae(e){var t=function(e){try{x(!0),b();var t=ve((function(){return Promise.resolve(e(n.chainId,n.addressPrefix)).then((function(e){return Promise.resolve(g.init(e)).then((function(){}))}))}),(function(e){console.error(e),p(Error(e).message),x(!1)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},n=e.config,c=e.pathAfterLogin,o=e.appName,i=e.appLogo,s=X(e,["config","pathAfterLogin","appName","appLogo"]),l=Object(v.g)(),m=l.location.state,f=k(),h=f.error,p=f.setError,b=f.clearError,g=N(),E=H(),y=E.refreshAccount,j=E.account,w=Object(a.useState)(!1),O=w[0],x=w[1];return Object(a.useEffect)((function(){g.initialized&&y()}),[g.initialized,y]),Object(a.useEffect)((function(){j&&(m?l.push(m.redirectPathname,m.redirectState):l.push(c))}),[j,m,l]),O?r.a.createElement(pe,{loadingText:"Initializing app..."}):r.a.createElement(se,Object.assign({},s),r.a.createElement(we,null,r.a.createElement("img",{src:i,alt:"CosmWasm logo"}),r.a.createElement(Oe,null,r.a.createElement(d.a,null,r.a.createElement(Pe,{level:2},"Hello!"),r.a.createElement(xe,null,"Welcome to your ",o),r.a.createElement(xe,null,"Select one of the following options to start:")),h&&r.a.createElement(Se,null,h),r.a.createElement(u.a,{type:"primary",onClick:function(){try{return Promise.resolve(t(I)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Browser (Demo)"),r.a.createElement(u.a,{type:"primary",disabled:ke(),onClick:function(){try{return Promise.resolve(t(D)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Ledger (Secure, Chrome)"),r.a.createElement(u.a,{type:"primary",disabled:!1,onClick:function(){try{var e=window,a=ve((function(){return Promise.resolve(e.keplr.experimentalSuggestChain(function(e){return{chainId:e.chainId,chainName:e.chainName,rpc:e.rpcUrl,rest:e.httpUrl,bech32Config:{bech32PrefixAccAddr:""+e.addressPrefix,bech32PrefixAccPub:e.addressPrefix+"pub",bech32PrefixValAddr:e.addressPrefix+"valoper",bech32PrefixValPub:e.addressPrefix+"valoperpub",bech32PrefixConsAddr:e.addressPrefix+"valcons",bech32PrefixConsPub:e.addressPrefix+"valconspub"},currencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits},{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits}],feeCurrencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits}],stakeCurrency:{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits},gasPriceStep:{low:e.gasPrice/2,average:e.gasPrice,high:2*e.gasPrice},bip44:{coinType:118},coinType:118}}(n))).then((function(){return Promise.resolve(e.keplr.enable(n.chainId)).then((function(){return Promise.resolve(t(T)).then((function(){}))}))}))}),(function(e){console.error(e),p(Error(e).message)}));return Promise.resolve(a&&a.then?a.then((function(){})):void 0)}catch(r){return Promise.reject(r)}}},"Keplr (Secure)"))))}function Ce(){var e=Z(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return Ce=function(){return e},e}function Te(){var e=Z(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Te=function(){return e},e}var De=d.a.Text,Ie=Object(p.b)(ce)(Te()),ze=Object(p.b)(De)(Ce());function Be(e){var t=e.defaultButtonAction,n=e.successIcon,a=e.failIcon,c=Object(v.g)(),o=c.location.state,i=o.success,s=o.message,l=o.error,m=o.customButtonText,d=o.customButtonActionPath,f=o.customButtonActionState;var h=function(e){return e?{result:"success",icon:n,buttonText:"Home",buttonAction:function(){return t(c)}}:{result:"failure",icon:a,buttonText:"Retry",buttonAction:c.goBack}}(i),p=h.icon,b=h.result,g=h.buttonText,E=h.buttonAction,y=m||g,j=d?function(){return c.push(d,f)}:E;return r.a.createElement(se,null,r.a.createElement(Ie,null,r.a.createElement("img",{src:p,alt:"Result icon"}),r.a.createElement(ze,{"data-result":b},s),l&&r.a.createElement(ze,{"data-result":b},l),r.a.createElement(u.a,{type:"primary",onClick:j},y)))}function $e(){var e=Z(['\n  & > * {\n    --gap: var(--s-2);\n  }\n\n  h3,\n  div[role="separator"] {\n    margin: 0;\n  }\n\n  span,\n  button {\n    overflow-wrap: anywhere;\n  }\n\n  span {\n    display: block;\n    font-size: var(--s-1);\n  }\n\n  span + span {\n    font-weight: bold;\n  }\n\n  button,\n  button span {\n    font-size: var(--s0);\n  }\n\n  button {\n    height: 100%;\n    white-space: normal;\n  }\n']);return $e=function(){return e},e}var Ne=Object(p.b)(ce)($e()),Me=d.a.Title,Ue=d.a.Text;function qe(e){var t,n=e.tag,a=e.hideTitle,c=e.hideBalance,o=null!==(t=H().account)&&void 0!==t?t:{address:"",balance:[]},i=o.address,l=o.balance;return r.a.createElement(Ne,{tag:n},!a&&r.a.createElement("header",null,r.a.createElement(Me,{level:3},"Your Account"),!c&&r.a.createElement(s.a,null)),r.a.createElement(Ue,null,i),!c&&r.a.createElement(Ue,null,"(",function(e){return e&&0!==e.length?e.map(K).join(", "):"\u2013"}(l),")"),r.a.createElement(u.a,{type:"primary",onClick:function(){return Q()(i)}},"Copy Account Address"))}function He(){var e=Z(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return He=function(){return e},e}var Le=Object(p.a)(He());function Ve(){var e=Z(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return Ve=function(){return e},e}var Fe=Object(p.a)(Ve());function We(){var e=Z(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return We=function(){return e},e}var _e=Object(p.a)(We());function Re(){var e=Z(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return Re=function(){return e},e}var Ge=Object(p.a)(Re());function Ke(){var e=Z(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return Ke=function(){return e},e}var Ye=Object(p.a)(Ke());function Je(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge,null),r.a.createElement(Ye,null),r.a.createElement(Fe,null),r.a.createElement(_e,null),r.a.createElement(Le,null))}var Qe=n(57);const Xe=function(e){var t=e.heldernet;if(!t)throw new Error("No configuration found for network heldernet");return t}({local:{chainId:"testing",chainName:"Testing",addressPrefix:"cosmos",rpcUrl:"http://localhost:26657",httpUrl:"http://localhost:1317",faucetUrl:"http://localhost:8000",feeToken:"ucosm",stakingToken:"uatom",coinMap:{ucosm:{denom:"COSM",fractionalDigits:6},uatom:{denom:"ATOM",fractionalDigits:6}},gasPrice:.025,codeId:40},heldernet:{chainId:"hackatom-wasm",chainName:"Heldernet",addressPrefix:"cosmos",rpcUrl:"https://rpc.heldernet.cosmwasm.com",httpUrl:"https://lcd.heldernet.cosmwasm.com",faucetUrl:"https://faucet.heldernet.cosmwasm.com",feeToken:"ucosm",stakingToken:"ustake",coinMap:{ucosm:{denom:"COSM",fractionalDigits:6},ustake:{denom:"STAKE",fractionalDigits:6}},gasPrice:.025}});var Ze=n(38),et=n(881),tt=n(410),nt=n(882),at=n(65),rt=n.n(at),ct=n(69);const ot=new RegExp("^"+Xe.addressPrefix),it=ct.d().matches(ot,`"${Xe.addressPrefix}" prefix required`).length(39+Xe.addressPrefix.length,"Address invalid"),st=it.required("An address is required"),lt=ct.b().required("An amount is required").positive("Amount should be positive"),ut=ct.c().shape({contract:ct.a(e=>Number.isNaN(Number(e))?st:ct.b().positive())}),mt=ct.c().shape({address:it}),dt=ct.c().shape({address:st}),ft=ct.c().shape({newAmount:lt}),ht=ct.c().shape({address:st,amount:lt}),pt=Object(p.b)(ce)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,vt=Object(p.b)(ce)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`,bt=Object(p.b)(ce)`
  & > * {
    --gap: var(--s2);
  }
`,gt=p.b.div`
  display: flex;
  align-items: baseline;

  span {
    margin-left: var(--s1);
    font-family: var(--ff-iceland);
    font-size: var(--s1);
  }
`,{Title:Et,Text:yt}=d.a;var jt=function(){const[e,t]=Object(a.useState)(!1),n=Object(v.g)(),{getClient:c}=N(),{account:o}=H(),{contractAddress:i}=Object(v.h)(),[s,l]=Object(a.useState)(""),[m,d]=Object(a.useState)(0);return Object(a.useEffect)(()=>{R(c()).use(i).tokenInfo().then(e=>{l(e.symbol),d(e.decimals)})},[c,i]),e&&r.a.createElement(pe,{loadingText:"Adding allowance..."})||!e&&r.a.createElement(se,null,r.a.createElement(pt,null,r.a.createElement(me,{icon:rt.a,path:"/tokens"}),r.a.createElement(Et,null,"Add Allowance"),r.a.createElement(Ze.c,{initialValues:{address:"",amount:""},onSubmit:e=>{t(!0);const{address:a,amount:r}=e,l=R(c()).use(i);l.allowance(o.address,a).then(({allowance:e})=>{const t=x.Decimal.fromUserInput(r,m),c=x.Decimal.fromAtomics(e,m);try{let e=Promise.reject("");e=t.isGreaterThan(c)?l.increaseAllowance(a,t.minus(c).atomics):l.decreaseAllowance(a,c.minus(t).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${r} ${s} allowance for ${a} successfully added `,customButtonText:"Tokens"}})})}catch(o){console.error(o),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:Y(o),customButtonActionPath:"/allowances/"+i}})}})},validationSchema:ht},e=>r.a.createElement(et.a,null,r.a.createElement(vt,null,r.a.createElement(bt,null,r.a.createElement(tt.a,{name:"address"},r.a.createElement(nt.a,{name:"address",placeholder:"Enter address"})),r.a.createElement(gt,null,r.a.createElement(tt.a,{name:"amount"},r.a.createElement(nt.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(yt,null,s))),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))))};const wt=Object(p.b)(ce)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`;function Ot({submitChangeAmount:e}){return r.a.createElement(Ze.c,{initialValues:{newAmount:""},onSubmit:e,validationSchema:ft},e=>r.a.createElement(et.a,null,r.a.createElement(wt,null,r.a.createElement(tt.a,{name:"newAmount"},r.a.createElement(nt.a,{name:"newAmount",placeholder:"Enter new amount"})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))}const xt=Object(p.b)(ce)`
  & > * {
    --gap: var(--s3);
  }

  h1 {
    margin: 0;
  }

  & > span {
    font-size: var(--s-1);
  }
`,St=p.b.div`
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
`,{Title:Pt,Text:kt}=d.a;var At=function(){const[e,t]=Object(a.useState)(!1),n=Object(v.g)(),{getClient:c}=N(),{account:o}=H(),{contractAddress:i,spenderAddress:s}=Object(v.h)(),[l,u]=Object(a.useState)(""),[m,d]=Object(a.useState)(0),[f,h]=Object(a.useState)("0");Object(a.useEffect)(()=>{const e=R(c()).use(i);e.tokenInfo().then(e=>{u(e.symbol),d(e.decimals)}),e.allowance(o.address,s).then(({allowance:e})=>h(e))},[c,i,o.address,s]);const p=x.Decimal.fromAtomics(f,m).toString();return e&&r.a.createElement(pe,{loadingText:"Changing allowance..."})||!e&&r.a.createElement(se,null,r.a.createElement(xt,null,r.a.createElement(me,{icon:rt.a,path:"/tokens"}),r.a.createElement(Pt,null,"Allowance"),r.a.createElement(kt,null,s),r.a.createElement(St,null,r.a.createElement(kt,null,"Current"),r.a.createElement(kt,null,p),r.a.createElement(kt,null,l)),r.a.createElement(Ot,{submitChangeAmount:e=>{t(!0);const{newAmount:a}=e,r=x.Decimal.fromUserInput(a,m),o=x.Decimal.fromAtomics(f,m),u=R(c()).use(i);try{let e=Promise.reject("");e=r.isGreaterThan(o)?u.increaseAllowance(s,r.minus(o).atomics):u.decreaseAllowance(s,o.minus(r).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${l} allowance successfully set to ${a} for ${s}`,customButtonText:"Tokens"}})})}catch(d){console.error(d),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:Y(d),customButtonActionPath:"/allowances/"+i}})}}})))},Ct=n(411),Tt=n.n(Ct);const Dt=Object(p.b)(ce)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,It=Object(p.b)(ce)`
  & > * {
    --gap: var(--s2);
  }
`,zt=p.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,Bt=Object(p.b)(ce)`
  & > * {
    --gap: var(--s0);
  }
`,$t=p.b.div`
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
`,Nt=p.b.div`
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
`,{Title:Mt,Text:Ut}=d.a;var qt=function(){const e=Object(v.g)(),{getClient:t}=N(),{account:n}=H(),{contractAddress:c}=Object(v.h)(),[o,i]=Object(a.useState)([]),[l,m]=Object(a.useState)(""),[d,f]=Object(a.useState)("0"),[h,p]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=R(t()).use(c);e.tokenInfo().then(({symbol:e,decimals:t})=>{m(e),p(t)}),e.balance(n.address).then(e=>f(e)),e.allAllowances(n.address).then(({allowances:e})=>i(e))},[t,c,n.address]);const b=x.Decimal.fromAtomics(d,h).toString(),[g,E]=b.split("."),y=null!==E&&void 0!==E?E:"";return r.a.createElement(se,null,r.a.createElement(Dt,null,r.a.createElement(me,{icon:rt.a,path:"/tokens"}),r.a.createElement(It,null,r.a.createElement(Mt,null,"Allowances"),r.a.createElement(zt,null,r.a.createElement(Ut,null,`${g}${y?".":""}`),r.a.createElement(Ut,null,y," ",l),r.a.createElement(Ut,null," tokens"))),r.a.createElement(Bt,null,o.map((t,n)=>{const a=x.Decimal.fromAtomics(t.allowance,h).toString();return r.a.createElement(r.a.Fragment,null,n>0&&r.a.createElement(s.a,null),r.a.createElement($t,null,r.a.createElement(Ut,null,t.spender),r.a.createElement(Nt,null,r.a.createElement(Ut,null,a),r.a.createElement("img",{alt:"Edit allowance",src:Tt.a,onClick:()=>{return n=t.spender,void e.push(`/allowances/${c}/edit/${n}`);var n}}))))})),r.a.createElement(u.a,{type:"primary",onClick:function(){e.push(`/allowances/${c}/add`)}},"Add New")))},Ht=n(412),Lt=n.n(Ht);var Vt=function(){return r.a.createElement(Ae,{pathAfterLogin:"/tokens",appName:"CW20 Wallet",appLogo:Lt.a,config:Xe})},Ft=n(413),Wt=n.n(Ft),_t=n(414),Rt=n.n(_t);function Gt(e){e.push("/tokens")}var Kt=function(){return r.a.createElement(Be,{defaultButtonAction:Gt,successIcon:Rt.a,failIcon:Wt.a})},Yt=(n(161),n(102)),Jt=n.n(Yt),Qt=n(143);const Xt=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:c,...o},i)=>a.createElement(Qt.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(Jt.a,Object.assign({ref:i,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),c&&c(e)}},o))));Xt.Search=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:c,...o},i)=>a.createElement(Qt.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(Jt.a.Search,Object.assign({ref:i,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),c&&c(e)}},o))));var Zt=Xt.Search;var en=function({initialAddress:e,setSearchedAddress:t}){return r.a.createElement(Ze.c,{initialValues:{address:e},validationSchema:mt,onSubmit:e=>{t(e.address)}},e=>r.a.createElement(et.a,null,r.a.createElement(tt.a,{name:"address"},r.a.createElement(Zt,{name:"address",placeholder:"Search",enterButton:!0,onSearch:n=>{e.isValid&&t(n)}}))))};const tn=Object(p.b)(ce)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,nn=Object(p.b)(ce)`
  & > * {
    --gap: var(--s2);
  }
`,an=p.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,rn=Object(p.b)(ce)`
  & > * {
    --gap: var(--s0);
  }
`,cn=p.b.div`
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
`,{Title:on,Text:sn}=d.a;var ln=function(){const e=Object(v.g)(),{getClient:t}=N(),{account:n}=H(),{contractAddress:c,allowingAddress:o}=Object(v.h)(),[i,l]=Object(a.useState)(o),[m,d]=Object(a.useState)(),[f,h]=Object(a.useState)(""),[p,b]=Object(a.useState)("0"),[g,E]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=R(t()).use(c),a=null!==i&&void 0!==i?i:n.address;e.tokenInfo().then(({symbol:e,decimals:t})=>{h(e),E(t)}),e.balance(a).then(e=>b(e))},[t,c,i,n.address]);const y=x.Decimal.fromAtomics(p,g).toString(),[j,w]=y.split("."),O=x.Decimal.fromAtomics(m,g).toString(),S=!!m&&"0"!==m,P=!m||"0"!==m,k="0"===p,A=!i;return r.a.createElement(se,null,r.a.createElement(tn,null,r.a.createElement(me,{icon:rt.a,path:"/tokens"}),r.a.createElement(nn,null,r.a.createElement(on,null,f),r.a.createElement(qe,{hideTitle:!0,hideBalance:!0})),r.a.createElement(an,null,r.a.createElement(sn,null,`${j}${w?".":""}`),w&&r.a.createElement(sn,null,w),r.a.createElement(sn,null," tokens")),r.a.createElement(en,{initialAddress:i,setSearchedAddress:function(e){if(!e)return l(void 0),void d(void 0);l(e),R(t()).use(c).allowance(e,n.address).then(e=>d(e.allowance))}}),S&&r.a.createElement(rn,null,r.a.createElement(s.a,null),r.a.createElement(cn,null,r.a.createElement(sn,null,"Your allowance"),r.a.createElement(sn,null,O))),P&&r.a.createElement(u.a,{type:"primary",onClick:function(){const t=i||"";e.push(`/token/send/${c}/${t}`)},disabled:k},"Send"),A&&r.a.createElement(u.a,{type:"primary",onClick:function(){e.push("/allowances/"+c)}},"My allowances")))};const un=Object(p.b)(ce)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,mn=Object(p.b)(ce)`
  & > * {
    --gap: 0;
  }
`,dn=p.b.div`
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
`,fn=p.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Text:hn}=d.a;async function pn(e){const{symbol:t,decimals:n}=await e.tokenInfo(),a=e.contractAddress;return{coin:{denom:t,amount:await e.balance()},fractionalDigits:n,address:a}}function vn(e,t){return e.coin.denom<t.coin.denom?-1:e.coin.denom>t.coin.denom?1:0}var bn=function(){const e=Object(v.g)(),{getClient:t}=N(),{contracts:n,addContract:c}=W(),[o,i]=Object(a.useState)([]);return Object(a.useEffect)(()=>{if(!Xe.codeId)return;const e=t();e.getContracts(Xe.codeId).then(t=>{t.forEach(t=>{const n=R(e).use(t.address);c(n)})})},[t,c]),Object(a.useEffect)(()=>{const e=n.map(pn);Promise.all(e).then(e=>i(e.sort(vn)))},[n]),r.a.createElement(mn,null,o.map(t=>{const n=x.Decimal.fromAtomics(t.coin.amount,t.fractionalDigits).toString();return r.a.createElement(dn,{key:t.address,onClick:()=>{return n=t.address,void e.push("/token/detail/"+n);var n}},r.a.createElement(fn,null,r.a.createElement(hn,null,t.coin.denom),r.a.createElement(hn,null,"0"!==n?n:"No tokens")))}))};const{Title:gn}=d.a;var En=function(){return r.a.createElement(se,null,r.a.createElement(un,null,r.a.createElement(gn,null,"Tokens"),r.a.createElement(bn,null),r.a.createElement(Qe.b,{to:"/tokens/add"},r.a.createElement(u.a,{type:"primary"},"Add another")),r.a.createElement(qe,{hideBalance:!0})))},yn=n(883);const jn=Object(p.b)(ce)`
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
`,wn=Object(p.b)(ce)`
  & > * {
    --gap: var(--s4);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,{Title:On}=d.a;var xn=function(){const{getClient:e}=N(),{setError:t}=k(),{addContract:n}=W(),c=Object(v.g)(),[o,i]=Object(a.useState)(),[s,l]=Object(a.useState)([]),[m,d]=Object(a.useState)([]);function f(e){d(e)}function h(e,t){return t.title.toLowerCase().indexOf(e.toLowerCase())>=0}const p=!o,b=!p;return r.a.createElement(se,null,r.a.createElement(me,{icon:rt.a,path:"/tokens"}),r.a.createElement(jn,null,r.a.createElement(On,null,"Add Other"),p&&r.a.createElement(Ze.c,{initialValues:{contract:""},onSubmit:function({contract:a}){const r=!Number.isNaN(Number(a))&&Number(a);if(r)e().getContracts(r).then(e=>{l(e),i(r)}).catch(t);else{const t=String(a),r=R(e()).use(t);r.tokenInfo().then(()=>n(r)).then(()=>c.push({pathname:"/result",state:{success:!0,message:`"${t}" was successfully added :)`,customButtonText:"Tokens"}})).catch(e=>c.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:Y(e),customButtonActionPath:"/tokens/add"}}))}},validationSchema:ut},e=>r.a.createElement(et.a,null,r.a.createElement(wn,null,r.a.createElement(tt.a,{name:"contract"},r.a.createElement(nt.a,{name:"contract",placeholder:"Enter a contract address or codeID"})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Continue")))),b&&r.a.createElement(Ze.c,{initialValues:{},onSubmit:function(){m.forEach(t=>{const a=R(e()).use(t);a.tokenInfo().then(()=>n(a)).catch(e=>c.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:Y(e),customButtonActionPath:"/tokens/add"}}))}),c.push({pathname:"/result",state:{success:!0,message:`"Your CodeID: ${o}" were successfully added :)`,customButtonText:"Tokens"}})}},e=>r.a.createElement(et.a,null,r.a.createElement(wn,null,r.a.createElement(tt.a,{name:"contracts"},r.a.createElement(yn.a,{name:"contracts",showSearch:!0,filterOption:h,dataSource:s.map(e=>({key:e.address,title:e.label})),onSelectChange:f,listStyle:{listStyle:"none"},render:e=>e.title})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!m.length},"Continue"))))))};const Sn=Object(p.b)(ce)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,Pn=p.b.div`
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
`,{Text:kn}=d.a;function An({tokenName:e,maxAmount:t,sendTokensAction:n}){const a=ct.c().shape({amount:lt.max(t.toFloatApproximation(),"Amount cannot be greater than "+t.toString())}).concat(dt);return r.a.createElement(Ze.c,{initialValues:{amount:"",address:""},onSubmit:n,validationSchema:a},t=>r.a.createElement(et.a,null,r.a.createElement(Sn,null,r.a.createElement(Pn,null,r.a.createElement(kn,null,"Send"),r.a.createElement(tt.a,{name:"amount"},r.a.createElement(nt.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(kn,null,e)),r.a.createElement(Pn,null,r.a.createElement(kn,null,"to"),r.a.createElement(tt.a,{name:"address"},r.a.createElement(nt.a,{name:"address",placeholder:"Enter address"}))),r.a.createElement(u.a,{type:"primary",onClick:t.submitForm,disabled:!(t.isValid&&t.dirty)},"Send"))))}const Cn=Object(p.b)(ce)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,Tn=Object(p.b)(ce)`
  & > * {
    --gap: var(--s2);
  }
`,Dn=p.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,{Title:In,Text:zn}=d.a;var Bn=function(){const[e,t]=Object(a.useState)(!1),n=Object(v.g)(),{getClient:c}=N(),{account:o,refreshAccount:i}=H(),{contractAddress:s,allowingAddress:l}=Object(v.h)(),u=`/token/detail/${s}/${null!==l&&void 0!==l?l:""}`,[m,d]=Object(a.useState)(""),[f,h]=Object(a.useState)("0"),[p,b]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=R(c()).use(s),t=null!==l&&void 0!==l?l:o.address;e.tokenInfo().then(({symbol:e,decimals:t})=>{d(e),b(t)}),l?e.allowance(l,o.address).then(e=>h(e.allowance)):e.balance(t).then(e=>h(e))},[c,s,l,o.address]);const g=x.Decimal.fromAtomics(f,p).toString(),[E,y]=g.split("."),j=x.Decimal.fromAtomics(f,p);return e&&r.a.createElement(pe,{loadingText:`Sending ${m}...`})||!e&&r.a.createElement(se,null,r.a.createElement(Cn,null,r.a.createElement(me,{icon:rt.a,path:"/tokens"}),r.a.createElement(Tn,null,r.a.createElement(In,null,m),r.a.createElement(qe,{hideTitle:!0,hideBalance:!0})),r.a.createElement(Dn,null,r.a.createElement(zn,null,`${E}${y?".":""}`),y&&r.a.createElement(zn,null,y),r.a.createElement(zn,null," tokens")),r.a.createElement(An,{tokenName:m,maxAmount:j,sendTokensAction:e=>{t(!0);const{address:a,amount:r}=e,o=x.Decimal.fromUserInput(r,p).atomics,d=R(c()).use(s);try{l?d.transferFrom(l,a,o).then(e=>{if(!e)return Promise.reject("Transfer from failed");i(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${m} successfully sent to ${a} with allowance from ${l}`,customButtonText:"Token detail",customButtonActionPath:u}})}):d.transfer(a,o).then(e=>{if(!e)return Promise.reject("Transfer failed");i(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${m} successfully sent to ${a}`,customButtonText:"Token detail",customButtonActionPath:u}})})}catch(f){console.error(f),n.push({pathname:"/result",state:{success:!1,message:"Send transaction failed:",error:Y(f),customButtonActionPath:u}})}}})))};var $n=function(){return r.a.createElement(A,null,r.a.createElement(M,{config:Xe},r.a.createElement(L,null,r.a.createElement(_,null,r.a.createElement(Je,null),r.a.createElement(Qe.a,{basename:"/cw20-wallet"},r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/",component:Vt}),r.a.createElement(v.b,{exact:!0,path:"/login",component:Vt}),r.a.createElement(G,{authPath:"/login"},r.a.createElement(v.b,{exact:!0,path:"/tokens",component:En}),r.a.createElement(v.b,{exact:!0,path:"/tokens/add/:codeId?",component:xn}),r.a.createElement(v.b,{exact:!0,path:"/token/detail/:contractAddress/:allowingAddress?",component:ln}),r.a.createElement(v.b,{exact:!0,path:"/token/send/:contractAddress/:allowingAddress?",component:Bn}),r.a.createElement(v.b,{exact:!0,path:"/allowances/:contractAddress",component:qt}),r.a.createElement(v.b,{exact:!0,path:"/allowances/:contractAddress/add",component:jt}),r.a.createElement(v.b,{exact:!0,path:"/allowances/:contractAddress/edit/:spenderAddress",component:At}),r.a.createElement(v.b,{exact:!0,path:"/result",component:Kt}))))))))};n(872);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($n,null)),document.getElementById("root"))}},[[420,1,2]]]);
//# sourceMappingURL=main.e92050d7.chunk.js.map