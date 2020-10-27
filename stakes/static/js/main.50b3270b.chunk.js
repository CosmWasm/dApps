(this["webpackJsonpstaking-service"]=this["webpackJsonpstaking-service"]||[]).push([[0],{263:function(e,t){},373:function(e,t,n){e.exports=n.p+"static/media/backArrow.9849fc2e.svg"},374:function(e,t,n){e.exports=n.p+"static/media/avatar.e6ceb267.svg"},375:function(e,t,n){e.exports=n.p+"static/media/copy.173891ca.svg"},376:function(e,t,n){e.exports=n.p+"static/media/cross.ccb4620e.svg"},377:function(e,t,n){e.exports=n.p+"static/media/hamburger.87d19430.svg"},378:function(e,t,n){e.exports=n.p+"static/media/cosmWasmLogo.15dccd19.svg"},379:function(e,t,n){e.exports=n.p+"static/media/failIcon.71513020.svg"},380:function(e,t,n){e.exports=n.p+"static/media/successIcon.2e305b66.svg"},385:function(e,t,n){e.exports=n.p+"static/media/confirmIcon.5ecaf28a.svg"},390:function(e,t,n){e.exports=n(799)},417:function(e,t){},419:function(e,t){},429:function(e,t){},431:function(e,t){},473:function(e,t){},474:function(e,t){},479:function(e,t){},481:function(e,t){},505:function(e,t){},798:function(e,t,n){},799:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),i=(n(233),n(172)),l=n.n(i),s=(n(71),n(11)),u=n.n(s),m=(n(41),n(10)),f=n.n(m),d=(n(401),n(366)),v=n.n(d),p=n(1),h=n(21),b=n(805),g=n(358),E=n(62),y=n(43),j=n(359),x=n(360),O=n(14);var k={setError:function(){},clearError:function(){}},w=Object(a.createContext)(k),P=function(){return Object(a.useContext)(w)};function C(e){var t=e.children,n=Object(a.useState)(),r=n[0],o=n[1],c={error:r,setError:o,clearError:function(){o(void 0)}};return Object(a.createElement)(w.Provider,{value:c},t)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var A=function(e){try{var t=window;if(!t.getOfflineSigner)throw new Error("Keplr extension is not available");return Promise.resolve(t.getOfflineSigner(e))}catch(n){return Promise.reject(n)}},T=function(e,t){try{return Promise.resolve(x.a.create(12e4,12e4)).then((function(e){return new j.LedgerSigner(e,{hdPaths:[Object(y.makeCosmoshubPath)(0)],prefix:t})}))}catch(n){return Promise.reject(n)}},I=function(e,t){try{var n=function(){var e="burner-wallet",t=localStorage.getItem(e);if(t)return t;var n=E.Bip39.encode(E.Random.getBytes(16)).toString();return localStorage.setItem(e,n),n}(),a=Object(y.makeCosmoshubPath)(0);return Promise.resolve(y.Secp256k1HdWallet.fromMnemonic(n,a,t))}catch(r){return Promise.reject(r)}};var D={initialized:!1,address:"",init:function(){return Promise.resolve()},clear:function(){},getClient:function(){throw new Error("not yet initialized")},getStakingClient:function(){throw new Error("not yet initialized")}},z=Object(a.createContext)(D),B=function(){return Object(a.useContext)(z)};function M(e){var t=e.config,n=e.children,r=S({},D,{init:function(e){try{return Promise.resolve(function(e,t){try{return Promise.resolve(t.getAccounts()).then((function(n){var a=n[0].address,r=y.GasPrice.fromString(""+e.gasPrice+e.feeToken);return new g.SigningCosmWasmClient(e.httpUrl,a,t,r,{upload:15e5,init:6e5,exec:4e5,migrate:6e5,send:8e4,changeAdmin:8e4})}))}catch(n){return Promise.reject(n)}}(t,e)).then((function(e){function n(){var n,r=(n=t.httpUrl,y.LcdClient.withExtensions({apiUrl:n},y.setupStakingExtension));i({initialized:!0,address:a,init:function(){return Promise.resolve()},clear:l,getClient:function(){return e},getStakingClient:function(){return r}})}var a=e.senderAddress,r=function(){if(t.faucetUrl)return Promise.resolve(e.getAccount()).then((function(e){var n=function(){var n;if(!(null===e||void 0===e||null===(n=e.balance)||void 0===n?void 0:n.length))return Promise.resolve(fetch(t.faucetUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ticker:t.faucetToken,address:a})})).then((function(){}))}();if(n&&n.then)return n.then((function(){}))}))}();return r&&r.then?r.then(n):n()}))}catch(n){return Promise.reject(n)}}}),o=Object(a.useState)(r),c=o[0],i=o[1];function l(){i(S({},r))}return Object(a.createElement)(z.Provider,{value:c},n)}var L={refreshAccount:function(){}},F=Object(a.createContext)(L),W=function(){return Object(a.useContext)(F)};function _(e){var t=e.children,n=P().setError,r=B(),o=Object(a.useState)({}),c=o[0],i=o[1];function l(){r.initialized&&r.getClient().getAccount().then((function(e){return i({account:e})})).catch(n)}Object(a.useEffect)(l,[r,n]);var s={refreshAccount:l,account:c.account};return Object(a.createElement)(F.Provider,{value:s},t)}var H={contracts:[],addContract:function(){}},U=r.a.createContext(H);function q(e){var t=e.children,n=Object(a.useState)(H.contracts),o=n[0],c=n[1];var i={contracts:o,addContract:function(e){c((function(t){return!t.find((function(t){return t.contractAddress===e.contractAddress}))?[].concat(t,[e]):t}))}};return r.a.createElement(U.Provider,{value:i},t)}var N=function(e){return{use:function(t){return{contractAddress:t,balance:function(n){try{var a=n||e.senderAddress;return Promise.resolve(e.queryContractSmart(t,{balance:{address:a}})).then((function(e){return e.balance}))}catch(r){return Promise.reject(r)}},allowance:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{allowance:{owner:n,spender:a}}))}catch(r){return Promise.reject(r)}},allAllowances:function(n,a,r){try{return Promise.resolve(e.queryContractSmart(t,{all_allowances:{owner:n,start_after:a,limit:r}}))}catch(o){return Promise.reject(o)}},allAccounts:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{all_accounts:{start_after:n,limit:a}})).then((function(e){return e.accounts}))}catch(r){return Promise.reject(r)}},tokenInfo:function(){try{return Promise.resolve(e.queryContractSmart(t,{token_info:{}}))}catch(n){return Promise.reject(n)}},investment:function(){try{return Promise.resolve(e.queryContractSmart(t,{investment:{}}))}catch(n){return Promise.reject(n)}},claims:function(n){try{return Promise.resolve(e.queryContractSmart(t,{claims:{address:n}}))}catch(a){return Promise.reject(a)}},minter:function(){try{return Promise.resolve(e.queryContractSmart(t,{minter:{}}))}catch(n){return Promise.reject(n)}},mint:function(n,a){try{return Promise.resolve(e.execute(t,{mint:{recipient:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},transfer:function(n,a){try{return Promise.resolve(e.execute(t,{transfer:{recipient:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},burn:function(n){try{return Promise.resolve(e.execute(t,{burn:{amount:n}})).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},increaseAllowance:function(n,a){try{return Promise.resolve(e.execute(t,{increase_allowance:{spender:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},decreaseAllowance:function(n,a){try{return Promise.resolve(e.execute(t,{decrease_allowance:{spender:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},transferFrom:function(n,a,r){try{return Promise.resolve(e.execute(t,{transfer_from:{owner:n,recipient:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(o){return Promise.reject(o)}},bond:function(n){try{return Promise.resolve(e.execute(t,{bond:{}},void 0,[n])).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},unbond:function(n){try{return Promise.resolve(e.execute(t,{unbond:{amount:n}})).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},claim:function(){try{return Promise.resolve(e.execute(t,{claim:{}})).then((function(e){return e.transactionHash}))}catch(n){return Promise.reject(n)}}}}}};function V(e){var t=e.authPath,n=e.children,a=e.location;return B().initialized?r.a.createElement(h.d,{location:a},n):r.a.createElement(h.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function $(e,t,n){var a,r=null===(a=t[n])||void 0===a?void 0:a.fractionalDigits;return r?O.Decimal.fromUserInput(e,r).atomics:e}function R(e){var t=(e||"").toString(),n=t.match(/.*\s*$/g)[0];return n.substring(0,n.lastIndexOf(";"))||t}var J=n(168),G=n.n(J);function K(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function Y(e,t){return t||(t=e.slice(0)),e.raw=t,e}function Q(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=K(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function X(){var e=Y(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return X=function(){return e},e}var Z=Object(p.b)(Q)(X());function ee(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,o=K(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},o),r)}function te(){var e=Y(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return te=function(){return e},e}var ne=Object(p.b)(ee)(te());function ae(e){var t=e.children,n=K(e,["children"]);return Object(a.createElement)(Z,Object.assign({tag:"main"},n),t)}function re(){var e=Y(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return re=function(){return e},e}var oe=Object(p.b)(ae)(re());function ce(e){var t=e.icon,n=e.path,a=e.state,o=K(e,["icon","path","state"]),c=Object(h.g)(),i=n?function(){return c.push(n,a)}:c.goBack;return r.a.createElement("img",Object.assign({src:t,alt:"Back arrow",onClick:i},o))}function ie(){var e=Y(["\n  cursor: pointer;\n"]);return ie=function(){return e},e}var le=Object(p.b)(ce)(ie());function se(){var e=Y(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return se=function(){return e},e}var ue=Object(p.b)(v.a)(se()),me=Object(a.createElement)(b.a,{style:{fontSize:"6.25rem"},spin:!0});function fe(e){var t=e.loadingText||"Loading...";return Object(a.createElement)(oe,null,Object(a.createElement)(ue,{indicator:me,tip:t}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function de(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function ve(){var e=Y(["\n  color: var(--color-red);\n"]);return ve=function(){return e},e}function pe(){var e=Y(["\n  display: block;\n  font-weight: lighter;\n"]);return pe=function(){return e},e}function he(){var e=Y(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return he=function(){return e},e}function be(){var e=Y(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return be=function(){return e},e}var ge=f.a.Text,Ee=Object(p.b)(ne)(be()),ye=Object(p.b)(ne)(he()),je=Object(p.b)(ge)(pe()),xe=Object(p.b)(ge)(ve()),Oe=f.a.Title;function ke(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function we(e){var t=function(e){try{O(!0),p();var t=de((function(){return Promise.resolve(e(n.chainId,n.addressPrefix)).then((function(e){return Promise.resolve(b.init(e)).then((function(){}))}))}),(function(e){console.error(e),v(Error(e).message),O(!1)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},n=e.config,o=e.pathAfterLogin,c=e.appName,i=e.appLogo,l=Object(h.g)(),s=l.location.state,m=P(),d=m.error,v=m.setError,p=m.clearError,b=B(),g=W(),E=g.refreshAccount,y=g.account,j=Object(a.useState)(!1),x=j[0],O=j[1];return Object(a.useEffect)((function(){b.initialized&&E()}),[b.initialized,E]),Object(a.useEffect)((function(){y&&(s?l.push(s.redirectPathname,s.redirectState):l.push(o))}),[y,s,l]),x?r.a.createElement(fe,{loadingText:"Initializing app..."}):r.a.createElement(oe,null,r.a.createElement(Ee,null,r.a.createElement("img",{src:i,alt:"CosmWasm logo"}),r.a.createElement(ye,null,r.a.createElement(f.a,null,r.a.createElement(Oe,{level:2},"Hello!"),r.a.createElement(je,null,"Welcome to your ",c),r.a.createElement(je,null,"Select one of the following options to start:")),d&&r.a.createElement(xe,null,d),r.a.createElement(u.a,{type:"primary",onClick:function(){try{return Promise.resolve(t(I)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Browser (Demo)"),r.a.createElement(u.a,{type:"primary",disabled:ke(),onClick:function(){try{return Promise.resolve(t(T)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Ledger (Secure, Chrome)"),r.a.createElement(u.a,{type:"primary",disabled:!1,onClick:function(){try{var e=window,a=de((function(){return Promise.resolve(e.keplr.experimentalSuggestChain(function(e){return{chainId:e.chainId,chainName:e.chainName,rpc:e.rpcUrl,rest:e.httpUrl,bech32Config:{bech32PrefixAccAddr:""+e.addressPrefix,bech32PrefixAccPub:e.addressPrefix+"pub",bech32PrefixValAddr:e.addressPrefix+"valoper",bech32PrefixValPub:e.addressPrefix+"valoperpub",bech32PrefixConsAddr:e.addressPrefix+"valcons",bech32PrefixConsPub:e.addressPrefix+"valconspub"},currencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits},{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits}],feeCurrencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits}],stakeCurrency:{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits},gasPriceStep:{low:e.gasPrice/2,average:e.gasPrice,high:2*e.gasPrice},bip44:{coinType:118},coinType:118}}(n))).then((function(){return Promise.resolve(e.keplr.enable(n.chainId)).then((function(){return Promise.resolve(t(A)).then((function(){}))}))}))}),(function(e){console.error(e),v(Error(e).message)}));return Promise.resolve(a&&a.then?a.then((function(){})):void 0)}catch(r){return Promise.reject(r)}}},"Keplr (Secure)"))))}function Pe(){var e=Y(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return Pe=function(){return e},e}function Ce(){var e=Y(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Ce=function(){return e},e}var Se=f.a.Text,Ae=Object(p.b)(ne)(Ce()),Te=Object(p.b)(Se)(Pe());function Ie(e){var t=e.defaultButtonAction,n=e.successIcon,a=e.failIcon,o=Object(h.g)(),c=o.location.state,i=c.success,l=c.message,s=c.error,m=c.customButtonText,f=c.customButtonActionPath,d=c.customButtonActionState;var v=function(e){return e?{result:"success",icon:n,buttonText:"Home",buttonAction:function(){return t(o)}}:{result:"failure",icon:a,buttonText:"Retry",buttonAction:o.goBack}}(i),p=v.icon,b=v.result,g=v.buttonText,E=v.buttonAction,y=m||g,j=f?function(){return o.push(f,d)}:E;return r.a.createElement(oe,null,r.a.createElement(Ae,null,r.a.createElement("img",{src:p,alt:"Result icon"}),r.a.createElement(Te,{"data-result":b},l),s&&r.a.createElement(Te,{"data-result":b},s),r.a.createElement(u.a,{type:"primary",onClick:j},y)))}f.a.Title,f.a.Text;function De(){var e=Y(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return De=function(){return e},e}var ze=Object(p.a)(De());function Be(){var e=Y(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return Be=function(){return e},e}var Me=Object(p.a)(Be());function Le(){var e=Y(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return Le=function(){return e},e}var Fe=Object(p.a)(Le());function We(){var e=Y(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return We=function(){return e},e}var _e=Object(p.a)(We());function He(){var e=Y(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return He=function(){return e},e}var Ue=Object(p.a)(He());function qe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_e,null),r.a.createElement(Ue,null),r.a.createElement(Me,null),r.a.createElement(Fe,null),r.a.createElement(ze,null))}var Ne=n(61);const Ve={chainId:"cosmwasm-coral",chainName:"Coral",addressPrefix:"coral",rpcUrl:"https://rpc.coralnet.cosmwasm.com",httpUrl:"https://lcd.coralnet.cosmwasm.com",faucetUrl:"https://faucet.coralnet.cosmwasm.com/credit",feeToken:"ushell",stakingToken:"ureef",faucetToken:"SHELL",coinMap:{ushell:{denom:"SHELL",fractionalDigits:6},ureef:{denom:"REEF",fractionalDigits:6}},gasPrice:.025,codeId:129};var $e=n(373),Re=n.n($e),Je=n(374),Ge=n.n(Je),Ke=n(375),Ye=n.n(Ke),Qe=n(376),Xe=n.n(Qe),Ze=n(377),et=n.n(Ze);const{Text:tt}=f.a,nt=p.b.img`
  cursor: pointer;
  width: 2.625rem;
`,at=p.b.img`
  cursor: pointer;
  width: 1.75rem;
`,rt=Object(p.b)(Z)`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;

  min-width: var(--max-width);
  padding: var(--s0);
  background-color: var(--color-blue);
`,ot=Object(p.b)(ne)`
  width: 100%;
  color: var(--color-gray-light);

  & > * {
    --gap: var(--s4);
  }
`,ct=Object(p.b)(ne)`
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
`,it=p.b.div`
  display: flex;
`,lt=Object(p.b)(tt)`
  margin-left: var(--s-1);
  font-size: var(--s2);
  color: inherit;
`,st=p.b.div`
  width: 100%;
  padding: var(--s-4) 0;
  border-radius: 2px;
  background-color: var(--color-gray-light);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,ut=Object(p.b)(tt)`
  font-size: var(--s-2);
`,mt=p.b.img`
  cursor: pointer;
`;Object(p.b)(ne)`
  & > * {
    --gap: var(--s-3);
  }
`,Object(p.b)(tt)`
  cursor: pointer;

  font-family: var(--ff-iceland);
  font-size: var(--s5);

  color: inherit;
`;function ft({name:e,...t}){const{account:n}=W(),[o,c]=Object(a.useState)(!1),i=e?e+"'s":"Your";return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt,Object.assign({src:et.a,alt:"Open account menu",onClick:()=>c(!0)},t)),o&&r.a.createElement(rt,t,r.a.createElement(ot,null,r.a.createElement(ct,null,r.a.createElement(at,{src:Xe.a,alt:"Close account menu",onClick:()=>c(!1)}),r.a.createElement(it,null,r.a.createElement("img",{src:Ge.a,alt:"Avatar"}),r.a.createElement(lt,null,i," account")),r.a.createElement(st,null,r.a.createElement(ut,null,n.address),r.a.createElement(mt,{src:Ye.a,alt:"Copy address icon",onClick:()=>{G()(n.address)}}))))))}const dt=p.b.header`
  display: flex;
  justify-content: space-between;
`;function vt({path:e,state:t,name:n,...a}){return r.a.createElement(dt,a,r.a.createElement(le,{icon:Re.a,path:e,state:t}),r.a.createElement(ft,{name:n}))}const{Text:pt}=f.a,ht=Object(p.b)(ne)`
  & > * {
    --gap: var(--s0);
  }

  div[role="separator"] {
    margin-bottom: 0;
  }
`,bt=p.b.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`,gt=Object(p.b)(pt)`
  font-family: var(--ff-iceland);
  font-size: var(--s2);
  line-height: var(--s2);
`,Et=Object(p.b)(pt)`
  font-family: var(--ff-montserrat);
  font-weight: bolder;
  font-size: var(--s4);
  line-height: var(--s4);
`;function yt(e){return r.a.createElement(ht,null,Object.entries(e).map(([e,t],n)=>r.a.createElement(r.a.Fragment,{key:e},n>0&&r.a.createElement(l.a,null),r.a.createElement(bt,null,r.a.createElement(gt,null,e.charAt(0).toUpperCase()+e.slice(1)),r.a.createElement(Et,null,t)))))}const jt=Object(p.b)(ne)`
  & > * {
    --gap: var(--s2);
  }
`;function xt({claimsData:e,claimIndex:t,setClaimIndex:n}){const a=void 0===t?{}:{...e[t],date:e[t].date.toLocaleDateString()},o=t===e.length-1,c=0===t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(yt,a),r.a.createElement(jt,null,r.a.createElement(u.a,{type:"primary",disabled:o,onClick:()=>{!o&&n(e=>e+1)}},"Next"),r.a.createElement(u.a,{type:"primary",disabled:c,onClick:()=>{!c&&n(e=>e-1)}},"Previous")))}const Ot=Object(p.b)(ne)`
  & > * {
    --gap: var(--s2);
  }
`;function kt({claimsData:e,setClaimIndex:t,balanceToClaim:n,claimAll:a}){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot,null,e.map((e,n)=>r.a.createElement(u.a,{key:n,type:"primary",onClick:()=>{t(n)}},`${e.date.toLocaleDateString()} - ${e.balance} tokens`))),r.a.createElement(u.a,{disabled:function(){if(!e.length)return!0;const t=(new Date).valueOf();return e.every(e=>e.date.valueOf()>t)}(),type:"primary",onClick:a},"Claim ",n))}const wt=Object(p.b)(ne)`
  & > * {
    --gap: var(--s6);
  }

  width: 100%;
`,Pt=Object(p.b)(ne)`
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
`,{Title:Ct}=(Object(p.b)(ne)`
  & > * {
    --gap: var(--s2);
  }
`,f.a);function St(){const[e,t]=Object(a.useState)(!1),[n,o]=Object(a.useState)(),c=Object(h.g)(),{validatorAddress:i}=Object(h.h)(),{getClient:l}=B(),{account:s,refreshAccount:u}=W(),[m,f]=Object(a.useState)(""),[d,v]=Object(a.useState)([]),[p,b]=Object(a.useState)("0");Object(a.useEffect)(()=>{const e=l();!async function(){const t=await e.getContract(i),n=N(e).use(t.address),[{name:a},{claims:r}]=await Promise.all([n.tokenInfo(),n.claims(s.address)]);f(a);const o=r.map(e=>{const t=new Date(1e3*e.released.at_time),n=Ve.coinMap[Ve.stakingToken].fractionalDigits;return{date:t,balance:O.Decimal.fromAtomics(e.amount,n).toString()}});v(o.sort((e,t)=>e.date.valueOf()-t.date.valueOf()))}()},[l,i,s.address]),Object(a.useEffect)(()=>{const e=Ve.coinMap[Ve.stakingToken].fractionalDigits,t=(new Date).valueOf(),n=d.filter(e=>e.date.valueOf()<t).map(t=>O.Decimal.fromAtomics($(t.balance,Ve.coinMap,Ve.stakingToken),e)).reduce((e,t)=>e.plus(t),O.Decimal.fromAtomics("0",e));b(n.toString())},[d]);const g=void 0===n,E=void 0!==n;return e&&r.a.createElement(fe,{loadingText:"Claiming..."})||!e&&r.a.createElement(oe,null,r.a.createElement(wt,null,r.a.createElement(Pt,null,r.a.createElement(vt,{path:"/wallet/"+i}),r.a.createElement(Ct,null,"Pending Claims"),r.a.createElement(Ct,{level:2},m)),g&&r.a.createElement(kt,{claimsData:d,setClaimIndex:o,balanceToClaim:p,claimAll:async function(){t(!0);const e=l(),n=await e.getContract(i),a=N(e).use(n.address);try{if(!await a.claim())throw Error("Claim failed");u(),c.push({pathname:"/result",state:{success:!0,message:"Successfully claimed",customButtonText:"Wallet",customButtonActionPath:"/wallet/"+i}})}catch(r){console.error(r),c.push({pathname:"/result",state:{success:!1,message:"Claim transaction failed:",error:R(r),customButtonActionPath:"/claims/"+i}})}}}),E&&r.a.createElement(xt,{claimsData:d,claimIndex:n,setClaimIndex:o})))}var At=n(378),Tt=n.n(At);function It(){return r.a.createElement(we,{pathAfterLogin:"/validators",appName:"Staking service",appLogo:Tt.a,config:Ve})}var Dt=n(379),zt=n.n(Dt),Bt=n(380),Mt=n.n(Bt);function Lt(e){e.push("/validators")}function Ft(){return r.a.createElement(Ie,{defaultButtonAction:Lt,successIcon:Mt.a,failIcon:zt.a})}var Wt=n(40),_t=n(804),Ht=n(384),Ut=n(806),qt=n(124);const Nt=Object(p.b)(ne)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,Vt=p.b.div`
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
`,$t=p.b.div`
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
`,{Text:Rt}=f.a;function Jt({validatorData:e,submitBuyShares:t}){const{account:n}=W(),a=n.balance.find(e=>e.denom===Ve.stakingToken),o=Ve.coinMap[Ve.stakingToken].fractionalDigits,c=a?O.Decimal.fromAtomics(a.amount,o).toFloatApproximation():0,i=qt.b().shape({amount:qt.a().required("An amount is required").positive("Amount should be positive").max(c)});return r.a.createElement(Wt.c,{initialValues:{amount:""},onSubmit:t,validationSchema:i},t=>{const n=!(t.isValid&&t.dirty);return r.a.createElement(_t.a,null,r.a.createElement(Nt,null,r.a.createElement(Vt,null,r.a.createElement(Rt,null,"Stake/Token:"),r.a.createElement(Rt,null,null===e||void 0===e?void 0:e.investment.nominal_value)),r.a.createElement($t,null,r.a.createElement(Rt,null,Ve.coinMap[Ve.stakingToken].denom),r.a.createElement(Ht.a,{name:"amount"},r.a.createElement(Ut.a,{name:"amount",placeholder:"Enter amount"}))),r.a.createElement(u.a,{type:"primary",onClick:t.submitForm,disabled:n},"Buy")))})}const Gt=Object(p.b)(ne)`
  & > * {
    --gap: var(--s6);
  }
`,Kt=Object(p.b)(ne)`
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
`,{Title:Yt}=(Object(p.b)(Z)`
  --max-width: none;
`,Object(p.b)(ne)`
  & > * {
    --gap: var(--s0);
  }
`,f.a);function Qt(){var e;const[t,n]=Object(a.useState)(!1),o=Object(h.g)(),{validatorAddress:c}=Object(h.h)(),{getClient:i}=B(),{refreshAccount:l}=W(),[s,u]=Object(a.useState)(),[m,f]=Object(a.useState)();return Object(a.useEffect)(()=>{const e=i();!async function(){const t=await e.getContract(c),n=N(e).use(t.address);u(n)}()},[i,c]),Object(a.useEffect)(()=>{s&&async function(){const[e,t]=await Promise.all([s.tokenInfo(),s.investment()]);f({tokenInfo:e,investment:t})}()},[s]),t&&r.a.createElement(fe,{loadingText:"Bonding..."})||!t&&r.a.createElement(oe,null,r.a.createElement(Gt,null,r.a.createElement(Kt,null,r.a.createElement(vt,{path:"/validator/"+c}),r.a.createElement(Yt,null,"Purchase"),r.a.createElement(Yt,{level:2},null!==(e=null===m||void 0===m?void 0:m.tokenInfo.name)&&void 0!==e?e:"")),r.a.createElement(Jt,{validatorData:m,submitBuyShares:async function({amount:e}){n(!0);const t={amount:$(e,Ve.coinMap,Ve.stakingToken),denom:Ve.stakingToken};try{if(!await s.bond(t))throw Error("Purchase failed");l(),o.push({pathname:"/result",state:{success:!0,message:`${e} ${Ve.stakingToken} successfully bonded`,customButtonText:"Wallet",customButtonActionPath:"/wallet/"+c}})}catch(a){console.error(a),o.push({pathname:"/result",state:{success:!1,message:"Bond transaction failed:",error:R(a),customButtonActionPath:"/purchase/"+c}})}}})))}const Xt=Object(p.b)(ne)`
  width: 100%;

  & > * {
    --gap: var(--s5);
  }
`,{Title:Zt}=f.a;function en(){var e;const{validatorAddress:t}=Object(h.h)(),{getClient:n}=B(),[o,c]=Object(a.useState)();return Object(a.useEffect)(()=>{const e=n();!async function(){const n=await e.getContract(t),a=N(e).use(n.address),[r,o]=await Promise.all([a.tokenInfo(),a.investment()]);c({tokenInfo:r,investment:o})}()},[n,t]),r.a.createElement(oe,null,r.a.createElement(Xt,null,r.a.createElement(vt,{path:"/validator/"+t}),r.a.createElement(Zt,null,null!==(e=null===o||void 0===o?void 0:o.tokenInfo.name)&&void 0!==e?e:""),r.a.createElement(yt,function(e){return e?{"Total Supply":O.Decimal.fromAtomics(e.tokenInfo.total_supply,e.tokenInfo.decimals).toString(),Commission:parseFloat(e.investment.exit_tax)+" %"}:{}}(o))))}const tn=Object(p.b)(ne)`
  & > * {
    --gap: var(--s5);
  }
`,nn=Object(p.b)(ne)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,an=Object(p.b)(Z)`
  --max-width: none;
`,rn=Object(p.b)(ne)`
  & > * {
    --gap: var(--s0);
  }
`,{Title:on}=f.a;function cn(e){if(!e)return{};return{"Total Supply":O.Decimal.fromAtomics(e.tokenInfo.total_supply,e.tokenInfo.decimals).toString(),"Staked Tokens":function(e,t){if(!t)return e;var n=t[e.denom];if(!n)return e;var a=O.Decimal.fromAtomics(e.amount,n.fractionalDigits).toString();return{denom:n.denom,amount:a}}(e.investment.staked_tokens,Ve.coinMap).amount,"Stake/Token":e.investment.nominal_value}}function ln(){var e;const t=Object(h.g)(),{validatorAddress:n}=Object(h.h)(),{getClient:o}=B(),[c,i]=Object(a.useState)();return Object(a.useEffect)(()=>{const e=o();!async function(){const t=await e.getContract(n),a=N(e).use(t.address),[r,o]=await Promise.all([a.tokenInfo(),a.investment()]);i({tokenInfo:r,investment:o})}()},[o,n]),r.a.createElement(oe,null,r.a.createElement(tn,null,r.a.createElement(vt,{path:"/validators"}),r.a.createElement(nn,null,r.a.createElement(on,null,null!==(e=null===c||void 0===c?void 0:c.tokenInfo.name)&&void 0!==e?e:""),r.a.createElement(an,null,r.a.createElement(rn,null,r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/wallet/"+n)}},"Wallet"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push(`/validator/${n}/detail`)}},"View Details")))),r.a.createElement(yt,cn(c)),r.a.createElement(rn,null,r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/purchase/"+n)}},"Buy"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/withdraw/"+n)}},"Withdraw"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/claims/"+n)}},"Claims"))))}const sn=Object(p.b)(ne)`
  width: 100%;

  & > * {
    --gap: var(--s5);
  }
`,un=p.b.header`
  display: flex;
  justify-content: flex-end;
`,mn=Object(p.b)(ne)`
  & > * {
    --gap: 0;
  }
`,fn=p.b.div`
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
`,dn=p.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Title:vn,Text:pn}=f.a;async function hn(e){const{name:t}=await e.tokenInfo();return{name:t,address:e.contractAddress}}function bn(e,t){return e.name<t.name?-1:e.name>t.name?1:0}function gn(){const e=Object(h.g)(),{getClient:t}=B(),{contracts:n,addContract:o}=r.a.useContext(U),[c,i]=Object(a.useState)([]);return Object(a.useEffect)(()=>{const e=t();!async function(){const t=await e.getContracts(Ve.codeId);for(const n of t){const t=N(e).use(n.address);o(t)}}()},[t,o]),Object(a.useEffect)(()=>{const e=n.map(hn);!async function(){const t=await Promise.all(e);i(t.sort(bn))}()},[n]),r.a.createElement(oe,null,r.a.createElement(sn,null,r.a.createElement(un,null,r.a.createElement(ft,null)),r.a.createElement(vn,null,"Validators"),r.a.createElement(mn,null,c.map(t=>r.a.createElement(fn,{key:t.name,onClick:()=>{return n=t.address,void e.push("/validator/"+n);var n}},r.a.createElement(dn,null,r.a.createElement(pn,null,t.name)))))))}const En=Object(p.b)(ne)`
  & > * {
    --gap: var(--s5);
  }
`,yn=Object(p.b)(ne)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,jn=Object(p.b)(Z)`
  --max-width: none;
`,xn=Object(p.b)(ne)`
  & > * {
    --gap: var(--s0);
  }
`,{Title:On}=f.a;function kn(){var e;const t=Object(h.g)(),{validatorAddress:n}=Object(h.h)(),{getClient:o}=B(),{account:c}=W(),[i,l]=Object(a.useState)();return Object(a.useEffect)(()=>{const e=o();!async function(){const t=await e.getContract(n),a=N(e).use(t.address),[r,o,i,{claims:s}]=await Promise.all([a.tokenInfo(),a.investment(),a.balance(c.address),a.claims(c.address)]);l({tokenInfo:r,investment:o,balance:i,numClaims:s.length})}()},[o,n,c.address]),r.a.createElement(oe,null,r.a.createElement(En,null,r.a.createElement(vt,{path:"/validator/"+n}),r.a.createElement(yn,null,r.a.createElement(On,null,null!==(e=null===i||void 0===i?void 0:i.tokenInfo.name)&&void 0!==e?e:""),r.a.createElement(jn,null,r.a.createElement(u.a,{type:"primary",onClick:function(){t.push(`/validator/${n}/detail`)}},"View Details"))),r.a.createElement(yt,function(e){return e?{"Stake/Token":e.investment.nominal_value,Balance:O.Decimal.fromAtomics(e.balance,e.tokenInfo.decimals).toString(),Claims:e.numClaims.toString()}:{}}(i)),r.a.createElement(xn,null,r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/purchase/"+n)}},"Buy"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/withdraw/"+n)}},"Withdraw"),r.a.createElement(u.a,{type:"primary",onClick:function(){t.push("/claims/"+n)}},"Claims"))))}var wn=n(385),Pn=n.n(wn);const Cn=Object(p.b)(ne)`
  & > * {
    --gap: var(--s0);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,Sn=p.b.div`
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
`,{Text:An}=f.a;function Tn({validatorData:e,submitWithdrawBalance:t}){const n=e?O.Decimal.fromAtomics(e.balance,e.tokenInfo.decimals):O.Decimal.fromUserInput("0",0),a=n.toFloatApproximation(),o=qt.b().shape({amount:qt.a().required("An amount is required").positive("Amount should be positive").max(a)});return r.a.createElement(Wt.c,{initialValues:{amount:""},onSubmit:t,validationSchema:o},e=>r.a.createElement(_t.a,null,r.a.createElement(Cn,null,r.a.createElement(Sn,null,r.a.createElement(An,null,"Balance"),r.a.createElement(An,null,n.toString())),r.a.createElement(Sn,null,r.a.createElement(An,null,"Withdraw"),r.a.createElement(Ht.a,{name:"amount"},r.a.createElement(Ut.a,{name:"amount",placeholder:"Enter amount"}))),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Withdraw"))))}const{Text:In}=f.a,Dn=Object(p.b)(ne)`
  & > * {
    --gap: var(--s6);
  }
`,zn=Object(p.b)(ne)`
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
`,Bn=(Object(p.b)(Z)`
  --max-width: none;
`,Object(p.b)(ne)`
  & > * {
    --gap: var(--s0);
  }
`,Object(p.b)(ne)`
  & > * {
    --gap: var(--s3);
  }
`),Mn=Object(p.b)(In)`
  font-size: var(--s-1);
  color: var(--color-blue);
`,{Title:Ln}=f.a;var Fn;function Wn(){const[e,t]=Object(a.useState)(Fn.Form),n=Object(h.g)(),{validatorAddress:o}=Object(h.h)(),{getClient:c}=B(),{account:i,refreshAccount:l}=W(),[s,m]=Object(a.useState)(),[f,d]=Object(a.useState)(),[v,p]=Object(a.useState)("0");async function b({amount:e}){p(e),t(Fn.Confirm)}async function g(){t(Fn.Loading);const e=$(v,Ve.coinMap,Ve.stakingToken);try{if(!await s.unbond(e))throw Error("Withdrawal failed");l(),n.push({pathname:"/result",state:{success:!0,message:`${v} ${Ve.stakingToken} successfully unbonded`,customButtonText:"Wallet",customButtonActionPath:"/wallet/"+o}})}catch(a){console.error(a),n.push({pathname:"/result",state:{success:!1,message:"Unbond transaction failed:",error:R(a),customButtonActionPath:"/withdraw/"+o}})}}function E(){p("0"),t(Fn.Form)}function y(){var e;return r.a.createElement(oe,null,r.a.createElement(Dn,null,r.a.createElement(zn,null,r.a.createElement(vt,{path:"/validator/"+o}),r.a.createElement(Ln,null,"Withdraw"),r.a.createElement(Ln,{level:2},null!==(e=null===f||void 0===f?void 0:f.tokenInfo.name)&&void 0!==e?e:"")),r.a.createElement(Tn,{validatorData:f,submitWithdrawBalance:b})))}switch(Object(a.useEffect)(()=>{const e=c();!async function(){const t=await e.getContract(o),n=N(e).use(t.address);m(n)}()},[c,o]),Object(a.useEffect)(()=>{s&&async function(){const[e,t]=await Promise.all([s.tokenInfo(),s.balance(i.address)]);d({tokenInfo:e,balance:t})}()},[s,i.address]),e){case Fn.Form:return y();case Fn.Confirm:return r.a.createElement(oe,null,r.a.createElement(Bn,null,r.a.createElement("img",{src:Pn.a,alt:"Confirm icon"}),r.a.createElement(Mn,null,"Your tokens could take up to 3 weeks to be withdrawn..."),r.a.createElement(u.a,{type:"primary",onClick:g},"Accept"),r.a.createElement(u.a,{type:"primary",onClick:E},"Decline")));case Fn.Loading:return r.a.createElement(fe,{loadingText:"Withdrawing..."});default:return y()}}function _n(){return r.a.createElement(C,null,r.a.createElement(M,{config:Ve},r.a.createElement(_,null,r.a.createElement(q,null,r.a.createElement(qe,null),r.a.createElement(Ne.a,{basename:"/stakes"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:It}),r.a.createElement(h.b,{exact:!0,path:"/login",component:It}),r.a.createElement(V,{authPath:"/login"},r.a.createElement(h.b,{exact:!0,path:"/validators",component:gn}),r.a.createElement(h.b,{exact:!0,path:"/validator/:validatorAddress",component:ln}),r.a.createElement(h.b,{exact:!0,path:"/validator/:validatorAddress/detail",component:en}),r.a.createElement(h.b,{exact:!0,path:"/wallet/:validatorAddress",component:kn}),r.a.createElement(h.b,{exact:!0,path:"/purchase/:validatorAddress",component:Qt}),r.a.createElement(h.b,{exact:!0,path:"/withdraw/:validatorAddress",component:Wn}),r.a.createElement(h.b,{exact:!0,path:"/claims/:validatorAddress",component:St}),r.a.createElement(h.b,{exact:!0,path:"/result",component:Ft}))))))))}!function(e){e.Form="FORM",e.Confirm="CONFIRM",e.Loading="LOADING"}(Fn||(Fn={}));n(798);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_n,null)),document.getElementById("root"))}},[[390,1,2]]]);
//# sourceMappingURL=main.50b3270b.chunk.js.map