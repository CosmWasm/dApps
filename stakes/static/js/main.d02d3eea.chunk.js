(this["webpackJsonpstaking-service"]=this["webpackJsonpstaking-service"]||[]).push([[0],{272:function(e,t){},375:function(e,t,n){e.exports=n.p+"static/media/backArrow.9849fc2e.svg"},376:function(e,t,n){e.exports=n.p+"static/media/avatar.e6ceb267.svg"},377:function(e,t,n){e.exports=n.p+"static/media/copy.173891ca.svg"},378:function(e,t,n){e.exports=n.p+"static/media/cross.ccb4620e.svg"},379:function(e,t,n){e.exports=n.p+"static/media/hamburger.87d19430.svg"},380:function(e,t,n){e.exports=n.p+"static/media/cosmWasmLogo.15dccd19.svg"},381:function(e,t,n){e.exports=n.p+"static/media/failIcon.71513020.svg"},382:function(e,t,n){e.exports=n.p+"static/media/successIcon.2e305b66.svg"},387:function(e,t,n){e.exports=n.p+"static/media/confirmIcon.5ecaf28a.svg"},392:function(e,t,n){e.exports=n(801)},436:function(e,t){},438:function(e,t){},448:function(e,t){},450:function(e,t){},492:function(e,t){},493:function(e,t){},498:function(e,t){},500:function(e,t){},524:function(e,t){},800:function(e,t,n){},801:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),i=(n(233),n(172)),l=n.n(i),s=(n(71),n(11)),u=n.n(s),m=(n(41),n(10)),f=n.n(m),d=(n(403),n(368)),v=n.n(d),h=n(1),p=n(21),g=n(807),b=n(359),E=n(360),y=n(62),j=n(43),x=n(361),O=n(362),k=n(14);var w={setError:function(){},clearError:function(){}},P=Object(a.createContext)(w),C=function(){return Object(a.useContext)(P)};function S(e){var t=e.children,n=Object(a.useState)(),r=n[0],o=n[1],c={error:r,setError:o,clearError:function(){o(void 0)}};return Object(a.createElement)(P.Provider,{value:c},t)}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var T=function(e){try{var t=window;if(!t.getOfflineSigner)throw new Error("Keplr extension is not available");return Promise.resolve(t.getOfflineSigner(e))}catch(n){return Promise.reject(n)}},I=function(e,t){try{return Promise.resolve(O.a.create(12e4,12e4)).then((function(e){return new x.LedgerSigner(e,{hdPaths:[Object(j.makeCosmoshubPath)(0)],prefix:t})}))}catch(n){return Promise.reject(n)}},D=function(e,t){try{var n=function(){var e="burner-wallet",t=localStorage.getItem(e);if(t)return t;var n=y.Bip39.encode(y.Random.getBytes(16)).toString();return localStorage.setItem(e,n),n}(),a=Object(j.makeCosmoshubPath)(0);return Promise.resolve(j.Secp256k1HdWallet.fromMnemonic(n,a,t))}catch(r){return Promise.reject(r)}};function z(){throw new Error("Not yet initialized")}var B={initialized:!1,address:"",config:{},init:z,clear:z,getSigner:z,getClient:z,getStakingClient:z,changeConfig:z,changeSigner:z},M=Object(a.createContext)(B),F=function(){return Object(a.useContext)(M)};function W(e){var t=e.config,n=e.children,r=Object(a.useState)(t),o=r[0],c=r[1],i=Object(a.useState)(),l=i[0],s=i[1],u=Object(a.useState)(),m=u[0],f=u[1],d=A({},B,{init:s}),v=Object(a.useState)(d),h=v[0],p=v[1];function g(){p(A({},d))}function y(e){c((function(t){return A({},t,e)}))}return Object(a.useEffect)((function(){l&&function(){try{Promise.resolve(function(e,t){try{return Promise.resolve(t.getAccounts()).then((function(n){var a=n[0].address,r=j.GasPrice.fromString(""+e.gasPrice+e.feeToken);return new E.SigningCosmWasmClient(e.httpUrl,a,t,r,{upload:15e5,init:6e5,exec:4e5,migrate:6e5,send:8e4,changeAdmin:8e4})}))}catch(n){return Promise.reject(n)}}(o,l)).then((function(e){f(e)}))}catch(e){Promise.reject(e)}}()}),[l,o]),Object(a.useEffect)((function(){if(l&&m){var e,t=m.senderAddress,n=(e=o.httpUrl,j.LcdClient.withExtensions({apiUrl:e},j.setupStakingExtension));!function(){try{var e=function(){p({initialized:!0,address:t,config:o,init:function(){},clear:g,getSigner:function(){return l},getClient:function(){return m},getStakingClient:function(){return n},changeConfig:y,changeSigner:s})},a=function(){if(o.faucetUrl)return Promise.resolve(m.getAccount()).then((function(e){var n=function(){var n;if(!(null===e||void 0===e||null===(n=e.balance)||void 0===n?void 0:n.length)){var a=new b.FaucetClient(o.faucetUrl);return Promise.resolve(a.credit(t,o.feeToken)).then((function(){}))}}();if(n&&n.then)return n.then((function(){}))}))}();a&&a.then?a.then(e):e()}catch(r){Promise.reject(r)}}()}}),[m]),Object(a.createElement)(M.Provider,{value:h},n)}var L={refreshAccount:function(){}},U=Object(a.createContext)(L),_=function(){return Object(a.useContext)(U)};function q(e){var t=e.children,n=C().setError,r=F(),o=Object(a.useState)({}),c=o[0],i=o[1];function l(){r.initialized&&r.getClient().getAccount().then((function(e){return i({account:e})})).catch(n)}Object(a.useEffect)(l,[r,n]);var s={refreshAccount:l,account:c.account};return Object(a.createElement)(U.Provider,{value:s},t)}var H={contracts:[],addContract:function(){}},N=r.a.createContext(H);function V(e){var t=e.children,n=Object(a.useState)(H.contracts),o=n[0],c=n[1];var i={contracts:o,addContract:function(e){c((function(t){return!t.find((function(t){return t.contractAddress===e.contractAddress}))?[].concat(t,[e]):t}))}};return r.a.createElement(N.Provider,{value:i},t)}var $=function(e){return{use:function(t){return{contractAddress:t,balance:function(n){try{var a=n||e.senderAddress;return Promise.resolve(e.queryContractSmart(t,{balance:{address:a}})).then((function(e){return e.balance}))}catch(r){return Promise.reject(r)}},allowance:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{allowance:{owner:n,spender:a}}))}catch(r){return Promise.reject(r)}},allAllowances:function(n,a,r){try{return Promise.resolve(e.queryContractSmart(t,{all_allowances:{owner:n,start_after:a,limit:r}}))}catch(o){return Promise.reject(o)}},allAccounts:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{all_accounts:{start_after:n,limit:a}})).then((function(e){return e.accounts}))}catch(r){return Promise.reject(r)}},tokenInfo:function(){try{return Promise.resolve(e.queryContractSmart(t,{token_info:{}}))}catch(n){return Promise.reject(n)}},investment:function(){try{return Promise.resolve(e.queryContractSmart(t,{investment:{}}))}catch(n){return Promise.reject(n)}},claims:function(n){try{return Promise.resolve(e.queryContractSmart(t,{claims:{address:n}}))}catch(a){return Promise.reject(a)}},minter:function(){try{return Promise.resolve(e.queryContractSmart(t,{minter:{}}))}catch(n){return Promise.reject(n)}},mint:function(n,a){try{return Promise.resolve(e.execute(t,{mint:{recipient:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},transfer:function(n,a){try{return Promise.resolve(e.execute(t,{transfer:{recipient:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},burn:function(n){try{return Promise.resolve(e.execute(t,{burn:{amount:n}})).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},increaseAllowance:function(n,a){try{return Promise.resolve(e.execute(t,{increase_allowance:{spender:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},decreaseAllowance:function(n,a){try{return Promise.resolve(e.execute(t,{decrease_allowance:{spender:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},transferFrom:function(n,a,r){try{return Promise.resolve(e.execute(t,{transfer_from:{owner:n,recipient:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},bond:function(n){try{return Promise.resolve(e.execute(t,{bond:{}},void 0,[n])).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},unbond:function(n){try{return Promise.resolve(e.execute(t,{unbond:{amount:n}})).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},claim:function(){try{return Promise.resolve(e.execute(t,{claim:{}})).then((function(e){return e.transactionHash}))}catch(n){return Promise.reject(n)}}}}}};function R(e){var t=e.authPath,n=e.children,a=e.location;return F().initialized?r.a.createElement(p.d,{location:a},n):r.a.createElement(p.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function K(e,t,n){var a,r=null===(a=t[n])||void 0===a?void 0:a.fractionalDigits;return r?k.Decimal.fromUserInput(e,r).atomics:e}function G(e){var t=(e||"").toString(),n=t.match(/.*\s*$/g)[0];return n.substring(0,n.lastIndexOf(";"))||t}var J=n(168),Y=n.n(J);function Q(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function X(e,t){return t||(t=e.slice(0)),e.raw=t,e}function Z(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=Q(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function ee(){var e=X(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ee=function(){return e},e}var te=Object(h.b)(Z)(ee());function ne(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=Q(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function ae(){var e=X(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return ae=function(){return e},e}var re=Object(h.b)(ne)(ae());function oe(e){var t=e.children,n=Q(e,["children"]);return Object(a.createElement)(te,Object.assign({tag:"main"},n),t)}function ce(){var e=X(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return ce=function(){return e},e}var ie=Object(h.b)(oe)(ce());function le(e){var t=e.icon,n=e.path,a=e.state,o=Q(e,["icon","path","state"]),c=Object(p.g)(),i=n?function(){return c.push(n,a)}:c.goBack;return r.a.createElement("img",Object.assign({src:t,alt:"Back arrow",onClick:i},o))}function se(){var e=X(["\n  cursor: pointer;\n"]);return se=function(){return e},e}var ue=Object(h.b)(le)(se());function me(){var e=X(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return me=function(){return e},e}var fe=Object(h.b)(v.a)(me()),de=Object(a.createElement)(g.a,{style:{fontSize:"6.25rem"},spin:!0});function ve(e){var t=e.loadingText||"Loading...";return Object(a.createElement)(ie,null,Object(a.createElement)(fe,{indicator:de,tip:t}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function he(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function pe(){var e=X(["\n  color: var(--color-red);\n"]);return pe=function(){return e},e}function ge(){var e=X(["\n  display: block;\n  font-weight: lighter;\n"]);return ge=function(){return e},e}function be(){var e=X(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return be=function(){return e},e}function Ee(){var e=X(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return Ee=function(){return e},e}var ye=f.a.Text,je=Object(h.b)(re)(Ee()),xe=Object(h.b)(re)(be()),Oe=Object(h.b)(ye)(ge()),ke=Object(h.b)(ye)(pe()),we=f.a.Title;function Pe(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function Ce(e){var t=function(e){try{k(!0),g();var t=he((function(){return Promise.resolve(e(n.chainId,n.addressPrefix)).then((function(e){return Promise.resolve(b.init(e)).then((function(){}))}))}),(function(e){console.error(e),h(Error(e).message),k(!1)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},n=e.config,o=e.pathAfterLogin,c=e.appName,i=e.appLogo,l=Q(e,["config","pathAfterLogin","appName","appLogo"]),s=Object(p.g)(),m=s.location.state,d=C(),v=d.error,h=d.setError,g=d.clearError,b=F(),E=_(),y=E.refreshAccount,j=E.account,x=Object(a.useState)(!1),O=x[0],k=x[1];return Object(a.useEffect)((function(){b.initialized&&y()}),[b.initialized,y]),Object(a.useEffect)((function(){j&&(m?s.push(m.redirectPathname,m.redirectState):s.push(o))}),[j,m,s]),O?r.a.createElement(ve,{loadingText:"Initializing app..."}):r.a.createElement(ie,Object.assign({},l),r.a.createElement(je,null,r.a.createElement("img",{src:i,alt:"CosmWasm logo"}),r.a.createElement(xe,null,r.a.createElement(f.a,null,r.a.createElement(we,{level:2},"Hello!"),r.a.createElement(Oe,null,"Welcome to your ",c),r.a.createElement(Oe,null,"Select one of the following options to start:")),v&&r.a.createElement(ke,null,v),r.a.createElement(u.a,{type:"primary",onClick:function(){try{return Promise.resolve(t(D)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Browser (Demo)"),r.a.createElement(u.a,{type:"primary",disabled:Pe(),onClick:function(){try{return Promise.resolve(t(I)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Ledger (Secure, Chrome)"),r.a.createElement(u.a,{type:"primary",disabled:!1,onClick:function(){try{var e=window,a=he((function(){return Promise.resolve(e.keplr.experimentalSuggestChain(function(e){return{chainId:e.chainId,chainName:e.chainName,rpc:e.rpcUrl,rest:e.httpUrl,bech32Config:{bech32PrefixAccAddr:""+e.addressPrefix,bech32PrefixAccPub:e.addressPrefix+"pub",bech32PrefixValAddr:e.addressPrefix+"valoper",bech32PrefixValPub:e.addressPrefix+"valoperpub",bech32PrefixConsAddr:e.addressPrefix+"valcons",bech32PrefixConsPub:e.addressPrefix+"valconspub"},currencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits},{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits}],feeCurrencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits}],stakeCurrency:{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits},gasPriceStep:{low:e.gasPrice/2,average:e.gasPrice,high:2*e.gasPrice},bip44:{coinType:118},coinType:118}}(n))).then((function(){return Promise.resolve(e.keplr.enable(n.chainId)).then((function(){return Promise.resolve(t(T)).then((function(){}))}))}))}),(function(e){console.error(e),h(Error(e).message)}));return Promise.resolve(a&&a.then?a.then((function(){})):void 0)}catch(r){return Promise.reject(r)}}},"Keplr (Secure)"))))}function Se(){var e=X(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return Se=function(){return e},e}function Ae(){var e=X(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Ae=function(){return e},e}var Te=f.a.Text,Ie=Object(h.b)(re)(Ae()),De=Object(h.b)(Te)(Se());function ze(e){var t=e.defaultButtonAction,n=e.successIcon,a=e.failIcon,o=Object(p.g)(),c=o.location.state,i=c.success,l=c.message,s=c.error,m=c.customButtonText,f=c.customButtonActionPath,d=c.customButtonActionState;var v=function(e){return e?{result:"success",icon:n,buttonText:"Home",buttonAction:function(){return t(o)}}:{result:"failure",icon:a,buttonText:"Retry",buttonAction:o.goBack}}(i),h=v.icon,g=v.result,b=v.buttonText,E=v.buttonAction,y=m||b,j=f?function(){return o.push(f,d)}:E;return r.a.createElement(ie,null,r.a.createElement(Ie,null,r.a.createElement("img",{src:h,alt:"Result icon"}),r.a.createElement(De,{"data-result":g},l),s&&r.a.createElement(De,{"data-result":g},s),r.a.createElement(u.a,{type:"primary",onClick:j},y)))}f.a.Title,f.a.Text;function Be(){var e=X(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return Be=function(){return e},e}var Me=Object(h.a)(Be());function Fe(){var e=X(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return Fe=function(){return e},e}var We=Object(h.a)(Fe());function Le(){var e=X(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return Le=function(){return e},e}var Ue=Object(h.a)(Le());function _e(){var e=X(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return _e=function(){return e},e}var qe=Object(h.a)(_e());function He(){var e=X(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return He=function(){return e},e}var Ne=Object(h.a)(He());function Ve(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(qe,null),r.a.createElement(Ne,null),r.a.createElement(We,null),r.a.createElement(Ue,null),r.a.createElement(Me,null))}var $e=n(61);const Re=function(e){var t=e.heldernet;if(!t)throw new Error("No configuration found for network heldernet");return t}({local:{chainId:"testing",chainName:"Testing",addressPrefix:"cosmos",rpcUrl:"http://localhost:26657",httpUrl:"http://localhost:1317",faucetUrl:"http://localhost:8000",feeToken:"ucosm",stakingToken:"uatom",coinMap:{ucosm:{denom:"COSM",fractionalDigits:6},uatom:{denom:"ATOM",fractionalDigits:6}},gasPrice:.025,codeId:129},heldernet:{chainId:"hackatom-wasm",chainName:"Heldernet",addressPrefix:"cosmos",rpcUrl:"https://rpc.heldernet.cosmwasm.com",httpUrl:"https://lcd.heldernet.cosmwasm.com",faucetUrl:"https://faucet.heldernet.cosmwasm.com",feeToken:"ucosm",stakingToken:"ustake",coinMap:{ucosm:{denom:"COSM",fractionalDigits:6},ustake:{denom:"STAKE",fractionalDigits:6}},gasPrice:.025}});var Ke=n(375),Ge=n.n(Ke),Je=n(376),Ye=n.n(Je),Qe=n(377),Xe=n.n(Qe),Ze=n(378),et=n.n(Ze),tt=n(379),nt=n.n(tt);const{Text:at}=f.a,rt=h.b.img`
  cursor: pointer;
  width: 2.625rem;
`,ot=h.b.img`
  cursor: pointer;
  width: 1.75rem;
`,ct=Object(h.b)(te)`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;

  min-width: var(--max-width);
  padding: var(--s0);
  background-color: var(--color-blue);
`,it=Object(h.b)(re)`
  width: 100%;
  color: var(--color-gray-light);

  & > * {
    --gap: var(--s4);
  }
`,lt=Object(h.b)(re)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  & > * {
    --gap: var(--s0);
  }

  & > img {
    align-self: flex-end;
  }
`,st=h.b.div`
  display: flex;
`,ut=Object(h.b)(at)`
  margin-left: var(--s-1);
  font-size: var(--s2);
  color: inherit;
`,mt=h.b.div`
  width: 100%;
  padding: var(--s-4) 0;
  border-radius: 2px;
  background-color: var(--color-gray-light);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,ft=Object(h.b)(at)`
  font-size: var(--s-2);
`,dt=h.b.img`
  cursor: pointer;
`;Object(h.b)(re)`
  & > * {
    --gap: var(--s-3);
  }
`,Object(h.b)(at)`
  cursor: pointer;

  font-family: var(--ff-iceland);
  font-size: var(--s5);

  color: inherit;
`;function vt({name:e,...t}){const{account:n}=_(),[o,c]=Object(a.useState)(!1),i=e?e+"'s":"Your";return r.a.createElement(r.a.Fragment,null,r.a.createElement(rt,Object.assign({src:nt.a,alt:"Open account menu",onClick:()=>c(!0)},t)),o&&r.a.createElement(ct,t,r.a.createElement(it,null,r.a.createElement(lt,null,r.a.createElement(ot,{src:et.a,alt:"Close account menu",onClick:()=>c(!1)}),r.a.createElement(st,null,r.a.createElement("img",{src:Ye.a,alt:"Avatar"}),r.a.createElement(ut,null,i," account")),r.a.createElement(mt,null,r.a.createElement(ft,null,n.address),r.a.createElement(dt,{src:Xe.a,alt:"Copy address icon",onClick:()=>{Y()(n.address)}}))))))}const ht=h.b.header`
  display: flex;
  justify-content: space-between;
`;function pt({path:e,state:t,name:n,...a}){return r.a.createElement(ht,a,r.a.createElement(ue,{icon:Ge.a,path:e,state:t}),r.a.createElement(vt,{name:n}))}const{Text:gt}=f.a,bt=Object(h.b)(re)`
  & > * {
    --gap: var(--s0);
  }

  div[role="separator"] {
    margin-bottom: 0;
  }
`,Et=h.b.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`,yt=Object(h.b)(gt)`
  font-family: var(--ff-iceland);
  font-size: var(--s2);
  line-height: var(--s2);
`,jt=Object(h.b)(gt)`
  font-family: var(--ff-montserrat);
  font-weight: bolder;
  font-size: var(--s4);
  line-height: var(--s4);
`;function xt(e){return r.a.createElement(bt,null,Object.entries(e).map(([e,t],n)=>r.a.createElement(r.a.Fragment,{key:e},n>0&&r.a.createElement(l.a,null),r.a.createElement(Et,null,r.a.createElement(yt,null,e.charAt(0).toUpperCase()+e.slice(1)),r.a.createElement(jt,null,t)))))}const Ot=Object(h.b)(re)`
  & > * {
    --gap: var(--s2);
  }
`;function kt({claimsData:e,claimIndex:t,setClaimIndex:n}){const a=void 0===t?{}:{...e[t],date:e[t].date.toLocaleDateString()},o=t===e.length-1,c=0===t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(xt,a),r.a.createElement(Ot,null,r.a.createElement(u.a,{type:"primary",disabled:o,onClick:()=>{!o&&n(e=>e+1)}},"Next"),r.a.createElement(u.a,{type:"primary",disabled:c,onClick:()=>{!c&&n(e=>e-1)}},"Previous")))}const wt=Object(h.b)(re)`
  & > * {
    --gap: var(--s2);
  }
`;function Pt({claimsData:e,setClaimIndex:t,balanceToClaim:n,claimAll:a}){return r.a.createElement(r.a.Fragment,null,r.a.createElement(wt,null,e.map((e,n)=>r.a.createElement(u.a,{key:n,type:"primary",onClick:()=>{t(n)}},`${e.date.toLocaleDateString()} - ${e.balance} tokens`))),r.a.createElement(u.a,{disabled:function(){if(!e.length)return!0;const t=(new Date).valueOf();return e.every(e=>e.date.valueOf()>t)}(),type:"primary",onClick:a},"Claim ",n))}const Ct=Object(h.b)(re)`
  & > * {
    --gap: var(--s6);
  }

  width: 100%;
`,St=Object(h.b)(re)`
  & > * {
    --gap: var(--s0);
  }

  h1.ant-typography,
  h2.ant-typography {
    margin: 0;
    margin-top: var(--gap);
  }

  h1 {
    font-size: var(--s2);
    line-height: var(--s2);
  }

  h2 {
    font-size: var(--s5);
    line-height: var(--s5);
  }
`,{Title:At}=(Object(h.b)(re)`
  & > * {
    --gap: var(--s2);
  }
`,f.a);function Tt(){const[e,t]=Object(a.useState)(!1),[n,o]=Object(a.useState)(),c=Object(p.g)(),{validatorAddress:i}=Object(p.h)(),{getClient:l}=F(),{account:s,refreshAccount:u}=_(),[m,f]=Object(a.useState)(""),[d,v]=Object(a.useState)([]),[h,g]=Object(a.useState)("0");Object(a.useEffect)(()=>{const e=l();!async function(){const t=await e.getContract(i),n=$(e).use(t.address),[{name:a},{claims:r}]=await Promise.all([n.tokenInfo(),n.claims(s.address)]);f(a);const o=r.map(e=>{const t=new Date(1e3*e.released.at_time),n=Re.coinMap[Re.stakingToken].fractionalDigits;return{date:t,balance:k.Decimal.fromAtomics(e.amount,n).toString()}});v(o.sort((e,t)=>e.date.valueOf()-t.date.valueOf()))}()},[l,i,s.address]),Object(a.useEffect)(()=>{const e=Re.coinMap[Re.stakingToken].fractionalDigits,t=(new Date).valueOf(),n=d.filter(e=>e.date.valueOf()<t).map(t=>k.Decimal.fromAtomics(K(t.balance,Re.coinMap,Re.stakingToken),e)).reduce((e,t)=>e.plus(t),k.Decimal.fromAtomics("0",e));g(n.toString())},[d]);const b=void 0===n,E=void 0!==n;return e&&r.a.createElement(ve,{loadingText:"Claiming..."})||!e&&r.a.createElement(ie,null,r.a.createElement(Ct,null,r.a.createElement(St,null,r.a.createElement(pt,{path:"/wallet/"+i}),r.a.createElement(At,null,"Pending Claims"),r.a.createElement(At,{level:2},m)),b&&r.a.createElement(Pt,{claimsData:d,setClaimIndex:o,balanceToClaim:h,claimAll:async function(){t(!0);const e=l(),n=await e.getContract(i),a=$(e).use(n.address);try{if(!await a.claim())throw Error("Claim failed");u(),c.push({pathname:"/result",state:{success:!0,message:"Successfully claimed",customButtonText:"Wallet",customButtonActionPath:"/wallet/"+i}})}catch(r){console.error(r),c.push({pathname:"/result",state:{success:!1,message:"Claim transaction failed:",error:G(r),customButtonActionPath:"/claims/"+i}})}}}),E&&r.a.createElement(kt,{claimsData:d,claimIndex:n,setClaimIndex:o})))}var It=n(380),Dt=n.n(It);function zt(){return r.a.createElement(Ce,{pathAfterLogin:"/validators",appName:"Staking service",appLogo:Dt.a,config:Re})}var Bt=n(381),Mt=n.n(Bt),Ft=n(382),Wt=n.n(Ft);function Lt(e){e.push("/validators")}function Ut(){return r.a.createElement(ze,{defaultButtonAction:Lt,successIcon:Wt.a,failIcon:Mt.a})}var _t=n(40),qt=n(806),Ht=n(386),Nt=n(808),Vt=n(124);const $t=Object(h.b)(re)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,Rt=h.b.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
    line-height: var(--s2);
  }

  span + span {
    margin-left: var(--s2);

    font-family: var(--ff-montserrat);
    font-weight: bolder;
    font-size: var(--s2);
    line-height: var(--s2);
  }
`,Kt=h.b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * + * {
    margin-left: var(--s0);
  }

  .ant-typography {
    flex-grow: 0;
    flex-shrink: 1;
    text-align: left;
  }

  .ant-form-item {
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 13.5rem;
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
    line-height: var(--s2);
  }
`,{Text:Gt}=f.a;function Jt({validatorData:e,submitBuyShares:t}){const{account:n}=_(),a=n.balance.find(e=>e.denom===Re.stakingToken),o=Re.coinMap[Re.stakingToken].fractionalDigits,c=a?k.Decimal.fromAtomics(a.amount,o).toFloatApproximation():0,i=Vt.b().shape({amount:Vt.a().required("An amount is required").positive("Amount should be positive").max(c)});return r.a.createElement(_t.c,{initialValues:{amount:""},onSubmit:t,validationSchema:i},t=>{const n=!(t.isValid&&t.dirty);return r.a.createElement(qt.a,null,r.a.createElement($t,null,r.a.createElement(Rt,null,r.a.createElement(Gt,null,"Stake/Token:"),r.a.createElement(Gt,null,null===e||void 0===e?void 0:e.investment.nominal_value)),r.a.createElement(Kt,null,r.a.createElement(Gt,null,Re.coinMap[Re.stakingToken].denom),r.a.createElement(Ht.a,{name:"amount"},r.a.createElement(Nt.a,{name:"amount",placeholder:"Enter amount"}))),r.a.createElement(u.a,{type:"primary",onClick:t.submitForm,disabled:n},"Buy")))})}const Yt=Object(h.b)(re)`
  & > * {
    --gap: var(--s6);
  }
`,Qt=Object(h.b)(re)`
  & > * {
    --gap: var(--s0);
  }

  h1.ant-typography,
  h2.ant-typography {
    margin: 0;
    margin-top: var(--gap);
  }

  h1 {
    font-size: var(--s2);
    line-height: var(--s2);
  }

  h2 {
    font-size: var(--s5);
    line-height: var(--s5);
  }
`,{Title:Xt}=(Object(h.b)(te)`
  --max-width: none;
`,Object(h.b)(re)`
  & > * {
    --gap: var(--s0);
  }
`,f.a);function Zt(){var e;const[t,n]=Object(a.useState)(!1),o=Object(p.g)(),{validatorAddress:c}=Object(p.h)(),{getClient:i}=F(),{refreshAccount:l}=_(),[s,u]=Object(a.useState)(),[m,f]=Object(a.useState)();return Object(a.useEffect)(()=>{const e=i();!async function(){const t=await e.getContract(c),n=$(e).use(t.address);u(n)}()},[i,c]),Object(a.useEffect)(()=>{s&&async function(){const[e,t]=await Promise.all([s.tokenInfo(),s.investment()]);f({tokenInfo:e,investment:t})}()},[s]),t&&r.a.createElement(ve,{loadingText:"Bonding..."})||!t&&r.a.createElement(ie,null,r.a.createElement(Yt,null,r.a.createElement(Qt,null,r.a.createElement(pt,{path:"/validator/"+c}),r.a.createElement(Xt,null,"Purchase"),r.a.createElement(Xt,{level:2},null!==(e=null===m||void 0===m?void 0:m.tokenInfo.name)&&void 0!==e?e:"")),r.a.createElement(Jt,{validatorData:m,submitBuyShares:async function({amount:e}){n(!0);const t={amount:K(e,Re.coinMap,Re.stakingToken),denom:Re.stakingToken};try{if(!await s.bond(t))throw Error("Purchase failed");l(),o.push({pathname:"/result",state:{success:!0,message:`${e} ${Re.stakingToken} successfully bonded`,customButtonText:"Wallet",customButtonActionPath:"/wallet/"+c}})}catch(a){console.error(a),o.push({pathname:"/result",state:{success:!1,message:"Bond transaction failed:",error:G(a),customButtonActionPath:"/purchase/"+c}})}}})))}const en=Object(h.b)(re)`
  width: 100%;

  & > * {
    --gap: var(--s5);
  }
`,{Title:tn}=f.a;function nn(){var e;const{validatorAddress:t}=Object(p.h)(),{getClient:n}=F(),[o,c]=Object(a.useState)();return Object(a.useEffect)(()=>{const e=n();!async function(){const n=await e.getContract(t),a=$(e).use(n.address),[r,o]=await Promise.all([a.tokenInfo(),a.investment()]);c({tokenInfo:r,investment:o})}()},[n,t]),r.a.createElement(ie,null,r.a.createElement(en,null,r.a.createElement(pt,{path:"/validator/"+t}),r.a.createElement(tn,null,null!==(e=null===o||void 0===o?void 0:o.tokenInfo.name)&&void 0!==e?e:""),r.a.createElement(xt,function(e){return e?{"Total Supply":k.Decimal.fromAtomics(e.tokenInfo.total_supply,e.tokenInfo.decimals).toString(),Commission:parseFloat(e.investment.exit_tax)+" %"}:{}}(o))))}const an=Object(h.b)(re)`
  & > * {
    --gap: var(--s5);
  }
`,rn=Object(h.b)(re)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,on=Object(h.b)(te)`
  --max-width: none;
`,cn=Object(h.b)(re)`
  & > * {
    --gap: var(--s0);
  }
`,{Title:ln}=f.a;function sn(e){if(!e)return{};return{"Total Supply":k.Decimal.fromAtomics(e.tokenInfo.total_supply,e.tokenInfo.decimals).toString(),"Staked Tokens":function(e,t){if(!t)return e;var n=t[e.denom];if(!n)return e;var a=k.Decimal.fromAtomics(e.amount,n.fractionalDigits).toString();return{denom:n.denom,amount:a}}(e.investment.staked_tokens,Re.coinMap).amount,"Stake/Token":e.investment.nominal_value}}function un(){var e;const t=Object(p.g)(),{validatorAddress:n}=Object(p.h)(),{getClient:o}=F(),[c,i]=Object(a.useState)();return Object(a.useEffect)(()=>{const e=o();!async function(){const t=await e.getContract(n),a=$(e).use(t.address),[r,o]=await Promise.all([a.tokenInfo(),a.investment()]);i({tokenInfo:r,investment:o})}()},[o,n]),r.a.createElement(ie,null,r.a.createElement(an,null,r.a.createElement(pt,{path:"/validators"}),r.a.createElement(rn,null,r.a.createElement(ln,null,null!==(e=null===c||void 0===c?void 0:c.tokenInfo.name)&&void 0!==e?e:""),r.a.createElement(on,null,r.a.createElement(cn,null,r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/wallet/"+n)}},"Wallet"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push(`/validator/${n}/detail`)}},"View Details")))),r.a.createElement(xt,sn(c)),r.a.createElement(cn,null,r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/purchase/"+n)}},"Buy"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/withdraw/"+n)}},"Withdraw"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/claims/"+n)}},"Claims"))))}const mn=Object(h.b)(re)`
  width: 100%;

  & > * {
    --gap: var(--s5);
  }
`,fn=h.b.header`
  display: flex;
  justify-content: flex-end;
`,dn=Object(h.b)(re)`
  & > * {
    --gap: 0;
  }
`,vn=h.b.div`
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
`,hn=h.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Title:pn,Text:gn}=f.a;async function bn(e){const{name:t}=await e.tokenInfo();return{name:t,address:e.contractAddress}}function En(e,t){return e.name<t.name?-1:e.name>t.name?1:0}function yn(){const e=Object(p.g)(),{getClient:t}=F(),{contracts:n,addContract:o}=r.a.useContext(N),[c,i]=Object(a.useState)([]);return Object(a.useEffect)(()=>{const e=t();!async function(){const t=await e.getContracts(Re.codeId);for(const n of t){const t=$(e).use(n.address);o(t)}}()},[t,o]),Object(a.useEffect)(()=>{const e=n.map(bn);!async function(){const t=await Promise.all(e);i(t.sort(En))}()},[n]),r.a.createElement(ie,null,r.a.createElement(mn,null,r.a.createElement(fn,null,r.a.createElement(vt,null)),r.a.createElement(pn,null,"Validators"),r.a.createElement(dn,null,c.map(t=>r.a.createElement(vn,{key:t.name,onClick:()=>{return n=t.address,void e.push("/validator/"+n);var n}},r.a.createElement(hn,null,r.a.createElement(gn,null,t.name)))))))}const jn=Object(h.b)(re)`
  & > * {
    --gap: var(--s5);
  }
`,xn=Object(h.b)(re)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,On=Object(h.b)(te)`
  --max-width: none;
`,kn=Object(h.b)(re)`
  & > * {
    --gap: var(--s0);
  }
`,{Title:wn}=f.a;function Pn(){var e;const t=Object(p.g)(),{validatorAddress:n}=Object(p.h)(),{getClient:o}=F(),{account:c}=_(),[i,l]=Object(a.useState)();return Object(a.useEffect)(()=>{const e=o();!async function(){const t=await e.getContract(n),a=$(e).use(t.address),[r,o,i,{claims:s}]=await Promise.all([a.tokenInfo(),a.investment(),a.balance(c.address),a.claims(c.address)]);l({tokenInfo:r,investment:o,balance:i,numClaims:s.length})}()},[o,n,c.address]),r.a.createElement(ie,null,r.a.createElement(jn,null,r.a.createElement(pt,{path:"/validator/"+n}),r.a.createElement(xn,null,r.a.createElement(wn,null,null!==(e=null===i||void 0===i?void 0:i.tokenInfo.name)&&void 0!==e?e:""),r.a.createElement(On,null,r.a.createElement(u.a,{type:"primary",onClick:function(){t.push(`/validator/${n}/detail`)}},"View Details"))),r.a.createElement(xt,function(e){return e?{"Stake/Token":e.investment.nominal_value,Balance:k.Decimal.fromAtomics(e.balance,e.tokenInfo.decimals).toString(),Claims:e.numClaims.toString()}:{}}(i)),r.a.createElement(kn,null,r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/purchase/"+n)}},"Buy"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/withdraw/"+n)}},"Withdraw"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/claims/"+n)}},"Claims"))))}var Cn=n(387),Sn=n.n(Cn);const An=Object(h.b)(re)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,Tn=h.b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * + * {
    margin-left: var(--s0);
  }

  .ant-typography {
    flex-grow: 0;
    flex-shrink: 1;
    text-align: left;
  }

  .ant-typography + .ant-typography {
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 13.5rem;
    text-align: right;

    font-family: var(--ff-montserrat);
    font-weight: bolder;
    font-size: var(--s4);
    line-height: var(--s4);
  }

  .ant-form-item {
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 13.5rem;
  }

  span {
    font-family: var(--ff-iceland);
    font-size: var(--s2);
    line-height: var(--s2);
  }
`,{Text:In}=f.a;function Dn({validatorData:e,submitWithdrawBalance:t}){const n=e?k.Decimal.fromAtomics(e.balance,e.tokenInfo.decimals):k.Decimal.fromUserInput("0",0),a=n.toFloatApproximation(),o=Vt.b().shape({amount:Vt.a().required("An amount is required").positive("Amount should be positive").max(a)});return r.a.createElement(_t.c,{initialValues:{amount:""},onSubmit:t,validationSchema:o},e=>r.a.createElement(qt.a,null,r.a.createElement(An,null,r.a.createElement(Tn,null,r.a.createElement(In,null,"Balance"),r.a.createElement(In,null,n.toString())),r.a.createElement(Tn,null,r.a.createElement(In,null,"Withdraw"),r.a.createElement(Ht.a,{name:"amount"},r.a.createElement(Nt.a,{name:"amount",placeholder:"Enter amount"}))),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Withdraw"))))}const{Text:zn}=f.a,Bn=Object(h.b)(re)`
  & > * {
    --gap: var(--s6);
  }
`,Mn=Object(h.b)(re)`
  & > * {
    --gap: var(--s0);
  }

  h1.ant-typography,
  h2.ant-typography {
    margin: 0;
    margin-top: var(--gap);
  }

  h1 {
    font-size: var(--s2);
    line-height: var(--s2);
  }

  h2 {
    font-size: var(--s5);
    line-height: var(--s5);
  }
`,Fn=(Object(h.b)(te)`
  --max-width: none;
`,Object(h.b)(re)`
  & > * {
    --gap: var(--s0);
  }
`,Object(h.b)(re)`
  & > * {
    --gap: var(--s3);
  }
`),Wn=Object(h.b)(zn)`
  font-size: var(--s-1);
  color: var(--color-blue);
`,{Title:Ln}=f.a;var Un;function _n(){const[e,t]=Object(a.useState)(Un.Form),n=Object(p.g)(),{validatorAddress:o}=Object(p.h)(),{getClient:c}=F(),{account:i,refreshAccount:l}=_(),[s,m]=Object(a.useState)(),[f,d]=Object(a.useState)(),[v,h]=Object(a.useState)("0");async function g({amount:e}){h(e),t(Un.Confirm)}async function b(){t(Un.Loading);const e=K(v,Re.coinMap,Re.stakingToken);try{if(!await s.unbond(e))throw Error("Withdrawal failed");l(),n.push({pathname:"/result",state:{success:!0,message:`${v} ${Re.stakingToken} successfully unbonded`,customButtonText:"Wallet",customButtonActionPath:"/wallet/"+o}})}catch(a){console.error(a),n.push({pathname:"/result",state:{success:!1,message:"Unbond transaction failed:",error:G(a),customButtonActionPath:"/withdraw/"+o}})}}function E(){h("0"),t(Un.Form)}function y(){var e;return r.a.createElement(ie,null,r.a.createElement(Bn,null,r.a.createElement(Mn,null,r.a.createElement(pt,{path:"/validator/"+o}),r.a.createElement(Ln,null,"Withdraw"),r.a.createElement(Ln,{level:2},null!==(e=null===f||void 0===f?void 0:f.tokenInfo.name)&&void 0!==e?e:"")),r.a.createElement(Dn,{validatorData:f,submitWithdrawBalance:g})))}switch(Object(a.useEffect)(()=>{const e=c();!async function(){const t=await e.getContract(o),n=$(e).use(t.address);m(n)}()},[c,o]),Object(a.useEffect)(()=>{s&&async function(){const[e,t]=await Promise.all([s.tokenInfo(),s.balance(i.address)]);d({tokenInfo:e,balance:t})}()},[s,i.address]),e){case Un.Form:return y();case Un.Confirm:return r.a.createElement(ie,null,r.a.createElement(Fn,null,r.a.createElement("img",{src:Sn.a,alt:"Confirm icon"}),r.a.createElement(Wn,null,"Your tokens could take up to 3 weeks to be withdrawn..."),r.a.createElement(u.a,{type:"primary",onClick:b},"Accept"),r.a.createElement(u.a,{type:"primary",onClick:E},"Decline")));case Un.Loading:return r.a.createElement(ve,{loadingText:"Withdrawing..."});default:return y()}}function qn(){return r.a.createElement(S,null,r.a.createElement(W,{config:Re},r.a.createElement(q,null,r.a.createElement(V,null,r.a.createElement(Ve,null),r.a.createElement($e.a,{basename:"/stakes"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:zt}),r.a.createElement(p.b,{exact:!0,path:"/login",component:zt}),r.a.createElement(R,{authPath:"/login"},r.a.createElement(p.b,{exact:!0,path:"/validators",component:yn}),r.a.createElement(p.b,{exact:!0,path:"/validator/:validatorAddress",component:un}),r.a.createElement(p.b,{exact:!0,path:"/validator/:validatorAddress/detail",component:nn}),r.a.createElement(p.b,{exact:!0,path:"/wallet/:validatorAddress",component:Pn}),r.a.createElement(p.b,{exact:!0,path:"/purchase/:validatorAddress",component:Zt}),r.a.createElement(p.b,{exact:!0,path:"/withdraw/:validatorAddress",component:_n}),r.a.createElement(p.b,{exact:!0,path:"/claims/:validatorAddress",component:Tt}),r.a.createElement(p.b,{exact:!0,path:"/result",component:Ut}))))))))}!function(e){e.Form="FORM",e.Confirm="CONFIRM",e.Loading="LOADING"}(Un||(Un={}));n(800);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(qn,null)),document.getElementById("root"))}},[[392,1,2]]]);
//# sourceMappingURL=main.d02d3eea.chunk.js.map