(this["webpackJsonpnative-staking"]=this["webpackJsonpnative-staking"]||[]).push([[0],{301:function(e,t){},437:function(e,t,n){e.exports=n.p+"static/media/backArrow.9849fc2e.svg"},438:function(e,t,n){e.exports=n.p+"static/media/avatar.e6ceb267.svg"},439:function(e,t,n){e.exports=n.p+"static/media/copy.173891ca.svg"},440:function(e,t,n){e.exports=n.p+"static/media/cross.ccb4620e.svg"},441:function(e,t,n){e.exports=n.p+"static/media/hamburger.87d19430.svg"},446:function(e,t,n){e.exports=n.p+"static/media/cosmWasmLogo.15dccd19.svg"},447:function(e,t,n){e.exports=n.p+"static/media/failIcon.71513020.svg"},448:function(e,t,n){e.exports=n.p+"static/media/successIcon.2e305b66.svg"},453:function(e,t,n){e.exports=n(923)},491:function(e,t){},493:function(e,t){},503:function(e,t){},505:function(e,t){},547:function(e,t){},548:function(e,t){},553:function(e,t){},555:function(e,t){},579:function(e,t){},922:function(e,t,n){},923:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),c=(n(266),n(191)),s=n.n(c),l=(n(106),n(33)),u=n.n(l),m=(n(59),n(15)),f=n.n(m),d=(n(464),n(430)),g=n.n(d),v=n(2),p=n(23),h=n(929),b=n(421),y=n(34),E=n(16),x=n(422),j=n(46),k=n(102),O=n(423),w=n(426),P=n(12);var S={contracts:[],addContract:function(){}},T=r.a.createContext(S);function A(e){var t=e.children,n=Object(a.useState)(S.contracts),o=n[0],i=n[1];var c={contracts:o,addContract:function(e){i((function(t){return!t.find((function(t){return t.contractAddress===e.contractAddress}))?[].concat(t,[e]):t}))}};return r.a.createElement(T.Provider,{value:c},t)}var C={setError:function(){},clearError:function(){}},D=Object(a.createContext)(C),B=function(){return Object(a.useContext)(D)};function M(e){var t=e.children,n=Object(a.useState)(),r=n[0],o=n[1],i={error:r,setError:o,clearError:function(){o(void 0)}};return Object(a.createElement)(D.Provider,{value:i},t)}var z=function(e){try{var t,n=window;if(!n.getOfflineSigner)throw new Error("Keplr extension is not available");var a=n.getOfflineSigner(e);return a.signAmino=null!==(t=a.signAmino)&&void 0!==t?t:a.sign,Promise.resolve(a)}catch(r){return Promise.reject(r)}},I=function(e,t){try{return Promise.resolve(O.a.create(12e4,12e4)).then((function(e){return new x.LedgerSigner(e,{hdPaths:[Object(E.makeCosmoshubPath)(0)],prefix:t})}))}catch(n){return Promise.reject(n)}},U=function(e,t){try{var n=function(){var e="burner-wallet",t=localStorage.getItem(e);if(t)return t;var n=y.Bip39.encode(y.Random.getBytes(16)).toString();return localStorage.setItem(e,n),n}(),a=Object(E.makeCosmoshubPath)(0);return Promise.resolve(E.Secp256k1HdWallet.fromMnemonic(n,a,t))}catch(r){return Promise.reject(r)}};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var R=function(){function e(){}return e.prototype.then=function(t,n){var a=new e,r=this.s;if(r){var o=1&r?t:n;if(o){try{$(a,1,o(this.v))}catch(i){$(a,2,i)}return a}return this}return this.o=function(e){try{var r=e.v;1&e.s?$(a,1,t?t(r):r):n?$(a,1,n(r)):$(a,2,r)}catch(i){$(a,2,i)}},a},e}();function $(e,t,n){if(!e.s){if(n instanceof R){if(!n.s)return void(n.o=$.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then($.bind(null,e,t),$.bind(null,e,2));e.s=t,e.v=n;var a=e.o;a&&a(e)}}function N(e,t,n){var a=[];for(var r in e)a.push(r);return function(e,t,n){var a,r,o=-1;return function i(c){try{for(;++o<e.length&&(!n||!n());)if((c=t(o))&&c.then){if(!((s=c)instanceof R&&1&s.s))return void c.then(i,r||(r=$.bind(null,a=new R,2)));c=c.v}a?$(a,1,c):a=c}catch(l){$(a||(a=new R),2,l)}var s}(),a}(a,(function(e){return t(a[e])}),n)}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function L(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function V(){throw new Error("Not yet initialized")}var W={initialized:!1,init:V,clear:V,config:{},changeConfig:V,address:"",balance:[],refreshBalance:V,hitFaucet:V,getSigner:V,changeSigner:V,getClient:V,getStakingClient:V},q=Object(a.createContext)(W),H=function(){return Object(a.useContext)(q)};function J(e){var t=function(e){try{if(!s.faucetUrl||!s.feeToken)return Promise.resolve();var t=L((function(){var t=new w.FaucetClient(s.faucetUrl);return Promise.resolve(t.credit(e,s.feeToken)).then((function(){}))}),(function(e){i(e.message),console.error(e)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(n){return Promise.reject(n)}},n=function(e,t){try{if(!g)return Promise.resolve();t.length=0;var n=N(s.coinMap,(function(n){return Promise.resolve(g.getBalance(e,n)).then((function(e){e&&t.push(e)}))}));return Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},r=e.config,o=e.children,i=B().setError,c=Object(a.useState)(r),s=c[0],l=c[1],u=Object(a.useState)(),m=u[0],f=u[1],d=Object(a.useState)(),g=d[0],v=d[1],p=F({},W,{init:f}),h=Object(a.useState)(p),y=h[0],x=h[1];function O(){x(F({},p)),v(void 0),f(void 0),l(r)}function P(e){l((function(t){return F({},t,e)}))}return Object(a.useEffect)((function(){m&&function(){try{var e=L((function(){return Promise.resolve(function(e,t){try{return Promise.resolve(b.SigningCosmWasmClient.connectWithSigner(e.rpcUrl,t,{prefix:e.addressPrefix,gasPrice:E.GasPrice.fromString(""+e.gasPrice+e.feeToken),gasLimits:{upload:15e5,init:6e5,exec:4e5,migrate:6e5,send:8e4,changeAdmin:8e4}}))}catch(n){return Promise.reject(n)}}(s,m)).then((function(e){v(e)}))}),(function(e){i(e.message)}));e&&e.then&&e.then((function(){}))}catch(t){Promise.reject(t)}}()}),[m,s]),Object(a.useEffect)((function(){if(m&&g){var e=[];!function(){try{Promise.resolve(m.getAccounts()).then((function(a){var r=a[0].address;return Promise.resolve(n(r,e)).then((function(){function a(){return Promise.resolve(n(r,e)).then((function(){return Promise.resolve(function(e){try{return Promise.resolve(k.Client.connect(e,k.adaptor34)).then((function(e){return j.QueryClient.withExtensions(e,j.setupStakingExtension,j.setupDistributionExtension)}))}catch(t){return Promise.reject(t)}}(s.rpcUrl)).then((function(a){x({initialized:!0,init:function(){},clear:O,config:s,changeConfig:P,address:r,balance:e,refreshBalance:n.bind(null,r,e),hitFaucet:t.bind(null,r),getSigner:function(){return m},changeSigner:f,getClient:function(){return g},getStakingClient:function(){return a}})}))}))}var o=function(){if(!e.find((function(e){return e.denom===s.feeToken})))return Promise.resolve(t(r)).then((function(){}))}();return o&&o.then?o.then(a):a()}))}))}catch(a){Promise.reject(a)}}()}}),[g]),Object(a.createElement)(q.Provider,{value:y},o)}function K(e){var t=e.authPath,n=e.children,a=e.location;return H().initialized?r.a.createElement(p.d,{location:a},n):r.a.createElement(p.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function Y(e,t){if(!t)return e;var n=t[e.denom];if(!n)return e;var a=P.Decimal.fromAtomics(e.amount,n.fractionalDigits).toString();return{denom:n.denom,amount:a}}function _(e,t,n){var a,r=null===(a=t[n])||void 0===a?void 0:a.fractionalDigits;return r?P.Decimal.fromUserInput(e,r).atomics:e}function G(e){var t=(e||"").toString(),n=t.match(/.*\s*$/g)[0];return n.substring(0,n.lastIndexOf(";"))||t}var Q=n(187),X=n.n(Q);function Z(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function ee(e,t){return t||(t=e.slice(0)),e.raw=t,e}function te(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=Z(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function ne(){var e=ee(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ne=function(){return e},e}var ae=Object(v.b)(te)(ne());function re(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=Z(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function oe(){var e=ee(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return oe=function(){return e},e}var ie=Object(v.b)(re)(oe());function ce(e){var t=e.children,n=Z(e,["children"]);return Object(a.createElement)(ae,Object.assign({tag:"main"},n),t)}function se(){var e=ee(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return se=function(){return e},e}var le=Object(v.b)(ce)(se());function ue(e){var t=e.icon,n=e.path,a=e.state,o=Z(e,["icon","path","state"]),i=Object(p.g)(),c=n?function(){return i.push(n,a)}:i.goBack;return r.a.createElement("img",Object.assign({src:t,alt:"Back arrow",onClick:c},o))}function me(){var e=ee(["\n  cursor: pointer;\n"]);return me=function(){return e},e}var fe=Object(v.b)(ue)(me());function de(){var e=ee(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return de=function(){return e},e}var ge=Object(v.b)(g.a)(de()),ve=Object(a.createElement)(h.a,{style:{fontSize:"6.25rem"},spin:!0});function pe(e){var t=e.loadingText||"Loading...";return Object(a.createElement)(le,null,Object(a.createElement)(ge,{indicator:ve,tip:t}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function he(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function be(){var e=ee(["\n  color: var(--color-red);\n"]);return be=function(){return e},e}function ye(){var e=ee(["\n  display: block;\n  font-weight: lighter;\n"]);return ye=function(){return e},e}function Ee(){var e=ee(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Ee=function(){return e},e}function xe(){var e=ee(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return xe=function(){return e},e}var je=f.a.Text,ke=Object(v.b)(ie)(xe()),Oe=Object(v.b)(ie)(Ee()),we=Object(v.b)(je)(ye()),Pe=Object(v.b)(je)(be()),Se=f.a.Title;function Te(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function Ae(e){var t=function(e){try{x(!0),h();var t=he((function(){return Promise.resolve(e(n.chainId,n.addressPrefix)).then((function(e){b.init(e)}))}),(function(e){console.error(e),v(Error(e).message),x(!1)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},n=e.config,o=e.pathAfterLogin,i=e.appName,c=e.appLogo,s=Z(e,["config","pathAfterLogin","appName","appLogo"]),l=Object(p.g)(),m=l.location.state,d=B(),g=d.error,v=d.setError,h=d.clearError,b=H(),y=Object(a.useState)(!1),E=y[0],x=y[1];return Object(a.useEffect)((function(){b.initialized&&(m?l.push(m.redirectPathname,m.redirectState):l.push(o))}),[b.initialized,m,l]),E?r.a.createElement(pe,{loadingText:"Initializing app..."}):r.a.createElement(le,Object.assign({},s),r.a.createElement(ke,null,r.a.createElement("img",{src:c,alt:"CosmWasm logo"}),r.a.createElement(Oe,null,r.a.createElement(f.a,null,r.a.createElement(Se,{level:2},"Hello!"),r.a.createElement(we,null,"Welcome to your ",i),r.a.createElement(we,null,"Select one of the following options to start:")),g&&r.a.createElement(Pe,null,g),r.a.createElement(u.a,{type:"primary",onClick:function(){try{return Promise.resolve(t(U)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Browser (Demo)"),r.a.createElement(u.a,{type:"primary",disabled:Te(),onClick:function(){try{return Promise.resolve(t(I)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Ledger (Secure, Chrome)"),r.a.createElement(u.a,{type:"primary",disabled:!1,onClick:function(){try{var e=window,a=he((function(){return Promise.resolve(e.keplr.experimentalSuggestChain(function(e){return{chainId:e.chainId,chainName:e.chainName,rpc:e.rpcUrl,rest:e.httpUrl,bech32Config:{bech32PrefixAccAddr:""+e.addressPrefix,bech32PrefixAccPub:e.addressPrefix+"pub",bech32PrefixValAddr:e.addressPrefix+"valoper",bech32PrefixValPub:e.addressPrefix+"valoperpub",bech32PrefixConsAddr:e.addressPrefix+"valcons",bech32PrefixConsPub:e.addressPrefix+"valconspub"},currencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits},{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits}],feeCurrencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits}],stakeCurrency:{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits},gasPriceStep:{low:e.gasPrice/2,average:e.gasPrice,high:2*e.gasPrice},bip44:{coinType:118},coinType:118}}(n))).then((function(){return Promise.resolve(e.keplr.enable(n.chainId)).then((function(){return Promise.resolve(t(z)).then((function(){}))}))}))}),(function(e){console.error(e),v(Error(e).message)}));return Promise.resolve(a&&a.then?a.then((function(){})):void 0)}catch(r){return Promise.reject(r)}}},"Keplr (Secure)"))))}function Ce(){var e=ee(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return Ce=function(){return e},e}function De(){var e=ee(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return De=function(){return e},e}var Be=f.a.Text,Me=Object(v.b)(ie)(De()),ze=Object(v.b)(Be)(Ce());function Ie(e){var t=e.defaultButtonAction,n=e.successIcon,a=e.failIcon,o=Object(p.g)(),i=o.location.state,c=i.success,s=i.message,l=i.error,m=i.customButtonText,f=i.customButtonActionPath,d=i.customButtonActionState;var g=function(e){return e?{result:"success",icon:n,buttonText:"Home",buttonAction:function(){return t(o)}}:{result:"failure",icon:a,buttonText:"Retry",buttonAction:o.goBack}}(c),v=g.icon,h=g.result,b=g.buttonText,y=g.buttonAction,E=m||b,x=f?function(){return o.push(f,d)}:y;return r.a.createElement(le,null,r.a.createElement(Me,null,r.a.createElement("img",{src:v,alt:"Result icon"}),r.a.createElement(ze,{"data-result":h},s),l&&r.a.createElement(ze,{"data-result":h},l),r.a.createElement(u.a,{type:"primary",onClick:x},E)))}f.a.Title,f.a.Text;function Ue(){var e=ee(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return Ue=function(){return e},e}var Fe=Object(v.a)(Ue());function Re(){var e=ee(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return Re=function(){return e},e}var $e=Object(v.a)(Re());function Ne(){var e=ee(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return Ne=function(){return e},e}var Le=Object(v.a)(Ne());function Ve(){var e=ee(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return Ve=function(){return e},e}var We=Object(v.a)(Ve());function qe(){var e=ee(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return qe=function(){return e},e}var He=Object(v.a)(qe());function Je(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(We,null),r.a.createElement(He,null),r.a.createElement($e,null),r.a.createElement(Le,null),r.a.createElement(Fe,null))}var Ke=n(77);const Ye=function(e){var t=e.musselnet;if(!t)throw new Error("No configuration found for network musselnet");return t}({local:{chainId:"testing",chainName:"Testing",addressPrefix:"wasm",rpcUrl:"http://localhost:26659",httpUrl:"http://localhost:1317",faucetUrl:"http://localhost:8000",feeToken:"ucosm",stakingToken:"uatom",coinMap:{ucosm:{denom:"COSM",fractionalDigits:6},uatom:{denom:"ATOM",fractionalDigits:6}},gasPrice:.025,codeId:129},musselnet:{chainId:"musselnet-2",chainName:"Musselnet",addressPrefix:"wasm",rpcUrl:"https://rpc.musselnet.cosmwasm.com",httpUrl:"https://lcd.musselnet.cosmwasm.com",faucetUrl:"https://faucet.musselnet.cosmwasm.com",feeToken:"umayo",stakingToken:"ufrites",coinMap:{umayo:{denom:"MAYO",fractionalDigits:6},ufrites:{denom:"FRITES",fractionalDigits:6}},gasPrice:.025,codeId:5}});var _e=n(437),Ge=n.n(_e),Qe=n(438),Xe=n.n(Qe),Ze=n(439),et=n.n(Ze),tt=n(440),nt=n.n(tt),at=n(441),rt=n.n(at);const{Text:ot}=f.a,it=v.b.img`
  cursor: pointer;
  width: 2.625rem;
`,ct=v.b.img`
  cursor: pointer;
  width: 1.75rem;
`,st=Object(v.b)(ae)`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;

  min-width: var(--max-width);
  padding: var(--s0);
  background-color: var(--color-blue);
`,lt=Object(v.b)(ie)`
  width: 100%;
  color: var(--color-gray-light);

  & > * {
    --gap: var(--s4);
  }
`,ut=Object(v.b)(ie)`
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
`,mt=v.b.div`
  display: flex;
`,ft=Object(v.b)(ot)`
  margin-left: var(--s-1);
  font-size: var(--s2);
  color: inherit;
`,dt=v.b.div`
  width: 100%;
  padding: var(--s-4) 0;
  border-radius: 2px;
  background-color: var(--color-gray-light);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,gt=Object(v.b)(ot)`
  font-size: var(--s-2);
`,vt=v.b.img`
  cursor: pointer;
`;Object(v.b)(ie)`
  & > * {
    --gap: var(--s-3);
  }
`,Object(v.b)(ot)`
  cursor: pointer;

  font-family: var(--ff-iceland);
  font-size: var(--s5);

  color: inherit;
`;function pt({name:e,...t}){const{address:n}=H(),[o,i]=Object(a.useState)(!1),c=e?e+"'s":"Your";return r.a.createElement(r.a.Fragment,null,r.a.createElement(it,Object.assign({src:rt.a,alt:"Open account menu",onClick:()=>i(!0)},t)),o&&r.a.createElement(st,t,r.a.createElement(lt,null,r.a.createElement(ut,null,r.a.createElement(ct,{src:nt.a,alt:"Close account menu",onClick:()=>i(!1)}),r.a.createElement(mt,null,r.a.createElement("img",{src:Xe.a,alt:"Avatar"}),r.a.createElement(ft,null,c," account")),r.a.createElement(dt,null,r.a.createElement(gt,null,n),r.a.createElement(vt,{src:et.a,alt:"Copy address icon",onClick:()=>{X()(n)}}))))))}const ht=v.b.header`
  display: flex;
  justify-content: space-between;
`;function bt({path:e,state:t,name:n,...a}){return r.a.createElement(ht,a,r.a.createElement(fe,{icon:Ge.a,path:e,state:t}),r.a.createElement(pt,{name:n}))}function yt(e){const{setError:t}=B(),{getStakingClient:n}=H(),[r,o]=Object(a.useState)();return Object(a.useEffect)(()=>{!async function(){try{const{validator:t}=await n().staking.unverified.validator(e);o(t)}catch(a){t(a.message),console.error(a)}}()},[n,e,t]),r}var Et=n(44),xt=n(928),jt=n(445),kt=n(930),Ot=n(136);const wt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,Pt=(v.b.div`
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
`,v.b.div`
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
`),{Text:St}=f.a;function Tt({submitDelegateBalance:e}){const{balance:t}=H(),n=t.find(e=>e.denom===Ye.stakingToken),a=Ye.coinMap[Ye.stakingToken].fractionalDigits,o=n?P.Decimal.fromAtomics(n.amount,a).toFloatApproximation():0,i=Ot.b().shape({amount:Ot.a().required("An amount is required").positive("Amount should be positive").max(o)});return r.a.createElement(Et.c,{initialValues:{amount:""},onSubmit:e,validationSchema:i},e=>{const t=!(e.isValid&&e.dirty);return r.a.createElement(xt.a,null,r.a.createElement(wt,null,r.a.createElement(Pt,null,r.a.createElement(St,null,Ye.coinMap[Ye.stakingToken].denom),r.a.createElement(jt.a,{name:"amount"},r.a.createElement(kt.a,{name:"amount",placeholder:"Enter amount"}))),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:t},"Delegate")))})}const At=Object(v.b)(ie)`
  & > * {
    --gap: var(--s6);
  }
`,Ct=Object(v.b)(ie)`
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
`,{Title:Dt}=(Object(v.b)(ae)`
  --max-width: none;
`,Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }
`,f.a);function Bt(){var e;const[t,n]=Object(a.useState)(!1),o=Object(p.g)(),{validatorAddress:i}=Object(p.h)(),{getClient:c,address:s,refreshBalance:l}=H(),u=yt(i);return t&&r.a.createElement(pe,{loadingText:"Delegating..."})||!t&&r.a.createElement(le,null,r.a.createElement(At,null,r.a.createElement(Ct,null,r.a.createElement(bt,{path:"/validators/"+i}),r.a.createElement(Dt,null,"Delegate"),r.a.createElement(Dt,{level:2},null!==(e=null===u||void 0===u?void 0:u.description.moniker)&&void 0!==e?e:"")),r.a.createElement(Tt,{submitDelegateBalance:async function({amount:e}){n(!0);const t={amount:_(e,Ye.coinMap,Ye.stakingToken),denom:Ye.stakingToken},a={typeUrl:"/cosmos.staking.v1beta1.MsgDelegate",value:{delegatorAddress:s,validatorAddress:i,amount:t}},r={amount:Object(E.coins)(Ye.gasPrice*10**Ye.coinMap[Ye.feeToken].fractionalDigits,Ye.feeToken),gas:"1500000"};try{const t=await c().signAndBroadcast(s,[a],r);if(Object(j.isBroadcastTxFailure)(t))throw Error("Delegate failed");l(),o.push({pathname:"/result",state:{success:!0,message:`${e} ${Ye.coinMap[Ye.stakingToken].denom} successfully delegated`,customButtonText:"Validator home",customButtonActionPath:"/validators/"+i}})}catch(u){console.error(u),o.push({pathname:"/result",state:{success:!1,message:"Delegate transaction failed:",error:G(u),customButtonActionPath:`/validators/${i}/delegate`}})}}})))}var Mt=n(446),zt=n.n(Mt);function It(){return r.a.createElement(Ae,{pathAfterLogin:"/validators",appName:"Staking service",appLogo:zt.a,config:Ye})}var Ut=n(447),Ft=n.n(Ut),Rt=n(448),$t=n.n(Rt);function Nt(e){e.push("/validators")}function Lt(){return r.a.createElement(Ie,{defaultButtonAction:Nt,successIcon:$t.a,failIcon:Ft.a})}const{Text:Vt}=f.a,Wt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }

  div[role="separator"] {
    margin-bottom: 0;
  }
`,qt=v.b.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`,Ht=Object(v.b)(Vt)`
  font-family: var(--ff-iceland);
  font-size: var(--s2);
  line-height: var(--s2);
`,Jt=Object(v.b)(Vt)`
  font-family: var(--ff-montserrat);
  font-weight: bolder;
  font-size: var(--s-1);
  line-height: var(--s-1);
`;function Kt(e){return r.a.createElement(Wt,null,Object.entries(e).map(([e,t],n)=>r.a.createElement(r.a.Fragment,{key:e},n>0&&r.a.createElement(s.a,null),r.a.createElement(qt,null,r.a.createElement(Ht,null,e.charAt(0).toUpperCase()+e.slice(1)),r.a.createElement(Jt,null,t)))))}const Yt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s6);
  }

  width: 100%;
`,_t=Object(v.b)(ie)`
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
`,{Title:Gt,Text:Qt}=(Object(v.b)(ie)`
  & > * {
    --gap: var(--s2);
  }
`,f.a);function Xt(){var e;const[t,n]=Object(a.useState)(!1),o=Object(p.g)(),{validatorAddress:i}=Object(p.h)(),{config:c,getClient:s,getStakingClient:l,address:m,refreshBalance:f}=H(),d=yt(i),[g,v]=Object(a.useState)([]);return Object(a.useEffect)(()=>{!async function(){try{const{rewards:e}=await l().distribution.unverified.delegationRewards(m,i),t=e.map(e=>({amount:e.amount?e.amount.slice(0,-18):"",denom:e.denom||""})).filter(e=>e.amount.length&&e.denom.length);v(t)}catch(e){console.error(e.message)}}()},[l,m,i]),t&&r.a.createElement(pe,{loadingText:"Withdrawing rewards..."})||!t&&r.a.createElement(le,null,r.a.createElement(Yt,null,r.a.createElement(_t,null,r.a.createElement(bt,{path:"/validators/"+i}),r.a.createElement(Gt,null,"Pending rewards"),r.a.createElement(Gt,{level:2},null!==(e=null===d||void 0===d?void 0:d.description.moniker)&&void 0!==e?e:"")),g.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(Kt,function(e,t){if(!e.coinMap)return{};const n={};for(const a of t){const t=Y(a,e.coinMap);n[t.denom]=t.amount}return n}(c,g)),r.a.createElement(u.a,{type:"primary",onClick:async function(){n(!0);const e={typeUrl:"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",value:{delegatorAddress:m,validatorAddress:i}},t={amount:Object(E.coins)(c.gasPrice*10**c.coinMap[c.feeToken].fractionalDigits,c.feeToken),gas:"1500000"};try{const n=await s().signAndBroadcast(m,[e],t);if(Object(j.isBroadcastTxFailure)(n))throw Error("Rewards withdrawal failed");f(),o.push({pathname:"/result",state:{success:!0,message:"Successfully withdrawn",customButtonText:"Validator home",customButtonActionPath:"/validators/"+i}})}catch(a){console.error(a),o.push({pathname:"/result",state:{success:!1,message:"Rewards withdrawal transaction failed:",error:G(a),customButtonActionPath:`/validators/${i}/rewards`}})}}},"Withdraw rewards")):r.a.createElement(Qt,null,"No rewards found")))}const Zt=Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,en=v.b.div`
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
`,{Text:tn}=f.a;function nn({validatorAddress:e,submitUndelegateBalance:t}){const{config:n,getStakingClient:o,address:i}=H(),[c,s]=Object(a.useState)(P.Decimal.fromUserInput("0",0)),l=c.toFloatApproximation(),m=Ot.b().shape({amount:Ot.a().required("An amount is required").positive("Amount should be positive").max(l)});return Object(a.useEffect)(()=>{!async function(){try{const{delegationResponse:t}=await o().staking.unverified.delegation(i,e),{balance:a}=t,r=P.Decimal.fromAtomics(a.amount,n.coinMap[n.stakingToken].fractionalDigits);s(r)}catch(t){console.error(t.message)}}()},[i,e,n,o]),r.a.createElement(Et.c,{initialValues:{amount:""},onSubmit:t,validationSchema:m},e=>r.a.createElement(xt.a,null,r.a.createElement(Zt,null,r.a.createElement(en,null,r.a.createElement(tn,null,"Balance"),r.a.createElement(tn,null,c.toString())),r.a.createElement(en,null,r.a.createElement(tn,null,"Undelegate"),r.a.createElement(jt.a,{name:"amount"},r.a.createElement(kt.a,{name:"amount",placeholder:"Enter amount"}))),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Undelegate"))))}const{Text:an}=f.a,rn=Object(v.b)(ie)`
  & > * {
    --gap: var(--s6);
  }
`,on=Object(v.b)(ie)`
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
`,{Title:cn}=(Object(v.b)(ae)`
  --max-width: none;
`,Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }
`,Object(v.b)(ie)`
  & > * {
    --gap: var(--s3);
  }
`,Object(v.b)(an)`
  font-size: var(--s-1);
  color: var(--color-blue);
`,f.a);function sn(){var e;const[t,n]=Object(a.useState)(!1),o=Object(p.g)(),{validatorAddress:i}=Object(p.h)(),{getClient:c,address:s,refreshBalance:l}=H(),u=yt(i);return t&&r.a.createElement(pe,{loadingText:"Undelegating..."})||!t&&r.a.createElement(le,null,r.a.createElement(rn,null,r.a.createElement(on,null,r.a.createElement(bt,{path:"/validators/"+i}),r.a.createElement(cn,null,"Undelegate"),r.a.createElement(cn,{level:2},null!==(e=null===u||void 0===u?void 0:u.description.moniker)&&void 0!==e?e:"")),r.a.createElement(nn,{validatorAddress:i,submitUndelegateBalance:async function({amount:e}){n(!0);const t={amount:_(e,Ye.coinMap,Ye.stakingToken),denom:Ye.stakingToken},a={typeUrl:"/cosmos.staking.v1beta1.MsgUndelegate",value:{delegatorAddress:s,validatorAddress:i,amount:t}},r={amount:Object(E.coins)(Ye.gasPrice*10**Ye.coinMap[Ye.feeToken].fractionalDigits,Ye.feeToken),gas:"1500000"};try{const t=await c().signAndBroadcast(s,[a],r);if(Object(j.isBroadcastTxFailure)(t))throw Error("Undelegate failed");l(),o.push({pathname:"/result",state:{success:!0,message:`${e} ${Ye.coinMap[Ye.stakingToken].denom} successfully undelegated`,customButtonText:"Validator home",customButtonActionPath:"/validators/"+i}})}catch(u){console.error(u),o.push({pathname:"/result",state:{success:!1,message:"Undelegate transaction failed:",error:G(u),customButtonActionPath:`/validators/${i}/undelegate`}})}}})))}const ln=Object(v.b)(ie)`
  & > * {
    --gap: var(--s5);
  }
`,un=Object(v.b)(ie)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,mn=(Object(v.b)(ae)`
  --max-width: none;
`,Object(v.b)(ie)`
  & > * {
    --gap: var(--s0);
  }
`),{Title:fn}=f.a;function dn(){var e;const t=Object(p.g)(),{validatorAddress:n}=Object(p.h)(),o=yt(n),{config:i,getStakingClient:c,address:s}=H(),[l,m]=Object(a.useState)(P.Decimal.fromUserInput("0",0));return Object(a.useEffect)(()=>{!async function(){try{const{delegationResponse:e}=await c().staking.unverified.delegation(s,n),t=P.Decimal.fromAtomics(e.balance.amount,i.coinMap[i.stakingToken].fractionalDigits);m(t)}catch(e){console.error(e.message)}}()},[c,s,n,i]),r.a.createElement(le,null,r.a.createElement(ln,null,r.a.createElement(bt,{path:"/validators"}),r.a.createElement(un,null,r.a.createElement(fn,null,null!==(e=null===o||void 0===o?void 0:o.description.moniker)&&void 0!==e?e:"")),r.a.createElement(Kt,function(e,t){return t?{Tokens:`${Y({denom:Ye.stakingToken,amount:t.tokens},Ye.coinMap).amount} ${Ye.coinMap[Ye.stakingToken].denom}`,Commission:t.commission.commissionRates.rate.slice(0,-16)+" %",Balance:e.toString()}:{}}(l,o)),r.a.createElement(mn,null,r.a.createElement(u.a,{type:"primary",onClick:function(){t.push(`/validators/${n}/delegate`)}},"Delegate"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push(`/validators/${n}/undelegate`)}},"Undelegate"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push(`/validators/${n}/rewards`)}},"Rewards"))))}const gn=Object(v.b)(ie)`
  width: 100%;

  & > * {
    --gap: var(--s5);
  }
`,vn=v.b.header`
  display: flex;
  justify-content: flex-end;
`,pn=Object(v.b)(ie)`
  & > * {
    --gap: 0;
  }
`,hn=v.b.div`
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
`,bn=v.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Title:yn,Text:En}=f.a;function xn(e,t){return e.name<t.name?-1:e.name>t.name?1:0}function jn(){const e=Object(p.g)(),{getStakingClient:t}=H(),[n,o]=Object(a.useState)([]);return Object(a.useEffect)(()=>{!async function(){const{validators:e}=await t().staking.unverified.validators("BOND_STATUS_BONDED"),n=e.map(e=>({name:e.description.moniker,address:e.operatorAddress})).sort(xn);o(n)}()},[t]),r.a.createElement(le,null,r.a.createElement(gn,null,r.a.createElement(vn,null,r.a.createElement(pt,null)),r.a.createElement(yn,null,"Validators"),r.a.createElement(pn,null,n.map(t=>r.a.createElement(hn,{key:t.name,onClick:()=>{return n=t.address,void e.push("/validators/"+n);var n}},r.a.createElement(bn,null,r.a.createElement(En,null,t.name)))))))}function kn(){return r.a.createElement(M,null,r.a.createElement(J,{config:Ye},r.a.createElement(A,null,r.a.createElement(Je,null),r.a.createElement(Ke.a,{basename:"/native-stakes"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:It}),r.a.createElement(p.b,{exact:!0,path:"/login",component:It}),r.a.createElement(K,{authPath:"/login"},r.a.createElement(p.b,{exact:!0,path:"/validators",component:jn}),r.a.createElement(p.b,{exact:!0,path:"/validators/:validatorAddress",component:dn}),r.a.createElement(p.b,{exact:!0,path:"/validators/:validatorAddress/delegate",component:Bt}),r.a.createElement(p.b,{exact:!0,path:"/validators/:validatorAddress/undelegate",component:sn}),r.a.createElement(p.b,{exact:!0,path:"/validators/:validatorAddress/rewards",component:Xt}),r.a.createElement(p.b,{exact:!0,path:"/result",component:Lt})))))))}n(922);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(kn,null)),document.getElementById("root"))}},[[453,1,2]]]);
//# sourceMappingURL=main.a229e289.chunk.js.map