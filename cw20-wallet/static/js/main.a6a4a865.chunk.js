(this["webpackJsonpcw20-wallet"]=this["webpackJsonpcw20-wallet"]||[]).push([[0],{289:function(e,t){},409:function(e,t,n){e.exports=n.p+"static/media/edit.fdc29000.svg"},410:function(e,t,n){e.exports=n.p+"static/media/cosmWasmLogo.15dccd19.svg"},411:function(e,t,n){e.exports=n.p+"static/media/failIcon.71513020.svg"},412:function(e,t,n){e.exports=n.p+"static/media/successIcon.2e305b66.svg"},418:function(e,t,n){e.exports=n(871)},444:function(e,t){},446:function(e,t){},456:function(e,t){},458:function(e,t){},500:function(e,t){},501:function(e,t){},506:function(e,t){},508:function(e,t){},532:function(e,t){},65:function(e,t,n){e.exports=n.p+"static/media/backArrow.9849fc2e.svg"},870:function(e,t,n){},871:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=(n(209),n(127)),s=n.n(i),l=(n(71),n(28)),u=n.n(l),m=(n(79),n(29)),d=n.n(m),f=(n(428),n(403)),h=n.n(f),v=n(6),p=n(37),b=n(882),g=n(395),E=n(74),y=n(58),w=n(396),j=n(397),x=n(22);var O={setError:function(){},clearError:function(){}},S=Object(a.createContext)(O),P=function(){return Object(a.useContext)(S)};function k(e){var t=e.children,n=Object(a.useState)(),r=n[0],c=n[1],o={error:r,setError:c,clearError:function(){c(void 0)}};return Object(a.createElement)(S.Provider,{value:o},t)}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var C=function(e){try{var t=window;if(!t.getOfflineSigner)throw new Error("Keplr extension is not available");return Promise.resolve(t.getOfflineSigner(e))}catch(n){return Promise.reject(n)}},T=function(e,t){try{return Promise.resolve(j.a.create(12e4,12e4)).then((function(e){return new w.LedgerSigner(e,{hdPaths:[Object(y.makeCosmoshubPath)(0)],prefix:t})}))}catch(n){return Promise.reject(n)}},z=function(e,t){try{var n=function(){var e="burner-wallet",t=localStorage.getItem(e);if(t)return t;var n=E.Bip39.encode(E.Random.getBytes(16)).toString();return localStorage.setItem(e,n),n}(),a=Object(y.makeCosmoshubPath)(0);return Promise.resolve(y.Secp256k1HdWallet.fromMnemonic(n,a,t))}catch(r){return Promise.reject(r)}};var B={initialized:!1,address:"",init:function(){return Promise.resolve()},clear:function(){},getClient:function(){throw new Error("not yet initialized")},getStakingClient:function(){throw new Error("not yet initialized")}},D=Object(a.createContext)(B),I=function(){return Object(a.useContext)(D)};function $(e){var t=e.config,n=e.children,r=A({},B,{init:function(e){try{return Promise.resolve(function(e,t){try{return Promise.resolve(t.getAccounts()).then((function(n){var a=n[0].address,r=y.GasPrice.fromString(""+e.gasPrice+e.feeToken);return new g.SigningCosmWasmClient(e.httpUrl,a,t,r,{upload:15e5,init:6e5,exec:4e5,migrate:6e5,send:8e4,changeAdmin:8e4})}))}catch(n){return Promise.reject(n)}}(t,e)).then((function(e){function n(){var n,r=(n=t.httpUrl,y.LcdClient.withExtensions({apiUrl:n},y.setupStakingExtension));i({initialized:!0,address:a,init:function(){return Promise.resolve()},clear:s,getClient:function(){return e},getStakingClient:function(){return r}})}var a=e.senderAddress,r=function(){if(t.faucetUrl)return Promise.resolve(e.getAccount()).then((function(e){var n=function(){var n;if(!(null===e||void 0===e||null===(n=e.balance)||void 0===n?void 0:n.length))return Promise.resolve(fetch(t.faucetUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ticker:t.faucetToken,address:a})})).then((function(){}))}();if(n&&n.then)return n.then((function(){}))}))}();return r&&r.then?r.then(n):n()}))}catch(n){return Promise.reject(n)}}}),c=Object(a.useState)(r),o=c[0],i=c[1];function s(){i(A({},r))}return Object(a.createElement)(D.Provider,{value:o},n)}var N={refreshAccount:function(){}},M=Object(a.createContext)(N),L=function(){return Object(a.useContext)(M)};function q(e){var t=e.children,n=P().setError,r=I(),c=Object(a.useState)({}),o=c[0],i=c[1];function s(){r.initialized&&r.getClient().getAccount().then((function(e){return i({account:e})})).catch(n)}Object(a.useEffect)(s,[r,n]);var l={refreshAccount:s,account:o.account};return Object(a.createElement)(M.Provider,{value:l},t)}var H={contracts:[],addContract:function(){}},U=r.a.createContext(H),V=function(){return r.a.useContext(U)};function F(e){var t=e.children,n=Object(a.useState)(H.contracts),c=n[0],o=n[1];var i={contracts:c,addContract:function(e){o((function(t){return!t.find((function(t){return t.contractAddress===e.contractAddress}))?[].concat(t,[e]):t}))}};return r.a.createElement(U.Provider,{value:i},t)}var R=function(e){return{use:function(t){return{contractAddress:t,balance:function(n){try{var a=n||e.senderAddress;return Promise.resolve(e.queryContractSmart(t,{balance:{address:a}})).then((function(e){return e.balance}))}catch(r){return Promise.reject(r)}},allowance:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{allowance:{owner:n,spender:a}}))}catch(r){return Promise.reject(r)}},allAllowances:function(n,a,r){try{return Promise.resolve(e.queryContractSmart(t,{all_allowances:{owner:n,start_after:a,limit:r}}))}catch(c){return Promise.reject(c)}},allAccounts:function(n,a){try{return Promise.resolve(e.queryContractSmart(t,{all_accounts:{start_after:n,limit:a}})).then((function(e){return e.accounts}))}catch(r){return Promise.reject(r)}},tokenInfo:function(){try{return Promise.resolve(e.queryContractSmart(t,{token_info:{}}))}catch(n){return Promise.reject(n)}},investment:function(){try{return Promise.resolve(e.queryContractSmart(t,{investment:{}}))}catch(n){return Promise.reject(n)}},claims:function(n){try{return Promise.resolve(e.queryContractSmart(t,{claims:{address:n}}))}catch(a){return Promise.reject(a)}},minter:function(){try{return Promise.resolve(e.queryContractSmart(t,{minter:{}}))}catch(n){return Promise.reject(n)}},mint:function(n,a){try{return Promise.resolve(e.execute(t,{mint:{recipient:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},transfer:function(n,a){try{return Promise.resolve(e.execute(t,{transfer:{recipient:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},burn:function(n){try{return Promise.resolve(e.execute(t,{burn:{amount:n}})).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},increaseAllowance:function(n,a){try{return Promise.resolve(e.execute(t,{increase_allowance:{spender:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},decreaseAllowance:function(n,a){try{return Promise.resolve(e.execute(t,{decrease_allowance:{spender:n,amount:a}})).then((function(e){return e.transactionHash}))}catch(r){return Promise.reject(r)}},transferFrom:function(n,a,r){try{return Promise.resolve(e.execute(t,{transfer_from:{owner:n,recipient:a,amount:r}})).then((function(e){return e.transactionHash}))}catch(c){return Promise.reject(c)}},bond:function(n){try{return Promise.resolve(e.execute(t,{bond:{}},void 0,[n])).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},unbond:function(n){try{return Promise.resolve(e.execute(t,{unbond:{amount:n}})).then((function(e){return e.transactionHash}))}catch(a){return Promise.reject(a)}},claim:function(){try{return Promise.resolve(e.execute(t,{claim:{}})).then((function(e){return e.transactionHash}))}catch(n){return Promise.reject(n)}}}}}};function W(e){var t=e.authPath,n=e.children,a=e.location;return I().initialized?r.a.createElement(p.d,{location:a},n):r.a.createElement(p.a,{to:{pathname:t,state:a?{redirectPathname:a.pathname,redirectState:a.state}:void 0}})}function _(e){if(!e)return"0";if(e.denom.startsWith("u")){var t=e.denom.slice(1).toUpperCase();return x.Decimal.fromAtomics(e.amount,6).toString()+"\u202f"+t}return e.amount+"\u202f"+e.denom}function G(e){var t=(e||"").toString(),n=t.match(/.*\s*$/g)[0];return n.substring(0,n.lastIndexOf(";"))||t}var J=n(400),Y=n.n(J);function K(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function Q(e,t){return t||(t=e.slice(0)),e.raw=t,e}function X(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,c=K(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},c),r)}function Z(){var e=Q(["\n  box-sizing: content-box;\n\n  max-width: var(--max-width, none);\n\n  margin-left: auto;\n  margin-right: auto;\n\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Z=function(){return e},e}var ee=Object(v.b)(X)(Z());function te(e){var t=e.tag,n=void 0===t?"div":t,r=e.children,c=K(e,["tag","children"]);return Object(a.createElement)(n,Object.assign({},c),r)}function ne(){var e=Q(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: var(--gap, var(--s0));\n  }\n"]);return ne=function(){return e},e}var ae=Object(v.b)(te)(ne());function re(e){var t=e.children,n=K(e,["children"]);return Object(a.createElement)(ee,Object.assign({tag:"main"},n),t)}function ce(){var e=Q(['\n  --max-width: 22rem;\n  --gap: var(--s8);\n\n  padding: var(--s4);\n\n  /* Reduces padding when width < 380px, but uses em for better media query support */\n  @media (max-width: 23.6875em) {\n    padding: var(--s-1) 0 var(--s-2) 0;\n  }\n\n  [alt="Back arrow"] {\n    align-self: flex-start;\n  }\n']);return ce=function(){return e},e}var oe=Object(v.b)(re)(ce());function ie(e){var t=e.icon,n=e.path,a=e.state,c=K(e,["icon","path","state"]),o=Object(p.g)(),i=n?function(){return o.push(n,a)}:o.goBack;return r.a.createElement("img",Object.assign({src:t,alt:"Back arrow",onClick:i},c))}function se(){var e=Q(["\n  cursor: pointer;\n"]);return se=function(){return e},e}var le=Object(v.b)(ie)(se());function ue(){var e=Q(["\n  & > span + div {\n    margin-top: var(--s2);\n  }\n"]);return ue=function(){return e},e}var me=Object(v.b)(h.a)(ue()),de=Object(a.createElement)(b.a,{style:{fontSize:"6.25rem"},spin:!0});function fe(e){var t=e.loadingText||"Loading...";return Object(a.createElement)(oe,null,Object(a.createElement)(me,{indicator:de,tip:t}))}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function he(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function ve(){var e=Q(["\n  color: var(--color-red);\n"]);return ve=function(){return e},e}function pe(){var e=Q(["\n  display: block;\n  font-weight: lighter;\n"]);return pe=function(){return e},e}function be(){var e=Q(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return be=function(){return e},e}function ge(){var e=Q(["\n  & > * {\n    --gap: var(--s9);\n  }\n"]);return ge=function(){return e},e}var Ee=d.a.Text,ye=Object(v.b)(ae)(ge()),we=Object(v.b)(ae)(be()),je=Object(v.b)(Ee)(pe()),xe=Object(v.b)(Ee)(ve()),Oe=d.a.Title;function Se(){var e=navigator;return!(null===e||void 0===e?void 0:e.usb)}function Pe(e){var t=function(e){try{x(!0),v();var t=he((function(){return Promise.resolve(e(n.chainId,n.addressPrefix)).then((function(e){return Promise.resolve(b.init(e)).then((function(){}))}))}),(function(e){console.error(e),h(Error(e).message),x(!1)}));return Promise.resolve(t&&t.then?t.then((function(){})):void 0)}catch(a){return Promise.reject(a)}},n=e.config,c=e.pathAfterLogin,o=e.appName,i=e.appLogo,s=Object(p.g)(),l=s.location.state,m=P(),f=m.error,h=m.setError,v=m.clearError,b=I(),g=L(),E=g.refreshAccount,y=g.account,w=Object(a.useState)(!1),j=w[0],x=w[1];return Object(a.useEffect)((function(){b.initialized&&E()}),[b.initialized,E]),Object(a.useEffect)((function(){y&&(l?s.push(l.redirectPathname,l.redirectState):s.push(c))}),[y,l,s]),j?r.a.createElement(fe,{loadingText:"Initializing app..."}):r.a.createElement(oe,null,r.a.createElement(ye,null,r.a.createElement("img",{src:i,alt:"CosmWasm logo"}),r.a.createElement(we,null,r.a.createElement(d.a,null,r.a.createElement(Oe,{level:2},"Hello!"),r.a.createElement(je,null,"Welcome to your ",o),r.a.createElement(je,null,"Select one of the following options to start:")),f&&r.a.createElement(xe,null,f),r.a.createElement(u.a,{type:"primary",onClick:function(){try{return Promise.resolve(t(z)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Browser (Demo)"),r.a.createElement(u.a,{type:"primary",disabled:Se(),onClick:function(){try{return Promise.resolve(t(T)).then((function(){}))}catch(e){return Promise.reject(e)}}},"Ledger (Secure, Chrome)"),r.a.createElement(u.a,{type:"primary",disabled:!1,onClick:function(){try{var e=window,a=he((function(){return Promise.resolve(e.keplr.experimentalSuggestChain(function(e){return{chainId:e.chainId,chainName:e.chainName,rpc:e.rpcUrl,rest:e.httpUrl,bech32Config:{bech32PrefixAccAddr:""+e.addressPrefix,bech32PrefixAccPub:e.addressPrefix+"pub",bech32PrefixValAddr:e.addressPrefix+"valoper",bech32PrefixValPub:e.addressPrefix+"valoperpub",bech32PrefixConsAddr:e.addressPrefix+"valcons",bech32PrefixConsPub:e.addressPrefix+"valconspub"},currencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits},{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits}],feeCurrencies:[{coinDenom:e.coinMap[e.feeToken].denom,coinMinimalDenom:e.feeToken,coinDecimals:e.coinMap[e.feeToken].fractionalDigits}],stakeCurrency:{coinDenom:e.coinMap[e.stakingToken].denom,coinMinimalDenom:e.stakingToken,coinDecimals:e.coinMap[e.stakingToken].fractionalDigits},gasPriceStep:{low:e.gasPrice/2,average:e.gasPrice,high:2*e.gasPrice},bip44:{coinType:118},coinType:118}}(n))).then((function(){return Promise.resolve(e.keplr.enable(n.chainId)).then((function(){return Promise.resolve(t(C)).then((function(){}))}))}))}),(function(e){console.error(e),h(Error(e).message)}));return Promise.resolve(a&&a.then?a.then((function(){})):void 0)}catch(r){return Promise.reject(r)}}},"Keplr (Secure)"))))}function ke(){var e=Q(['\n  font-size: var(--s-1);\n\n  &[data-result="success"] {\n    color: var(--color-green);\n  }\n\n  &[data-result="failure"] {\n    color: var(--color-red);\n  }\n']);return ke=function(){return e},e}function Ae(){var e=Q(["\n  & > * {\n    --gap: var(--s3);\n  }\n"]);return Ae=function(){return e},e}var Ce=d.a.Text,Te=Object(v.b)(ae)(Ae()),ze=Object(v.b)(Ce)(ke());function Be(e){var t=e.defaultButtonAction,n=e.successIcon,a=e.failIcon,c=Object(p.g)(),o=c.location.state,i=o.success,s=o.message,l=o.error,m=o.customButtonText,d=o.customButtonActionPath,f=o.customButtonActionState;var h=function(e){return e?{result:"success",icon:n,buttonText:"Home",buttonAction:function(){return t(c)}}:{result:"failure",icon:a,buttonText:"Retry",buttonAction:c.goBack}}(i),v=h.icon,b=h.result,g=h.buttonText,E=h.buttonAction,y=m||g,w=d?function(){return c.push(d,f)}:E;return r.a.createElement(oe,null,r.a.createElement(Te,null,r.a.createElement("img",{src:v,alt:"Result icon"}),r.a.createElement(ze,{"data-result":b},s),l&&r.a.createElement(ze,{"data-result":b},l),r.a.createElement(u.a,{type:"primary",onClick:w},y)))}function De(){var e=Q(['\n  & > * {\n    --gap: var(--s-2);\n  }\n\n  h3,\n  div[role="separator"] {\n    margin: 0;\n  }\n\n  span,\n  button {\n    overflow-wrap: anywhere;\n  }\n\n  span {\n    display: block;\n    font-size: var(--s-1);\n  }\n\n  span + span {\n    font-weight: bold;\n  }\n\n  button,\n  button span {\n    font-size: var(--s0);\n  }\n\n  button {\n    height: 100%;\n    white-space: normal;\n  }\n']);return De=function(){return e},e}var Ie=Object(v.b)(ae)(De()),$e=d.a.Title,Ne=d.a.Text;function Me(e){var t,n=e.tag,a=e.hideTitle,c=e.hideBalance,o=null!==(t=L().account)&&void 0!==t?t:{address:"",balance:[]},i=o.address,l=o.balance;return r.a.createElement(Ie,{tag:n},!a&&r.a.createElement("header",null,r.a.createElement($e,{level:3},"Your Account"),!c&&r.a.createElement(s.a,null)),r.a.createElement(Ne,null,i),!c&&r.a.createElement(Ne,null,"(",function(e){return e&&0!==e.length?e.map(_).join(", "):"\u2013"}(l),")"),r.a.createElement(u.a,{type:"primary",onClick:function(){return Y()(i)}},"Copy Account Address"))}function Le(){var e=Q(['\n  .ant-btn:not(.ant-input-search-button) {\n    width: var(--max-width);\n    max-width: 100vw;\n  }\n  \n  .ant-form div[role="alert"] li {\n    color: var(--form-error);\n    font-size: var(--s-1);\n    text-align: left;\n    margin: var(--s-1);\n  \n    &::before {\n      content: "* ";\n    }\n  }\n']);return Le=function(){return e},e}var qe=Object(v.a)(Le());function He(){var e=Q(["\n  :root {\n    --color-black: #333;\n    --color-gray-light: #f2f2f2;\n    --color-red: #eb5757;\n    --color-green: #27ae60;\n    --color-blue: #2f80ed;\n    --color-blue-light: #1890ff;\n\n    --color-primary: var(--color-blue);\n    --button-color: var(--color-blue-light);\n    --text-color: var(--color-primary);\n    --heading-color: var(--color-primary);\n    --form-error: var(--color-red);\n  }\n"]);return He=function(){return e},e}var Ue=Object(v.a)(He());function Ve(){var e=Q(["\n  :root {\n    --ff-montserrat: Montserrat, sans-serif;\n    --ff-iceland: Iceland, serif;\n\n    --ff-text: var(--ff-montserrat);\n    --ff-heading: var(--ff-iceland);\n    \n    font-family: var(--ff-text);\n  }\n\n  p,\n  span {\n    font-family: var(--ff-text);\n    font-size: var(--s0);\n    overflow-wrap: anywhere;\n  }\n  \n  h1,\n  h2,\n  h3 {\n    font-family: var(--ff-heading);\n  }\n"]);return Ve=function(){return e},e}var Fe=Object(v.a)(Ve());function Re(){var e=Q(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    scroll-behavior: smooth;\n  }\n  \n  body {\n    min-height: 100vh;\n    line-height: 1.5;\n    text-rendering: optimizeSpeed;\n  }\n  \n  body,\n  h1,\n  h2,\n  p,\n  ul[class],\n  ol[class] {\n    margin: 0;\n  }\n  \n  ul[class],\n  ol[class] {\n    padding: 0;\n    list-style: none;\n  }\n  \n  button,\n  input,\n  select,\n  textarea {\n    font: inherit;\n  }\n  \n  img {\n    display: block;\n    max-width: 100%;\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01s !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01s !important;\n      scroll-behavior: auto !important;\n    }\n  }\n"]);return Re=function(){return e},e}var We=Object(v.a)(Re());function _e(){var e=Q(["\n  :root {\n    --ratio: 1.25;\n\n    --s-6: calc(var(--s-5) / var(--ratio));\n    --s-5: calc(var(--s-4) / var(--ratio));\n    --s-4: calc(var(--s-3) / var(--ratio));\n    --s-3: calc(var(--s-2) / var(--ratio));\n    --s-2: calc(var(--s-1) / var(--ratio));\n    --s-1: calc(var(--s0) / var(--ratio));\n    --s0: 1rem;\n    --s1: calc(var(--s0) * var(--ratio));\n    --s2: calc(var(--s1) * var(--ratio));\n    --s3: calc(var(--s2) * var(--ratio));\n    --s4: calc(var(--s3) * var(--ratio));\n    --s5: calc(var(--s4) * var(--ratio));\n    --s6: calc(var(--s5) * var(--ratio));\n    --s7: calc(var(--s6) * var(--ratio));\n    --s8: calc(var(--s7) * var(--ratio));\n    --s9: calc(var(--s8) * var(--ratio));\n  }\n"]);return _e=function(){return e},e}var Ge=Object(v.a)(_e());function Je(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(We,null),r.a.createElement(Ge,null),r.a.createElement(Ue,null),r.a.createElement(Fe,null),r.a.createElement(qe,null))}var Ye=n(57);const Ke={chainId:"cosmwasm-coral",chainName:"Coral",addressPrefix:"coral",rpcUrl:"https://rpc.coralnet.cosmwasm.com",httpUrl:"https://lcd.coralnet.cosmwasm.com",faucetUrl:"https://faucet.coralnet.cosmwasm.com/credit",feeToken:"ushell",stakingToken:"ureef",faucetToken:"SHELL",coinMap:{ushell:{denom:"SHELL",fractionalDigits:6},ureef:{denom:"REEF",fractionalDigits:6}},gasPrice:.025,codeId:40};var Qe=n(38),Xe=n(879),Ze=n(408),et=n(880),tt=n(65),nt=n.n(tt),at=n(69);const rt=new RegExp("^"+Ke.addressPrefix),ct=at.d().matches(rt,`"${Ke.addressPrefix}" prefix required`).length(39+Ke.addressPrefix.length,"Address invalid"),ot=ct.required("An address is required"),it=at.b().required("An amount is required").positive("Amount should be positive"),st=at.c().shape({contract:at.a(e=>Number.isNaN(Number(e))?ot:at.b().positive())}),lt=at.c().shape({address:ct}),ut=at.c().shape({address:ot}),mt=at.c().shape({newAmount:it}),dt=at.c().shape({address:ot,amount:it}),ft=Object(v.b)(ae)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,ht=Object(v.b)(ae)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`,vt=Object(v.b)(ae)`
  & > * {
    --gap: var(--s2);
  }
`,pt=v.b.div`
  display: flex;
  align-items: baseline;

  span {
    margin-left: var(--s1);
    font-family: var(--ff-iceland);
    font-size: var(--s1);
  }
`,{Title:bt,Text:gt}=d.a;var Et=function(){const[e,t]=Object(a.useState)(!1),n=Object(p.g)(),{getClient:c}=I(),{account:o}=L(),{contractAddress:i}=Object(p.h)(),[s,l]=Object(a.useState)(""),[m,d]=Object(a.useState)(0);return Object(a.useEffect)(()=>{R(c()).use(i).tokenInfo().then(e=>{l(e.symbol),d(e.decimals)})},[c,i]),e&&r.a.createElement(fe,{loadingText:"Adding allowance..."})||!e&&r.a.createElement(oe,null,r.a.createElement(ft,null,r.a.createElement(le,{icon:nt.a,path:"/tokens"}),r.a.createElement(bt,null,"Add Allowance"),r.a.createElement(Qe.c,{initialValues:{address:"",amount:""},onSubmit:e=>{t(!0);const{address:a,amount:r}=e,l=R(c()).use(i);l.allowance(o.address,a).then(({allowance:e})=>{const t=x.Decimal.fromUserInput(r,m),c=x.Decimal.fromAtomics(e,m);try{let e=Promise.reject("");e=t.isGreaterThan(c)?l.increaseAllowance(a,t.minus(c).atomics):l.decreaseAllowance(a,c.minus(t).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${r} ${s} allowance for ${a} successfully added `,customButtonText:"Tokens"}})})}catch(o){console.error(o),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:G(o),customButtonActionPath:"/allowances/"+i}})}})},validationSchema:dt},e=>r.a.createElement(Xe.a,null,r.a.createElement(ht,null,r.a.createElement(vt,null,r.a.createElement(Ze.a,{name:"address"},r.a.createElement(et.a,{name:"address",placeholder:"Enter address"})),r.a.createElement(pt,null,r.a.createElement(Ze.a,{name:"amount"},r.a.createElement(et.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(gt,null,s))),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))))};const yt=Object(v.b)(ae)`
  & > * {
    --gap: var(--s7);
  }

  .ant-form-item {
    margin-bottom: 0;
  }
`;function wt({submitChangeAmount:e}){return r.a.createElement(Qe.c,{initialValues:{newAmount:""},onSubmit:e,validationSchema:mt},e=>r.a.createElement(Xe.a,null,r.a.createElement(yt,null,r.a.createElement(Ze.a,{name:"newAmount"},r.a.createElement(et.a,{name:"newAmount",placeholder:"Enter new amount"})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Confirm"))))}const jt=Object(v.b)(ae)`
  & > * {
    --gap: var(--s3);
  }

  h1 {
    margin: 0;
  }

  & > span {
    font-size: var(--s-1);
  }
`,xt=v.b.div`
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
`,{Title:Ot,Text:St}=d.a;var Pt=function(){const[e,t]=Object(a.useState)(!1),n=Object(p.g)(),{getClient:c}=I(),{account:o}=L(),{contractAddress:i,spenderAddress:s}=Object(p.h)(),[l,u]=Object(a.useState)(""),[m,d]=Object(a.useState)(0),[f,h]=Object(a.useState)("0");Object(a.useEffect)(()=>{const e=R(c()).use(i);e.tokenInfo().then(e=>{u(e.symbol),d(e.decimals)}),e.allowance(o.address,s).then(({allowance:e})=>h(e))},[c,i,o.address,s]);const v=x.Decimal.fromAtomics(f,m).toString();return e&&r.a.createElement(fe,{loadingText:"Changing allowance..."})||!e&&r.a.createElement(oe,null,r.a.createElement(jt,null,r.a.createElement(le,{icon:nt.a,path:"/tokens"}),r.a.createElement(Ot,null,"Allowance"),r.a.createElement(St,null,s),r.a.createElement(xt,null,r.a.createElement(St,null,"Current"),r.a.createElement(St,null,v),r.a.createElement(St,null,l)),r.a.createElement(wt,{submitChangeAmount:e=>{t(!0);const{newAmount:a}=e,r=x.Decimal.fromUserInput(a,m),o=x.Decimal.fromAtomics(f,m),u=R(c()).use(i);try{let e=Promise.reject("");e=r.isGreaterThan(o)?u.increaseAllowance(s,r.minus(o).atomics):u.decreaseAllowance(s,o.minus(r).atomics),e.then(()=>{n.push({pathname:"/result",state:{success:!0,message:`${l} allowance successfully set to ${a} for ${s}`,customButtonText:"Tokens"}})})}catch(d){console.error(d),n.push({pathname:"/result",state:{success:!1,message:"Could not set allowance:",error:G(d),customButtonActionPath:"/allowances/"+i}})}}})))},kt=n(409),At=n.n(kt);const Ct=Object(v.b)(ae)`
  & > * {
    --gap: var(--s7);
  }

  h1 {
    margin: 0;
  }
`,Tt=Object(v.b)(ae)`
  & > * {
    --gap: var(--s2);
  }
`,zt=v.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,Bt=Object(v.b)(ae)`
  & > * {
    --gap: var(--s0);
  }
`,Dt=v.b.div`
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
`,It=v.b.div`
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
`,{Title:$t,Text:Nt}=d.a;var Mt=function(){const e=Object(p.g)(),{getClient:t}=I(),{account:n}=L(),{contractAddress:c}=Object(p.h)(),[o,i]=Object(a.useState)([]),[l,m]=Object(a.useState)(""),[d,f]=Object(a.useState)("0"),[h,v]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=R(t()).use(c);e.tokenInfo().then(({symbol:e,decimals:t})=>{m(e),v(t)}),e.balance(n.address).then(e=>f(e)),e.allAllowances(n.address).then(({allowances:e})=>i(e))},[t,c,n.address]);const b=x.Decimal.fromAtomics(d,h).toString(),[g,E]=b.split("."),y=null!==E&&void 0!==E?E:"";return r.a.createElement(oe,null,r.a.createElement(Ct,null,r.a.createElement(le,{icon:nt.a,path:"/tokens"}),r.a.createElement(Tt,null,r.a.createElement($t,null,"Allowances"),r.a.createElement(zt,null,r.a.createElement(Nt,null,`${g}${y?".":""}`),r.a.createElement(Nt,null,y," ",l),r.a.createElement(Nt,null," tokens"))),r.a.createElement(Bt,null,o.map((t,n)=>{const a=x.Decimal.fromAtomics(t.allowance,h).toString();return r.a.createElement(r.a.Fragment,null,n>0&&r.a.createElement(s.a,null),r.a.createElement(Dt,null,r.a.createElement(Nt,null,t.spender),r.a.createElement(It,null,r.a.createElement(Nt,null,a),r.a.createElement("img",{alt:"Edit allowance",src:At.a,onClick:()=>{return n=t.spender,void e.push(`/allowances/${c}/edit/${n}`);var n}}))))})),r.a.createElement(u.a,{type:"primary",onClick:function(){e.push(`/allowances/${c}/add`)}},"Add New")))},Lt=n(410),qt=n.n(Lt);var Ht=function(){return r.a.createElement(Pe,{pathAfterLogin:"/tokens",appName:"CW20 Wallet",appLogo:qt.a,config:Ke})},Ut=n(411),Vt=n.n(Ut),Ft=n(412),Rt=n.n(Ft);function Wt(e){e.push("/tokens")}var _t=function(){return r.a.createElement(Be,{defaultButtonAction:Wt,successIcon:Rt.a,failIcon:Vt.a})},Gt=(n(161),n(102)),Jt=n.n(Gt),Yt=n(143);const Kt=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:c,...o},i)=>a.createElement(Yt.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(Jt.a,Object.assign({ref:i,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),c&&c(e)}},o))));Kt.Search=a.forwardRef(({name:e,validate:t,fast:n,onChange:r,onBlur:c,...o},i)=>a.createElement(Yt.a,{name:e,validate:t,fast:n},({field:{value:t,onChange:n,onBlur:s}})=>a.createElement(Jt.a.Search,Object.assign({ref:i,name:e,value:t,onChange:e=>{n(e),r&&r(e)},onBlur:e=>{s(e),c&&c(e)}},o))));var Qt=Kt.Search;var Xt=function({initialAddress:e,setSearchedAddress:t}){return r.a.createElement(Qe.c,{initialValues:{address:e},validationSchema:lt,onSubmit:e=>{t(e.address)}},e=>r.a.createElement(Xe.a,null,r.a.createElement(Ze.a,{name:"address"},r.a.createElement(Qt,{name:"address",placeholder:"Search",enterButton:!0,onSearch:n=>{e.isValid&&t(n)}}))))};const Zt=Object(v.b)(ae)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,en=Object(v.b)(ae)`
  & > * {
    --gap: var(--s2);
  }
`,tn=v.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,nn=Object(v.b)(ae)`
  & > * {
    --gap: var(--s0);
  }
`,an=v.b.div`
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
`,{Title:rn,Text:cn}=d.a;var on=function(){const e=Object(p.g)(),{getClient:t}=I(),{account:n}=L(),{contractAddress:c,allowingAddress:o}=Object(p.h)(),[i,l]=Object(a.useState)(o),[m,d]=Object(a.useState)(),[f,h]=Object(a.useState)(""),[v,b]=Object(a.useState)("0"),[g,E]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=R(t()).use(c),a=null!==i&&void 0!==i?i:n.address;e.tokenInfo().then(({symbol:e,decimals:t})=>{h(e),E(t)}),e.balance(a).then(e=>b(e))},[t,c,i,n.address]);const y=x.Decimal.fromAtomics(v,g).toString(),[w,j]=y.split("."),O=x.Decimal.fromAtomics(m,g).toString(),S=!!m&&"0"!==m,P=!m||"0"!==m,k="0"===v,A=!i;return r.a.createElement(oe,null,r.a.createElement(Zt,null,r.a.createElement(le,{icon:nt.a,path:"/tokens"}),r.a.createElement(en,null,r.a.createElement(rn,null,f),r.a.createElement(Me,{hideTitle:!0,hideBalance:!0})),r.a.createElement(tn,null,r.a.createElement(cn,null,`${w}${j?".":""}`),j&&r.a.createElement(cn,null,j),r.a.createElement(cn,null," tokens")),r.a.createElement(Xt,{initialAddress:i,setSearchedAddress:function(e){if(!e)return l(void 0),void d(void 0);l(e),R(t()).use(c).allowance(e,n.address).then(e=>d(e.allowance))}}),S&&r.a.createElement(nn,null,r.a.createElement(s.a,null),r.a.createElement(an,null,r.a.createElement(cn,null,"Your allowance"),r.a.createElement(cn,null,O))),P&&r.a.createElement(u.a,{type:"primary",onClick:function(){const t=i||"";e.push(`/token/send/${c}/${t}`)},disabled:k},"Send"),A&&r.a.createElement(u.a,{type:"primary",onClick:function(){e.push("/allowances/"+c)}},"My allowances")))};const sn=Object(v.b)(ae)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }
`,ln=Object(v.b)(ae)`
  & > * {
    --gap: 0;
  }
`,un=v.b.div`
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
`,mn=v.b.div`
  border-top: var(--border-size) solid var(--color-primary);
  padding-top: var(--v-padding);
  margin-top: calc(-1 * var(--v-padding));
`,{Text:dn}=d.a;async function fn(e){const{symbol:t,decimals:n}=await e.tokenInfo(),a=e.contractAddress;return{coin:{denom:t,amount:await e.balance()},fractionalDigits:n,address:a}}function hn(e,t){return e.coin.denom<t.coin.denom?-1:e.coin.denom>t.coin.denom?1:0}var vn=function(){const e=Object(p.g)(),{getClient:t}=I(),{contracts:n,addContract:c}=V(),[o,i]=Object(a.useState)([]);return Object(a.useEffect)(()=>{const e=t();e.getContracts(Ke.codeId).then(t=>{t.forEach(t=>{const n=R(e).use(t.address);c(n)})})},[t,c]),Object(a.useEffect)(()=>{const e=n.map(fn);Promise.all(e).then(e=>i(e.sort(hn)))},[n]),r.a.createElement(ln,null,o.map(t=>{const n=x.Decimal.fromAtomics(t.coin.amount,t.fractionalDigits).toString();return r.a.createElement(un,{key:t.address,onClick:()=>{return n=t.address,void e.push("/token/detail/"+n);var n}},r.a.createElement(mn,null,r.a.createElement(dn,null,t.coin.denom),r.a.createElement(dn,null,"0"!==n?n:"No tokens")))}))};const{Title:pn}=d.a;var bn=function(){return r.a.createElement(oe,null,r.a.createElement(sn,null,r.a.createElement(pn,null,"Tokens"),r.a.createElement(vn,null),r.a.createElement(Ye.b,{to:"/tokens/add"},r.a.createElement(u.a,{type:"primary"},"Add another")),r.a.createElement(Me,{hideBalance:!0})))},gn=n(881);const En=Object(v.b)(ae)`
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
`,yn=Object(v.b)(ae)`
  & > * {
    --gap: var(--s4);
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  button {
    margin-top: var(--s2);
  }
`,{Title:wn}=d.a;var jn=function(){const{getClient:e}=I(),{setError:t}=P(),{addContract:n}=V(),c=Object(p.g)(),[o,i]=Object(a.useState)(),[s,l]=Object(a.useState)([]),[m,d]=Object(a.useState)([]);function f(e){d(e)}function h(e,t){return t.title.toLowerCase().indexOf(e.toLowerCase())>=0}const v=!o,b=!v;return r.a.createElement(oe,null,r.a.createElement(le,{icon:nt.a,path:"/tokens"}),r.a.createElement(En,null,r.a.createElement(wn,null,"Add Other"),v&&r.a.createElement(Qe.c,{initialValues:{contract:""},onSubmit:function({contract:a}){const r=!Number.isNaN(Number(a))&&Number(a);if(r)e().getContracts(r).then(e=>{l(e),i(r)}).catch(t);else{const t=String(a),r=R(e()).use(t);r.tokenInfo().then(()=>n(r)).then(()=>c.push({pathname:"/result",state:{success:!0,message:`"${t}" was successfully added :)`,customButtonText:"Tokens"}})).catch(e=>c.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:G(e),customButtonActionPath:"/tokens/add"}}))}},validationSchema:st},e=>r.a.createElement(Xe.a,null,r.a.createElement(yn,null,r.a.createElement(Ze.a,{name:"contract"},r.a.createElement(et.a,{name:"contract",placeholder:"Enter a contract address or codeID"})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!(e.isValid&&e.dirty)},"Continue")))),b&&r.a.createElement(Qe.c,{initialValues:{},onSubmit:function(){m.forEach(t=>{const a=R(e()).use(t);a.tokenInfo().then(()=>n(a)).catch(e=>c.push({pathname:"/result",state:{success:!1,message:"Oh no... Something went wrong, please try again",error:G(e),customButtonActionPath:"/tokens/add"}}))}),c.push({pathname:"/result",state:{success:!0,message:`"Your CodeID: ${o}" were successfully added :)`,customButtonText:"Tokens"}})}},e=>r.a.createElement(Xe.a,null,r.a.createElement(yn,null,r.a.createElement(Ze.a,{name:"contracts"},r.a.createElement(gn.a,{name:"contracts",showSearch:!0,filterOption:h,dataSource:s.map(e=>({key:e.address,title:e.label})),onSelectChange:f,listStyle:{listStyle:"none"},render:e=>e.title})),r.a.createElement(u.a,{type:"primary",onClick:e.submitForm,disabled:!m.length},"Continue"))))))};const xn=Object(v.b)(ae)`
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
`,{Text:Sn}=d.a;function Pn({tokenName:e,maxAmount:t,sendTokensAction:n}){const a=at.c().shape({amount:it.max(t.toFloatApproximation(),"Amount cannot be greater than "+t.toString())}).concat(ut);return r.a.createElement(Qe.c,{initialValues:{amount:"",address:""},onSubmit:n,validationSchema:a},t=>r.a.createElement(Xe.a,null,r.a.createElement(xn,null,r.a.createElement(On,null,r.a.createElement(Sn,null,"Send"),r.a.createElement(Ze.a,{name:"amount"},r.a.createElement(et.a,{name:"amount",placeholder:"Enter amount"})),r.a.createElement(Sn,null,e)),r.a.createElement(On,null,r.a.createElement(Sn,null,"to"),r.a.createElement(Ze.a,{name:"address"},r.a.createElement(et.a,{name:"address",placeholder:"Enter address"}))),r.a.createElement(u.a,{type:"primary",onClick:t.submitForm,disabled:!(t.isValid&&t.dirty)},"Send"))))}const kn=Object(v.b)(ae)`
  & > * {
    --gap: var(--s4);
  }

  h1 {
    margin: 0;
  }

  .ant-form {
    margin-top: var(--gap);
  }
`,An=Object(v.b)(ae)`
  & > * {
    --gap: var(--s2);
  }
`,Cn=v.b.div`
  span {
    font-size: var(--s4);
    font-weight: bolder;
    overflow-wrap: anywhere;
  }

  span + span {
    font-size: var(--s1);
  }
`,{Title:Tn,Text:zn}=d.a;var Bn=function(){const[e,t]=Object(a.useState)(!1),n=Object(p.g)(),{getClient:c}=I(),{account:o,refreshAccount:i}=L(),{contractAddress:s,allowingAddress:l}=Object(p.h)(),u=`/token/detail/${s}/${null!==l&&void 0!==l?l:""}`,[m,d]=Object(a.useState)(""),[f,h]=Object(a.useState)("0"),[v,b]=Object(a.useState)(0);Object(a.useEffect)(()=>{const e=R(c()).use(s),t=null!==l&&void 0!==l?l:o.address;e.tokenInfo().then(({symbol:e,decimals:t})=>{d(e),b(t)}),l?e.allowance(l,o.address).then(e=>h(e.allowance)):e.balance(t).then(e=>h(e))},[c,s,l,o.address]);const g=x.Decimal.fromAtomics(f,v).toString(),[E,y]=g.split("."),w=x.Decimal.fromAtomics(f,v);return e&&r.a.createElement(fe,{loadingText:`Sending ${m}...`})||!e&&r.a.createElement(oe,null,r.a.createElement(kn,null,r.a.createElement(le,{icon:nt.a,path:"/tokens"}),r.a.createElement(An,null,r.a.createElement(Tn,null,m),r.a.createElement(Me,{hideTitle:!0,hideBalance:!0})),r.a.createElement(Cn,null,r.a.createElement(zn,null,`${E}${y?".":""}`),y&&r.a.createElement(zn,null,y),r.a.createElement(zn,null," tokens")),r.a.createElement(Pn,{tokenName:m,maxAmount:w,sendTokensAction:e=>{t(!0);const{address:a,amount:r}=e,o=x.Decimal.fromUserInput(r,v).atomics,d=R(c()).use(s);try{l?d.transferFrom(l,a,o).then(e=>{if(!e)return Promise.reject("Transfer from failed");i(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${m} successfully sent to ${a} with allowance from ${l}`,customButtonText:"Token detail",customButtonActionPath:u}})}):d.transfer(a,o).then(e=>{if(!e)return Promise.reject("Transfer failed");i(),n.push({pathname:"/result",state:{success:!0,message:`${r} ${m} successfully sent to ${a}`,customButtonText:"Token detail",customButtonActionPath:u}})})}catch(f){console.error(f),n.push({pathname:"/result",state:{success:!1,message:"Send transaction failed:",error:G(f),customButtonActionPath:u}})}}})))};var Dn=function(){return r.a.createElement(k,null,r.a.createElement($,{config:Ke},r.a.createElement(q,null,r.a.createElement(F,null,r.a.createElement(Je,null),r.a.createElement(Ye.a,{basename:"/cw20-wallet"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:Ht}),r.a.createElement(p.b,{exact:!0,path:"/login",component:Ht}),r.a.createElement(W,{authPath:"/login"},r.a.createElement(p.b,{exact:!0,path:"/tokens",component:bn}),r.a.createElement(p.b,{exact:!0,path:"/tokens/add/:codeId?",component:jn}),r.a.createElement(p.b,{exact:!0,path:"/token/detail/:contractAddress/:allowingAddress?",component:on}),r.a.createElement(p.b,{exact:!0,path:"/token/send/:contractAddress/:allowingAddress?",component:Bn}),r.a.createElement(p.b,{exact:!0,path:"/allowances/:contractAddress",component:Mt}),r.a.createElement(p.b,{exact:!0,path:"/allowances/:contractAddress/add",component:Et}),r.a.createElement(p.b,{exact:!0,path:"/allowances/:contractAddress/edit/:spenderAddress",component:Pt}),r.a.createElement(p.b,{exact:!0,path:"/result",component:_t}))))))))};n(870);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Dn,null)),document.getElementById("root"))}},[[418,1,2]]]);
//# sourceMappingURL=main.a6a4a865.chunk.js.map